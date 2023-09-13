"use client";
import { useRouter } from "next/navigation";
const About = () => {
  const router = useRouter();
  const clickHandler = (e) => {
    router.push("about/institute_name/delhi");
  };
  return (
    <div>
      <h1>About</h1>
      <button onClick={clickHandler}>change route</button>
    </div>
  );
};

export default About;
