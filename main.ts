let luz = 0
input.onButtonPressed(Button.A, function () {
    if (luz == 0) {
        luz = 1
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        luz = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.QuarterNote)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
    }
})
basic.forever(function () {
	
})
