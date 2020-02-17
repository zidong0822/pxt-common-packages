#include "pxt.h"
// #include "ZSPI_LED.h"
#ifdef STM32F4
#include "FSMCIO.h"
#endif
#include "HeTao.h"

// class WLed {
//   public:
//     HeTao ht;

//     WLed(){
//        ht.init();
//     }

//     // turns on/off the speaker amp
//     void setAmp() {
//          ht.spi_led.show(0, 0, 15, 0);
//         // fiber_sleep(2000);
//         // ht.spi_led.show(1, 15, 15, 0);
//     }
// };
// SINGLETON(WLed);


namespace led {

//% blockId=show_color block="show color id %id red %red green %green blue %blue"
//% group="LED"
//% inlineInputMode=inline
void showLED(int id, int red, int green, int blue) {

   // getWLed()->setAmp();

    HeTao ht;

    ht.spi_led.show(0, 15, 15, 0);
    // fiber_sleep(2000);
    // ht.spi_led.show(1, 15, 15, 0);
    // uint8_t buf_bytes[] = {0x88, 0x8E, 0xE8, 0xEE};
    // uint8_t txBuffer[8 * 3 * 4 + 1];
    // uint32_t txSize = 8 * 3 * 4 + 1;



    // memset(txBuffer, 0x88, txSize - 1);

    // CODAL_PIN led_mosi(DEVICE_ID_IO_P0 + 30, PB_8, PIN_CAPABILITY_DIGITAL);
    // CODAL_PIN *led_miso = NULL;
    // CODAL_PIN *led_sclk = NULL;
    // ZSPI_LED led(led_mosi, *led_miso, *led_sclk);

    // led.show(id, red, green, blue, false);
    // fiber_sleep(2000);
    // led.show(3, 20, 20, 20, false);
}

} // namespace led