import {Avatar, Dropdown, Modal, Navbar} from "flowbite-react";
import { useState } from 'react';
import EditEducation from "@/components/EditEducation";
import EditExperience from "@/components/EditExperience";
import EditSkills from "@/components/EditSkills";


export default function Nav({ setEducation, setExperience, setSkills }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => {
        setModalContent(content);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setModalContent(null);
    }

    const onEducationChange = (education) => {
        setEducation(education);
    }

    const onExperienceChange = (experience) => {
        setExperience(experience);
    }

    const onSkillsChange = (skills) => {
        setSkills(skills)
    }

    return (
        <>
            <Navbar
                fluid={true}
            >
                <div className='flex md:order-2'>
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt='User settings' img={null} rounded={true}/>} >
                        <Dropdown.Header>
                            <span className='block text-sm'>
                                tester
                            </span>
                            <span className='block truncate text-sm font-medium'>
                                test@test.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Sign Out
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle/>
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href='/' active={true}>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href='#' onClick={() => openModal(<EditEducation
                        onEducationChange={onEducationChange}
                        onClose={closeModal}/>)}>
                        Education
                    </Navbar.Link>
                    <Navbar.Link href='#' onClick={() => openModal(<EditExperience
                        onExperienceChange={onExperienceChange}
                        onClose={closeModal}/>)}>
                        Experience
                    </Navbar.Link>
                    <Navbar.Link href='#' onClick={() => {
                        openModal(
                            <EditSkills
                            onSkillsChange={onSkillsChange}
                            onClose={closeModal}
                            />)}}>
                        Skills
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            {modalVisible && (
                <Modal
                    id='edit_modal'
                    show={modalVisible}
                    size='md'
                    popup={true}
                    onClose={closeModal}>
                    <Modal.Header/>
                    <Modal.Body>{modalContent}</Modal.Body>

                </Modal>
            )}
        </>
    )
}