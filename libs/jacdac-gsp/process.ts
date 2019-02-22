namespace jacdac {

    interface IMessage { }
    class Message implements IMessage {
        Id:    number;
        Clock: number;
        public Apply(p: Process) { }
    }

    class Process {
        // topology
        public ProcessId: number;
        public NumberProcesses: number;

        // clocks
        public DeliveryCounter: number;
        public OperationCounter: number;
        public InstanceId: string;  // Guid

        // context during execution of Process method
        private incoming: [Message] = [];  // SLICE

        public Process(message: Message) {
            this.incoming;
        }

        // processid
        public LamportMerge(opid: number)
        {
            if (opid > this.OperationCounter)
                this.OperationCounter = opid + 1;
            // is there a gap??
        }
        
        public Send(destination: number, m: Message)
        {
            if (destination == this.ProcessId)
            {
                this.incoming.push(m);
            }
            else
            {
                // HostServices.Send(destination, m);
            }
        }

        // SLICE
        public ProcessMessage(message: IMessage)
        {
            this.DeliveryCounter++;
            this.incoming.push(<Message>message); 
            this.incoming.forEach(msg => {
                // ReceiveTracer?.Invoke($"p{ProcessId:D3} {msg.ToString()}");
                try
                {
                    this.LamportMerge(msg.Clock);
                    msg.Apply(this);
                }
                catch (e)
                {
                    // RuntimeLogger.LogCritical($"!!! Reactive Machine: internal exception {e}");
                }
            });

            this.incoming = [];
        }
    }
}