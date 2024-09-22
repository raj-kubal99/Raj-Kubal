"use client"
import { createContext, useRef } from "react";

export const ScrollContext = createContext();

export const ScrollContextProvider = ({ children }) => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const experienceRef = useRef(null);
    const contactRef = useRef(null);

    return <ScrollContext.Provider value={{ homeRef, aboutRef, projectRef, experienceRef, contactRef }}>
        {children}
    </ScrollContext.Provider>
}