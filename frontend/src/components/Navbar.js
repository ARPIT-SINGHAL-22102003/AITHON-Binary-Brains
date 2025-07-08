import '/workspaces/AITHON-Binary-Brains/frontend/src/style.css'

export function createNavbar() {
  const navbar = document.createElement('nav');
  navbar.innerHTML = `
    <style>
      nav {
        background-color: #333;
        color: white;
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .logo {
        font-weight: bold;
        font-size: 1.2rem;
      }
      .nav-links a {
        color: white;
        text-decoration: none;
        margin-left: 15px;
      }
    </style>
    <div class="logo">
        <img src="./src/assets/LOGO-removebg-preview.png" alt="Logo">
    </div>
    <div class="nav-links">
      <a href="#">About us</a>
      <button>
        
      </button>
      <a href="#">Contact</a>
    </div>
  `;
  return navbar;
}
