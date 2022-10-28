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

