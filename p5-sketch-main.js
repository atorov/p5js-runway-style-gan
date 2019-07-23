const p5Main = new p5((sketch) => {
    const s = sketch

    const FRAME_COUNT_OFFSET = 0
    // const FRAME_FILE_COUNT_PREFIX = 9000000
    // const FRAME_FILE_NAME_PREFIX = 'gan'

    const isLoopEnabled = true

    function delay(t = 0) {
        return new Promise(resolve => setTimeout(resolve, t))
    }

    function drawBorder() {
        s.stroke(255, 127, 0)
        s.strokeWeight(16)
        s.noFill()
        s.rect(0, 0, s.width, s.height)
    }

    s.setup = () => {
        s.createCanvas(512, 512)
        s.noiseSeed(118)
    }

    s.draw = async () => {
        s.noLoop()

        const truncation = s.map(s.noise((s.frameCount + FRAME_COUNT_OFFSET) * 0.011), 0, 1, -1.1, 1.1)
        const z = []
        for (let i = 0; i < 512; i++) {
            z.push(s.map(s.noise(1550 * i + (s.frameCount + FRAME_COUNT_OFFSET) * 0.012), 0, 1, -1, 1))
        }
        const inputs = { z, truncation }
        console.log(`::: [${s.frameCount + FRAME_COUNT_OFFSET}] inputs:`, inputs)

        let response = null
        try {
            response = await fetch('http://localhost:8000/query', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputs),
            })
        }
        catch (reason) {
            console.warn('::: reason:', reason)
        }

        if (response) {
            const output = await response.json()
            if (output && output.image) {
                const ganImageElement = await new Promise((resolve) => {
                    const img = s.createImg(output.image, () => resolve(img))
                })
                ganImageElement.hide()
                s.image(ganImageElement, 0, 0, s.width, s.height)

                // s.saveCanvas(`${FRAME_FILE_NAME_PREFIX}-${FRAME_FILE_COUNT_PREFIX + FRAME_COUNT_OFFSET + s.frameCount}`, 'jpg')
            }
        }

        await delay(350)
        if (isLoopEnabled) {
            s.loop()
        }
        else {
            drawBorder()
            console.log('::: isLoopEnabled:', isLoopEnabled)
        }
    }

    // Stop looping
    // s.mouseClicked = () => {
    //     isLoopEnabled = !isLoopEnabled
    //     if (isLoopEnabled) {
    //         s.loop()
    //     }
    //     else {
    //         drawBorder()
    //         s.noLoop()
    //     }
    // }
}, 'p5-main')

window.p5Main = p5Main;
