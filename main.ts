let y = 0
let x = 0
y += 0
for (let index = 0; index < 4; index++) {
    led.plot(x, y)
    x += 1
    basic.pause(200)
    led.unplot(x - 1, 0)
}
for (let index = 0; index < 4; index++) {
    led.plot(x, y)
    y += 1
    basic.pause(200)
    led.unplot(x, y - 1)
}
for (let index = 0; index < 4; index++) {
    led.plot(x, y)
    x += -1
    basic.pause(200)
    led.unplot(x + 1, y)
}
for (let index = 0; index < 4; index++) {
    led.plot(x, y)
    y += -1
    basic.pause(200)
    led.unplot(x, y + 1)
}
