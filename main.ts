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
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(500)
})
