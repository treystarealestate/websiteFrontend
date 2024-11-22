import Image from "next/image";
import Link from "next/link";
import { Badge, Button, Card } from "react-bootstrap";
function PropertyCard({ }) {
  return (
    <>
      <Card >
      <Card.Img className="projImg" variant="top" src="/assets/frontend/images/about.jpg" />
      <div className="topRightCont">
        <Badge className="bg-gold" text="dark">
            Q4 2025
        </Badge>
      </div>
      <Card.Body className="bg-offwhite">
        <Card.Title>Damac Sun City</Card.Title>
       <div className="d-flex justify-content-between">
        <div className="my-auto">
            <span className="text-gold">Damac</span>
        </div>
        <div className="my-auto">
            <Button className="btn-main-sm p-1"><span className='align-top'>Pre Register</span>&nbsp;<i className="bi bi-arrow-up-right-circle-fill text-gold"></i></Button>
        </div>
       </div>
      </Card.Body>
    </Card>
    </>
  );
}

export default PropertyCard;
