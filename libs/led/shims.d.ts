declare namespace led {

    // //% blockId=show_color block="show color id %id %red %green|%blue"
    // //% group="LED" shim=led::showColor
    // function showColor(id: int32, red: int32, green: int32, blue: int32): void;

     /**
     * Set the output volume of the sound synthesizer.
     * @param volume the volume 0...256, eg: 128
     */
    //% blockId=show_color block="show color id %id red %red green %green blue %blue"
    //% group="LED" shim=led::showLED
    //% inlineInputMode=inline
    function showLED(id: int32, red: int32, green: int32, blue: int32): void;

    //% blockId=clear_led block="clear led"
    //% group="LED" shim=led::clear
    //% inlineInputMode=inline
    function clear(): void;

}

// Auto-generated. Do not edit. Really.
