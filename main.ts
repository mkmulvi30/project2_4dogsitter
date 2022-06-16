let on = 0
let dogonMat = 0
let Urgency = 0
let DogatDoor = 0
input.onButtonPressed(Button.A, function () {
    on = 1
})
input.onButtonPressed(Button.B, function () {
    on = 0
})
basic.forever(function () {
    while (on == 1) {
        dogonMat = pins.analogReadPin(AnalogPin.P0)
        Urgency = 0
        DogatDoor = 0
        if (input.soundLevel() > 200 || dogonMat > 500) {
            Urgency += 1
            basic.showLeds(`
                # . . . .
                # . . # #
                # # # # #
                . # # # .
                # . . . #
                `)
            basic.pause(1000)
            music.playTone(262, music.beat(BeatFraction.Double))
            basic.clearScreen()
        } else {
        	
        }
    }
})
