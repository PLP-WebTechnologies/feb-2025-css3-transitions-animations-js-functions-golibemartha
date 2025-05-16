function toggleTheme() {
  const body = document.body;
  const isDark = body.classList.toggle('darkTheme');
  localStorage.setItem('preferredTheme', isDark ? 'dark' : 'light');

  const btn = document.getElementById('toggleTheme');
  btn.classList.add('clicked');
  setTimeout(() => btn.classList.remove('clicked'), 300);
}

function filterRecipes() {
  const query = this.value.toLowerCase();
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      card.style.display = title.includes(query) ? 'block' : 'none';
  });
}

function initializePage() {
  const savedTheme = localStorage.getItem('preferredTheme');
  if (savedTheme === 'dark') {
      document.body.classList.add('darkTheme');
  }

  const lastViewedRecipe = localStorage.getItem('lastViewedRecipe');
  if (lastViewedRecipe) {
      const recipeElement = document.querySelector(`[dataRecipe="${lastViewedRecipe}"]`);
      if (recipeElement) {
          recipeElement.scrollIntoView();
      }
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  alert('Thank you for your feedback!');
}

function main() {
  const toggleThemeBtn = document.getElementById('toggleTheme');
  const searchInput = document.getElementById('search');
  const contactForm = document.getElementById('contactForm');

  toggleThemeBtn.addEventListener('click', toggleTheme);
  if (searchInput) searchInput.addEventListener('input', filterRecipes);
  if (contactForm) contactForm.addEventListener('submit', handleFormSubmit);

  initializePage();
}

window.onload = main;