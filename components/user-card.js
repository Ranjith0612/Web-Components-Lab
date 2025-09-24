class UserCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="user-card">
        <img src="${this.getAttribute('img-src')}" alt="${this.getAttribute('name')}">
        <div>
          <h3>${this.getAttribute('name')}</h3>
          <p>${this.getAttribute('role')}</p>
        </div>
      </div>
    `;
  }
}
customElements.define('user-card', UserCard);
