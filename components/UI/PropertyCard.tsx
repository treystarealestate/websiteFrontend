import Image from "next/image";
import Link from "next/link";
import { Badge, Card } from "react-bootstrap";
interface propertyProp {
  openModal: (projectName: string, fileUrl: string, formName: string) => void; // Accept openModal as a prop
}
const PropertyCard: React.FC<propertyProp> = ({ openModal }) => {
  return (
    <>
      <Card  className="rounded-4 bg-transparent">
        <Link href='/off-plan/damac-sun-city'>
      <Card.Img className="projImg" variant="top" src="/assets/frontend/images/about.jpg" />
      <div className="topRightCont">
        <Badge className="bg-gold" text="light">
            Q4 2025
        </Badge>
      </div>
      </Link>
      <Card.Body className="bg-offwhite">
      <Link href='/off-plan/damac-sun-city'><Card.Title className="mb-1">Damac Sun City</Card.Title></Link>
        <h6 className="fw-bold text-gold">Starting Price: AED 1.5M</h6>
        <div className="d-flex justify-content-start my-2">
          <div className="my-auto">
          <p className='text-desc mb-0'><img src="/assets/frontend/images/icons/bedroom.png" alt="bedroom" className="img-fluid" width="30px" />&nbsp;<span className='align-middle'>2 BR | Apartment</span></p>
          </div>
        </div>
       <div className="d-flex justify-content-between">
        <div className="my-auto">
            <span className="text-gold">Damac</span>
        </div>
        <div className="my-auto">
            <button className="btn-main-sm" onClick={() => openModal('Damac Suncity', '', "Pre-Register Now")}><span className='align-top'>Pre Register </span>&nbsp;<i className="bi bi-arrow-up-right-circle-fill align-top text-gold"></i></button>
        </div>
       </div>
      </Card.Body>
    </Card>
    </>
  );
}

export default PropertyCard
