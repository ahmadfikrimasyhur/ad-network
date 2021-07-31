import { useState, useEffect } from "react";
import CampaignCreationModal from "../Campaign/CampaignCreationModal";
import Button from "../form/Button.js";
import CampaignTable from "../Campaign/CampaignTable";
import { Transition, Dialog } from "@headlessui/react";

const Dashboard = () => {
  const [isCreating, setIsCreating] = useState(false);

  const openCampaignForm = () => {
    setIsCreating(true);
  };

  const closeCampaignForm = () => {
    setIsCreating(false);
  };

  return (
    <section className="w-full bg-blue-500">
      <div className="container mx-auto flex justify-center	align-center items-center flex-col">
        <div className="flex-1 m-10 p-5 shadow-2xl bg-gray-50 rounded-md space-y-5">
          <div className="flex justify-between">
            <h1 className="font-bold text-3xl text-gray-800">Dashboard</h1>
            <Button onClick={openCampaignForm} disabled={isCreating}>
              Create Campaign
            </Button>
          </div>
          <CampaignCreationModal
            show={isCreating}
            onClose={closeCampaignForm}
          />
          <div>
            <CampaignTable />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
