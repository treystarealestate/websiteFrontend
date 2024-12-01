import React from 'react';
import Link from 'next/link';
import parse from "html-react-parser";
interface CommunityProps {
  communityName?: string; // Optional property
  communityDescription?: string; // Optional property
  communityOtherDescription?: string; // Optional property
  openModal: (projectName: string, fileUrl: string, formName: string) => void;
}

const Community: React.FC<CommunityProps> = ({ communityName, communityDescription, communityOtherDescription, openModal }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-lg-6 col-md-6">
        <div className="descCont p-1 p-md-3 p-lg-5">
          <h4 className="text-subhead">{communityName}</h4>
          <div className="text-para">{communityDescription && parse(communityDescription)}
          </div>
  
        </div>
      </div>
      <div className="col-12 col-lg-6 col-md-6">
        <div className="descCont p-1 p-md-3 p-lg-5">
          <h4 className="text-subhead">Near By</h4>
          <div className="text-para">
        {communityOtherDescription && parse(communityOtherDescription)}
        </div>
          {/* Button that triggers the modal, passing project details */}
          <button
            onClick={() => openModal(communityName ?? "Unknown Agent", "", "Download Brochure")}
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
