const p5Main = new p5((sketch) => {
    const s = sketch

    const CANVAS_HEIGHT = 512
    const CANVAS_WIDTH = 512
    const FRAME_COUNT_OFFSET = 0
    const FRAME_FILE_COUNT_PREFIX = 1000000
    const FRAME_FILE_NAME_PREFIX = 'gan'
    const NOISE_SEED = 117
    const T_MAX = 1.1
    const T_MIN = -1.1
    const T_NOISE_SCALE = 0.011
    const Z_LENGTH_MAX = 512
    const Z_NOISE_SCALE = 0.012
    const Z_MAX = 1
    const Z_MIN = -1

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
        s.createCanvas(CANVAS_HEIGHT, CANVAS_WIDTH)
        s.noiseSeed(NOISE_SEED)
    }

    s.draw = async () => {
        s.noLoop()

        const t = s.map(s.noise((s.frameCount + FRAME_COUNT_OFFSET) * T_NOISE_SCALE), 0, 1, T_MIN, T_MAX)
        const z = []
        for (let i = 0; i < Z_LENGTH_MAX; i++) {
            z.push(s.map(s.noise(1550 * i + (s.frameCount + FRAME_COUNT_OFFSET) * Z_NOISE_SCALE), 0, 1, Z_MIN, Z_MAX))
        }
        const inputs = { z, t }
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

                s.saveCanvas(`${FRAME_FILE_NAME_PREFIX}-${FRAME_FILE_COUNT_PREFIX + FRAME_COUNT_OFFSET + s.frameCount}`, 'jpg')
            }
        }

        await delay(550)
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
