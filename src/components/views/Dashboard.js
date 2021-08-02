import { useState, useEffect } from "react";
import CampaignCreationModal from "../Campaign/CampaignCreationModal";
import Button from "../form/Button.js";
import CampaignTable from "../Campaign/CampaignTable";
import { Logout, AuthenticationHeader } from "../../services/auth";
import axios from "axios";

const Dashboard = () => {
  const currUser = JSON.parse(localStorage.getItem("user"));

  const [isCreating, setIsCreating] = useState(false);
  const [list, setList] = useState([]);

  const fetchCampaign = async () => {
    try {
      setList([]);
      const response = await axios.get(
        `http://localhost:3001/campaign/${currUser.id}`,
        {
          headers: AuthenticationHeader(),
        }
      );
      setList(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCampaign = async (id) => {
    try {
      const response = await axios.delete("/campaign/delete/", {
        data: { id: id },
        headers: AuthenticationHeader(),
      });

      if (response) {
        fetchCampaign();
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCampaign();
  }, []);

  const openCampaignForm = () => {
    setIsCreating(true);
  };

  const closeCampaignForm = () => {
    setIsCreating(false);
  };

  return (
    <section className="w-full h-screen bg-blue-500">
      <div className="container mx-auto flex justify-center	align-center items-center flex-col">
        <div className="flex-1 m-10 p-5 shadow-2xl bg-gray-50 rounded-md space-y-5">
          <div className="flex justify-between">
            <h1 className="font-bold text-3xl text-gray-800">Dashboard</h1>
            <div className="space-x-2">
              <Button onClick={openCampaignForm} disabled={isCreating}>
                Create Campaign
              </Button>
              <Button onClick={Logout}>Logout</Button>
            </div>
          </div>
          <CampaignCreationModal
            show={isCreating}
            onClose={closeCampaignForm}
            fetchCampaign={fetchCampaign}
          />
          <div>
            <CampaignTable
              list={list}
              deleteCampaign={deleteCampaign}
              fetchCampaign={fetchCampaign}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
