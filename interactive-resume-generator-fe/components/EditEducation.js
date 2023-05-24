import {Button, Label, TextInput} from "flowbite-react";
import { useState } from "react";

export default function EditEducation({ onEducationChange, onClose }){
    const [education, setEducation] = useState([{degree:'', university:'', year:'' }])

    const handleAddEducation = () => {
        setEducation([...education, { degree: '', university: '', year: '' }]);
  };

   const handleEducationChange = (idx, field, value) => {
        const updatedEducation = [...education];
        updatedEducation[idx][field] = value;
        onEducationChange(updatedEducation)
        setEducation(updatedEducation);
   };

   const handleSubmit = () => {
   //     insert back end logic

     onClose();
   }

   console.log(education)

    return (
        <>
            <div>
                <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                    <h3 className='text-xl font-medium text-gray-900 dark:text-white'>
                        Edit Education
                    </h3>
                    <div>
                        {education.map((edu, idx)=> (
                            <div key={idx} className='mb-2 block'>
                                <Label
                                    value={idx + 1}
                                />
                                <TextInput
                                  type="text"
                                  placeholder="Degree"
                                  value={edu.degree}
                                  onChange={(e) =>
                                    handleEducationChange(idx, "degree", e.target.value)
                                  }
                                />
                                <TextInput
                                  type="text"
                                  placeholder="University"
                                  value={edu.university}
                                  onChange={(e) =>
                                    handleEducationChange(idx, "university", e.target.value)
                                  }
                                />
                                <TextInput
                                  type="text"
                                  placeholder="Year"
                                  value={edu.year}
                                  onChange={(e) =>
                                    handleEducationChange(idx, "year", e.target.value)
                                  }
                                />
                            </div>
                        ))}
                        <Button onClick={handleAddEducation}>Add More</Button>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </div>
                </div>
            </div>
        </>
    )
}