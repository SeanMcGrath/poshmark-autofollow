// Wrap entire script in a function for isolated scope
(function () {

	//increase to slow things down
	const clickDelta = 500

	// Scroll to bottom of page, wait 5 seconds for new users to load,
	// then start the clicking process
	const scrollBottom = () => {
		window.scrollTo(0, document.body.scrollHeight - 600);
		setTimeout(followAll, 5000)
	}

	const followAll = () => {
		// find all follow buttons
		const followButtons = document.querySelectorAll('[data-et-name=follow_user]')
		const numButtons = followButtons.length

		// set up clicks for all the buttons after appropriate delays
		for (let i = 0; i < numButtons; i++) {
			let delay = i * clickDelta;
			let button = followButtons[i];
			setTimeout(() => {
				console.log(button);
				button.click();
			}, delay);
		}

		// set up another scroll-down cycle
		setTimeout(scrollBottom, clickDelta * numButtons)
	}

	// start the process
    followAll();
})();