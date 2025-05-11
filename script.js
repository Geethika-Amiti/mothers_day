let pages = document.querySelectorAll('.page');
let currentPage = 0;

function turnPage() {
  if (currentPage < pages.length - 1) {
    pages[currentPage].style.transform = 'rotateY(180deg)';
    currentPage++;
    pages[currentPage].style.transform = 'rotateY(0deg)';
  }
}

document.querySelector('.book').addEventListener('click', turnPage);
