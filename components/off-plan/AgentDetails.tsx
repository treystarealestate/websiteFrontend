import React from "react";
import { Button } from "react-bootstrap";
import { getCurrentUrl } from "@/src/utils/helpers/common";

interface Agent {
  name: string;
  contact?: string; // Optional, in case contact is not provided
  whatsapp?: string; // Optional, in case whatsapp is not provided
  email: string;
  image: string;
}

interface AgentDetailsProps {
  agent?: Agent; // Make 'agent' optional
  openModal: (projectName: string, fileUrl: string, formName: string) => void;
}

const AgentDetails: React.FC<AgentDetailsProps> = ({ agent, openModal }) => {
  const currentPageURL = getCurrentUrl();
  console.log(currentPageURL);

  return (
    <div className="bg-black p-3 rounded-4 mb-3 text-white">
      <div className="my-3 text-center">
        <img
          src={agent?.image || "/assets/frontend/images/team/default-agent.webp"}
          alt="Agent"
          className="mb-2 img-fluid agentImgOff d-block mx-auto"
        />
        <h5>{agent?.name}</h5>
      </div>
      <div className="d-flex justify-content-evenly pb-3 border-bottom">
        {agent?.contact && (
          <div className="my-auto">
            <a href={`tel:${agent.contact}`} className="btn btn-main-white">
              <i className="bi bi-telephone"></i>
            </a>
          </div>
        )}
        {agent?.whatsapp && (
          <div className="my-auto">
            <a
            target="_blnaket"
              href={`https://wa.me/${agent.whatsapp}?text=Hi, ${agent.name} Please let me know more about the following property ${currentPageURL}`}
              className="btn btn-main-white"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
        )}
        <div className="my-auto">
          <a href={`mailto:${agent?.email}`} className="btn btn-main-white">
            <i className="bi bi-envelope"></i>
          </a>
        </div>
      </div>
      <div className="d-grid gap-3 p-3">
        <Button
          className="btn-bg-white"
          onClick={() => openModal(agent?.name ?? "Unknown Agent", "", "Book A Meeting with Agent")}
          size="lg"
        >
          Book A Meeting
        </Button>
        <Button
          className="btn-main-white"
          onClick={() => openModal(agent?.name ?? "Unknown Agent", "", "Download Brochure")}
          size="lg"
        >
          Download Brochure
        </Button>
      </div>
    </div>
  );
};

export default AgentDetails;
