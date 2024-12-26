import React, { useState, createContext, useContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmpassword: '',
    phoneNumber: '',
    selectedRole: '',
    visitorName: '',
    purpose: '',
    residentName: '',
    residentApartment: '',
    contact: '',
    vehicleType: '',
    vehicleNumber: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <AppContext.Provider value={{ formData, handleChange }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };