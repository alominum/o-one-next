export const languages = ['en', 'fr', 'es'] as const;
export type Language = (typeof languages)[number];
export const defaultLanguage = 'en' as const;

export const languageNames: Record<Language, string> = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
} as const;

export const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      signIn: 'Sign in',
      accountSettings: 'Account settings',
      toggleTheme: 'Toggle theme',
      changeLanguage: 'Change language',
      login: 'Login',
      register: 'Register',
      email: 'Email',
      password: 'Password',
      name: 'Name',
      confirmPassword: 'Confirm Password',
      cancel: 'Cancel',
    },
    hero: {
      title: 'Transform Your Business with Technology Solutions',
      subtitle: 'We help businesses leverage cutting-edge technology to drive growth and innovation',
      ctaButton: 'Get Started',
    },
    features: {
      title: 'Why Choose Us',
      subtitle: 'We deliver exceptional value through our comprehensive suite of services',
      innovation: {
        title: 'Innovation First',
        description: 'Stay ahead with cutting-edge solutions',
      },
      quality: {
        title: 'Quality Assured',
        description: 'Rigorous testing and best practices',
      },
      support: {
        title: '24/7 Support',
        description: 'Round-the-clock expert assistance',
      },
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive solutions tailored to your needs',
      webDev: {
        title: 'Web Development',
        description: 'Custom websites and web applications',
      },
      mobileDev: {
        title: 'Mobile Development',
        description: 'Native and cross-platform mobile apps',
      },
      cloud: {
        title: 'Cloud Solutions',
        description: 'Scalable and secure cloud infrastructure',
      },
      cyberSecurity: {
        title: 'Cyber Security',
        description: 'Advanced security solutions to protect your digital assets',
      },
      network: {
        title: 'Network Solutions',
        description: 'Robust network infrastructure and management services',
      },
      ai: {
        title: 'AI Solutions',
        description: 'Intelligent automation and machine learning solutions',
      },
    },
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: "Hear from businesses we've helped transform",
      position: 'Position',
      company: 'Company',
    },
    cta: {
      title: 'Ready to Transform Your Business?',
      subtitle: "Let's discuss how we can help you achieve your goals",
      button: 'Contact Us Today',
    },
    footer: {
      about: {
        title: 'About Us',
        description: 'Transforming businesses through technology',
      },
      contact: {
        title: 'Contact Us',
        address: '123 Tech Street, Digital City',
        phone: '+1 234 567 890',
        email: 'contact@o-one.com',
      },
      links: {
        title: 'Quick Links',
        services: 'Services',
        about: 'About',
        contact: 'Contact',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
      copyright: '© 2024 O-One. All rights reserved.',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      about: 'À propos',
      contact: 'Contact',
      signIn: 'Connexion',
      accountSettings: 'Paramètres du compte',
      toggleTheme: 'Changer le thème',
      changeLanguage: 'Changer de langue',
      login: 'Connexion',
      register: "S'inscrire",
      email: 'Email',
      password: 'Mot de passe',
      name: 'Nom',
      confirmPassword: 'Confirmer le mot de passe',
      cancel: 'Annuler',
    },
    hero: {
      title: 'Transformez votre entreprise avec des solutions technologiques',
      subtitle: "Nous aidons les entreprises à exploiter des technologies de pointe pour stimuler la croissance et l'innovation",
      ctaButton: 'Commencer',
    },
    features: {
      title: 'Pourquoi nous choisir',
      subtitle: 'Nous offrons une valeur exceptionnelle grâce à notre gamme complète de services',
      innovation: {
        title: "Innovation d'abord",
        description: 'Restez en avance avec des solutions de pointe',
      },
      quality: {
        title: 'Qualité assurée',
        description: 'Tests rigoureux et meilleures pratiques',
      },
      support: {
        title: 'Support 24/7',
        description: "Assistance d'experts 24h/24 et 7j/7",
      },
    },
    services: {
      title: 'Nos Services',
      subtitle: 'Solutions complètes adaptées à vos besoins',
      webDev: {
        title: 'Développement Web',
        description: 'Sites web et applications web personnalisés',
      },
      mobileDev: {
        title: 'Développement Mobile',
        description: 'Applications mobiles natives et multiplateformes',
      },
      cloud: {
        title: 'Solutions Cloud',
        description: 'Infrastructure cloud évolutive et sécurisée',
      },
      cyberSecurity: {
        title: 'Cybersécurité',
        description: 'Solutions de sécurité avancées pour protéger vos actifs numériques',
      },
      network: {
        title: 'Solutions Réseau',
        description: 'Infrastructure réseau robuste et services de gestion',
      },
      ai: {
        title: 'Solutions IA',
        description: "Solutions d'automatisation intelligente et d'apprentissage automatique",
      },
    },
    testimonials: {
      title: 'Ce que disent nos clients',
      subtitle: 'Écoutez les entreprises que nous avons aidées à transformer',
      position: 'Poste',
      company: 'Entreprise',
    },
    cta: {
      title: 'Prêt à transformer votre entreprise ?',
      subtitle: 'Discutons de la façon dont nous pouvons vous aider à atteindre vos objectifs',
      button: "Contactez-nous aujourd'hui",
    },
    footer: {
      about: {
        title: 'À propos de nous',
        description: 'Transformer les entreprises grâce à la technologie',
      },
      contact: {
        title: 'Contactez-nous',
        address: '123 Rue Tech, Ville Numérique',
        phone: '+1 234 567 890',
        email: 'contact@o-one.com',
      },
      links: {
        title: 'Liens rapides',
        services: 'Services',
        about: 'À propos',
        contact: 'Contact',
        privacy: 'Politique de confidentialité',
        terms: "Conditions d'utilisation",
      },
      copyright: '© 2024 O-One. Tous droits réservés.',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Nosotros',
      contact: 'Contacto',
      signIn: 'Iniciar sesión',
      accountSettings: 'Configuración de cuenta',
      toggleTheme: 'Cambiar tema',
      changeLanguage: 'Cambiar idioma',
      login: 'Iniciar sesión',
      register: 'Registrarse',
      email: 'Correo electrónico',
      password: 'Contraseña',
      name: 'Nombre',
      confirmPassword: 'Confirmar contraseña',
      cancel: 'Cancelar',
    },
    hero: {
      title: 'Transforma tu negocio con soluciones tecnológicas',
      subtitle: 'Ayudamos a las empresas a aprovechar la tecnología de vanguardia para impulsar el crecimiento y la innovación',
      ctaButton: 'Comenzar',
    },
    features: {
      title: 'Por qué elegirnos',
      subtitle: 'Entregamos valor excepcional a través de nuestra suite completa de servicios',
      innovation: {
        title: 'Innovación primero',
        description: 'Mantente adelante con soluciones de vanguardia',
      },
      quality: {
        title: 'Calidad asegurada',
        description: 'Pruebas rigurosas y mejores prácticas',
      },
      support: {
        title: 'Soporte 24/7',
        description: 'Asistencia experta las 24 horas',
      },
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones integrales adaptadas a tus necesidades',
      webDev: {
        title: 'Desarrollo Web',
        description: 'Sitios web y aplicaciones web personalizadas',
      },
      mobileDev: {
        title: 'Desarrollo Móvil',
        description: 'Aplicaciones móviles nativas y multiplataforma',
      },
      cloud: {
        title: 'Soluciones Cloud',
        description: 'Infraestructura cloud escalable y segura',
      },
      cyberSecurity: {
        title: 'Ciberseguridad',
        description: 'Soluciones de seguridad avanzadas para proteger tus activos digitales',
      },
      network: {
        title: 'Soluciones de Red',
        description: 'Infraestructura de red robusta y servicios de gestión',
      },
      ai: {
        title: 'Soluciones IA',
        description: 'Soluciones de automatización inteligente y aprendizaje automático',
      },
    },
    testimonials: {
      title: 'Lo que dicen nuestros clientes',
      subtitle: 'Escucha a las empresas que hemos ayudado a transformar',
      position: 'Cargo',
      company: 'Empresa',
    },
    cta: {
      title: '¿Listo para transformar tu negocio?',
      subtitle: 'Hablemos sobre cómo podemos ayudarte a alcanzar tus objetivos',
      button: 'Contáctanos hoy',
    },
    footer: {
      about: {
        title: 'Sobre nosotros',
        description: 'Transformando negocios a través de la tecnología',
      },
      contact: {
        title: 'Contáctanos',
        address: '123 Calle Tech, Ciudad Digital',
        phone: '+1 234 567 890',
        email: 'contact@o-one.com',
      },
      links: {
        title: 'Enlaces rápidos',
        services: 'Servicios',
        about: 'Nosotros',
        contact: 'Contacto',
        privacy: 'Política de privacidad',
        terms: 'Términos de servicio',
      },
      copyright: '© 2024 O-One. Todos los derechos reservados.',
    },
  },
} as const;
