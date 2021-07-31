import { useState } from "react";

const Button = (props) => {
  const [inverted, setInverted] = useState(props.inverted);

  return (
    <button
      type={props.type}
      className={`${
        inverted
          ? "text-blue-700 hover:bg-gray-100 ring-1 ring-blue-700"
          : "text-white bg-blue-700 hover:bg-blue-800"
      } disabled:opacity-50 disabled:cursor-not-allowed	font-semibold py-2 px-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
