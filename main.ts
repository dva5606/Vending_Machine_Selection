enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("PEACH")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "PEACH") {
        if (PEACH == true) {
            PEACH = false
        } else if (PEACH == false) {
            PEACH = true
        }
    }
    if (receivedString == "MANGO") {
        if (MANGO == true) {
            MANGO = false
        } else if (MANGO == false) {
            MANGO = true
        }
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("MANGO")
})
let MANGO = false
let PEACH = false
basic.showIcon(IconNames.Duck)
radio.setGroup(69)
