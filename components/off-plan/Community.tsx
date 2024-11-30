import React from 'react';
import Link from 'next/link';

interface CommunityProps {
  project: {
    title: string;
    fileUrl: string;
  };
  openModal: (projectName: string, fileUrl: string, formName: string) => void; // Accept openModal as a prop
}

const Community: React.FC<CommunityProps> = ({ project, openModal }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-lg-6 col-md-6">
        <div className="descCont p-1 p-md-3 p-lg-5">
          <h4 className="text-subhead">Damac Hills 2</h4>
          <p className="text-para">
            DAMAC Hills 2 offers residents a more peaceful and relaxed lifestyle than living in the city center.
            There are plenty of green spaces and a golf course, and the community is safe and family-friendly.
            There are several attractions at DAMAC Hills 2.
          </p>
          <p className="text-para">
            For instance, the Sports Town at DAMAC Hills 2 is the perfect place for a family of four or a large group
            of friends. It includes a Petting Farm, a Bird Enclosure, a football field, a jogging track, and a tennis court.
          </p>
        </div>
      </div>
      <div className="col-12 col-lg-6 col-md-6">
        <div className="descCont p-1 p-md-3 p-lg-5">
          <h4 className="text-subhead">Near By</h4>
          <ul>
            <li className="text-para">10 mins to Carrefour</li>
            <li className="text-para">20 mins to The Dubai Mall</li>
            <li className="text-para">30 mins to DXB Airport</li>
            <li className="text-para">10 mins to Golf</li>
            <li className="text-para">10 mins to Mall</li>
          </ul>

          {/* Button that triggers the modal, passing project details */}
          <button
            onClick={() => openModal(project.title, project.fileUrl, "Download Brochure")} // Open modal with relevant data
            className="btn btn-main-white mb-3"
          >
            <span className="align-top">Download Brochure </span>&nbsp;
            <i className="bi bi-arrow-up-right-circle-fill text-gold"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
