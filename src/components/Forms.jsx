import Button from "./Button";
import { useState } from "react";

export function PersonalDetails() {
  return (
    <form className="form-personal-details">
      <h3>
        <i className="ri-account-box-fill"></i>
        Personal Details
      </h3>
      <label htmlFor="name">Full Name</label>
      <input type="text" id="name" placeholder="Bogart" />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="Bogart@email.com" />

      <label htmlFor="phone">Phone</label>
      <input type="tel" id="phone" placeholder="+63 912 4567 890" />

      <label htmlFor="address">Address</label>
      <input type="text" id="address" placeholder="Tokyo, Japan" />
    </form>
  );
}

export function Education() {
  const [inputList, setInputList] = useState("input-list");

  function toggleInputList(e) {
    e.preventDefault();
    setInputList("input-list active");
  }

  return (
    <form className="form-education">
      <div className="form-header">
        <h3>
          <i className="ri-graduation-cap-fill"></i>
          Education
        </h3>
        <Button
          className={"small add"}
          icon={<i className="ri-add-fill"></i>}
          onClick={(e) => toggleInputList(e)}
        />
      </div>

      <div className={inputList}>
        <label htmlFor="school">School</label>
        <input type="text" id="school" placeholder="School" />

        <label htmlFor="start-date">Start Date</label>
        <input type="date" id="start-date" />

        <label htmlFor="end-date">End Date</label>
        <input type="date" id="end-date" />

        <label htmlFor="location">Location</label>
        <input type="text" id="location" placeholder="Location" />
      </div>
    </form>
  );
}

export function Experience() {
  return (
    <form className="form-experience">
      <div className="form-header">
        <h3>
          <i className="ri-briefcase-4-fill"></i>
          Experience
        </h3>
        <Button
          className={"small add"}
          icon={<i className="ri-add-fill"></i>}
        />
      </div>

      <div className="input-list">
        <label htmlFor="company-name">Company Name</label>
        <input type="text" id="company-name" placeholder="Company Name" />

        <label htmlFor="position">Position</label>
        <input type="text" id="position" placeholder="Position" />

        <label htmlFor="start-date">Start Date</label>
        <input type="date" id="start-date" />

        <label htmlFor="end-date">End Date</label>
        <input type="date" id="end-date" />

        <label htmlFor="location">Location</label>
        <input type="text" id="location" placeholder="Location" />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          rows="4"
          placeholder="Description"
        ></textarea>
      </div>
    </form>
  );
}
