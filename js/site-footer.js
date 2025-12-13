class SiteFooter extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <div>
                <img src="img/icon-figure.png" alt="Figure icon">
                <p>Built with ☕ and 🦆.</p>
                <p>🄯 2025 Namn Namnsson.</p>
            </div>
        `;
    }
}

customElements.define("site-footer", SiteFooter);