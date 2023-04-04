'use strict';

let modal_El = document.querySelector('.modal');
let overLay_El = document.querySelector('.overlay');
let closeModalBtn = document.querySelector('.close-modal');
let openModelBtn = document.querySelectorAll('.show-modal');



// let openModel = function () {
//     modal_El.classList.remove('hidden');
//     overLay_El.classList.remove('hidden');
// }

// for (let i = 0; i < openModelBtn.length; i++)
//     openModelBtn[i].addEventListener('click', openModel)

// let closeModal = function () {
//     modal_El.classList.add('hidden');
//     overLay_El.classList.add('hidden');
// }
// closeModalBtn.addEventListener('click', closeModal);
// overLay_El.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//     if (e.key === 'Escape' && !modal_El.classList.contains('hidden')) {
//             closeModal();
//         }
// });


//ASSIGNMENT DONE

let openModel = function ()
{
    modal_El.classList.remove('hidden');
    overLay_El.classList.remove('hidden');
}

for (let i = 0; i < openModelBtn.length; i++) 
{
   openModelBtn[i].addEventListener('click', openModel)
}

let closeModal = function ()
{
    modal_El.classList.add('hidden');
    overLay_El.classList.add('hidden');
}
closeModalBtn.addEventListener ('click', closeModal)
overLay_El.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
    if( event.key === 'Escape' && !modal_El.classList.contains('hidden'))
    {
        closeModal();
    }
})





