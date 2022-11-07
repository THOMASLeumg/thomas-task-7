input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    while (input.lightLevel() > 0) {
        led.setBrightness(255 - input.lightLevel())
        led.plotBarGraph(
        5,
        5
        )
    }
})
basic.showString("13")
