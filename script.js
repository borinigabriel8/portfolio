// =======================
// MUNDO INVERTIDO + BOTÃO
// =======================
const btn = document.getElementById('escape-btn');
const music = document.getElementById('bg-music');


// Garante que body está invertido no início
document.body.style.transform = "rotate(180deg)";


// Mostra botão
btn.style.display = 'block';

btn.addEventListener('click', () => {
    // Gira a tela para posição normal
    document.body.style.transform = "rotate(0deg)";

    // REMOVE O FILTRO DO MUNDO
    document.getElementById('world').style.filter = "none";

    // Toca a música
    music.volume = 0.2;
    music.play();

    // Esconde o botão
    btn.style.display = 'none';
});


// =======================
// CANVAS ESTRELAS
// =======================
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let stars = [];
const STAR_COUNT = 220;

function resetStars() {
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5,
            speed: Math.random() * 0.2 + 0.2
        });
    }
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = document.body.scrollHeight;
    resetStars();
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.y += star.speed;
        if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(animateStars);
}

// Inicializa canvas ao carregar
window.addEventListener("load", () => {
    resizeCanvas();
    animateStars();
});
window.addEventListener("resize", resizeCanvas);

// =======================
// MENU HAMBÚRGUER
// =======================
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.onclick = () => nav.classList.toggle("active");

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("active"));
});

document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
        nav.classList.remove("active");
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") nav.classList.remove("active");
});

// =======================
// CARROSSEL DE PROJETOS
// =======================
const container = document.querySelector('.projects-container');
const btnLeft = document.querySelector('.carousel-btn.left');
const btnRight = document.querySelector('.carousel-btn.right');
const scrollAmount = 300;

if (btnLeft && btnRight && container) {
    btnLeft.addEventListener('click', () => {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    btnRight.addEventListener('click', () => {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
}
