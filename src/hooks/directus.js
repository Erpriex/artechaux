import React, { createContext, useState, useEffect, useContext } from "react";
import { Directus } from "@directus/sdk";

const directus = new Directus(window.location.origin);

export const DirectusContext = createContext();

export const DirectusProvider = ({ children }) => {
  return <DirectusContext.Provider value={directus}>{children}</DirectusContext.Provider>;
};

export const useDirectus = () => {
  return useContext(DirectusContext);
};
