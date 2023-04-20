import React, { createContext, useState, useMemo } from 'react';

export const CustomContext = createContext();

export const CustomContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateData = (newData) => {
    setData(newData);
    setLoading(false);
  };
  const onLoading = (state) => {
    setLoading(state);
  };

  const contextValue = useMemo(() => ({
    loading, data, updateData, onLoading,
  }), [loading, data, updateData, onLoading]);

  return (
    <CustomContext.Provider value={contextValue}>
      {children}
    </CustomContext.Provider>
  );
};
