import { useState, useEffect } from "react";
import CampaignCreationModal from "../Campaign/CampaignCreationModal";
import Button from "../form/Button.js";
import CampaignTable from "../Campaign/CampaignTable";
import { Logout, AuthenticationHeader } from "../../services/auth";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const currUser = JSON.parse(localStorage.getItem("user"));

  const [isCreating, setIsCreating] = useState(false);
  const [list, setList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCampaign = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:3001/campaign/${currUser.id}`,
        {
          headers: AuthenticationHeader(),
        }
      );
      setList(response.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
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
        <div className="flex-1 m-10 p-5 shadow-2xl bg-gray-50 rounded-md space-y-5 min-w-full	">
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
            {isLoading ? (
              <div className="w-full flex flex-col justify-center content-center items-center space-y-5">
                <FontAwesomeIcon
                  icon={faCircleNotch}
                  className="animate-spin text-center"
                  size={"3x"}
                />
                <p className="font-bold text-2xl text-gray-800">
                  Loading, please wait...
                </p>
              </div>
            ) : (
              <CampaignTable
                list={list}
                onClick={openCampaignForm}
                deleteCampaign={deleteCampaign}
                fetchCampaign={fetchCampaign}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
