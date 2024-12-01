import Image from "next/image";
import Link from "next/link";
import { Badge, Card } from "react-bootstrap";

interface PropertyCardProps {
  openModal: (projectName: string, fileUrl: string, formName: string) => void;
  project: { // Define the project prop with dynamic data
    title: string;
    image: string;
    price: string;
    bedrooms: string;
    developer: string;
    completionDate: string;
    slug: string;
  };
}

const PropertyCard: React.FC<PropertyCardProps> = ({ openModal, project }) => {
  return (
    <>
    {
      project && (
        <Card className="rounded-4 bg-transparent">
        <Link href={`/off-plan/${project?.slug}`}>
          <Card.Img className="projImg" variant="top" src={project.image} />
          <div className="topRightCont">
            <Badge className="bg-gold" text="light">
              {project.completionDate}
            </Badge>
          </div>
        </Link>
        <Card.Body className="bg-offwhite">
          <Link href={`/off-plan/${project?.slug}`}>
            <Card.Title className="mb-1">{project.title}</Card.Title>
          </Link>
          <h6 className="fw-bold text-gold">Starting Price: {project.price}</h6>
          <div className="d-flex justify-content-start my-2">
            <div className="my-auto">
              <p className="text-desc mb-0">
                <img src="/assets/frontend/images/icons/bedroom.png" alt="bedroom" className="img-fluid" width="30px" />
                &nbsp;<span className="align-middle">{project.bedrooms} BR | Apartment</span>
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="my-auto">
              <span className="text-gold">{project.developer}</span>
            </div>
            <div className="my-auto">
              <button className="btn-main-sm" onClick={() => openModal(project.title, '', "Pre-Register Now")}>
                <span className="align-top">Pre Register </span>&nbsp;<i className="bi bi-arrow-up-right-circle-fill align-top text-gold"></i>
              </button>
            </div>
          </div>
        </Card.Body>
      </Card>
      )
    }
      
    </>
  );
}

export default PropertyCard;
