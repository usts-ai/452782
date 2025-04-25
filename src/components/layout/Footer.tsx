import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer 
      className="bg-gradient-to-r from-blue-900 to-blue-800 text-white pt-16 pb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">FormaGenie</h3>
            <p className="text-blue-100 mb-4 max-w-xs">
              Transformez votre expertise en formations interactives grâce à notre plateforme alimentée par l'IA.
            </p>
            <div className="flex space-x-4">
              {[
                'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                'M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z',
                'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
                'M19.7 3.8h-15.4c-0.3 0-0.5 0.2-0.5 0.5v15.4c0 0.3 0.2 0.5 0.5 0.5h15.4c0.3 0 0.5-0.2 0.5-0.5v-15.4c0-0.3-0.2-0.5-0.5-0.5zM8.1 17.7h-2.8v-9.1h2.8v9.1zM6.7 7.3c-0.9 0-1.6-0.7-1.6-1.6s0.7-1.6 1.6-1.6 1.6 0.7 1.6 1.6-0.7 1.6-1.6 1.6zM17.7 17.7h-2.8v-4.4c0-1 0-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2v4.5h-2.8v-9.1h2.7v1.2h0c0.4-0.7 1.2-1.4 2.5-1.4 2.7 0 3.2 1.8 3.2 4.1v5.2z'
              ].map((path, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="bg-blue-700 hover:bg-blue-600 rounded-full p-2 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d={path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {[
            {
              title: 'Produit',
              links: ['Fonctionnalités', 'Tarifs', 'Témoignages', 'Pour qui ?', 'Intégrations']
            },
            {
              title: 'Ressources',
              links: ['Blog', 'Documentation', 'Guide utilisateur', 'Tutoriels vidéo', 'Webinaires']
            },
            {
              title: 'Entreprise',
              links: ['À propos', 'Équipe', 'Carrières', 'Presse', 'Nous contacter']
            }
          ].map((column, colIndex) => (
            <motion.div key={colIndex} variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a 
                      href="#" 
                      className="text-blue-100 hover:text-white transition-colors duration-300 inline-block"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          variants={itemVariants}
          className="border-t border-blue-700 pt-8 mt-8 text-center sm:text-left sm:flex sm:justify-between sm:items-center"
        >
          <p className="text-blue-200 text-sm mb-4 sm:mb-0">
            &copy; {currentYear} FormaGenie. Tous droits réservés.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm text-blue-200">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Conditions d'utilisation</a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
