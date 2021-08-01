import { useEffect, useState } from "react";
import axios from "axios";

import { AuthenticationHeader } from "../../services/auth";

const CampaignTable = () => {
  const currUser = JSON.parse(localStorage.getItem("user"));

  const [data, setData] = useState([]);
  const fetchCampaigns = async (e) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/campaign/${currUser.id}`,
        {
          headers: AuthenticationHeader(),
        }
      );
      console.log(response);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <table className="table-fixed shadow-lg bg-gray-50 w-full text-gray-800">
      <thead>
        <tr>
          <th className="w-4/6 bg-blue-200 border text-left px-8 py-2">
            Campaign Name
          </th>
          <th className="w-1/8 bg-blue-200 border text-left px-8 py-2">Bid</th>
          <th className="w-1/8 bg-blue-200 border text-left px-8 py-2">
            Conversion Type
          </th>
          <th className="w-1/8 bg-blue-200 border text-left px-8 py-4">
            Targeting
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((campaign) => (
          <tr>
            <td className="border px-8 py-3">{campaign.name}</td>
            <td className="border px-8 py-3">
              {campaign.bid[0].cost} {campaign.bid[0].currency}
            </td>
            <td className="border px-8 py-3">{campaign.conversion}</td>
            <td className="border px-8 py-3">
              {campaign.country ? (
                <img
                  alt={`${campaign.country} flag`}
                  src={`https://www.countryflags.io/${campaign.country}/flat/24.png`}
                  className="rounded-md"
                />
              ) : (
                `World-wide`
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CampaignTable;
