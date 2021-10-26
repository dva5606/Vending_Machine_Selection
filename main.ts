input.onButtonPressed(Button.A, function () {
    let PEACH = 0
    radio.sendString("" + (PEACH))
})
input.onButtonPressed(Button.B, function () {
    let MANGO = 0
    radio.sendString("" + (MANGO))
})
basic.showIcon(IconNames.Duck)
radio.setGroup(69)
