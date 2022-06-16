let on = 0
let DogatDoor = 0
let dogonMat = 0
input.onButtonPressed(Button.A, function () {
    on = 1
})
input.onButtonPressed(Button.B, function () {
    on = 0
    DogatDoor = 0
})
basic.forever(function () {
    while (on == 1) {
        dogonMat = pins.analogReadPin(AnalogPin.P0)
        basic.showNumber(pins.analogReadPin(AnalogPin.P0))
        DogatDoor = 0
        if (dogonMat > 500) {
            DogatDoor += 1
            for (let index = 0; index < 2; index++) {
                music.playTone(262, music.beat(BeatFraction.Double))
                basic.showLeds(`
                    # . . . .
                    # . . # #
                    # # # # #
                    . # # # .
                    # . . . #
                    `)
                basic.pause(1000)
                basic.clearScreen()
            }
        } else {
            basic.showString("System Armed")
        }
    }
})
