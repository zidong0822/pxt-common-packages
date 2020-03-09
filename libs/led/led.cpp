#include "pxt.h"
#ifdef STM32F4
#include "FSMCIO.h"
#endif

namespace pxt {
class Led {
public:
    Led() {
        CODAL_PIN spi_led_pin(DEVICE_ID_IO_P0 + 36, PB_5, PIN_CAPABILITY_DIGITAL);
        CODAL_PIN *NULL_CODAL_PIN = NULL;
        spi_led = new CODAL_SPI(spi_led_pin, *NULL_CODAL_PIN, *NULL_CODAL_PIN);
        spi_led->setFrequency(3200000);
        // init spi
        spi_led->transfer(txBuffer, txSize, NULL, 0);
        spi_led->transfer(txBuffer, txSize, NULL, 0);
        memset(txBuffer, 0x88, txSize - 1);
    }

    void show(int id, int red, int green, int blue) {
        if (id >= 8) {
            return;
        }

        int index = id * 12;
        txBuffer[index] = buf_bytes[green >> 6 & mask];
        txBuffer[index + 1] = buf_bytes[green >> 4 & mask];
        txBuffer[index + 2] = buf_bytes[green >> 2 & mask];
        txBuffer[index + 3] = buf_bytes[green & mask];

        txBuffer[index + 4] = buf_bytes[red >> 6 & mask];
        txBuffer[index + 5] = buf_bytes[red >> 4 & mask];
        txBuffer[index + 6] = buf_bytes[red >> 2 & mask];
        txBuffer[index + 7] = buf_bytes[red & mask];

        txBuffer[index + 8] = buf_bytes[blue >> 6 & mask];
        txBuffer[index + 9] = buf_bytes[blue >> 4 & mask];
        txBuffer[index + 10] = buf_bytes[blue >> 2 & mask];
        txBuffer[index + 11] = buf_bytes[blue & mask];

        spi_led->transfer(txBuffer, txSize, NULL, 0);
    }

    void clear() {
        memset(txBuffer, 0x88, txSize - 1);
        spi_led->transfer(txBuffer, txSize, NULL, 0);
    }

private:
    SPI *spi_led = NULL;
    uint8_t txBuffer[8 * 3 * 4 + 1] = {};
    const uint8_t buf_bytes[4] = {0x88, 0x8E, 0xE8, 0xEE};
    const uint32_t txSize = 8 * 3 * 4 + 1;
    const uint8_t mask = 0x03;
};
SINGLETON(Led);
}

namespace led {

//% blockId=show_color block="show color id %id red %red green %green blue %blue"
//% group="LED"
//% inlineInputMode=inline
void showLED(int id, int red, int green, int blue) {
    auto spi_led = pxt::getLed();
    spi_led->show(id, red, green, blue);
}

void clear() {
    auto spi_led = pxt::getLed();
    spi_led->clear();
}

} // namespace led
