import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
    if (isNotificationsOpen) setIsNotificationsOpen(false);
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    if (isProfileMenuOpen) setIsProfileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm px-4 py-3 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold text-blue-600">FormaGenie</span>
          
          {/* Navigation principale */}
          <nav className="hidden md:flex ml-10 space-x-6">
            {[
              { name: 'Dashboard', current: true },
              { name: 'Formations', current: false },
              { name: 'Statistiques', current: false },
              { name: 'Utilisateurs', current: false },
              { name: 'Paramètres', current: false }
            ].map((item) => (
              <a
                key={item.name}
                href={`/${item.name.toLowerCase()}`}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  item.current ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {/* Barre de recherche */}
          <div className="hidden md:flex relative">
            <input
              type="text"
              placeholder="Rechercher..."
              className="pl-10 pr-4 py-1.5 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Icône notifications */}
          <div className="relative">
            <button
              onClick={toggleNotifications}
              className="relative text-gray-600 hover:text-blue-600 transition-colors p-1 rounded-full hover:bg-gray-100"
              aria-label="Notifications"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            
            {/* Menu des notifications */}
            {isNotificationsOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200"
              >
                <div className="px-4 py-2 border-b border-gray-100">
                  <h3 className="text-sm font-semibold">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {[1, 2, 3].map((item) => (
                    <a
                      key={item}
                      href="/notifications"
                      onClick={(e) => e.preventDefault()}
                      className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100"
                    >
                      <div className="flex">
                        <div className="rounded-full bg-blue-100 text-blue-600 p-2">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">Nouveau participant</p>
                          <p className="text-xs text-gray-500 mt-1">Un nouvel utilisateur a rejoint votre formation</p>
                          <p className="text-xs text-gray-400 mt-1">Il y a 3 heures</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
                <a
                  href="/notifications"
                  onClick={(e) => e.preventDefault()}
                  className="block text-center text-sm text-blue-600 font-medium py-2 hover:underline"
                >
                  Voir toutes les notifications
                </a>
              </motion.div>
            )}
          </div>

          {/* Profil utilisateur */}
          <div className="relative">
            <button
              onClick={toggleProfileMenu}
              className="flex items-center transition-opacity focus:outline-none"
              aria-label="Menu utilisateur"
            >
              <img
                className="h-8 w-8 rounded-full object-cover border border-gray-300"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Photo de profil"
              />
              <span className="hidden md:block ml-2 text-sm font-medium text-gray-700">
                Thomas Durand
              </span>
              <svg
                className="hidden md:block ml-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Menu profil */}
            {isProfileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200"
              >
                <div className="border-b border-gray-100 pb-3 pt-2">
                  <div className="px-4 text-sm font-semibold text-gray-900">Thomas Durand</div>
                  <div className="px-4 text-sm text-gray-500">thomas.durand@exemple.com</div>
                </div>
                <a
                  href="/profile"
                  onClick={(e) => e.preventDefault()}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Mon profil
                </a>
                <a
                  href="/settings"
                  onClick={(e) => e.preventDefault()}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Paramètres
                </a>
                <div className="border-t border-gray-100 mt-1">
                  <a
                    href="/logout"
                    onClick={(e) => e.preventDefault()}
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Déconnexion
                  </a>
                </div>
              </motion.div>
            )}
          </div>

          {/* Bouton menu mobile */}
          <div className="md:hidden">
            <button
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Menu principal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
