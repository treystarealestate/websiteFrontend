
import React from 'react'
import { Button } from 'react-bootstrap'
interface AgentDetailsProps {
  project: {
    title: string;
    fileUrl: string;
  };
  openModal: (projectName: string, fileUrl: string, formName: string) => void; // Accept openModal as a prop
}

const AgentDetails: React.FC<AgentDetailsProps> = ({ project, openModal }) => {
  return (
    <div className="bg-black p-3 rounded-4 mb-3 text-white">
      <div className="my-3 text-center">
        <img src="/assets/frontend/images/team/Imran Chishti.webp" alt="Agent" className="mb-2 img-fluid agentImgOff d-block mx-auto" />
        <h5>Imran Chishti</h5>
      </div>
      <div className="d-flex justify-content-evenly pb-3 border-bottom">
        <div className="my-auto">
          <a href="" className="btn btn-main-white"><i className="bi bi-telephone"></i></a>
        </div>
        <div className="my-auto">
          <a href="" className="btn btn-main-white"><i className="bi bi-whatsapp"></i></a>
        </div>
        <div className="my-auto">
          <a href="" className="btn btn-main-white"><i className="bi bi-envelope"></i></a>
        </div>
      </div>
      <div className="d-grid gap-3 p-3">
      <Button className='btn-bg-white' onClick={() => openModal(project.title, project.fileUrl, "Book A Meeting with Agent")} size="lg">
        Book A Meeting
      </Button>
      <Button className='btn-main-white' onClick={() => openModal(project.title, project.fileUrl, "Download Brochure")} size="lg">
        Download Brochure
      </Button>
    </div>
    </div>
  )
}

export default AgentDetails
