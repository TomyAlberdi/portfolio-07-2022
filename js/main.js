const proyectos = document.querySelectorAll('.option');

function removeActiveClasses() {
    proyectos.forEach(proyecto => {
        proyecto.classList.remove('active')
    })
}

proyectos.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveClasses();
        item.classList.add('active')
    })
})