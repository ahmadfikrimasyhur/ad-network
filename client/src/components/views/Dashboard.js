import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CampaignCreationModal from "../Campaign/CampaignCreationModal";
import Button from "../Layout/Button.js";
import CampaignTable from "../Campaign/CampaignTable";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

import { Logout, AuthenticationHeader } from "../../services/auth";

const Dashboard = () => {
  const currUser = JSON.parse(localStorage.getItem("user"));

  const [isCreating, setIsCreating] = useState(false);
  const [list, setList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const fetchCampaign = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/campaign/${currUser.id}`, {
        headers: AuthenticationHeader(),
      });
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
    // eslint-disable-next-line
  }, []);

  const openCampaignForm = () => {
    setIsCreating(true);
  };

  const closeCampaignForm = () => {
    setIsCreating(false);
  };

  return (
    <section className="w-full h-screen bg-gradient-to-r from-infleux-400 to-infleux-600 ">
      <div className="container mx-auto flex justify-center	align-center items-center flex-col p-5 ">
        <div className="flex-1 md:m-10 p-5 shadow-2xl bg-gray-50 rounded-md space-y-5 min-w-full	">
          <div className="flex justify-between items-center space-x-2">
            <h1 className="font-bold text-2xl md:text-3xl text-gray-800">
              Dashboard
            </h1>
            <div className="flex space-x-2">
              <Button onClick={openCampaignForm} disabled={isCreating}>
                Create Campaign
              </Button>
              <Button
                onClick={() => {
                  Logout();
                  history.push("/");
                }}
              >
                Logout
              </Button>
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
