import './components/app-header.js';
import './components/user-card.js';
import './components/content-panel.js';
import './components/app-footer.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    

    const header = document.createElement('app-header');
    header.setAttribute('title', 'My Simple App for Web Components');
    app.appendChild(header);
    

    const main = document.createElement('main');
    
    const userSection = document.createElement('div');
    userSection.className = 'user-grid';
    
    const users = [
        { name: 'Alice', role: 'Designer', img: "https://cdn.prod.website-files.com/624ac40503a527cf47af4192/655c6883100932e9fcc96f7a_11.jpeg"},
        { name: 'Bob', role: 'Developer', img: "https://imagineme-ai.b-cdn.net/wp-content/uploads/2024/11/Hp_v01_set_01_img_02_v02_Star_wars_middle.jpg"},
        { name: 'Carol', role: 'Manager', img: "https://lucid.content-delivery-one.com/cdn-cgi/image/w=600,format=auto,metadata=none/675703157f0da.png"}
    ];
    
    users.forEach(user => {
        const userCard = document.createElement('user-card');
        userCard.setAttribute('name', user.name);
        userCard.setAttribute('role', user.role);
        userCard.setAttribute('img-src', user.img);
        userSection.appendChild(userCard);
    });
    
    main.appendChild(userSection);
    
    const contentPanel = document.createElement('content-panel');
    contentPanel.setAttribute('title', 'Welcome');
    contentPanel.innerHTML = '<p>This is a simple web components example.</p>';
    main.appendChild(contentPanel);
    
    app.appendChild(main);
    
    const footer = document.createElement('app-footer');
    app.appendChild(footer);
});