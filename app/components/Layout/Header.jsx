"use client";

import Navbar from "./Navbar.jsx";
import styles from "./layout.css";
import { useEffect, useState } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // console.log("scroll position : ", window.scrollY);
  return (
    <section className={isVisible ? "navbar navbar_style" : "navbar navbar_transparent"}>
      <Navbar />
    </section>
  );
}
