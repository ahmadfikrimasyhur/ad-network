import { useState, useEffect } from "react";
import CreateCampaignForm from "../form/CreateCampaignForm.js";

const Dashboard = () => {
  const [isCreating, setIsCreating] = useState(false);

  const openCampaignForm = () => {
    setIsCreating(true);
  };

  const closeCampaignForm = () => {
    setIsCreating(false);
  };

  return (
    <div className="container mt-5 is-fullheight">
      <div className="columns box is-flex is-align-content-stretch	is-align-items-stretch	">
        <div className="column is-full">
          <h1 className="title">Dashboard</h1>

          {isCreating ? (
            <CreateCampaignForm close={closeCampaignForm} />
          ) : (
            <button className="button is-info" onClick={openCampaignForm}>
              Create Campaign
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
