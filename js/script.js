document.querySelector('.toggle-btn').addEventListener('click', () => {
    document.querySelector('.menu-mobile').classList.toggle('active');
})

const collapsed = document.querySelectorAll('.collapsed');
for (let i = 0; i < collapsed.length; i++) {
    collapsed[i].addEventListener('click', function () {
        const doenca = this.nextElementSibling;
        if (doenca.style.maxHeight) {
            doenca.style.maxHeight = null;
        } else {
            doenca.style.maxHeight = doenca.scrollHeight + "px";
        }
    })
}