const nameInput = document.querySelector('#name');
const form = document.querySelector('#form')
const resetButton = document.querySelector('#reset-button');

const viewButton = document.querySelector('.view-more button');

resetButton.addEventListener('mouseup', resetForm);


viewButton.addEventListener('click', expandProjects);
let isExpanded = false;

function resetForm() {
  form.reset();
}



function expandProjects() {
  let projects = document.querySelectorAll('.secondary');
  projects = Array.from(projects);
  if(!isExpanded) {
    projects.forEach(project => {
      project.classList.remove('hidden');
    });
    viewButton.innerText = 'View Less';
    isExpanded = true;
  } else {
    projects.forEach(project => {
      project.classList.add('hidden');
    });
    viewButton.innerText = 'View More';
    isExpanded = false;
  }
}









