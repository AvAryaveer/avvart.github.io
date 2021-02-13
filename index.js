burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
logo   =  document.querySelector('.logo')
 

burger.addEventListener('click', ()=>{
    logo.classList.toggle('v-class');
	navList.classList.toggle('v-class');
	navbar.classList.toggle('h-nav');
})	
