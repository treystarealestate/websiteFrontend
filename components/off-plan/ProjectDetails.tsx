import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ProjectDetails = () => {
  return (
    <div>
      <div className="bg-darkGold p-3 rounded-4 mb-3">
        <Row className="justify-content-center g-3">
          <Col xs="12" lg="4">
            <p className="mb-0 fs-14">Starting from: <span className="fw-bold">AED 3,00,000</span></p>
          </Col>
          <Col xs="12" lg="4">
            <p className="mb-0 fs-14">Starting Size: <span className="fw-bold">500 Sq.Ft</span></p>

          </Col>
          <Col xs="12" lg="4">
            <p className="mb-0 fs-14">Bedrooms: <span className="fw-bold">1,2,3</span></p>

          </Col>
          <Col xs="12" lg="4">
            <p className="mb-0 fs-14">Property Type: <span className="fw-bold">Apartment</span></p>
          </Col>
          <Col xs="12" lg="4">
            <p className="mb-0 fs-14">Developer: <span className="fw-bold">DAMAC</span></p>

          </Col>
          <Col xs="12" lg="4">
            <p className="mb-0 fs-14">Handover: <span className="fw-bold">Q4 2025</span></p>

          </Col>
        </Row>
      </div>
      <div className="descCont">
        <p className="text-para">
          Cove Edition 3 in Dubailand is an exceptional residential development that blends modern luxury with the warmth of community living. Nestled in the dynamic Dubailand district, it features a variety of meticulously designed apartments that cater to diverse tastes and needs, showcasing a perfect balance of style and functionality. Each residence is thoughtfully crafted with high-quality finishes, spacious layouts, and expansive windows that allow natural light to flow seamlessly, creating a tranquil and inviting atmosphere.
        </p>
        <p className="text-para">

          The development boasts an impressive array of amenities to enhance residents' quality of life. Beautifully landscaped gardens, state-of-the-art fitness centers, sparkling swimming pools, and dedicated children’s play areas provide spaces for relaxation, wellness, and recreation. Additionally, Cove Edition 3 is surrounded by an array of conveniences, including retail outlets, schools, healthcare facilities, and leisure destinations, ensuring that everything you need is within easy reach.
        </p>

        <p className="text-para">
          Strategically located in Dubailand, Cove Edition 3 offers excellent connectivity to key parts of the city. With quick access to major road networks, residents can easily reach Downtown Dubai, Dubai Marina, and Dubai International Airport. This prime location, combined with its premium features and serene environment, makes Cove Edition 3 an ideal choice for families and professionals seeking a harmonious blend of comfort, convenience, and modern living.
        </p>
      </div>
    </div>
  )
}

export default ProjectDetails