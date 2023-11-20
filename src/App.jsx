import Resume from "./components/Resume";
import Button from "./components/Button";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

export default function App() {
  const [sidebarClass, setSidebarClass] = useState("content");

  function toggleNav(e) {
    const navButtons = document.querySelectorAll("nav>button");
    navButtons.forEach((button) => {
      button.classList.remove("active");
    });
    if (e.currentTarget.classList.contains("content")) {
      e.currentTarget.classList.add("active");
      setSidebarClass("content");
    } else {
      e.currentTarget.classList.add("active");
      setSidebarClass("theme");
    }
  }

  return (
    <>
      <div className="builder">
        <header>
          <h1>Resume Builder</h1>
          <nav>
            <Button
              className={"content active"}
              onClick={(e) => toggleNav(e)}
              label={"Content"}
            />
            <Button
              className={"theme"}
              onClick={(e) => toggleNav(e)}
              label={"Theme"}
            />
          </nav>
        </header>

        <Sidebar className={sidebarClass} />

        <footer>
          <Button className={"clear"} label={"Clear Resume"} />
          <Button className={"example"} label={"Load Sample"} />
        </footer>
      </div>

      <Resume />
    </>
  );
}
