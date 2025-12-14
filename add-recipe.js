// Check if user is logged in; redirect to login if not
if (localStorage.getItem('loggedIn') !== 'true') {
  window.location.href = 'login.html';
}

// Handle add recipe form submission
const addRecipeForm = document.getElementById('addRecipeForm');
if (addRecipeForm) {
  addRecipeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(addRecipeForm);
    const obj = Object.fromEntries(data.entries());
    console.log('Recipe added', obj);
    // For demo, just alert and redirect back to homepage
    alert('Recipe added successfully!');
    window.location.href = 'homepage.html';
  });
}

// Handle adding ingredients
const addIngredientBtn = document.getElementById('add-ingredient');
if (addIngredientBtn) {
  addIngredientBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const ingredientsSection = document.querySelector('.ingredients-section');
    const ingredientRow = ingredientsSection.querySelector('.ingredient-row').cloneNode(true);
    // Clear inputs
    ingredientRow.querySelectorAll('input, select').forEach(el => el.value = '');
    // Set draggable
    ingredientRow.querySelector('.drag-handle').draggable = true;
    ingredientsSection.insertBefore(ingredientRow, addIngredientBtn);
  });
}

// Handle adding instructions
const addStepBtn = document.getElementById('add-step');
if (addStepBtn) {
  addStepBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const instructionsSection = document.querySelector('.instructions-section');
    const instructionStep = instructionsSection.querySelector('.instruction-step').cloneNode(true);
    // Update step label
    const stepLabels = instructionsSection.querySelectorAll('.step-label');
    const nextStep = stepLabels.length + 1;
    instructionStep.querySelector('.step-label').textContent = `Step ${nextStep}`;
    // Clear textarea
    instructionStep.querySelector('textarea').value = '';
    // Set draggable
    instructionStep.querySelector('.drag-handle').draggable = true;
    instructionsSection.insertBefore(instructionStep, addStepBtn);
  });
}

// Handle delete buttons
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    e.target.closest('.ingredient-row, .instruction-step').remove();
    // Update step numbers after deletion
    const steps = document.querySelectorAll('.instruction-step .step-label');
    steps.forEach((label, index) => {
      label.textContent = `Step ${index + 1}`;
    });
  }
});

// Basic drag and drop for ingredients and instructions (simplified)
function makeDraggable(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  let draggedElement = null;

  container.addEventListener('dragstart', (e) => {
    draggedElement = e.target.closest('.ingredient-row, .instruction-step');
    e.dataTransfer.effectAllowed = 'move';
  });

  container.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  });

  container.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedElement && e.target.closest('.ingredient-row, .instruction-step')) {
      const target = e.target.closest('.ingredient-row, .instruction-step');
      if (draggedElement !== target) {
        const rect = target.getBoundingClientRect();
        const midpoint = rect.top + rect.height / 2;
        if (e.clientY < midpoint) {
          target.parentNode.insertBefore(draggedElement, target);
        } else {
          target.parentNode.insertBefore(draggedElement, target.nextSibling);
        }
      }
    }
  });

  container.addEventListener('dragend', () => {
    draggedElement = null;
  });
}

makeDraggable('.ingredients-section');
makeDraggable('.instructions-section');

// Make drag handles draggable
document.querySelectorAll('.drag-handle').forEach(handle => {
  handle.draggable = true;
});