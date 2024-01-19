//Programmer: Blake. K
//Date: 1.10.2024
//Program: Sphero Bolt Testing 
//Bolt ID: 2fae

/*)
async function startProgram() {
	await speak("Hello World", true);
	setMainLed({ r: 0, g: 0, b: 255});
	setSpeed(60);
	await delay (2);
	setSpeed(0);
}
*/

// Square w/ different colors for each line 






// Square w/ different colors for each line 





 
// Figure 8
async function startProgram() {
	await roll(0, 50, 2)
	await spin(90, 2.5)
	setMainLed({ r: 0, g: 0, b: 255})
	await roll(90, 50, 2)
	await spin(90, 2.5)
	setMainLed({ r: 0, g: 230, b: 255})
	await roll(180, 50, 2)
	await spin(90, 2.5)
	setMainLed({ r: 100, g: 230, b: 0})
 	await roll(-90, 50, 2)
	await Stop(0)
}