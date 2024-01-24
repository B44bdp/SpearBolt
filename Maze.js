// Team Members: Logan Taylor & Blake Krueger
// Name: Logan Taylor
// Date: 1.22.2024
// Program: Maze
// Bolt ID: 2Fae

// Blue LED Checkpoint

async function startProgram() {
	await scrollMatrixText('Start', { r: 660, g: 560, b: 255 }, 15, true)
	await speak("start")
	await roll (-90, 55, 3.2)
	setMainLed({ r: 0, g: 0, b: 90 })
	
	
}