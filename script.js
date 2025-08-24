const texto2 = document.querySelectorAll('.animacion1');


const observertexto2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animacion2');
      observertexto2.unobserve(entry.target); // Solo una vez
    }
  });
 },{
 threshold: 0.1,
 rootMargin: "0px 0px 0px 0px"
});

texto2.forEach(texto2 => observertexto2.observe(texto2)); 

const contenedores = document.querySelectorAll(".contenedor");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.8 });

contenedores.forEach(c => observer.observe(c));