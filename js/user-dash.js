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
const likeBtn = document.querySelectorAll(".relate__btn");

//console.log(likeBtn);

likeBtn.forEach(function(like){
    like.addEventListener('click',function(){
        //console.log(like.childNodes);
        if (like.childNodes[1].classList.contains('like-img')){
            //console.log('object')
            like.innerHTML  = `<img src="images/like-solid.png" class="like-img"><small class="like-count">24</small>`;
        }
        else {
            //console.log('object')
            like.innerHTML  = `<img src="images/like-light.png" class="like-img"><small class="like-count">23</small>`;
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

/*=================== KILORANT MORE ======================*/
const moreViews = document.querySelectorAll('.more__content'),
      moreBtns = document.querySelectorAll('.more__icon'),
      moreCloses = document.querySelectorAll('.close__more')
let moda = function(moreClick) {
    moreViews[moreClick].classList.add('active-modal')
}
moreBtns.forEach((moreBtn, i) => {
    moreBtn.addEventListener('click', () =>{
        moda(i)
    })
})
moreCloses.forEach((modalClose) => {
    modalClose.addEventListener('click',() => {
        moreViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal');
        })
    });
})



const selectAll = document.querySelector('.setup-group.select-all input');
const allCheckbox = document.querySelectorAll('.setup-group:not(.select-all) input');
let listBoolean = [];

allCheckbox.forEach(item=> {
	item.addEventListener('change', function () {
		allCheckbox.forEach(i=> {
			listBoolean.push(i.checked);
		})
		if(listBoolean.includes(false)) {
			selectAll.checked = false;
		} else {
			selectAll.checked = true;
		}
		listBoolean = []
	})
})

selectAll.addEventListener('change', function () {
	if(this.checked) {
		allCheckbox.forEach(i=> {
			i.checked = true;
		})
	} else {
		allCheckbox.forEach(i=> {
			i.checked = false;
		})
	}
})

//select
const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    });
});