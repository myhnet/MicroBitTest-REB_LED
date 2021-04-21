let iRED = 0
let iGREEN = 0
let iBLUE = 0
function RGB_LED (RED: number, GREEN: number, BLUE: number, TIME: number) {
    iRED = RED * 4
    iGREEN = GREEN * 4
    iBLUE = BLUE * 4
    pins.analogWritePin(AnalogPin.P0, iRED)
    pins.analogWritePin(AnalogPin.P1, iGREEN)
    pins.analogWritePin(AnalogPin.P2, iBLUE)
    basic.pause(TIME)
}
basic.forever(function () {
    RGB_LED(255, 0, 0, 500)
    RGB_LED(0, 255, 0, 500)
    RGB_LED(0, 0, 255, 500)
    RGB_LED(0, 255, 255, 500)
    RGB_LED(255, 0, 255, 500)
    RGB_LED(255, 255, 0, 500)
    RGB_LED(192, 255, 62, 500)
    RGB_LED(148, 0, 211, 500)
    RGB_LED(188, 238, 0, 500)
    RGB_LED(0, 197, 205, 500)
})
