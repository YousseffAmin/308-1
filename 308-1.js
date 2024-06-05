document.addEventListener('DOMContentLoaded', function() {
    
    const menuLinks = [
      { href: '#', text: 'Home' },
      { href: '#', text: 'About' },
      { href: '#', text: 'Services' },
      { href: '#', text: 'Contact' }
    ];
    
    const topMenuEl = document.getElementById('top-menu');
    topMenuEl.style.height = '100%';
    topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
    topMenuEl.classList.add('flex-around');

    const mainEl = document.querySelector('main');
    mainEl.style.backgroundColor = 'var(--main-bg)';
    mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
    mainEl.classList.add('flex-ctr');
  

    
    menuLinks.forEach(link => {
      const menuItem = document.createElement('a');
      menuItem.href = link.href;
      menuItem.textContent = link.text;
      topMenuEl.appendChild(menuItem);
    });
  
    
  
  });
  