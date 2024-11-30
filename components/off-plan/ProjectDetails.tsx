import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ProjectDetails = () => {
  return (
    <div>
      <div className="bg-darkGold p-3 rounded-4">
      <Row className="justify-content-center g-3">
        <Col xs lg="4">
        <p className="mb-0 fs-14">Starting from: <span className="fw-bold">AED 3,00,000</span></p>
        </Col>
        <Col xs lg="4">
          <p className="mb-0 fs-14">Starting Size: <span className="fw-bold">500 Sq.Ft</span></p>

        </Col>
        <Col xs lg="4">
          <p className="mb-0 fs-14">Bedrooms: <span className="fw-bold">1,2,3</span></p>

        </Col>
        <Col xs lg="4">
        <p className="mb-0 fs-14">Property Type: <span className="fw-bold">Apartment</span></p>
        </Col>
        <Col xs lg="4">
          <p className="mb-0 fs-14">Developer: <span className="fw-bold">DAMAC</span></p>

        </Col>
        <Col xs lg="4">
          <p className="mb-0 fs-14">Handover: <span className="fw-bold">Q4 2025</span></p>

        </Col>
      </Row>
      </div>
    </div>
  )
}

export default ProjectDetails