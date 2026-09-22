const sections = document.querySelectorAll(".journal-entry");
const navLinks = document.querySelectorAll(".nav-link");


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const currentId = entry.target.id;

                navLinks.forEach((link) => {

                    link.classList.remove("active");

                    if (
                        link.getAttribute("href") ===
                        "#" + currentId
                    ) {

                        link.classList.add("active");

                    }

                });

            }

        });

    },

    {
        root: null,

        /*
        只有当 section 进入屏幕中间区域时，
        才认为它是当前正在阅读的 section。
        */

        rootMargin: "-30% 0px -60% 0px",

        threshold: 0
    }

);


sections.forEach((section) => {

    observer.observe(section);

});


/* =============================
   IMAGE LIGHTBOX
============================= */

const galleryImages =
    document.querySelectorAll(".gallery-image");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightbox-image");

const lightboxClose =
    document.getElementById("lightbox-close");


/* Open image */

galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

        lightboxImage.src = image.src;

        lightbox.classList.add("open");

    });

});


/* Close button */

lightboxClose.addEventListener("click", () => {

    closeLightbox();

});


/* Click background to close */

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        closeLightbox();

    }

});


/* ESC key to close */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeLightbox();

    }

});


function closeLightbox() {

    lightbox.classList.remove("open");

}