import React, {useContext} from "react";
import { LevelContext } from "../contexts/LevelContext";

export default function Section({  children }) {
    const level = useContext(LevelContext)
    return (
      <section className="p-2 border border-gray-500">
        <LevelContext.Provider value={level + 1}>
          {children}
        </LevelContext.Provider>
      </section>
    );
  }