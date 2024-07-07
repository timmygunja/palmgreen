import React, { useState, useEffect } from "react";
import "./AnimatedTypingText.css";

const AnimatedTypingText = () => {
  const texts = [
    "Fullstack Developer",
    "Software Engineer",
    "Data Scientist (kinda)",
    "Part - time Batman",
    "SitDown Comedian",
    "I Am The Danger, Skyler...",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let currentCharacterIndex = 0;
    let interval;

    const typeText = () => {
      if (currentCharacterIndex < texts[currentTextIndex].length) {
        setCurrentText(
          texts[currentTextIndex].substring(0, currentCharacterIndex + 1)
        );
        currentCharacterIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          eraseText();
        }, 1750); // Wait before erasing
      }
    };

    const eraseText = () => {
      interval = setInterval(() => {
        if (currentCharacterIndex >= 0) {
          setCurrentText(
            texts[currentTextIndex].substring(0, currentCharacterIndex)
          );
          currentCharacterIndex--;
        } else {
          clearInterval(interval);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          setTimeout(() => {
            typeText();
          }, 500); // Wait before typing the next text
        }
      }, 75); // Typing speed (characters per second)
    };

    interval = setInterval(() => {
      typeText();
    }, 100); // Typing speed (characters per second)

    return () => clearInterval(interval);
  }, [currentTextIndex]);

  return <div className="bio-title animated-typing-text">{currentText}</div>;
};

export default AnimatedTypingText;
