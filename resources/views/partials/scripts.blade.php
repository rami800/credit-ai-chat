<script>
    let currentMode = 'login';

    function openAuthModal(mode) {
        currentMode = mode;
        const modal = document.getElementById('authModal');
        const title = document.getElementById('modalTitle');
        const submitText = document.getElementById('submitText');
        const switchMode = document.getElementById('switchMode');
        const googleButtonText = document.getElementById('googleButtonText');
        
        // Get form fields
        const nameField = document.getElementById('nameField');
        const usernameField = document.getElementById('usernameField');
        const confirmPasswordField = document.getElementById('confirmPasswordField');

        if (mode === 'login') {
            title.textContent = 'Sign In';
            submitText.textContent = 'Sign In';
            switchMode.textContent = "Don't have an account? Register";
            googleButtonText.textContent = 'Sign in with Google';
            
            // Hide register-only fields
            nameField.style.display = 'none';
            usernameField.style.display = 'none';
            confirmPasswordField.style.display = 'none';
            
            // Remove required attribute for hidden fields
            nameField.querySelector('input').removeAttribute('required');
            usernameField.querySelector('input').removeAttribute('required');
            confirmPasswordField.querySelector('input').removeAttribute('required');
        } else {
            title.textContent = 'Create Account';
            submitText.textContent = 'Create Account';
            switchMode.textContent = "Already have an account? Sign In";
            googleButtonText.textContent = 'Sign up with Google';
            
            // Show register-only fields
            nameField.style.display = 'block';
            usernameField.style.display = 'block';
            confirmPasswordField.style.display = 'block';
            
            // Add required attribute for visible fields
            nameField.querySelector('input').setAttribute('required', 'required');
            usernameField.querySelector('input').setAttribute('required', 'required');
            confirmPasswordField.querySelector('input').setAttribute('required', 'required');
        }

        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    function closeAuthModal() {
        const modal = document.getElementById('authModal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }

    function switchAuthMode() {
        const newMode = currentMode === 'login' ? 'register' : 'login';
        openAuthModal(newMode);
    }

    // Close modal when clicking outside
    document.getElementById('authModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeAuthModal();
        }
    });
</script>