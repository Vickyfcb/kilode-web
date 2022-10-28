const chatBox = document.getElementById('notifications-menu'),
      chatOpen = document.getElementById('notifications-open'),
      chatClose = document.getElementById('notifications-close')

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

//likes
const likes = document.querySelectorAll('.like');

//console.log(likes);

likes.forEach(function (like) {
    like.addEventListener("click", () => {
        if (like.childNodes[1].classList.contains("like-emoji")) {
            like.innerHTML = `<i class='bx bx-menu'></i>`;
            setTimeout(function () {
                like.innerHTML = `<i class='bx bxs-heart'></i> 26`;
            }, 1000);
        } else {
            like.innerHTML = `<i class='bx bx-menu'></i>`;
        }
    });
});

