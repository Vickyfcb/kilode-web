/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-second'),
navToggle = document.getElementById('navsecond-toggle'),
navClose = document.getElementById('navsecond-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
navToggle.addEventListener('click', () =>{
  navMenu.classList.add('show-menu')
})
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
navClose.addEventListener('click', () =>{
  navMenu.classList.remove('show-menu')
})
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link, .logout__link')

function linkAction(){
const navMenu = document.getElementById('nav-second')
// When we click on each nav__link, we remove the show-menu class
navMenu.classList.remove('show-menu')
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
//NOTIFICATIONS
const notificationBox = document.getElementById('notifications-menu'),
      notificationOpen = document.getElementById('notifications-open'),
      notificationClose = document.getElementById('notifications-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(notificationOpen){
    notificationOpen.addEventListener('click', () =>{
        notificationBox.classList.add('show-notifications')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(notificationClose){
    notificationClose.addEventListener('click', () =>{
        notificationBox.classList.remove('show-notifications')
    })
}
/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('rant-btn');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 120) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

//like
const likeBtn = document.querySelectorAll(".icon");

//console.log(likeBtn);

likeBtn.forEach(function(like){
    like.addEventListener('click',function(){
        //console.log(like.childNodes);
        if (like.childNodes[0].classList.contains('bx-heart')){
            //console.log('object')
            like.innerHTML  = `<i class='bx bxs-heart'></i> <small>26</small>`;
        }
        else {
            like.innerHTML  = `<i class='bx bx-heart'></i> <small>25</small>`;
        }
    });
});
//going
const goingBtn = document.querySelectorAll(".going-icon");

//console.log(goingBtn);

goingBtn.forEach(function(going){
    going.addEventListener('click',function(){
        //console.log(going.childNodes);
        if (going.childNodes[0].classList.contains('fa-regular')){
            //console.log('object')
            going.innerHTML  = `<i class="fa-solid fa-bolt"></i> <small>8</small>`;
        }
        else {
            going.innerHTML  = `<i class="fa-regular fa-bolt"></i> <small>7</small>`;
        }
    });
});