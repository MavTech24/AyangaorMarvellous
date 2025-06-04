 // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
      });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });

    // Add shadow to header on scroll
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
      } else {
        header.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
      }
    });

    // Animate skill bars when scrolled into view
    const animateSkillBars = () => {
      const skillBars = document.querySelectorAll('.skill-level');
      
      skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight);
        
        if (isVisible && !bar.style.transition) {
          bar.style.transition = 'width 1s ease-in-out';
          // Force reflow to trigger animation
          void bar.offsetWidth;
          bar.style.width = bar.parentElement.previousElementSibling.lastElementChild.textContent;
        }
      });
    };

    // Run once on load and on scroll
    window.addEventListener('load', animateSkillBars);
    window.addEventListener('scroll', animateSkillBars);
  