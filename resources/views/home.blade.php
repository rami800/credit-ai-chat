<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Assistant - Pay Only for What You Use</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        purple: {
                            400: '#c084fc',
                            500: '#a855f7',
                            600: '#9333ea',
                            700: '#7c3aed',
                            900: '#581c87'
                        },
                        pink: {
                            400: '#f472b6',
                            600: '#db2777',
                            700: '#be185d'
                        }
                    }
                }
            }
        }
    </script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
</head>
<body class="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <!-- Navigation -->
    <nav class="container mx-auto px-4 py-6 flex justify-between items-center">
        <div class="flex items-center space-x-2">
            <i class="fas fa-brain h-8 w-8 text-purple-400 text-2xl"></i>
            <span class="text-2xl font-bold text-white">AI Assistant</span>
        </div>
        <div class="flex space-x-4">
            <button class="text-white hover:text-purple-300 px-4 py-2 rounded-md transition-colors" onclick="openAuthModal('login')">
                Sign In
            </button>
            <button class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors" onclick="openAuthModal('register')">
                Get Started
            </button>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="container mx-auto px-4 py-20 text-center">
        <div class="mb-6 inline-block bg-purple-600/20 text-purple-300 border border-purple-600/30 px-4 py-2 rounded-full text-sm">
            Pay-per-use • No Subscriptions
        </div>
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Assistant
            <span class="block text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                Pay Only for What You Use
            </span>
        </h1>
        <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Access powerful AI models like GPT-4o and DALL·E 3 with a flexible credit system. 
            No monthly subscriptions, no hidden fees - just pure AI power when you need it.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-lg transition-all transform hover:scale-105" onclick="openAuthModal('register')">
                <i class="fas fa-bolt mr-2"></i>
                Start Chatting Now
            </button>
            <button class="border border-purple-400 text-purple-300 hover:bg-purple-600/10 px-8 py-6 text-lg rounded-lg transition-all">
                <i class="fas fa-chart-bar mr-2"></i>
                See Pricing
            </button>
        </div>
    </section>

    <!-- Features Grid -->
    <section class="container mx-auto px-4 py-20">
        <h2 class="text-4xl font-bold text-white text-center mb-16">
            Why Choose Our AI Assistant?
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white/5 border border-purple-500/20 backdrop-blur-sm rounded-lg p-6">
                <i class="fas fa-credit-card text-4xl text-purple-400 mb-4"></i>
                <h3 class="text-white text-xl font-semibold mb-2">Pay Per Use</h3>
                <p class="text-gray-300">
                    Only pay for the AI interactions you actually use. No monthly subscriptions or hidden fees.
                </p>
            </div>

            <div class="bg-white/5 border border-purple-500/20 backdrop-blur-sm rounded-lg p-6">
                <i class="fas fa-comment-dots text-4xl text-purple-400 mb-4"></i>
                <h3 class="text-white text-xl font-semibold mb-2">Advanced Chat</h3>
                <p class="text-gray-300">
                    Access GPT-4o, GPT-3.5, and other cutting-edge language models for intelligent conversations.
                </p>
            </div>

            <div class="bg-white/5 border border-purple-500/20 backdrop-blur-sm rounded-lg p-6">
                <i class="fas fa-image text-4xl text-purple-400 mb-4"></i>
                <h3 class="text-white text-xl font-semibold mb-2">Image Generation</h3>
                <p class="text-gray-300">
                    Create stunning visuals with DALL·E 3 and other AI image generation models.
                </p>
            </div>

            <div class="bg-white/5 border border-purple-500/20 backdrop-blur-sm rounded-lg p-6">
                <i class="fas fa-shield-alt text-4xl text-purple-400 mb-4"></i>
                <h3 class="text-white text-xl font-semibold mb-2">Secure & Private</h3>
                <p class="text-gray-300">
                    Your conversations and data are protected with enterprise-grade security.
                </p>
            </div>

            <div class="bg-white/5 border border-purple-500/20 backdrop-blur-sm rounded-lg p-6">
                <i class="fas fa-bolt text-4xl text-purple-400 mb-4"></i>
                <h3 class="text-white text-xl font-semibold mb-2">Lightning Fast</h3>
                <p class="text-gray-300">
                    Optimized for speed with real-time responses and a smooth, responsive interface.
                </p>
            </div>

            <div class="bg-white/5 border border-purple-500/20 backdrop-blur-sm rounded-lg p-6">
                <i class="fas fa-users text-4xl text-purple-400 mb-4"></i>
                <h3 class="text-white text-xl font-semibold mb-2">Multi-Model Access</h3>
                <p class="text-gray-300">
                    Switch between different AI models based on your needs and budget preferences.
                </p>
            </div>
        </div>
    </section>

    <!-- Pricing Preview -->
    <section class="container mx-auto px-4 py-20">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-white mb-4">Transparent Pricing</h2>
            <p class="text-xl text-gray-300">No surprises. Pay only for what you consume.</p>
        </div>
        <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div class="bg-white/5 border border-purple-500/20 backdrop-blur-sm rounded-lg p-6">
                <div class="text-center mb-6">
                    <h3 class="text-white text-xl font-semibold mb-2">GPT-3.5</h3>
                    <div class="text-2xl font-bold text-purple-400">$0.002</div>
                    <p class="text-gray-300">per 1K tokens</p>
                </div>
                <ul class="text-gray-300 space-y-2">
                    <li>• Fast responses</li>
                    <li>• Great for general tasks</li>
                    <li>• Most economical option</li>
                </ul>
            </div>

            <div class="bg-white/5 border border-purple-500/20 backdrop-blur-sm rounded-lg p-6 ring-2 ring-purple-400">
                <div class="text-center mb-6">
                    <div class="mb-2 inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm">Most Popular</div>
                    <h3 class="text-white text-xl font-semibold mb-2">GPT-4o</h3>
                    <div class="text-2xl font-bold text-purple-400">$0.03</div>
                    <p class="text-gray-300">per 1K tokens</p>
                </div>
                <ul class="text-gray-300 space-y-2">
                    <li>• Advanced reasoning</li>
                    <li>• Complex problem solving</li>
                    <li>• Best overall performance</li>
                </ul>
            </div>

            <div class="bg-white/5 border border-purple-500/20 backdrop-blur-sm rounded-lg p-6">
                <div class="text-center mb-6">
                    <h3 class="text-white text-xl font-semibold mb-2">DALL·E 3</h3>
                    <div class="text-2xl font-bold text-purple-400">$0.08</div>
                    <p class="text-gray-300">per image</p>
                </div>
                <ul class="text-gray-300 space-y-2">
                    <li>• High-quality images</li>
                    <li>• Creative generation</li>
                    <li>• Multiple styles</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="container mx-auto px-4 py-20 text-center">
        <div class="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl p-12 backdrop-blur-sm border border-purple-500/20">
            <h2 class="text-4xl font-bold text-white mb-4">Ready to Start?</h2>
            <p class="text-xl text-gray-300 mb-8">Join thousands of users who have already discovered the freedom of pay-per-use AI.</p>
            <button class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 text-lg rounded-lg transition-all transform hover:scale-105" onclick="openAuthModal('register')">
                <i class="fas fa-brain mr-2"></i>
                Get Started for Free
            </button>
        </div>
    </section>

    <!-- Footer -->
    <footer class="container mx-auto px-4 py-12 border-t border-purple-500/20">
        <div class="text-center text-gray-400">
            <p>&copy; 2024 AI Assistant. Built for users who value flexibility and transparency.</p>
        </div>
    </footer>

    <!-- Auth Modal -->
    <div id="authModal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50">
        <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <div class="flex justify-between items-center mb-6">
                <h2 id="modalTitle" class="text-2xl font-bold text-gray-900">Sign In</h2>
                <button onclick="closeAuthModal()" class="text-gray-400 hover:text-gray-600">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            <form id="authForm">
                <div class="space-y-4">
                    <!-- Name field (register only) -->
                    <div id="nameField" style="display: none;">
                        <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input type="text" name="name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" required>
                    </div>
                    
                    <!-- Username field (register only) -->
                    <div id="usernameField" style="display: none;">
                        <label class="block text-sm font-medium text-gray-700 mb-1">Username</label>
                        <input type="text" name="username" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" required>
                    </div>
                    
                    <!-- Email field -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" name="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" required>
                    </div>
                    
                    <!-- Password field -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input type="password" name="password" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" required>
                    </div>
                    
                    <!-- Confirm Password field (register only) -->
                    <div id="confirmPasswordField" style="display: none;">
                        <label class="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                        <input type="password" name="password_confirmation" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" required>
                    </div>
                    
                    <!-- Google Sign In/Up Button -->
                    <button type="button" class="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded-md transition-colors flex items-center justify-center mb-4">
                        <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        <span id="googleButtonText">Continue with Google</span>
                    </button>
                    
                    <div class="relative">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-300"></div>
                        </div>
                        <div class="relative flex justify-center text-sm">
                            <span class="px-2 bg-white text-gray-500">or</span>
                        </div>
                    </div>
                    
                    <button type="submit" class="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition-colors">
                        <span id="submitText">Sign In</span>
                    </button>
                </div>
            </form>
            <div class="mt-4 text-center">
                <button id="switchMode" onclick="switchAuthMode()" class="text-purple-600 hover:text-purple-700 text-sm">
                    Don't have an account? Register
                </button>
            </div>
        </div>
    </div>

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
</body>
</html>