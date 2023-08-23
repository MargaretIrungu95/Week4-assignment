document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');

    startButton.addEventListener('click', () => {
        const petSelector = document.getElementById('pet-selector');
        const petNameInput = document.getElementById('pet-name');

        const selectedPet = petSelector.value;
        const petName = petNameInput.value;

        if(petName.trim() === '') {
            alert('Please enter a name for your pet.');
        }else {
            window.location.href = `index.html?pet=${selectedPet}&name=${petName}`
        }

    });
});