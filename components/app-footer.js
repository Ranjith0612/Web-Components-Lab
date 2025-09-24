class AppFooter extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
          <footer style="
              background: #34495e;
              color: white;
              text-align: center;
              padding: 1rem;
              margin-top: 2rem;
          ">
              <p>&copy; ${new Date().getFullYear()} Simple Web Components App</p>
          </footer>
      `;
  }
}

customElements.define('app-footer', AppFooter);