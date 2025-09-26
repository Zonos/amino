# 🎯 Zustand Translation System - Usage Guide

## 🚀 For Consuming Projects

### **Setup (One Time)**

```tsx
import { configureTranslations, setLanguage } from '@zonos/amino';

// Configure your translation loader
const loadTranslations = async languageCode => {
  switch (languageCode) {
    case 'ES':
      return (await import('./translations/spanish.json')).default;
    case 'FR':
      return (await import('./translations/french.json')).default;
    default:
      return {};
  }
};

// Configure once in your app initialization
configureTranslations(loadTranslations);

// Set initial language
setLanguage('ES');
```

### **Direct Usage (No Hooks - Works Anywhere!)**

```tsx
import { translate, setLanguage } from '@zonos/amino';

// ✅ In utility functions
export const validateEmail = email => {
  if (!email) {
    return translate('Email is required'); // Works!
  }
};

// ✅ In async functions
const handleSubmit = async data => {
  const loadingMessage = translate('Saving...');
  showSpinner(loadingMessage);

  try {
    await saveData(data);
    showToast(translate('Save successful'));
  } catch (error) {
    showToast(translate('Save failed'));
  }
};

// ✅ In event handlers
const handleLanguageChange = lang => {
  setLanguage(lang); // Automatically loads translations and updates all components
};

// ✅ In classes
class FormValidator {
  validate(data) {
    if (!data.email) {
      return translate('Email is required'); // Just works!
    }
  }
}
```

### **React Components (With Reactivity)**

```tsx
import { useTranslate, useCurrentLanguage } from '@zonos/amino';

const MyComponent = () => {
  const translate = useTranslate(); // Reactive - re-renders when language changes
  const currentLang = useCurrentLanguage();

  return (
    <div>
      <p>{translate('Welcome message')}</p>
      <p>Current language: {currentLang}</p>
    </div>
  );
};
```

## 🔧 For Amino Components

Amino components automatically work with the store:

```tsx
// Amino's internal Translate component
<Translate text="Loading" />; // Automatically translates based on current language

// Amino components use direct translate function
const MyAminoComponent = () => {
  // In utils, event handlers, anywhere:
  const message = translate('Save successful');

  // In render (reactive):
  const t = useTranslate();
  return <div>{t('Loading')}</div>;
};
```

## 📦 Bundle Size Benefits

- **Before**: 44K (all languages bundled)
- **After**: ~6K initial + languages loaded on demand
- **~85% bundle size reduction!**

## 🎯 Key Features

✅ **Works everywhere** - components, utilities, classes, functions  
✅ **Automatic re-renders** - components update when language changes  
✅ **Lazy loading** - only loads current language  
✅ **Type safe** - full TypeScript support  
✅ **No providers required** - just import and use  
✅ **Backward compatible** - existing code keeps working

## 🔄 Migration from Context

```tsx
// ❌ Old way (Context - hook required)
const MyComponent = () => {
  const translate = useTranslate(); // Only in components
  return <div>{translate('Hello')}</div>;
};

// ✅ New way (Zustand - works anywhere)
import { translate, useTranslate } from '@zonos/amino';

// In utilities
const message = translate('Hello'); // Direct access

// In components (reactive)
const MyComponent = () => {
  const t = useTranslate(); // Re-renders on changes
  return <div>{t('Hello')}</div>;
};
```

