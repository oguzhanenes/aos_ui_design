const commandInput = document.getElementById('command');
const output = document.getElementById('output');

commandInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const command = commandInput.value;
        output.textContent += `\n> ${command}`;
        commandInput.value = '';
    }
});
