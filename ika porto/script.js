const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

// Filter galeri
const filters = document.querySelectorAll(".filter");
const galleryItems = document.querySelectorAll(".gallery-item");

filters.forEach(button => {
    button.addEventListener("click", () => {
        filters.forEach(item => item.classList.remove("active"));
        button.classList.add("active");

        const category = button.dataset.filter;

        galleryItems.forEach(item => {
            if (category === "semua" || item.dataset.category === category) {
                item.classList.remove("hide");
            } else {
                item.classList.add("hide");
            }
        });
    });
});

// Pratinjau foto
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll(".gallery-image").forEach(image => {
    image.addEventListener("click", () => {
        lightboxImage.src = image.src;
        lightbox.classList.add("show");
    });
});

closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("show");
});

lightbox.addEventListener("click", event => {
    if (event.target === lightbox) {
        lightbox.classList.remove("show");
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        lightbox.classList.remove("show");
    }
});

// Kontak WhatsApp
// Isi dengan nomor khusus publik setelah mendapat persetujuan Ika.
const nomorWhatsApp = "";

const whatsappLink = document.getElementById("whatsappLink");

whatsappLink.addEventListener("click", event => {
    event.preventDefault();

    if (!nomorWhatsApp) {
        alert("Kontak WhatsApp belum diatur.");
        return;
    }

    const pesan = encodeURIComponent(
        "Halo Ika, saya melihat portofolio kamu."
    );

    window.open(
        `https://wa.me/${nomorWhatsApp}?text=${pesan}`,
        "_blank"
    );
});