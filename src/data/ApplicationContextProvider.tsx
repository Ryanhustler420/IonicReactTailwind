import React, { useState } from "react";
import ApplicationContext from "./application-context";

const ApplicationContextProvider: React.FC<{ children: any }> = (props) => {
  const [currentPath, setCurrentPath] = useState<string>("");
  const setNewPath = (path: string) => {
    setCurrentPath(path);
  };

  return (
    <ApplicationContext.Provider value={{ currentPath, setNewPath }}>
      {props.children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
