import { useState, useEffect } from "react";
import CreateCampaignForm from "../form/CreateCampaignForm.js";
import CampaignTable from "../Campaign/CampaignTable";

const Dashboard = () => {
  const [isCreating, setIsCreating] = useState(false);

  const openCampaignForm = () => {
    setIsCreating(true);
  };

  const closeCampaignForm = () => {
    setIsCreating(false);
  };

  return (
    <div className="container mt-5 box">
      <div className="columns">
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
      <div className="columns">
        <div className="column is-full">
          <CampaignTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
