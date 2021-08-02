import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, faQuestion } from "@fortawesome/free-solid-svg-icons";
import Button from "../form/Button";

const CampaignTable = (props) => {
  return (
    <div>
      {props.list ? (
        <table className="table-fixed shadow-lg bg-gray-50 w-full text-gray-800">
          <thead>
            <tr>
              <th className="w-3/6 bg-blue-200 border text-left px-8 py-2">
                Campaign Name
              </th>
              <th className="w-1/8 bg-blue-200 border text-left px-8 py-2">
                Bid
              </th>
              <th className="w-1/8 bg-blue-200 border text-center px-8 py-2">
                Conversion Type
              </th>
              <th className="w-1/8 bg-blue-200 border text-left px-8 py-4">
                Targeting
              </th>
              <th className="w-1/8 bg-blue-200 border text-left px-8 py-4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {props.list.map((campaign) => (
              <tr key={campaign._id}>
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
                <td className="border px-8 py-3 space-x-2">
                  <Button>
                    <FontAwesomeIcon icon={faPen} />
                  </Button>
                  <Button
                    onClick={() => {
                      props.deleteCampaign(campaign._id);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="w-full flex flex-col justify-center content-center items-center space-y-5">
          <FontAwesomeIcon
            icon={faQuestion}
            className="text-center"
            size={"3x"}
          />
          <p className="font-bold text-2xl text-gray-800">
            Oh no! You do not have campaigns. Add one!
          </p>
          <Button onClick={props.onClick} className="text-xl">
            Create my first Campaign
          </Button>
        </div>
      )}
    </div>
  );
};

export default CampaignTable;
