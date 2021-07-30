import { useEffect, useState } from "react";
import axios from "axios";

const CampaignTable = () => {
  const [data, setData] = useState([]);

  const fetchCampaigns = async (e) => {
    try {
      const response = await axios.get("http://localhost:3001/fetch");
      console.log(response);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []); //TODO: UPDATE WHEN CREATING NEW CAMPAIGN

  return (
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Campaign Name</th>
          <th>Bid</th>
          <th>Targeting</th>
        </tr>
      </thead>
      <tbody>
        {data.map((campaign) => (
          <tr>
            <td>{campaign.name}</td>
            <td>
              {campaign.bid[0].cost} {campaign.bid[0].currency}
            </td>
            <td>
              {campaign.country ? (
                <img
                  alt={`${campaign.country} flag`}
                  src={`https://www.countryflags.io/${campaign.country}/flat/24.png`}
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
