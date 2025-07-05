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