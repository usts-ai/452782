import React, { useState } from 'react';
import { motion } from 'framer-motion';
import StatCard from './StatCard';
import AnalyticsChart from './AnalyticsChart';
import CourseCard from './CourseCard';
import { IMAGES } from '../../assets/images/mockImages';

const DashboardOverview: React.FC = () => {
  const [activeTab, setActiveTab] = useState('activité');

  const tabs = [
    { id: 'activité', label: 'Activité' },
    { id: 'courses', label: 'Mes formations' },
    { id: 'statistics', label: 'Statistiques' },
    { id: 'settings', label: 'Paramètres' }
  ];

  const stats = [
    { 
      title: 'Formations créées', 
      value: '24', 
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ), 
      color: 'bg-blue-500',
      increase: '+12% ce mois'
    },
    { 
      title: 'Apprenants actifs', 
      value: '1,256', 
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ), 
      color: 'bg-green-500',
      increase: '+18% ce mois' 
    },
    { 
      title: 'Taux de complétion', 
      value: '84%', 
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ), 
      color: 'bg-purple-500',
      increase: '+5% ce mois' 
    },
    { 
      title: 'Satisfaction', 
      value: '4.8/5', 
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ), 
      color: 'bg-yellow-500' 
    }
  ];

  const coursesList = [
    {
      title: "Marketing Digital Avancé",
      category: "Marketing",
      progress: 78,
      image: IMAGES.courses[0],
      author: "Sophie Martin"
    },
    {
      title: "Introduction à la Data Science",
      category: "Technologie",
      progress: 45,
      image: IMAGES.courses[1],
      author: "Thomas Durand"
    },
    {
      title: "Leadership et Management d'Équipe",
      category: "Management",
      progress: 92,
      image: IMAGES.courses[2],
      author: "Lucie Bernard"
    },
    {
      title: "UX/UI Design Fondamentaux",
      category: "Design",
      progress: 23,
      image: IMAGES.courses[3],
      author: "Marc Petit"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const recentActivityData = [
    {
      action: "Nouvelle inscription",
      description: "Marie Dupont s'est inscrite à votre formation 'Marketing Digital Avancé'",
      time: "Il y a 14 minutes",
      icon: (
        <div className="bg-blue-100 p-2 rounded-full">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
        </div>
      )
    },
    {
      action: "Module complété",
      description: "Pierre Martin a terminé le module 'Techniques avancées de référencement'",
      time: "Il y a 32 minutes",
      icon: (
        <div className="bg-green-100 p-2 rounded-full">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )
    },
    {
      action: "Nouvelle évaluation",
      description: "Julie Moreau a donné 5 étoiles à votre formation 'Leadership et Management'",
      time: "Il y a 1 heure",
      icon: (
        <div className="bg-yellow-100 p-2 rounded-full">
          <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </div>
      )
    },
    {
      action: "Question posée",
      description: "Thomas Leroy a posé une question dans le forum de 'Introduction à la Data Science'",
      time: "Il y a 3 heures",
      icon: (
        <div className="bg-purple-100 p-2 rounded-full">
          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 lg:pt-0 pt-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <motion.h1 
              className="text-2xl sm:text-3xl font-bold text-gray-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Tableau de bord
            </motion.h1>
            <motion.p 
              className="text-gray-600 mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Bienvenue, Laurent. Voici vos statistiques d'aujourd'hui.
            </motion.p>
          </div>
          <motion.div 
            className="mt-4 md:mt-0 flex space-x-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button className="bg-white text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-lg shadow-sm transition-colors duration-300 flex items-center text-sm font-medium">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Exporter
            </button>
            <button className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg shadow-sm transition-colors duration-300 flex items-center text-sm font-medium">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Créer une formation
            </button>
          </motion.div>
        </div>

        {/* Tabs */}
        <motion.div 
          className="mb-6 bg-white rounded-xl p-1 shadow-sm flex overflow-x-auto no-scrollbar"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 whitespace-nowrap flex-shrink-0 ${
                activeTab === tab.id 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              color={stat.color}
              increase={stat.increase}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>

        {/* Main content - 2 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <AnalyticsChart />
            
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Mes formations en cours</h3>
                <button className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-300">
                  Voir tout
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {coursesList.slice(0, 2).map((course, index) => (
                  <CourseCard
                    key={course.title}
                    title={course.title}
                    category={course.category}
                    progress={course.progress}
                    image={course.image}
                    author={course.author}
                    delay={0.4 + index * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Create new course card */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-md p-6 text-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Créer une nouvelle formation</h3>
                  <p className="text-blue-100 mt-1 text-sm">
                    Utilisez notre IA pour générer du contenu et structurer votre cours en quelques clics.
                  </p>
                </div>
                <div className="bg-blue-500 bg-opacity-30 p-3 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>
              <div className="mt-6">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-blue-700 py-2 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300"
                >
                  Commencer maintenant
                </motion.button>
              </div>
            </div>

            {/* Recent activity */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800">Activité récente</h3>
                <button className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-300">
                  Tout voir
                </button>
              </div>
              <div className="space-y-4">
                {recentActivityData.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex-shrink-0 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{item.action}</p>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl shadow-md p-6 text-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold">Astuce du jour</h3>
                  <p className="mt-2 text-white text-opacity-90">
                    Utilisez des quiz interactifs pour augmenter l'engagement des apprenants. Nos données montrent une amélioration de 40% du taux de complétion.
                  </p>
                </div>
                <div className="bg-yellow-500 bg-opacity-30 p-2 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardOverview;
