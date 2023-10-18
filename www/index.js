import { Universe } from "wasm-game-of-life";

const pre = document.getElementById("game-of-life-canvas")
const universe = Universe.new()
universe.resize(8, 8)

const renderLoop = () => {
	pre.textContent = universe.render()
	universe.tick()

	setTimeout(() => requestAnimationFrame(renderLoop), 125)
}


requestAnimationFrame(renderLoop)
