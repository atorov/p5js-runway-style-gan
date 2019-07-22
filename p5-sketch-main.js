const p5Main = new p5((sketch) => {
    const s = sketch

    function delay(t = 0) {
        return new Promise(resolve => setTimeout(resolve, t))
    }

    s.setup = () => {
        s.createCanvas(512, 512)
        s.noiseSeed(117)
    }

    s.draw = async () => {
        s.noLoop()

        const truncation = s.map(s.noise(s.frameCount * 0.1), 0, 1, -1.1, 1.1)
        const z = []
        for (let i = 0; i < 512; i++) {
            z.push(s.map(s.noise(1550 * i + s.frameCount * 0.05), 0, 1, -1, 1))
        }
        const inputs = { z, truncation }
        console.log('::: inputs:', inputs)

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

                await delay(2550)
                // s.loop()
            }
        }
    };
}, 'p5-main')

window.p5Main = p5Main;
