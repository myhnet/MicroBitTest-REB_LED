iRED = 0
iGREEN = 0
iBLUE = 0
def RGB_LED(RED: number, GREEN: number, BLUE: number, TIME: number):
    global iRED, iGREEN, iBLUE
    iRED = RED * 4
    iGREEN = GREEN * 4
    iBLUE = BLUE * 4
    pins.analog_write_pin(AnalogPin.P0, iRED)
    pins.analog_write_pin(AnalogPin.P1, iGREEN)
    pins.analog_write_pin(AnalogPin.P2, iBLUE)
    basic.pause(TIME)

def on_forever():
    RGB_LED(255, 0, 0, 500)
    RGB_LED(0, 255, 0, 500)
    RGB_LED(0, 0, 255, 500)
    RGB_LED(0, 255, 255, 500)
    RGB_LED(255, 0, 255, 500)
    RGB_LED(255, 255, 0, 500)
basic.forever(on_forever)
