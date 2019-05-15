namespace jacdac {
    export interface SharedMap {
        [index: number]: number;
    }
    //% fixedInstances
    //% weight=1
    export class SharedMapBroadcast<T> extends Broadcast {
        // virtual mode only
        protected _localTime: number;
        protected _lastState: SharedMap;
        private _stateChangedHandler: () => void;

        constructor(name: string, deviceClass: number) {
            super(name, deviceClass);
            this._lastState = {}
        }

        public get state() {
            this.start();
            return this._lastState;
        }

        handleServiceInformation(device: JDDevice, serviceInfo: JDServiceInformation): number {
            const data = serviceInfo.data;
            const state = data.getNumber(NumberFormat.UInt8LE, 1);
            // TODO     
            return DEVICE_OK;
        }

        handlePacket(packet: JDPacket): number {
            const data = packet.data;
            const command = data.getNumber(NumberFormat.UInt8LE, 0);
            this.log(`vpkt ${command}`)
            switch (command) {
                case JDSharedMapCommand.Remove: {
                    // get key
                    return jacdac.DEVICE_OK;
                }
                case JDSharedMapCommand.Write: {
                    // get key and value
                    return jacdac.DEVICE_OK;
                }
                default:
                    return this.handleCustomCommand(command, packet);
            }
        }

        protected handleCustomCommand(command: number, pkt: JDPacket): number {
            return jacdac.DEVICE_OK;
        }

        protected handleVirtualState(state: Buffer): number {
            return jacdac.DEVICE_OK;
        }

        protected setThreshold(low: boolean, value: number) {

        }
    }

}