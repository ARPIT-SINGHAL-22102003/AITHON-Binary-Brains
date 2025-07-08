import './style.css'
import { createNavbar } from './components/Navbar';

document.addEventListener('DOMContentLoaded', () => {
  const navbar = createNavbar();
  document.body.prepend(navbar);
});

setupCounter(document.querySelector('#counter'))
