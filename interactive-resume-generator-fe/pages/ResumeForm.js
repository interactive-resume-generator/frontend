import { useState } from 'react';

export default function ResumeForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resume = new FormData();
    const data = {
      "name": name,
      "email": email,
      "phone": phone,
      "education": education,
      "experience": experience,
      "skills": skills
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
    <div class='m-5'>
      <h1 class="block mb-2 text-4xl font-medium text-white dark:text-white">Resume Generator</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-6'>
          <label htmlFor="name" class="block mb-2 text-sm font-medium text-white dark:text-white">Full Name:</label>
          <input type='text' id='name' class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={name} onChange={(e) => setName(e.target.value)} required />
          <label class="block mb-2 text-sm font-medium text-white dark:text-white" htmlFor="email">Email Address:</label>
          <input type="email" id="email" class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="phone" class="block mb-2 text-sm font-medium text-white dark:text-white">Phone Number:</label>
          <input type="text" id="phone" class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <h2 class="block mb-2 text-xl font-medium text-white dark:text-white">Education</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <label htmlFor={`degree-${index}`} class="block mb-2 text-sm font-medium text-white dark:text-white">Degree:</label>
            <input
              class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              id={`degree-${index}`}
              value={edu.degree}
              onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
              required
            />

            <label htmlFor={`university-${index}`} class="block mb-2 text-sm font-medium text-white dark:text-white">University:</label>
            <input
              class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              id={`university-${index}`}
              value={edu.university}
              onChange={(e) => handleEducationChange(index, 'university', e.target.value)}
              required
            />

            <label htmlFor={`year-${index}`} class="block mb-2 text-sm font-medium text-white dark:text-white">Year of Graduation:</label>
            <input
              class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              id={`year-${index}`}
              value={edu.year}
              onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={handleAddEducation} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Education</button>

        <h2 class="block mb-2 text-xl font-medium text-white dark:text-white mt-5">Work Experience</h2>
        {experience.map((exp, index) => (
          <div key={index}>
            <label htmlFor={`company-${index}`} class="block mb-2 text-sm font-medium text-white dark:text-white">Company Name:</label>
            <input
              class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              id={`company-${index}`}
              value={exp.company}
              onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
              required
            />

            <label htmlFor={`position-${index}`} class="block mb-2 text-sm font-medium text-white dark:text-white">Position:</label>
            <input
              class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              id={`position-${index}`}
              value={exp.position}
              onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
              required
            />

            <label htmlFor={`duration-${index}`} class="block mb-2 text-sm font-medium text-white dark:text-white">Duration of Employment:</label>
            <input
              class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              id={`duration-${index}`}
              value={exp.duration}
              onChange={(e) => handleExperienceChange(index, 'duration', e.target.value)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={handleAddExperience} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Experience</button>

        <h2 class="block mb-2 text-xl font-medium text-white dark:text-white mt-5">Skills</h2>
        {skills.map((skill, index) => (
          <div key={index}>
            <input
              class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={skill}
              onChange={(e) => handleSkillsChange(index, e.target.value)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={handleAddSkill} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Skill</button>
        <div class='text-center'>
          <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Generate Resume</button>
        </div>
      </form>
    </div>
  );
}
