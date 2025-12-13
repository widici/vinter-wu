class SiteFooter extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <div>
                <img src="img/icons/figure.png" alt="Figure icon">
                <p>Built with ☕ and 🦆.</p>
                <p>🄯 2025 SmartRecipes, Namn Namnsson.</p>
            </div>
        `;
    }
}

customElements.define("site-footer", SiteFooter);