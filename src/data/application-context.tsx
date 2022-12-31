import React from "react";

export interface IApplication {
  currentPath: string;
  setNewPath: (path: string) => void;
}

const ApplicationContext = React.createContext<IApplication>({
  currentPath: "",
  setNewPath: (path: string) => {},
});

export default ApplicationContext;
