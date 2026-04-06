import React, { createContext, useContext, useState, useEffect } from 'react';
import initialContent from './data/cms-content.json';

// Types for CMS Content
export interface CMSContent {
  global: {
    companyName: string;
    logo: string;
    contact: {
      email: string;
      phone: string;
      whatsapp: string;
      address: string;
    };
    social: {
      facebook: string;
      linkedin: string;
      twitter: string;
    };
    footer: {
      text: string;
      tagline: string;
    };
    seo: {
      defaultTitle: string;
      defaultDesc: string;
    };
  };
  pages: Record<string, any>;
  collections: {
    services: any[];
    team: any[];
    faqs: any[];
  };
}

interface CMSContextType {
  content: CMSContent;
  updateContent: (newContent: CMSContent) => void;
  isLoading: boolean;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export const CMSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<CMSContent>(initialContent as CMSContent);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch from an API
    // We're loading it from the JSON file which is already imported
    // We'll simulate a small delay to mimic fetching
    const timer = setTimeout(() => {
      const savedContent = localStorage.getItem('cms_content');
      if (savedContent) {
        try {
          setContent(JSON.parse(savedContent));
        } catch (e) {
          console.error("Failed to parse saved content", e);
        }
      }
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const updateContent = (newContent: CMSContent) => {
    setContent(newContent);
    localStorage.setItem('cms_content', JSON.stringify(newContent));
    
    // In a production environment, we'd make an API call here to save to a database or file system
    console.log("Content updated successfully", newContent);
  };

  return (
    <CMSContext.Provider value={{ content, updateContent, isLoading }}>
      {children}
    </CMSContext.Provider>
  );
};

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (context === undefined) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};
