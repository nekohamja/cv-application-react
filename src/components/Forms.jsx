export function PersonalDetails() {
  return (
    <form className="form-personal-details">
      <h3>Personal Details</h3>
      <label htmlFor="name">Full Name</label>
      <input type="text" id="name" placeholder="...Bogart" />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="...bogart@email.com" />

      <label htmlFor="phone">Phone</label>
      <input type="tel" id="phone" placeholder="+63 912 4567 890" />

      <label htmlFor="address">Address</label>
      <input type="text" id="address" placeholder="Tokyo, Japan" />
    </form>
  );
}

export function Education() {
  return (
    <form className="form-education">
      <h3>Education</h3>
      <label htmlFor="school">School</label>
      <input type="text" id="school" placeholder="School" />

      <label htmlFor="start-date">Start Date</label>
      <input type="date" id="start-date" />

      <label htmlFor="end-date">End Date</label>
      <input type="date" id="end-date" />

      <label htmlFor="location">Location</label>
      <input type="text" id="location" placeholder="Location" />
    </form>
  );
}

export function Experience() {
  return (
    <form className="form-experience">
      <h3>Experience</h3>
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
      <textarea id="description" rows="2"></textarea>
    </form>
  );
}
