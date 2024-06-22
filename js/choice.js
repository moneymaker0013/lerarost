function toggleSelection(element) {
    const group = element.getAttribute('data-group');
    const parent = element.parentElement;
    const isSelected = element.classList.toggle('selected');
    let checkmark = element.querySelector('.checkmark');
    
    if (!checkmark) {
        checkmark = document.createElement('div');
        checkmark.classList.add('checkmark');
        checkmark.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="12" fill="#E4002B"/>
                <path d="M8 13L11 16L16 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;
        element.appendChild(checkmark);
    }
    
    if (isSelected) {
        // Deselect all other elements in the same group
        const siblings = parent.querySelectorAll(`[data-group="${group}"]`);
        siblings.forEach(sibling => {
            if (sibling !== element) {
                sibling.classList.remove('selected');
                sibling.querySelector('.checkmark').style.display = 'none';
            }
        });
        checkmark.style.display = 'block';
    } else {
        checkmark.style.display = 'none';
    }
}
