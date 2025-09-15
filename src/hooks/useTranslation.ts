'use client';

import { useTranslation as useTranslationContext } from '@/contexts/TranslationContext';

const useTranslation = () => {
  return useTranslationContext();
};

export default useTranslation;
