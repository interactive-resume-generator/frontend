import { Button, TextInput } from "flowbite-react";
import { useState } from "react";

export default function EditSkills({ onSkillsChange, onClose }) {
  const [skills, setSkills] = useState([""]);

  const handleAddSkill = () => {
    setSkills([...skills, ""]);
  };

  const handleSkillChange = (idx, value) => {
    const updatedSkills = [...skills];
    updatedSkills[idx] = value;
    onSkillsChange(updatedSkills);
    setSkills(updatedSkills);
  };

  const handleSubmit = () => {
    // back end logic

    onClose();
  };

  return (
    <>
      <div>
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit Skills</h3>
        <div>
          {skills.map((skill, idx) => (
            <div key={idx} className="mb-2 block">
              <TextInput
                type="text"
                placeholder="Skill"
                value={skill}
                onChange={(e) => handleSkillChange(idx, e.target.value)}
              />
            </div>
          ))}
          <Button onClick={handleAddSkill}>Add More</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </>
  );
}