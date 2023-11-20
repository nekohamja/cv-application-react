import { PersonalDetails, Education, Experience } from "./Forms";

export default function Sidebar({ className }) {
  if (className === "content") {
    return (
      <>
        <PersonalDetails />
        <Education />
        <Experience />
      </>
    );
  } else {
    return <i>theme settings goes here</i>;
  }
}
