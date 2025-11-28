 const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('currentDate').textContent = 
            new Date().toLocaleDateString('en-US', dateOptions);

        // Open letter function
        function openLetter() {
            const envelopeClosed = document.getElementById('envelopeClosed');
            const letterContainer = document.getElementById('letterContainer');
            
            envelopeClosed.classList.add('hidden');
            letterContainer.classList.remove('hidden');
            
            setTimeout(() => {
                letterContainer.classList.add('show');
            }, 50);
        }