// const logo = document.querySelectorAll('#logo path');
// for (let i = 0; i < logo.length; i++) {
//     console.log(`Letter ${i} is  ${logo[i].getTotalLength()}`);
// }

function removePreLoader() {
    let preloader = document.querySelector(".preload-wrapper");
    preloader.style.display = 'none';
}

window.addEventListener('load', removePreLoader);