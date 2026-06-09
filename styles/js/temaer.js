const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumbnail");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

/* vis billede */

function showImage(index) {
  mainImage.src = thumbnails[index].src;

  thumbnails.forEach((thumb) => {
    thumb.classList.remove("active");
  });

  thumbnails[index].classList.add("active");
}

/* klik på thumbnails så billederne bliver main */

thumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    currentIndex = index;
    showImage(currentIndex);
  });
});

/* næste billede - klik på pil */

nextBtn.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= thumbnails.length) {
    currentIndex = 0;
  }

  showImage(currentIndex);
});

/* forrige billede - klip på venstre pil */

prevBtn.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = thumbnails.length - 1;
  }

  showImage(currentIndex);
});

mainImage.src = thumbnails[0].src;

/* burger menu: toggle `open` class on the label when checkbox changes */
const burgerToggle = document.querySelector('.burger-toggle');
const burgerMenu = document.querySelector('.burger-menu');

if (burgerToggle && burgerMenu) {
  burgerToggle.addEventListener('change', () => {
    burgerMenu.classList.toggle('open', burgerToggle.checked);
  });

  // Keep menu state in sync if label is clicked (optional)
  burgerMenu.addEventListener('click', () => {
    // no-op here — animation is driven by checkbox change
  });
}