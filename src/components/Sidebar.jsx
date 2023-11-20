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
    return <div>theme settings goes here</div>;
  }
}
