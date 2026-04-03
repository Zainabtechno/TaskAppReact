import { useEffect, useState } from "react";
import logo from "../assets/react.svg";

export default function Header() {
  // 1. Automatic Load: App khulte hi check karega ke pehle kaunsi theme thi
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "gTwo");

  useEffect(() => {
    // 2. Automatic Save: Jab bhi theme badle, storage mein save kar do
    localStorage.setItem("theme", JSON.stringify(theme));

    // 3. Class Apply: Screen ke colors badal do
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]); // Yeh [theme] zaroori hai taake automatic kaam kare

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="App logo" />
        <span>Taskapp</span>
      </div>
      <div className="themeSelector">
        <span className={theme === "light" ? "light activeTheme" : "light"} onClick={() => setTheme("light")}></span>
        <span className={theme === "medium" ? "medium activeTheme" : "medium"} onClick={() => setTheme("medium")}></span>
        <span className={theme === "dark" ? "dark activeTheme" : "dark"} onClick={() => setTheme("dark")}></span>
        <span className={theme === "gOne" ? "gOne activeTheme" : "gOne"} onClick={() => setTheme("gOne")}></span>
        <span className={theme === "gTwo" ? "gTwo activeTheme" : "gTwo"} onClick={() => setTheme("gTwo")}></span>
        <span className={theme === "gThree" ? "gThree activeTheme" : "gThree"} onClick={() => setTheme("gThree")}></span>
      </div>
    </header>
  );
}