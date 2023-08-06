let menuBtn = document.querySelector('#header-menu');
let openHamburgerBtn = document.querySelector("#open--hamburger");
let closeHamburgerBtn = document.querySelector("#close--hamburger");
let headerExtension = document.querySelector('#header-extension');
let extensionLinks = document.querySelectorAll('.he');

menuBtn.onclick = () =>{
	if (getComputedStyle(openHamburgerBtn).display === 'inline-block') {
		headerExtension.style.top = '80px';
		openHamburgerBtn.style.display = 'none';
		closeHamburgerBtn.style.display = 'inline-block';
		extensionLinks.forEach(item => item.style.opacity = '1');
	} else{
		headerExtension.style.top = '-485px'
		openHamburgerBtn.style.display = 'inline-block';
		closeHamburgerBtn.style.display = 'none';
		extensionLinks.forEach(item => item.style.opacity = '0');
	}
}