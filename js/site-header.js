class SiteHeader extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <img src="img/icon-figure.png" alt="Figure icon">
            <nav>
                <a href="about.html">About</a>
                <a href="index.html">Recipes</a>
                <a href="other.html">Other</a>
            </nav>
            <img src="img/icon-hand.png" alt="Hand icon">
        `;
    }
}

customElements.define("site-header", SiteHeader);