'use client';

import { useState, useEffect } from 'react';
import { getDiscordAuthUrl, getDiscordUser, getDiscordGuilds, DiscordUser, DiscordGuild } from '@/lib/discord-auth';

export default function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<DiscordUser | null>(null);
  const [guilds, setGuilds] = useState<DiscordGuild[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showUserInfo, setShowUserInfo] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('discord_token');
    const userData = localStorage.getItem('discord_user');
    const guildsData = localStorage.getItem('discord_guilds');
    
    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
      if (guildsData) {
        setGuilds(JSON.parse(guildsData));
      }
    }
  }, []);

  const handleLogin = () => {
    const authUrl = getDiscordAuthUrl();
    window.location.href = authUrl;
  };

  const handleLogout = () => {
    localStorage.removeItem('discord_token');
    localStorage.removeItem('discord_user');
    localStorage.removeItem('discord_guilds');
    setIsLoggedIn(false);
    setUser(null);
    setGuilds([]);
    setShowUserInfo(false);
  };

  const toggleUserInfo = () => {
    setShowUserInfo(!showUserInfo);
  };

  if (isLoading) {
    return (
      <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full font-semibold whitespace-nowrap cursor-pointer opacity-75">
        <i className="ri-loader-4-line animate-spin mr-2"></i>
        Loading...
      </button>
    );
  }

  if (isLoggedIn && user) {
    return (
      <div className="relative">
        <button
          onClick={toggleUserInfo}
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full font-semibold whitespace-nowrap cursor-pointer hover:from-purple-600 hover:to-blue-600 transition-all duration-200 flex items-center"
        >
          {user.avatar ? (
            <img 
              src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=32`}
              alt="Avatar"
              className="w-6 h-6 rounded-full mr-2"
            />
          ) : (
            <i className="ri-user-fill mr-2"></i>
          )}
          {user.username}
          <i className="ri-arrow-down-s-line ml-1"></i>
        </button>

        {showUserInfo && (
          <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                {user.avatar ? (
                  <img 
                    src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=64`}
                    alt="Avatar"
                    className="w-12 h-12 rounded-full"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <i className="ri-user-fill text-gray-600 text-xl"></i>
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-gray-900">{user.username}</h3>
                  <p className="text-sm text-gray-500">ID: {user.id}</p>
                </div>
              </div>
            </div>

            <div className="p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Your Servers ({guilds.length})</h4>
              <div className="max-h-40 overflow-y-auto space-y-2">
                {guilds.length > 0 ? (
                  guilds.map((guild) => (
                    <div key={guild.id} className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                      {guild.icon ? (
                        <img 
                          src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=32`}
                          alt={guild.name}
                          className="w-8 h-8 rounded-full"
                        />
                      ) : (
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                          <i className="ri-discord-fill text-gray-600"></i>
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{guild.name}</p>
                        <p className="text-xs text-gray-500">ID: {guild.id}</p>
                      </div>
                      {guild.owner && (
                        <i className="ri-vip-crown-fill text-yellow-500" title="Owner"></i>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500 text-center py-4">No servers found</p>
                )}
              </div>
            </div>

            <div className="p-4 border-t border-gray-200">
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-logout-box-line mr-2"></i>
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={handleLogin}
      className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full font-semibold whitespace-nowrap cursor-pointer hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
    >
      <i className="ri-discord-fill mr-2"></i>
      Login with Discord
    </button>
  );
}