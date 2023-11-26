import { PersonalDetails, Education, Experience } from "./Forms";

export default function Sidebar({
  className,
  education,
  experience,
  addEducation,
  addExperience,
  toggleInputList,
  // personal input values
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
  // education input values
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
  // experience input values
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
}) {
  if (className === "content") {
    return (
      <>
        <PersonalDetails
          name={name}
          headline={headline}
          email={email}
          phone={phone}
          address={address}
          setName={setName}
          setHeadline={setHeadline}
          setEmail={setEmail}
          setPhone={setPhone}
          setAddress={setAddress}
          description={description}
          setDescription={setDescription}
        />
        <Education
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
          onClick={(e) =>
            toggleInputList(e, addEducation, ".form-education>.input-list")
          }
          isActive={education}
        />
        <Experience
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
          onClick={(e) =>
            toggleInputList(e, addExperience, ".form-experience>.input-list")
          }
          isActive={experience}
        />
      </>
    );
  } else {
    return (
      <>
        <i>layout, color, and fonts settings here</i>
      </>
    );
  }
}
