import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, faQuestion } from "@fortawesome/free-solid-svg-icons";
import Button from "../Layout/Button";

const CampaignTable = (props) => {
  return (
    <div>
      {props.list ? (
        <table className="table-fixed shadow-lg bg-gray-50 w-full text-white">
          <thead>
            <tr className="text-xs md:text-base">
              <th className="w-3/12 bg-infleux-200 border text-left px-3 md:px-8 md:py-2 md:w-3/6">
                Campaign Name
              </th>
              <th className="w-2/12 md:w-1/8 bg-infleux-200 border text-center py-2">
                Bid
              </th>
              <th className="w-3/12 md:w-1/8 bg-infleux-200 border text-center py-2">
                Conversion Type
              </th>
              <th className="w-2/12 md:w-1/8 bg-infleux-200 border text-center py-4">
                Target
              </th>
              <th className="w-2/12 md:w-1/8 bg-infleux-200 border text-center py-4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-xs md:text-base text-gray-800">
            {props.list.map((campaign) => (
              <tr key={campaign._id}>
                <td className="border px-3 py-1 md:px-8 md:py-3">
                  {campaign.name}
                </td>
                <td className="border text-center px-3 py-1 md:px-8 md:py-3">
                  {campaign.bid[0].cost} {campaign.bid[0].currency}
                </td>
                <td className="border text-center px-3 py-1 md:px-8 md:py-3">
                  {campaign.conversion}
                </td>
                <td className="border text-center px-3 py-1 md:px-8 md:py-3">
                  <img
                    alt={`${campaign.country} flag`}
                    src={`https://www.countryflags.io/${campaign.country}/flat/24.png`}
                    className="rounded-md text-center mx-auto"
                  />
                </td>
                <td className="border px-3 py-1 md:px-8 md:py-3 space-y-2 md:px-auto">
                  {/* <Button>
                    <FontAwesomeIcon icon={faPen} />
                  </Button> */}
                  <div className="flex content-center justify-center items-center">
                    <Button
                      onClick={() => {
                        props.deleteCampaign(campaign._id);
                      }}
                      className="text-center"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </div>
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
          <p className="font-bold text-center text-2xl text-gray-800">
            Oh no! You do not have campaigns. Add one!
          </p>
          <Button onClick={props.onClick} className="text-lg md:text-2xl">
            Create my first Campaign
          </Button>
        </div>
      )}
    </div>
  );
};

export default CampaignTable;
