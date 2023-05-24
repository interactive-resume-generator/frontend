import { Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";

export default function EditExperience({ onExperienceChange, onClose }) {
  const [experience, setExperience] = useState([{ position: "", company: "", duration: "" }]);

  const handleAddExperience = () => {
    setExperience([...experience, { position: "", company: "", duration: "" }]);
  };

  const handleExperienceChange = (idx, field, value) => {
    const updatedExperience = [...experience];
    updatedExperience[idx][field] = value;
    onExperienceChange(updatedExperience)
    setExperience(updatedExperience);
  };

  const handleSubmit = () => {
    // back end logic

    // Close the modal
    onClose();
  };

  return (
    <>
      <div>
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit Experience</h3>
        <div>
          {experience.map((exp, idx) => (
            <div key={idx} className="mb-2 block">
              <Label value={idx + 1} />
              <TextInput
                type="text"
                placeholder="Position"
                value={exp.position}
                onChange={(e) => handleExperienceChange(idx, "position", e.target.value)}
              />
              <TextInput
                type="text"
                placeholder="Company"
                value={exp.company}
                onChange={(e) => handleExperienceChange(idx, "company", e.target.value)}
              />
              <TextInput
                type="text"
                placeholder="Duration"
                value={exp.duration}
                onChange={(e) => handleExperienceChange(idx, "duration", e.target.value)}
              />
            </div>
          ))}
          <Button onClick={handleAddExperience}>Add More</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
    </>
  );
}