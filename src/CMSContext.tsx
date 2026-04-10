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
      city: string;
      postal: string;
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
    compliance: Array<{ name: string; logo: string }>;
  };
  pages: Record<string, any>;
  collections: {
    services: any[];
    team: any[];
    faqs: any[];
    news: any[];
    insights: any[];
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
    const loadCMS = async () => {
      try {
        const response = await fetch(`/cms-content.json?v=${Date.now()}`);
        if (response.ok) {
          const data = await response.json();
          setContent(data);
          setIsLoading(false);
          return;
        }
      } catch (err) {
        console.warn("Could not fetch live cms-content.json, trying local storage or defaults", err);
      }

      const savedContent = localStorage.getItem('cms_content');
      if (savedContent) {
        try {
          setContent(JSON.parse(savedContent));
          setIsLoading(false);
          return;
        } catch (e) {
          console.error("Failed to parse saved content", e);
        }
      }
      setIsLoading(false);
    };

    loadCMS();
  }, []);

  const updateContent = async (newContent: CMSContent) => {
    // Update local state immediately for UI responsiveness
    setContent(newContent);
    try {
      localStorage.setItem('cms_content', JSON.stringify(newContent));
    } catch (e) {
      console.warn("LocalStorage quota exceeded, local persistence skipped.", e);
    }
    
    // Attempt global persistence to the JSON file
    const response = await fetch('/php-backend/save.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newContent)
    });

    if (!response.ok) {
      throw new Error("Server-side save failed");
    }
    
    const result = await response.json();
    if (result.error) {
      throw new Error(result.error);
    }

    console.log("Global persistence successful");
    return true;
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
