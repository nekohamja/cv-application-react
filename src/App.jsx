import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "remixicon/fonts/remixicon.css";
import Resume from "./components/Resume";
import Button from "./components/Button";
import Sidebar from "./components/Sidebar";
import { useState, useEffect } from "react";

export default function App() {
  const [sidebar, setSidebar] = useState("content");
  const [education, addEducation] = useState(false);
  const [experience, addExperience] = useState(false);
  // personal input values
  const [name, setName] = useState("");
  const [headline, setHeadline] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  // education input values
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [schoolStart, setSchoolStart] = useState("");
  const [schoolEnd, setSchoolEnd] = useState("");
  const [schoolLocation, setSchoolLocation] = useState("");
  // experience input values
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [companyStart, setCompanyStart] = useState("");
  const [companyEnd, setCompanyEnd] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");

  function toggleInputList(e, setInputList, selector) {
    e.preventDefault();
    const container = document.querySelector(selector);
    if (container.classList.contains("active")) setInputList(false);
    else setInputList(true);
  }

  function toggleSidebar(e) {
    const navButtons = document.querySelectorAll("nav>button");
    navButtons.forEach((button) => {
      button.classList.remove("active");
    });
    if (e.currentTarget.classList.contains("content")) {
      e.currentTarget.classList.add("active");
      setSidebar("content");
    } else {
      e.currentTarget.classList.add("active");
      setSidebar("theme");
    }
  }

  function showSample() {
    setName("Kobeni Higashiyama");
    setHeadline("Student");
    setEmail("kobeni.burger@email.co.jp");
    setPhone("+81 123 456 789");
    setAddress("Shinjuku, Japan");
    setDescription(`Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
    Odit doloremque voluptatibus excepturi magnam distinctio odio ab placeat minus accusamus
    tempora, facere voluptatum iste sed quo suscipit, dolorum mollitia
    recusandae unde.`);
    setSchool("Tokyo University of the Arts");
    setDegree("BA in Graphic Design");
    setSchoolStart("2019");
    setSchoolEnd("2021");
    setSchoolLocation("Tokyo, Japan");
    setCompany("Family Burger");
    setPosition("Waitress");
    setCompanyStart("2022");
    setCompanyEnd("present");
    setCompanyLocation("Shibuya, Japan");
  }

  function clear() {
    setName("");
    setHeadline("");
    setEmail("");
    setPhone("");
    setAddress("");
    setDescription("");
    setSchool("");
    setDegree("");
    setSchoolStart("");
    setSchoolEnd("");
    setSchoolLocation("");
    setCompany("");
    setPosition("");
    setCompanyStart("");
    setCompanyEnd("");
    setCompanyLocation("");
  }

  useEffect(() => {
    if (window.innerWidth <= 500) {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        duration: 0.2,
        scrollTrigger: {
          trigger: ".resume",
          toggleActions: "restart none none reverse ",
          start: "top top",
        },
      });
      tl.to(".resume", { yPercent: -100 });
      tl.to(
        ".builder",
        {
          yPercent: -50,
          ease: "power4.out",
        },
        "<"
      );
    }
  }, []);

  return (
    <>
      <div className="builder">
        <header>
          <h1>resume.co</h1>
          <nav>
            <Button
              className={"content active"}
              onClick={(e) => toggleSidebar(e)}
              label={"Content"}
              icon={<i className="ri-stack-fill"></i>}
            />
            <Button
              className={"theme"}
              onClick={(e) => toggleSidebar(e)}
              label={"Theme"}
              icon={<i className="ri-palette-fill"></i>}
            />
          </nav>
        </header>

        <Sidebar
          className={sidebar}
          education={education}
          experience={experience}
          addEducation={addEducation}
          addExperience={addExperience}
          toggleInputList={toggleInputList}
          // personal input values
          name={name}
          headline={headline}
          email={email}
          phone={phone}
          address={address}
          description={description}
          setName={setName}
          setHeadline={setHeadline}
          setEmail={setEmail}
          setPhone={setPhone}
          setAddress={setAddress}
          setDescription={setDescription}
          // education input values
          school={school}
          degree={degree}
          schoolStart={schoolStart}
          schoolEnd={schoolEnd}
          schoolLocation={schoolLocation}
          setSchool={setSchool}
          setDegree={setDegree}
          setSchoolStart={setSchoolStart}
          setSchoolEnd={setSchoolEnd}
          setSchoolLocation={setSchoolLocation}
          // experience input values
          company={company}
          position={position}
          companyStart={companyStart}
          companyEnd={companyEnd}
          companyLocation={companyLocation}
          setCompany={setCompany}
          setPosition={setPosition}
          setCompanyStart={setCompanyStart}
          setCompanyEnd={setCompanyEnd}
          setCompanyLocation={setCompanyLocation}
        />

        <footer>
          <Button
            className={"clear"}
            onClick={() => clear()}
            label={"Clear Resume"}
            icon={<i className="ri-eraser-fill"></i>}
          />
          <Button
            className={"example"}
            onClick={() => showSample()}
            label={"Load Sample"}
            icon={<i className="ri-profile-fill"></i>}
          />
        </footer>
      </div>
      <Resume
        // personal input values
        name={name}
        headline={headline}
        email={email}
        phone={phone}
        address={address}
        description={description}
        // education input values
        school={school}
        degree={degree}
        schoolStart={schoolStart}
        schoolEnd={schoolEnd}
        schoolLocation={schoolLocation}
        // experience input values
        company={company}
        position={position}
        companyStart={companyStart}
        companyEnd={companyEnd}
        companyLocation={companyLocation}
      />
    </>
  );
}
