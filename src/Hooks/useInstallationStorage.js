import { useEffect, useState } from "react";

const useInstallationStorage = (appId) => {
  const [install, setInstall] = useState(false);

  useEffect(() => {
    if (!appId) return;
    const getStoreIds = JSON.parse(localStorage.getItem("apps")) || [];
    const isInstalled = getStoreIds.some(
      (app) => app.id.toString() === appId.toString(),
    );
    setInstall(isInstalled);
  }, [appId]);

  //install functionality
  const handleInstallation = (appData) => {
    if (!appId || !appData) return;

    const getStoreIds = JSON.parse(localStorage.getItem("apps")) || [];

    const isInstalled = getStoreIds.some(
      (app) => app.id.toString() === appId.toString(),
    );

    if (!isInstalled) {
      const updatedIds = [...getStoreIds, appData];
      localStorage.setItem("apps", JSON.stringify(updatedIds));
      setInstall(true);
    }
  };
  //uninstall functionality

  const handleUninstallation = () => {
    if (!appId) return;

    const getStoreIds = JSON.parse(localStorage.getItem("apps")) || [];
    const updatedIds = getStoreIds.filter(
      (app) => app.id.toString() !== appId.toString(),
    );
    localStorage.setItem("apps", JSON.stringify(updatedIds));
    setInstall(false);
  };
  return { install, handleInstallation, handleUninstallation };
};
export default useInstallationStorage;
