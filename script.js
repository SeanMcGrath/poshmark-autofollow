(function () {
	const clickDelta = 500 //ms
	const clickedButtons = new Set()
	const scrollBottom = () => {
		window.scrollTo(0, document.body.scrollHeight - 600);
		setTimeout(followAll, 5000)
	}
	const followAll = () => {
		const followButtons = document.querySelectorAll('[data-et-name=follow_user]')
		const numButtons = followButtons.length
		for (let i = 0; i < 1; i++) {
			let delay = i * clickDelta;
			setTimeout(() => {
				const button = followButtons[i];
				if(!clickedButtons.has(button) && button.getAttribute('data-et-name') == "follow_user") {
					button.click();
					debugger;
					clickedButtons.add();
				}
			}, delay)
		}
		setTimeout(scrollBottom, clickDelta * numButtons)
	}
    scrollBottom();
})();