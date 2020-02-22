#include "pxt.h"
#ifdef STM32F4
#include "FSMCIO.h"
#endif

namespace led {

CODAL_PIN spi_led_pin(DEVICE_ID_IO_P0 + 30, PB_8, PIN_CAPABILITY_DIGITAL);
CODAL_PIN *NULL_CODAL_PIN = NULL;
CODAL_SPI_LED spi_led(spi_led_pin, *NULL_CODAL_PIN, *NULL_CODAL_PIN);

//% blockId=show_color block="show color id %id red %red green %green blue %blue"
//% group="LED"
//% inlineInputMode=inline
void showLED(int id, int red, int green, int blue) {
    spi_led.show(id, red, green, blue);
    // for test show
    /*
    spi_led.show(id, 15, 0, 0);
    spi_led.show(id, 0, 15, 0);
    spi_led.show(id, 0, 0, 15);
    spi_led.show(id, red, green, blue);
     */
}

} // namespace led
