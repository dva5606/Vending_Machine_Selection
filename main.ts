enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("PEACH")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "PEACH") {
        if (Grape__Strawberry == true) {
            Grape__Strawberry = false
        } else if (Grape__Strawberry == false) {
            Grape__Strawberry = true
        }
    }
    if (receivedString == "MANGO") {
        if (Peach__Wild_Berry == true) {
            Peach__Wild_Berry = false
        } else if (Peach__Wild_Berry == false) {
            Peach__Wild_Berry = true
        }
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("MANGO")
})
let Peach__Wild_Berry = false
let Grape__Strawberry = false
basic.showIcon(IconNames.Duck)
radio.setGroup(69)
