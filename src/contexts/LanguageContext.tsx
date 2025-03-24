
import React, { createContext, useContext, ReactNode } from 'react';

type TranslationsType = {
  [key: string]: string;
};

const translations: TranslationsType = {
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
};

type LanguageContextType = {
  t: (key: string) => string;
};

const defaultContext: LanguageContextType = {
  t: () => '',
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key];
    }
    
    // Return the key if no translation found
    return key;
  };

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
};
