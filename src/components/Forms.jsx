import Button from "./Button";
import { useState } from "react";

export function PersonalDetails() {
  return (
    <form className="form-personal-details">
      <h3>
        <i className="ri-account-box-fill"></i>
        Personal Details
      </h3>

      <label htmlFor="name">
        <span>Full Name</span>
        <input type="text" id="name" required />
      </label>

      <label htmlFor="email">
        <span>Email</span>
        <input type="text" id="email" required />
      </label>

      <label htmlFor="phone">
        <span>Phone</span>
        <input type="tel" id="phone" required />
      </label>

      <label htmlFor="address">
        <span>Address</span>
        <input type="text" id="address" required />
      </label>
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
        <label htmlFor="school">
          <span>School</span>
          <input type="text" id="school" required />
        </label>

        <label htmlFor="start-date">
          <span>Start Date</span>
          <input
            type="date"
            id="start-date"
            placeholder="Start Date"
            required
          />
        </label>

        <label htmlFor="end-date">
          <span>End Date</span>
          <input type="date" id="end-date" placeholder="End Date" required />
        </label>

        <label htmlFor="location">
          <span>Location</span>
          <input type="text" id="location" required />
        </label>
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
        <label htmlFor="company-name">
          <span>Company Name</span>
          <input type="text" id="company-name" required />
        </label>

        <label htmlFor="position">
          <span>Position</span>
          <input type="text" id="position" required />
        </label>

        <label htmlFor="start-date">
          <span>Start Date</span>
          <input
            type="date"
            id="start-date"
            placeholder="Start Date"
            required
          />
        </label>

        <label htmlFor="end-date">
          <span>End Date</span>
          <input type="date" id="end-date" placeholder="End Date" required />
        </label>

        <label htmlFor="location">
          <span>Location</span>
          <input type="text" id="location" required />
        </label>

        <label htmlFor="description">
          <span>Description</span>
          <textarea
            id="description"
            rows="4"
            placeholder="Description"
            required
          ></textarea>
        </label>
      </div>
    </form>
  );
}
