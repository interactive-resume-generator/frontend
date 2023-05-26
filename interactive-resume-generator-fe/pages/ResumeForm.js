import { useState } from "react";
import useResource from "hooks/useResources";
import { useAuth } from "@/contexts/auth";

export default function ResumeForm() {
  const { createResume } = useResource();

  const { user, login } = useAuth();

  console.log(user)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [education, setEducation] = useState([
    { degree: "", university: "", year: "" },
  ]);
  const [experience, setExperience] = useState([
    { company: "", position: "", duration: "" },
  ]);
  const [skills, setSkills] = useState([""]);

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index][field] = value;
    setExperience(updatedExperience);
  };

  const handleSkillsChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const handleAddEducation = () => {
    setEducation([...education, { degree: "", university: "", year: "" }]);
  };

  const handleAddExperience = () => {
    setExperience([...experience, { company: "", position: "", duration: "" }]);
  };

  const handleAddSkill = () => {
    setSkills([...skills, ""]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resume = new FormData();
    const data = {
      name: name,
      email: email,
      phone: phone,
      education: education,
      experience: experience,
      skills: skills,
    };
    resume.append("name", "Ethan's Resume");
    resume.append("data", JSON.stringify(data));
    resume.append("format", JSON.stringify({ things: "stuff" }));

    await createResume(resume);
    // const response = await fetch(
    //   "http://localhost:8000/api/v1/resumes/create/",
    //   {
    //     method: "POST",
    //     header: { "Content-Type": "multipart/form-data" },
    //     body: resume,
    //   }
    // );
    // console.log(await response.json());
  };

  return (
    <div className="m-5">
      <h1 className="block mb-2 text-4xl font-medium text-gray-900 dark:text-white">
        Resume Generator
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Full Name:
          </label>
          <input
            type="text"
            id="name"
            className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="email"
          >
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor="phone"
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone Number:
          </label>
          <input
            type="text"
            id="phone"
            className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <h2 className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
          Education
        </h2>
        {education.map((edu, index) => (
          <div key={index}>
            <label
              htmlFor={`degree-${index}`}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Degree:
            </label>
            <input
              className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              id={`degree-${index}`}
              value={edu.degree}
              onChange={(e) =>
                handleEducationChange(index, "degree", e.target.value)
              }
              required
            />

            <label
              htmlFor={`university-${index}`}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              University:
            </label>
            <input
              className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              id={`university-${index}`}
              value={edu.university}
              onChange={(e) =>
                handleEducationChange(index, "university", e.target.value)
              }
              required
            />

            <label
              htmlFor={`year-${index}`}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Year of Graduation:
            </label>
            <input
              className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              id={`year-${index}`}
              value={edu.year}
              onChange={(e) =>
                handleEducationChange(index, "year", e.target.value)
              }
              required
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddEducation}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Education
        </button>

        <h2 className="block mb-2 text-xl font-medium text-gray-900 dark:text-white mt-5">
          Work Experience
        </h2>
        {experience.map((exp, index) => (
          <div key={index}>
            <label
              htmlFor={`company-${index}`}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Company Name:
            </label>
            <input
              className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              id={`company-${index}`}
              value={exp.company}
              onChange={(e) =>
                handleExperienceChange(index, "company", e.target.value)
              }
              required
            />

            <label
              htmlFor={`position-${index}`}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Position:
            </label>
            <input
              className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              id={`position-${index}`}
              value={exp.position}
              onChange={(e) =>
                handleExperienceChange(index, "position", e.target.value)
              }
              required
            />

            <label
              htmlFor={`duration-${index}`}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Duration of Employment:
            </label>
            <input
              className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              id={`duration-${index}`}
              value={exp.duration}
              onChange={(e) =>
                handleExperienceChange(index, "duration", e.target.value)
              }
              required
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddExperience}
          className="text-gray-900 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Experience
        </button>

        <h2 className="block mb-2 text-xl font-medium text-gray-900 dark:text-white mt-5">
          Skills
        </h2>
        {skills.map((skill, index) => (
          <div key={index}>
            <input
              className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={skill}
              onChange={(e) => handleSkillsChange(index, e.target.value)}
              required
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddSkill}
          className="text-gray-900 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Skill
        </button>
        <div className="text-center">
          <button
            type="submit"
            className="text-gray-900 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Generate Resume
          </button>
        </div>
      </form>
    </div>
  );
}
