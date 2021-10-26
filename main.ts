input.onButtonPressed(Button.A, function () {
    radio.sendString("Peach")
})
radio.onReceivedString(function (receivedString) {
    basic.showNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Mango")
})
radio.setGroup(69)
