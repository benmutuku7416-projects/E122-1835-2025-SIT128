document.addEventListener('DOMContentLoaded', function() {
  const loginModal = document.getElementById('loginModal');
  const registerModal = document.getElementById('registerModal');
  const loginButtons = document.querySelectorAll('.login-button');
  const registerButtons = document.querySelectorAll('.register-button');
  const closeButtons = document.querySelectorAll('.close');

  if (loginButtons.length > 0 && loginModal) {
    loginButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scroll
      });
    });
  }
  
  if (registerButtons.length > 0 && registerModal) {
    registerButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        registerModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scroll
      });
    });
  }
  
  if (closeButtons.length > 0) {
    closeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (loginModal) loginModal.style.display = 'none';
        if (registerModal) registerModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scroll
      });
    });
  }
  
  window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
      loginModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
    if (e.target === registerModal) {
      registerModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (loginModal) loginModal.style.display = 'none';
      if (registerModal) registerModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  const track = document.querySelector('.highlight-track');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  
  if (track && prevBtn && nextBtn) {
    const scrollAmount = 340; // width of card + gap
    
    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
    
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    
    track.addEventListener('scroll', () => {
      const isAtStart = track.scrollLeft <= 10;
      const isAtEnd = track.scrollLeft >= (track.scrollWidth - track.clientWidth - 10);
      
      prevBtn.style.opacity = isAtStart ? '0.3' : '1';
      prevBtn.style.pointerEvents = isAtStart ? 'none' : 'auto';
      nextBtn.style.opacity = isAtEnd ? '0.3' : '1';
      nextBtn.style.pointerEvents = isAtEnd ? 'none' : 'auto';
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name')?.value.trim() || '';
      const email = document.getElementById('email')?.value.trim() || '';
	  const subject = document.getElementById('subject')?.value.trim()|| '';
      const message = document.getElementById('message')?.value.trim() || '';
      
      if (!name || !email || !subject ||!message) {
        alert('Please fill in all fields before sending.');
		return;
      } 
	  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	  if (!emailRegex. test(email)) {
		  alert('please enter a valid email address.');
		  return;
	  }
	  alert('Thank you, ${name}! \n\nYour message  has  been sent. \nWe will reply to you email within 24 hours.');
	  contactForm.reset();
    });
  }
  
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const email = loginForm.querySelector('input[type="email"]').value;
      const password = loginForm.querySelector('input[type="password"]').value;
      
      if (email && password) {
        alert(`Login successful! Welcome back, ${email}`);
        loginModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        loginForm.reset();
      } else {
        alert('Please enter both email and password.');
      }
    });
  }

  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = registerForm.querySelector('input[type="text"]').value;
      const email = registerForm.querySelector('input[type="email"]').value;
      const password = registerForm.querySelector('input[type="password"]').value;
      
      if (name && email && password) {
        alert(`Account created successfully! Welcome to TOURCOUR, ${name}!`);
        registerModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        registerForm.reset();
      } else {
        alert('Please fill in all fields.');
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });


  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });

});

console.log('TOURCOUR JS loaded successfully ✓');
