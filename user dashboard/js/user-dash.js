/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-second'),
navToggle = document.getElementById('navsecond-toggle'),
navClose = document.getElementById('navsecond-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
navToggle.addEventListener('click', () =>{
  navMenu.classList.add('show-sidemenu')
})
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
navClose.addEventListener('click', () =>{
  navMenu.classList.remove('show-sidemenu')
})
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link, .logout__link')

function linkAction(){
const navMenu = document.getElementById('nav-second')
// When we click on each nav__link, we remove the show-sidemenu class
navMenu.classList.remove('show-sidemenu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// SHOW MENU
const showMenu = (toggleId, navbarId,bodyId) =>{
  const toggle = document.getElementById(toggleId),
  navbar = document.getElementById(navbarId),
  bodypadding = document.getElementById(bodyId)

  if(toggle && navbar){
      toggle.addEventListener('click', ()=>{
          // APARECER MENU
          navbar.classList.toggle('show')
          // ROTATE TOGGLE
          toggle.classList.toggle('rotate')
          // PADDING BODY
          bodypadding.classList.toggle('expander')
      })
  }
}
showMenu('nav-toggle','navbar','body')

// LINK ACTIVE COLOR
const linkColor = document.querySelectorAll('.nav__link');   
function colorLink(){
  linkColor.forEach(l => l.classList.remove('active'));
  this.classList.add('active');
}

linkColor.forEach(l => l.addEventListener('click', colorLink));

// MESSAGES
const chatBox = document.getElementById('chat-box'),
      chatOpen = document.getElementById('chat-open'),
      chatClose = document.getElementById('chat-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(chatOpen){
    chatOpen.addEventListener('click', () =>{
        chatBox.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(chatClose){
    chatClose.addEventListener('click', () =>{
        chatBox.classList.remove('show-menu')
    })
}
//like
var likeIcons = document.querySelectorAll('.like-img');
likeIcons.forEach(function(likeIcon) {
  likeIcon.addEventListener('click', function() {
    var likeCount = this.nextElementSibling;
    var count = parseInt(likeCount.innerHTML, 10);
    if (this.src.endsWith('images/like-light.png')) {
      this.src = 'images/like-solid.png';
      likeCount.innerHTML = count + 1;
    } else {
      this.src = 'images/like-light.png';
      likeCount.innerHTML = count - 1;
    }
  });
});
//going
var goingIcons = document.querySelectorAll('.going-img');
goingIcons.forEach(function(goingIcon) {
  goingIcon.addEventListener('click', function() {
    var goingCount = this.nextElementSibling;
    var count = parseInt(goingCount.innerHTML, 10);
    if (this.src.endsWith('images/going-light.png')) {
      this.src = 'images/going-solid.png';
      goingCount.innerHTML = count + 1;
    } else {
      this.src = 'images/going-light.png';
      goingCount.innerHTML = count - 1;
    }
  });
});
/*=================== NOTIFICATIONS ======================*/
const tabs =document.querySelectorAll('[data-target]'),
      tabsContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabsContents.forEach(tc =>{
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t =>{
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})
// })

const skillsContent = document.getElementsByClassName('more__container'),
      skillsHeader = document.querySelectorAll('.more-icons')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'more__container more__close'
    }
    if (itemClass === 'more__container more__close') {
       this.parentNode.className = 'more__container more__open'
    }
}
  
skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})