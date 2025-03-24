
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'de';

type TranslationsType = {
  [key in Language]: {
    [key: string]: string;
  };
};

const translations: TranslationsType = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.events': 'Events',
    'nav.contact': 'Contact',
    
    // Home Page
    'home.hero.title': 'Traditional Alpine Folk Music',
    'home.hero.subtitle': 'Experience the authentic sounds of the Alps',
    'home.hero.cta': 'See Upcoming Events',
    
    'home.about.tagline': 'Our Story',
    'home.about.title': 'Authentic Alpine Traditions',
    'home.about.description': 'We are a passionate group of musicians dedicated to preserving and sharing the rich traditions of Alpine folk music. With authentic instruments and traditional arrangements, we bring the spirit of the mountains to every performance.',
    
    'home.events.tagline': 'Join Us',
    'home.events.title': 'Upcoming Performances',
    'home.events.viewAll': 'View All Events',
    
    // Events Page
    'events.tagline': 'Our Schedule',
    'events.title': 'Upcoming & Past Events',
    'events.description': 'Join us at these events to experience the rich tradition of Volksmusik. From intimate concerts to festive celebrations, our performances bring Alpine folk music to life.',
    
    // Contact Page
    'contact.tagline': 'Contact Us',
    'contact.title': 'Get in Touch',
    'contact.description': 'We\'d love to hear from you! Whether you\'re interested in booking us for an event or just want to say hello, we\'re here to connect with you.',
    
    'contact.getInTouch': 'Get in Touch',
    'contact.getInTouchText': 'We\'d love to hear from you! Whether you\'re interested in booking us for an event, have questions about our performances, or just want to say hello, we\'re here to help.',
    'contact.sendMessage': 'Send Us a Message',
    
    'contact.emailUs': 'Email Us',
    'contact.callUs': 'Call Us',
    'contact.visitUs': 'Visit Us',
    
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.subject': 'Subject',
    'contact.form.subjectPlaceholder': 'What\'s this about?',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Your message...',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Your message has been sent!',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.events': 'Veranstaltungen',
    'nav.contact': 'Kontakt',
    
    // Home Page
    'home.hero.title': 'Traditionelle Alpine Volksmusik',
    'home.hero.subtitle': 'Erleben Sie die authentischen Klänge der Alpen',
    'home.hero.cta': 'Kommende Veranstaltungen',
    
    'home.about.tagline': 'Unsere Geschichte',
    'home.about.title': 'Authentische Alpine Traditionen',
    'home.about.description': 'Wir sind eine leidenschaftliche Gruppe von Musikern, die sich der Bewahrung und Weitergabe der reichen Traditionen der alpinen Volksmusik verschrieben haben. Mit authentischen Instrumenten und traditionellen Arrangements bringen wir den Geist der Berge in jede Aufführung.',
    
    'home.events.tagline': 'Begleiten Sie uns',
    'home.events.title': 'Kommende Auftritte',
    'home.events.viewAll': 'Alle Veranstaltungen',
    
    // Events Page
    'events.tagline': 'Unser Zeitplan',
    'events.title': 'Kommende & Vergangene Veranstaltungen',
    'events.description': 'Begleiten Sie uns bei diesen Veranstaltungen, um die reiche Tradition der Volksmusik zu erleben. Von intimen Konzerten bis hin zu festlichen Feiern, unsere Aufführungen erwecken die alpine Volksmusik zum Leben.',
    
    // Contact Page
    'contact.tagline': 'Kontaktieren Sie uns',
    'contact.title': 'Nehmen Sie Kontakt auf',
    'contact.description': 'Wir freuen uns von Ihnen zu hören! Egal ob Sie uns für eine Veranstaltung buchen möchten oder einfach nur Hallo sagen wollen, wir sind für Sie da.',
    
    'contact.getInTouch': 'Kontakt aufnehmen',
    'contact.getInTouchText': 'Wir freuen uns von Ihnen zu hören! Egal ob Sie uns für eine Veranstaltung buchen möchten, Fragen zu unseren Auftritten haben oder einfach nur Hallo sagen wollen, wir sind für Sie da.',
    'contact.sendMessage': 'Senden Sie uns eine Nachricht',
    
    'contact.emailUs': 'E-Mail an uns',
    'contact.callUs': 'Rufen Sie uns an',
    'contact.visitUs': 'Besuchen Sie uns',
    
    'contact.form.name': 'Ihr Name',
    'contact.form.email': 'Ihre E-Mail',
    'contact.form.subject': 'Betreff',
    'contact.form.subjectPlaceholder': 'Worum geht es?',
    'contact.form.message': 'Nachricht',
    'contact.form.messagePlaceholder': 'Ihre Nachricht...',
    'contact.form.send': 'Nachricht senden',
    'contact.form.sending': 'Wird gesendet...',
    'contact.form.success': 'Ihre Nachricht wurde gesendet!',
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const defaultContext: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
  t: () => '',
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    if (translations[language] && translations[language][key]) {
      return translations[language][key];
    }
    
    // Fallback to English if translation doesn't exist
    if (translations.en && translations.en[key]) {
      return translations.en[key];
    }
    
    // Return the key if no translation found
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
