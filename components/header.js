class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header class="header">
      <div class="header-grid-item 1">
        <a href="index.html"><img src="img/heart.svg" class="logo" alt="Aloha Fitness"></a>
      </div>
      <div class="header-grid-item 2">
        <a class="branding" href="index.html">Aloha Fitness</a>
      </div>
      <div class="header-grid-item 3">
        <div class="topnav">
          <!-- Use any element to open/show the overlay navigation menu -->
          <span class="topnav icon" onclick="openNav()"><i class="fa fa-bars"></i></span>
        </div>
        <!-- The overlay -->
        <div id="myNav" class="overlay">
          <!-- Button to close the overlay navigation -->
          <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
          <!-- Overlay content -->
          <div class="overlay-content">
            <a href="index.html">Home</a>
            <a href="nutrition.html">Nutrition</a>
            <a href="mindbody.html">Mind Body</a>
            <a href="contact.html">Contact</a>
            <hr class="menu">
            <span class="social menu">
              <a target="_blank" href="https://www.facebook.com/Aloha-Fitness-101473895737487/" rel="noopener"><i class="menu fab fa-facebook-f"></i></a>
              <a target="_blank" href="https://instagram.com/alohafitness2021" rel="noopener"><i class="menu fab fa-instagram"></i></a>
          </span>
          </div>
        </div>
      </div>
    </header>
    `;
  }
}

customElements.define('header-component', Header);

// Overlay script
// Menu Call to Action
/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100vh";}
/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0vh";}
