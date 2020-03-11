enum ExtraButtonEvent {
    //% block="pressed"
    Pressed = KEY_DOWN,
    //% block="released"
    Released = KEY_UP,
    //% block="repeat"
    Repeated = KEY_REPEAT
}


enum ExtraControllerButton {
    //% block="{id:extrabuttons}A1"
    A1 = 51,
    //% block="{id:extrabuttons}A2"
    A2 = 52,
    //% block="{id:extrabuttons}A3"
    A3 = 53,
    //% block="{id:extrabuttons}A4"
    A4 = 54,
    //% block="{id:extrabuttons}A5"
    A5 = 55,
    //% block="{id:extrabuttons}B1"
    B1 = 56,
    //% block="{id:extrabuttons}B2"
    B2 = 57,
    //% block="{id:extrabuttons}B3"
    B3 = 58,
    //% block="{id:extrabuttons}B4"
    B4 = 59
}


//% icon="\uf11b" color="#890989"
namespace extrabuttons {
    let _userEventsEnabled = true;
    let defaultRepeatDelay = 500;
    let defaultRepeatInterval = 30;

    //% shim=pxt::setupButton
    function setupExtraButton(buttonId: number, key: number) {
        return // missing in sim
    }

    //% fixedInstances
    export class ExtraButton {
        public id: number;

        public repeatDelay: number;
        public repeatInterval: number;
        private _pressed: boolean;
        private _pressedElasped: number;
        private _repeatCount: number;

        constructor(id: number, configKey: number) {
            this.id = id;
            this._pressed = false;
            this.repeatDelay = undefined;
            this.repeatInterval = undefined;
            this._repeatCount = 0;
            if (id > 0 && configKey > 0) {
                control.internalOnEvent(INTERNAL_KEY_UP, this.id, () => this.setPressed(false), 16)
                control.internalOnEvent(INTERNAL_KEY_DOWN, this.id, () => this.setPressed(true), 16)
                setupExtraButton(id, configKey)
            }
        }

        //% weight=99 blockGap=8
        //% blockId=extrakeyonevent block="on %extrabutton **ExtraButton** %event"
        //% group="Extrabuttons"
        onEvent(event: ExtraButtonEvent, handler: () => void) {
            control.onEvent(event, this.id, handler);
        }

        //% weight=98 blockGap=8
        //% blockId=extrakeypauseuntil block="pause until %extrabutton **ExtraButton** is %event"
        //% group="Extrabuttons"
        pauseUntil(event: ExtraButtonEvent) {
            control.waitForEvent(event, this.id)
        }

        //% weight=96 blockGap=8
        //% blockId=extrakeyispressed block="is %extrabutton **ExtraButton** pressed"
        //% group="Extrabuttons"
        isPressed() {
            return this._pressed;
        }

        private raiseButtonUp() {
            if (_userEventsEnabled)
                control.raiseEvent(KEY_UP, this.id)
            else
                control.raiseEvent(SYSTEM_KEY_UP, this.id);
        }

        private raiseButtonDown() {
            if (_userEventsEnabled)
                control.raiseEvent(KEY_DOWN, this.id)
            else
                control.raiseEvent(SYSTEM_KEY_DOWN, this.id)
        }

        private raiseButtonRepeat() {
            if (_userEventsEnabled)
                control.raiseEvent(KEY_REPEAT, this.id)
            else
                control.raiseEvent(SYSTEM_KEY_REPEAT, this.id)
        }

        setPressed(pressed: boolean) {
            if (this._pressed != pressed) {
                power.poke();
                this._pressed = pressed;
                if (this._pressed) {
                    this._pressedElasped = 0;
                    this.raiseButtonDown();
                } else {
                    this._repeatCount = 0;
                    this.raiseButtonUp();
                }
            }
        }

        __update(dtms: number) {
            if (!this._pressed) return;
            this._pressedElasped += dtms;

            const delay = this.repeatDelay === undefined ? defaultRepeatDelay : this.repeatDelay;
            const interval = this.repeatInterval === undefined ? defaultRepeatInterval : this.repeatInterval;

            // inital delay
            if (this._pressedElasped < delay)
                return;

            // repeat count for this step
            const count = Math.floor((this._pressedElasped - delay - interval) / interval);
            if (count != this._repeatCount) {
                this.raiseButtonRepeat();
                this._repeatCount = count;
            }
        }
    }
}
