import React from 'react'
import { Col, Row } from 'react-bootstrap'
import parse from "html-react-parser";
interface ProjectData {
  startingPrice?: string;
  startingSize?: string;
  bedrooms?: string | number[];
  propertyType?: string;
  developer?: string;
  handoverDate?: string;
  description?: string;
  permit_number?: string;
}

interface ProjectDetailsProps {
  projectData: ProjectData;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projectData }) => {
  const {
    startingPrice = "N/A",
    startingSize = "N/A",
    bedrooms = "N/A",
    propertyType = "N/A",
    developer = "N/A",
    handoverDate = "N/A",
    description = "",
    permit_number= ""
  } = projectData;
  
  return (
    <div>
      <div className="bg-darkGold p-3 rounded-4 mb-3">
        <Row className="justify-content-center g-3">
          <Col xs="12" lg="4">
            <p className="mb-0 fs-14">Starting from: <span className="fw-bold">AED {startingPrice}</span></p>
          </Col>
          <Col xs="12" lg="3">
            <p className="mb-0 fs-14">Starting Size: <span className="fw-bold">{startingSize} Sq.Ft</span></p>

          </Col>
          <Col xs="12" lg="3">
            <p className="mb-0 fs-14">Bedrooms: <span className="fw-bold">{bedrooms}</span></p>

          </Col>
          <Col xs="12" lg="3">
            <p className="mb-0 fs-14">Property Type: <span className="fw-bold">{propertyType}</span></p>
          </Col>
          <Col xs="12" lg="3">
            <p className="mb-0 fs-14">Developer: <span className="fw-bold">{developer}</span></p>

          </Col>
          <Col xs="12" lg="3">
            <p className="mb-0 fs-14">Handover: <span className="fw-bold">{handoverDate}</span></p>
          </Col>
           <Col xs="12" lg="3">
              <p className="mb-0 fs-14">Permit Number: <span className="fw-bold">{permit_number}</span></p>
            </Col>
        </Row>
        
      </div>
      <div className="descCont text-para">
      
        {description && parse(description)}
      
       
      </div>
    </div>
  )
}

export default ProjectDetails
