export default function toggleCheckbox() {
    const checkbox = document.querySelectorAll('#discount-checkbox');

    checkbox.forEach( (elem) => {
        elem.addEventListener('change', function() {
            if (this.checked) {
                this.nextElementSibling.classList.add('checked');
            } else {
                this.nextElementSibling.classList.remove('checked');
            }
        });
    });
};