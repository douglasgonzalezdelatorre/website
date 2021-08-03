document.querySelector(".menu-btn").addEventiListener("click", () => {
	document.querySelector(".nav-menu").classListtoggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { 'delay: 500' });
ScrollReveal().reveal('.cards-banner-one', { 'delay: 500' });
ScrollReveal().reveal('.cards-banner-two', {' delay: 500' });
