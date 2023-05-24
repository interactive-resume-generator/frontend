import { useState } from 'react';

export default function ResumeForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [education, setEducation] = useState([{ degree: '', university: '', year: '' }]);
  const [experience, setExperience] = useState([{ company: '', position: '', duration: '' }]);
  const [skills, setSkills] = useState(['']);

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
    setEducation([...education, { degree: '', university: '', year: '' }]);
  };

  const handleAddExperience = () => {
    setExperience([...experience, { company: '', position: '', duration: '' }]);
  };

  const handleAddSkill = () => {
    setSkills([...skills, '']);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const resume = {
  //     name,
  //     email,
  //     phone,
  //     education,
  //     experience,
  //     skills,
  //   };
  //   console.log(resume); // Replace with your logic to save or process the resume data
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resume = new FormData();
    const data = {
      "name": name,
      "email": name,
      "phone": name,
      "education": name,
      "experience": name,
      "skills": name
    };
    resume.append('name', "Ethan's Resume")
    resume.append('data', JSON.stringify(data))
    resume.append('format', JSON.stringify({"things":"stuff"}))
    const response = await fetch('http://localhost:8000/api/v1/resumes/create/', {
        method: 'POST',
        header: {'Content-Type': "multipart/form-data"},
        body: resume
      })
    console.log(await response.json())
  };

  return (
    <div>
      <h1>Resume Generator</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="email">Email Address:</label>
        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="phone">Phone Number:</label>
        <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <label htmlFor={`degree-${index}`}>Degree:</label>
            <input
              type="text"
              id={`degree-${index}`}
              value={edu.degree}
              onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
              required
            />

            <label htmlFor={`university-${index}`}>University:</label>
            <input
              type="text"
              id={`university-${index}`}
              value={edu.university}
              onChange={(e) => handleEducationChange(index, 'university', e.target.value)}
              required
            />

            <label htmlFor={`year-${index}`}>Year of Graduation:</label>
            <input
              type="text"
              id={`year-${index}`}
              value={edu.year}
              onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={handleAddEducation}>Add Education</button>

        <h2>Work Experience</h2>
        {experience.map((exp, index) => (
          <div key={index}>
            <label htmlFor={`company-${index}`}>Company Name:</label>
            <input
              type="text"
              id={`company-${index}`}
              value={exp.company}
              onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
              required
            />

            <label htmlFor={`position-${index}`}>Position:</label>
            <input
              type="text"
              id={`position-${index}`}
              value={exp.position}
              onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
              required
            />

            <label htmlFor={`duration-${index}`}>Duration of Employment:</label>
            <input
              type="text"
              id={`duration-${index}`}
              value={exp.duration}
              onChange={(e) => handleExperienceChange(index, 'duration', e.target.value)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={handleAddExperience}>Add Experience</button>

        <h2>Skills</h2>
        {skills.map((skill, index) => (
          <div key={index}>
            <input
              type="text"
              value={skill}
              onChange={(e) => handleSkillsChange(index, e.target.value)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={handleAddSkill}>Add Skill</button>

        <button type="submit">Generate Resume</button>
      </form>
    </div>
  );
}
