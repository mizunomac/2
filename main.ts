input.onButtonPressed(Button.A, function () {
    serial.writeString("&!")
    かえる()
})
function music2 (テキスト: string) {
    counter = 0
    for (let index = 0; index < テキスト.length / 2; index++) {
        serial.writeString(テキスト.substr(counter, 1))
        Len = テキスト.substr(counter + 1, 1)
        if (Len == "1") {
            basic.pause(240)
        } else if (Len == "2") {
            basic.pause(500)
        } else {
            basic.pause(1000)
        }
        counter += 2
    }
}
function かえる () {
    OLED.drawLoading(0)
    music2(A)
    OLED.drawLoading(25)
    music2(B)
    OLED.drawLoading(50)
    music2(C)
    OLED.drawLoading(63)
    music2(C)
    OLED.drawLoading(75)
    music2(D)
    OLED.drawLoading(88)
    music2(E)
    OLED.drawLoading(100)
}
input.onButtonPressed(Button.B, function () {
    serial.writeString("%\"")
    かえる()
})
let Len = ""
let counter = 0
let E = ""
let D = ""
let C = ""
let B = ""
let A = ""
OLED.init(128, 64)
serial.redirect(
SerialPin.P8,
SerialPin.P12,
BaudRate.BaudRate38400
)
A = "q2e2t2y2t2e2q4"
B = "t2y2i2p2i2y2t4"
C = "q4q4"
D = "q1q1e1e1t1t1y1y1"
E = "t2e2q4"
