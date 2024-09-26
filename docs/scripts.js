function toggleDetails(id) {
    const element = document.getElementById(id);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    } 
}
