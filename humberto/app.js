<script>
    document.addEventListener('DOMContentLoaded', function () {
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Modo Escuro';
        document.body.appendChild(toggleButton);

        let darkMode = false;

        toggleButton.addEventListener('click', () => {
            darkMode = !darkMode;
            updateTheme();
        });

        const form = document.querySelector('form');

        form.addEventListener('submit', (event) => {
            const nameInput = document.getElementById('name');
            const descriptionInput = document.getElementById('description');

            if (!nameInput.value.trim() || !descriptionInput.value.trim()) {
                alert('Por favor, preencha o nome e a descrição antes de enviar.');
                event.preventDefault();
            }
        });

        function updateTheme() {
            document.body.style.backgroundColor = darkMode ? '#333' : '#f4f4f4';
            document.body.style.color = darkMode ? '#fff' : '#333';
        }
    });
</script>