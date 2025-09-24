class AppHeader extends HTMLElement {
  connectedCallback() {
      const title = this.getAttribute('title') || 'App';
      
      this.innerHTML = `
          <header style="
              background: #2c3e50;
              color: white;
              padding: 1rem;
              text-align: center;
          ">
              <h1>${title}</h1>
              <nav>
                  <a href="#" style="color: white; margin: 0 10px;">Home</a>
                  <a href="#" style="color: white; margin: 0 10px;">About</a>
                  <a href="#" style="color: white; margin: 0 10px;">Contact</a>
              </nav>
          </header>
      `;
  }
}

customElements.define('app-header', AppHeader);