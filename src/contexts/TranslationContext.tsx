'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Locale = 'pt' | 'en';

interface Translations {
  [key: string]: any;
}

interface TranslationContextType {
  t: (key: string) => any;
  locale: Locale;
  changeLanguage: (locale: Locale) => void;
  isLoading: boolean;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('preferred-language') as Locale;
      return (savedLocale && (savedLocale === 'pt' || savedLocale === 'en')) ? savedLocale : 'pt';
    }
    return 'pt';
  });
  
  const [translations, setTranslations] = useState<Translations>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        setIsLoading(true);
                const response = await fetch(`/locales/${locale}/common.json?t=${Date.now()}&v=4`);
        if (!response.ok) {
          throw new Error(`Failed to load translations: ${response.status}`);
        }
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error('Error loading translations:', error);
        // Fallback to Portuguese if loading fails
        if (locale !== 'pt') {
          setLocale('pt');
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
  }, [locale]);

  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key; // Return key if translation not found
      }
    }
    
    return value; // Return the actual value (string, array, object, etc.)
  };

  const changeLanguage = (newLocale: Locale) => {
    console.log(`Changing language to: ${newLocale}`);
    setLocale(newLocale);
    // Save preference to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', newLocale);
    }
  };

  return (
    <TranslationContext.Provider value={{ t, locale, changeLanguage, isLoading }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
