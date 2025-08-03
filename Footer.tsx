'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
                <i className="ri-robot-2-fill text-white"></i>
              </div>
              <span className="font-[\'Pacifico\'] text-xl">Chill Pill Bot</span>
            </div>
            <p className="text-gray-300">The ultimate Discord bot for moderation, music, and fun on your server.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/commands" className="block text-gray-300 hover:text-purple-400 transition-colors cursor-pointer">Commands</a>
              <a href="/about" className="block text-gray-300 hover:text-purple-400 transition-colors cursor-pointer">About</a>
              <a href="/support" className="block text-gray-300 hover:text-purple-400 transition-colors cursor-pointer">Support</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="space-y-2">
              <a href="https://discord.gg/chillpillontop" className="block text-gray-300 hover:text-purple-400 transition-colors cursor-pointer">Discord Server</a>
              <a href="#" className="block text-gray-300 hover:text-purple-400 transition-colors cursor-pointer">GitHub</a>
              <a href="/support" className="block text-gray-300 hover:text-purple-400 transition-colors cursor-pointer">Support</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 Chill Pill Bot. Created by Ansh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
