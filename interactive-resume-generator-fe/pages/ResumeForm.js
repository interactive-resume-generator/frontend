import React, { useState } from 'react';
import './ResumeForm.css';

export default function ResumeForm() {
  // ...
}

export default function ResumeForm() {
  const [resumeName, setResumeName] = useState('');
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [education, setEducation] = useState([{ degree: '', university: '', year: '' }]);
  const [experience, setExperience] = useState([{ company: '', position: '', duration: '' }]);
  const [skills, setSkills] = useState(['']);

  const handlePersonalInfoChange = (field, value) => {
    setPersonalInfo(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resume = {
      resumeName,
      personalInfo,
      education,
      experience,
      skills,
    };

    try {
      const response = await fetch('http://example.com/api/resumes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resume),
      });

      if (response.ok) {
        console.log('Resume data saved successfully!');
        // Redirect to success page or perform any additional actions
      } else {
        console.log('Error saving resume data.');
        // Display error message or handle the error in an appropriate way
      }
    } catch (error) {
      console.log('An error occurred while saving the resume data:', error);
      // Display error message or handle the error in an appropriate way
    }
  };

  return (
    <div>
      <h1>Resume Generator</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="resume-name">Resume Name:</label>
        <input type="text" id="resume-name" value={resumeName} onChange={(e) => setResumeName(e.target.value)} required />

        <h2>Personal Information</h2>
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          id="name"
          value={personalInfo.name}
          onChange={(e) => handlePersonalInfoChange('name', e.target.value)}
          required
        />

        <label htmlFor="email">Email Address:</label>
        <input
          type="text"
          id="email"
          value={personalInfo.email}
          onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
          required
        />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="text"
          id="phone"
          value={personalInfo.phone}
          onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
          required
        />

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
