export default function Resume({
  name,
  headline,
  email,
  phone,
  address,
  description,
  school,
  degree,
  schoolStart,
  schoolEnd,
  schoolLocation,
  company,
  position,
  companyStart,
  companyEnd,
  companyLocation,
}) {
  return (
    <div className="resume active">
      <section className="resume-contact">
        <h1>{name}</h1>
        <h2>{headline}</h2>
        <h3>
          <i className="ri-mail-fill"></i>
          {email}
        </h3>

        <h3>
          <i className="ri-phone-fill"></i>
          {phone}
        </h3>

        <h3>
          <i className="ri-map-pin-2-fill"></i>
          {address}
        </h3>
      </section>

      <p className="resume-description">{description}</p>

      <hr />

      <section className="resume-education">
        <h1>Education</h1>

        <div className="block">
          <p>
            {schoolStart} - {schoolEnd} <br /> {schoolLocation}
          </p>
          <div>
            <h3>{school}</h3>
            <p>{degree} </p>
          </div>
        </div>
      </section>

      <hr />

      <section className="resume-experience">
        <h1>Experience</h1>

        <div className="block">
          <p>
            {companyStart} - {companyEnd} <br /> {companyLocation}
          </p>
          <div>
            <h3>{company}</h3>
            <p>{position}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
