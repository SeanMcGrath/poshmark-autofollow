(function () {
	const scrollBottom = () => { window.scrollTo(0,document.body.scrollHeight); }
	const followAll = () => { document.querySelectorAll('[data-et-name=follow_user]').forEach(button => button.click()) }
        scrollBottom();
        followAll();
	window.setInterval(scrollBottom, 10000);
	window.setInterval(followAll, 25000);
})();
