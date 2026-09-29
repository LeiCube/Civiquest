const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links a");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
    });
    // Close menu when clicking a link
    links.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });

    links.forEach(link => {
      link.addEventListener("click", function(e) {
        const href = this.getAttribute("href");

        if (href.startsWith("#")) {
          e.preventDefault(); // only block internal scroll links
          const targetId = href.substring(1);
          const targetSection = document.getElementById(targetId);

          window.scrollTo({
            top: targetSection.offsetTop - 60, // adjust for sticky navbar height
            behavior: "smooth"
          });

          // close mobile nav after clicking
          document.querySelector(".nav-links").classList.remove("active");
          document.querySelector(".hamburger").classList.remove("active");
        }
        // if it's an external link (https://...), default behavior will happen
      });
    }); 