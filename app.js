
const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controls')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelectorAll('.main-content')

    function PageTransitions() {
        // for button
        for (let i = 0; i < sectBtn.length; i++) {
            sectBtn[i].addEventListener('click', function () {
                let currentBtn = document.querySelectorAll('.active-btn');
                currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
                this.className += ' active-btn'
            })
        }

        //for botton's section
        allSections[0].addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            if(id){
                //remove active from all the buttons
                sectBtn.forEach((btn) => {
                    btn.classList.remove('active')
                })
                //add active for the clicked button and remove active from all other the sections
                e.target.classList.add('active')
                sections.forEach((section) => {
                    section.classList.remove('active')
                })
                //Add active to clicked section
                const element = document.getElementById(id);
                element.classList.add('active')
            }
        })
        // Toggle Theme
        const themeBtn = document.querySelector('.theme-btn')
        themeBtn.addEventListener('click', ()=>{
            let element = document.body;
            element.classList.toggle('light-mode')
        })
    }
    PageTransitions();

// ----------
// Uncaught TypeError: allSections.addEventListener is not a function
// ----------


// // window.addEventListener('load', (event) => {
// //     console.log('page is fully loaded');

// const sections = document.querySelectorAll('.section')
// const sectBtns = document.querySelectorAll('.controls')
// const sectBtn = document.querySelectorAll('.control')
// const allSections = document.querySelectorAll('.main-content')

// function PageTransitions() {
//     for (let i = 0; i < sectBtn.length; i++) {
//         sectBtn[i].addEventListener('click', function () {
//             let currentBtn = document.querySelectorAll('.active-btn');
//             currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
//             this.className += ' active-btn'
//         })
//     }

//     // for (let i=0; i< allSections.length; i++){
//         allSections[0].addEventListener('click', (e) => {
//             //console.log(e.target);
    
//             const id = e.target.dataset.id;
//             if(id){
//                 sectBtn.forEach((btn) => {
//                     btn.classList.remove('active')
//                 })
//                 e.target.classList.add('active')
    
//                 sections.forEach((section) => {
//                     section.classList.remove('active')
//                 })
    
//                 const element = document.getElementById(id);
//                 element.classList.add('active')
//             }
//         })
//     // }

//     // for (let i=0; i< allSections.length; i++){
//     //     allSections[i].addEventListener('click', (e) => {
//     //         //console.log(e.target);
    
//     //         const id = e.target.dataset.id;
//     //         if(id){
//     //             sectBtn.forEach((btn) => {
//     //                 btn.classList.remove('active')
//     //             })
//     //             e.target.classList.add('active')
    
//     //             sections.forEach((section) => {
//     //                 section.classList.remove('active')
//     //             })
    
//     //             const element = document.getElementById(id);
//     //             element.classList.add('active')
//     //         }
//     //     })
//     // }
// }
// PageTransitions();

// // });


