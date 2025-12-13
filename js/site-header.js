class SiteHeader extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <img src="img/icons/figure.png" alt="Figure icon">
            <nav>
                <a href="about.html">About</a>
                <a href="index.html">Recipes</a>
                <a href="other.html">Other</a>
            </nav>
            <img src="img/icons/hand.png" alt="Hand icon">
        `;

        const links = this.querySelectorAll("nav a");
        const path = window.location.pathname.split("/").pop();

        links.forEach(link => {
            const href = link.getAttribute("href");
            if (href === path || (href === "index.html" && path === "")) {
                link.classList.add("active");
            }
        });
    }
}

customElements.define("site-header", SiteHeader);