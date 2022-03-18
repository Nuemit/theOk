import chalkAnimation from 'chalk-animation';

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r,ms));

async function allOkay() {
	const glitchTitle = chalkAnimation.glitch(
	'I am the Computer, everything is okay!'
	);

	await sleep();
	glitchTitle.stop();
}

await allOkay()
