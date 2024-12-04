const calendar = document.getElementById('calendar');
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const clicked = {}; // Track click status using an object

for (let i = 1; i <= 31; i++) {
    const div = document.createElement('div');
    div.textContent = i;
    div.addEventListener('click', () => {
        if (!clicked[i]) { // Check if already clicked
            clicked[i] = true; // Set as clicked
            div.classList.add('selected'); // Add 'selected' class
            const randomIndex = Math.floor(Math.random() * letters.length);
            div.textContent = letters[randomIndex];
        }
    });
    calendar.appendChild(div);
}