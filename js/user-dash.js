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

//like
// const likeBtn = document.querySelectorAll(".relate__btn");

// //console.log(likeBtn);

// likeBtn.forEach(function(like){
//     like.addEventListener('click',function(){
//         //console.log(like.childNodes);
//         if (like.childNodes[1].classList.contains('like-img')){
//             //console.log('object')
//             like.innerHTML  = `<img src="images/like-solid.png" class="like-img"><small class="like-count">24</small>`;
//         }
//         else {
//             //console.log('object')
//             like.innerHTML  = `<img src="images/like-light.png" class="like-img"><small class="like-count">23</small>`;
//         }
//     });
// });

const buttons = document.querySelectorAll('.relate__btn');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const isLiked = button.innerHTML = `<img src="images/like-solid.png" class="like-img">`;
    const likeCount = parseInt(button.querySelector('.like-count').innerText, 10);

    if (isLiked) {
      // Remove the "liked" class from the button
      button.innerHTML = `<img src="images/like-light.png" class="like-img">`;
      // Decrement the like count
      button.querySelector('.like-count').innerText = likeCount - 1;
    } else {
      // Add the "liked" class to the button
      button.innerHTML = `<img src="images/like-solid.png" class="like-img">`;
      // Increment the like count
      button.querySelector('.like-count').innerText = likeCount + 1;
    }
  });
});
//going
const goingBtn = document.querySelectorAll(".going__btn");

//console.log(goingBtn);

goingBtn.forEach((going) => {
    going.addEventListener('click',function(){
        //console.log(going.childNodes);
        if (going.childNodes[1].classList.contains('going-img')){
            //console.log('object')
            going.innerHTML  = `<img src="images/going-solid.png" class="going-img"><small class="going-count">6</small>`;
        }
        else {
            //console.log('hello world');
            going.innerHTML  = `<img src="images/going-light.png" class="going-img"><small class="going-count">5</small>`;
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
// const moreViews = document.querySelectorAll('.more__content'),
// moreBtns = document.querySelectorAll('.more__icon'),
// moreCloses = document.querySelectorAll('.feed__post')
// let more = function(moreClick) {
// moreViews[moreClick].classList.add('more-active')
// }
// moreBtns.forEach((moreBtn, i) => {
// moreBtn.addEventListener('click', () =>{
//   more(i);
// })
// })
// moreCloses.forEach((moreClose) => {
// moreClose.addEventListener('click',() => {
//   moreViews.forEach((moreView) =>{
//       moreView.classList.remove('more-active')
//   })
// })
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

//select

