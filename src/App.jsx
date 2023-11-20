import Resume from "./components/Resume";
import Button from "./components/Button";
import Sidebar from "./components/Sidebar";
import "remixicon/fonts/remixicon.css";
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
              icon={<i className="ri-stack-fill"></i>}
            />
            <Button
              className={"theme"}
              onClick={(e) => toggleNav(e)}
              label={"Theme"}
              icon={<i className="ri-palette-fill"></i>}
            />
          </nav>
        </header>

        <Sidebar className={sidebarClass} />

        <footer>
          <Button
            className={"clear"}
            label={"Clear Resume"}
            icon={<i className="ri-eraser-fill"></i>}
          />
          <Button
            className={"example"}
            label={"Load Sample"}
            icon={<i className="ri-profile-fill"></i>}
          />
        </footer>
      </div>

      <Resume />
    </>
  );
}
