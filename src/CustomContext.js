import React, { createContext, useState, useMemo } from 'react';

export const CustomContext = createContext();

export const CustomContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [docLink, setDocLink] = useState('');

  const updateData = (newData) => {
    setData(newData);
  };
  const updateDocLink = (link) => {
    setDocLink(link);
  };
  const onLoading = (state) => {
    setLoading(state);
  };

  const contextValue = useMemo(() => ({
    loading, data, updateData, onLoading, updateDocLink, docLink,
  }), [loading, data, updateData, onLoading, updateDocLink, docLink]);

  return (
    <CustomContext.Provider value={contextValue}>
      {children}
    </CustomContext.Provider>
  );
};
