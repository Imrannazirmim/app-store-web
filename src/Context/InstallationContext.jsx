import { createContext, useEffect, useState } from "react";

const InstallContext = createContext();

export const InstallProvider = ({ children }) => {
  const [appSelect, setAppSelect] = useState([]);

  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem("apps")) || [];
    setAppSelect(storedIds);
  }, []);

  // new app details add
  const newAppDetails = (app) => {
    if (!app || !app.id) return;
    setAppSelect((prevState) => {
      const appData = prevState.some((item) => item.id === app.id);
      if (appData) return prevState;
      const updatedData = [...prevState, app];
      localStorage.setItem("apps", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const removeAppDetails = (id) => {
    setAppSelect((prevState) => {
      const updated = prevState.filter((item) => item.id !== id);
      localStorage.setItem("apps", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <InstallContext.Provider
      value={{ appSelect, setAppSelect, newAppDetails, removeAppDetails }}
    >
      {children}
    </InstallContext.Provider>
  );
};
export default InstallContext;
