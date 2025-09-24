class ContentPanel extends HTMLElement {
  connectedCallback() {
      const title = this.getAttribute('title') || 'Panel';
      
      this.innerHTML = `
          <div style="
              background: white;
              padding: 1.5rem;
              border-radius: 8px;
              box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          ">
              <h2 style="color: #2c3e50; margin-bottom: 1rem;">${title}</h2>
              <div><p>This is a simple web components example.</p></div>
          </div>
      `;
  }
}

customElements.define('content-panel', ContentPanel);