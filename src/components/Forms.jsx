import Button from "./Button";

export function PersonalDetails({
  name,
  headline,
  email,
  phone,
  address,
  description,
  setName,
  setHeadline,
  setEmail,
  setPhone,
  setAddress,
  setDescription,
}) {
  return (
    <form className="form-personal-details">
      <h3>
        <i className="ri-account-box-fill"></i>
        Personal Details
      </h3>

      <label htmlFor="name">
        <span>Full Name</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          required
        />
      </label>

      <label htmlFor="headline">
        <span>Headline</span>
        <input
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
          type="text"
          id="headline"
          required
        />
      </label>

      <label htmlFor="email">
        <span>Email</span>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          id="email"
          required
        />
      </label>

      <label htmlFor="phone">
        <span>Phone</span>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="tel"
          id="phone"
          required
        />
      </label>

      <label htmlFor="address">
        <span>Address</span>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          id="address"
          required
        />
      </label>

      <label htmlFor="description">
        <span>Description</span>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="description"
          rows="4"
          required
        ></textarea>
      </label>
    </form>
  );
}

export function Education({
  school,
  degree,
  schoolStart,
  schoolEnd,
  schoolLocation,
  setSchool,
  setDegree,
  setSchoolStart,
  setSchoolEnd,
  setSchoolLocation,
  isActive,
  onClick,
}) {
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
          onClick={onClick}
        />
      </div>

      <div className={"input-list " + (isActive && "active")}>
        <label htmlFor="school">
          <span>School</span>
          <input
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            type="text"
            id="school"
            required
          />
        </label>

        <label htmlFor="degree">
          <span>Degree</span>
          <input
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            type="text"
            id="degree"
            required
          />
        </label>

        <label htmlFor="start-date">
          <span>Start Date</span>
          <input
            value={schoolStart}
            onChange={(e) => setSchoolStart(e.target.value)}
            type="text"
            id="start-date"
            required
          />
        </label>

        <label htmlFor="end-date">
          <span>End Date</span>
          <input
            value={schoolEnd}
            onChange={(e) => setSchoolEnd(e.target.value)}
            type="text"
            id="end-date"
            required
          />
        </label>

        <label htmlFor="location">
          <span>Location</span>
          <input
            value={schoolLocation}
            onChange={(e) => setSchoolLocation(e.target.value)}
            type="text"
            id="location"
            required
          />
        </label>
      </div>
    </form>
  );
}

export function Experience({
  company,
  position,
  companyStart,
  companyEnd,
  companyLocation,
  setCompany,
  setPosition,
  setCompanyStart,
  setCompanyEnd,
  setCompanyLocation,
  isActive,
  onClick,
}) {
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
          onClick={onClick}
        />
      </div>

      <div className={"input-list " + (isActive && "active")}>
        <label htmlFor="company">
          <span>Company Name</span>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            type="text"
            id="company"
            required
          />
        </label>

        <label htmlFor="position">
          <span>Position</span>
          <input
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            type="text"
            id="position"
            required
          />
        </label>

        <label htmlFor="start-date">
          <span>Start Date</span>
          <input
            value={companyStart}
            onChange={(e) => setCompanyStart(e.target.value)}
            type="text"
            id="start-date"
            required
          />
        </label>

        <label htmlFor="end-date">
          <span>End Date</span>
          <input
            value={companyEnd}
            onChange={(e) => setCompanyEnd(e.target.value)}
            type="text"
            id="end-date"
            required
          />
        </label>

        <label htmlFor="location">
          <span>Location</span>
          <input
            value={companyLocation}
            onChange={(e) => setCompanyLocation(e.target.value)}
            type="text"
            id="location"
            required
          />
        </label>
      </div>
    </form>
  );
}
