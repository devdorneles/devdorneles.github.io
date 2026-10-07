console.log("Portfólio de Pablo D. Nascimento carregado!");

// Efeito simples nos links do menu
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        console.log(`Navegando para: ${link.textContent}`);
    });
});