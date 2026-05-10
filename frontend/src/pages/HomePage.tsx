import React, { useState, useEffect } from "react";
import type { ReactElement } from "react";

// Importing reusable UI components
import Header from "../components/Header/Header";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";

// Importing a local image asset (handled by Vite)
import image from "../assets/cpwallpaper1.jpg";

import "./HomePage.css";

export const Home: React.FC = (): ReactElement => {
  /*
  ======================================================
  STATE MANAGEMENT
  ======================================================
  onlinePlayers stores the number of active users
  useState<number> ensures TypeScript enforces numeric values
  */

  const [onlinePlayers, setOnlinePlayers] = useState<number>(12540);

  /*
  ======================================================
  SIMULATED DATA FOR PLAYER COUNT
  ======================================================
  
  The syntax can be quite confusing.
  Let's unpack what's happening in here:
  
  - useEffect(arg: function) | function. returns void.
      UseEffec is a REACT HOOK.
      More info about useEffect and other hooks in root/HOOKS.md

  - const interval = | declaration of a constant var

  - setInterval() | function. returns a number [interval ID]

  - () => {} | creation of first-class function 
    [arrow function, lambda, whatever you wanna call it].

  - setOnlinePlayers | function. returns a number. Declared above this comment.

  - (prev) => (expression) | first-class function that takes one argument called 'prev'. 
      Note that this time, no '{}' follow the declaration.
      This means that the function will just evaluate the expression followed by the arrow '=>'.
      It will return the result of the expression automatically.

      Equivalents:
                    (x,y) => {return x + y;}
                    (x,y) => x+y
  */

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlinePlayers((prev) => prev + Math.floor(Math.random() * 10) - 5);
    }, 5000); // updates every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // ======================================================
  // UI RENDER
  // ======================================================
  // We're returning all the jsx data to be rendered.
  return (
    <>
      <Header />

      {/* Main banner */}
      <div className="penguin-container">
        <section className="hero-section">
          <div className="island-container">
            {/* Large image */}
            <img src={image} alt="Club Penguin Image" className="hero-image" />
          </div>
        </section>

        <Features />

        <div className="online-counter">
          <span className="online-label">Penguins Online:</span>
          <span className="online-number">
            {/* Converts number into readable format*/}
            {onlinePlayers.toString()}
          </span>
        </div>

        <Footer />
      </div>
    </>
  );
};
