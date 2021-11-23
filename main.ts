enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("PEACH")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "PEACH") {
        if (Cherry__Watermelon == true) {
            Cherry__Watermelon = false
        } else if (Cherry__Watermelon == false) {
            Cherry__Watermelon = true
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
let Cherry__Watermelon = false
basic.showIcon(IconNames.Duck)
radio.setGroup(69)
