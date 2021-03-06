import { Transition, Dialog } from "@headlessui/react";
import { Fragment, useRef } from "react";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NewCampaignForm from "./NewCampaignForm";

const CampaignCreationModal = (props) => {
  const closeButton = useRef(null);

  return (
    <Transition appear show={props.show} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={props.onClose}
        initialFocus={closeButton}
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-11/12 md:w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <div className="flex justify-end">
                <button type="button" onClick={props.onClose} ref={closeButton}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              <Dialog.Title
                as="h2"
                className="text-2xl text-center font-medium leading-6 text-gray-900 mb-5"
              >
                Create Campaign
              </Dialog.Title>
              <div className="mt-2">
                <NewCampaignForm
                  close={props.onClose}
                  fetchCampaign={props.fetchCampaign}
                />
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CampaignCreationModal;
