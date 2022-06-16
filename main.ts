let on = 0
let DogatDoor = 0
let dogonMat = 0
input.onButtonPressed(Button.A, function () {
    on = 1
})
input.onButtonPressed(Button.B, function () {
    on = 0
    DogatDoor = 0
    dogonMat = 0
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
basic.forever(function () {
    while (on == 1) {
        DogatDoor = 0
        dogonMat = pins.analogReadPin(AnalogPin.P0)
        if (dogonMat > 500) {
            DogatDoor += 1
            while (DogatDoor == 1) {
                basic.showLeds(`
                    # . . . .
                    # . . # #
                    # # # # #
                    . # # # .
                    # . . . #
                    `)
                basic.pause(200)
                pins.digitalWritePin(DigitalPin.P1, 1)
                basic.pause(200)
                pins.digitalWritePin(DigitalPin.P1, 0)
                basic.pause(200)
                pins.digitalWritePin(DigitalPin.P2, 1)
                basic.pause(200)
                pins.digitalWritePin(DigitalPin.P2, 0)
                basic.pause(200)
            }
            basic.pause(200)
            basic.clearScreen()
        } else {
            basic.showString("Armed")
        }
    }
})
