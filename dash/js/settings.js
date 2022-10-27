//REMOVE ACTIVE CLASS FROM ALL MENU ITEMS
const menuItems = document.querySelectorAll('.setting');
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('setting-active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('setting-active');
    })
})
//OPEN MODALS
// const showYaccount = (openButton, modalContent) =>{
//     const openAcc = document.getElementById(openButton),
//     yaccContainer = document.getElementById(modalContent)

//     if(openAcc && yaccContainer){
//         openAcc.addEventListener('click', ()=>{
//             yaccContainer.classList.add('show-modal')
//         })
//     }
// }
// showYaccount('open-modal','modal-open')

// /* close modal */
// const closeAcc = document.querySelectorAll('.modal__back','.setting')

// function closeModal(){
//     const yaccContainer = document.getElementById('modal-open')
//     yaccContainer.classList.remove('show-modal')
// }
// closeAcc.forEach(c => c.addEventListener('click', closeModal))
//listener
// const showModal = (openButton, modalContent) =>{
//     const openBtn = document.getElementById(openButton),
//     modalContainer = document.getElementById(modalContent)

//     if(openBtn && modalContainer){
//         openBtn.addEventListener('click', ()=>{
//             modalContainer.classList.add('show-modal')
//         })
//     }
// }
// showModal('open-listener','listener')

/* close modal */
// const closeBtn = document.querySelectorAll('.listener__back')

// function closeModal(){
//     const modalContainer = document.getElementById('listener')
//     modalContainer.classList.remove('show-modal')
// }
// closeBtn.forEach(c => c.addEventListener('click', closeModal))
const modalViews = document.querySelectorAll('.setting__modal'),
      modalBtns = document.querySelectorAll('.open-modal'),
      modalCloses = document.querySelectorAll('.modal__back')
let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})
modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click',() => {
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})