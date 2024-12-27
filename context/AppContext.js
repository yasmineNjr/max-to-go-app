'use client';

import { createContext, useContext, useEffect, useState } from 'react';

// Create the context
const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

   // Load token from localStorage when the app is initialized
   useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);  // Set token in context as well
    }
  }, []);

  // Save token in localStorage when it's updated
  const updateToken = (newToken) => {
    setToken(newToken);  // Set token in context
    if (newToken) {
      localStorage.setItem('token', newToken);  // Save token in localStorage
    } else {
      localStorage.removeItem('token');  // Remove token when logged out
    }
  };


  return (
    <AppContext.Provider value={{ token, setToken: updateToken, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = () => useContext(AppContext);

