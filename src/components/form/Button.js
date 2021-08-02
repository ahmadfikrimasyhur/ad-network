const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`${
        props.inverted
          ? "text-infleux-700 hover:text-infleux-800 ring-1 ring-infleux-700"
          : "text-white bg-infleux-700 hover:bg-infleux-800"
      } disabled:opacity-50 disabled:cursor-not-allowed	font-semibold py-2 px-4 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-infleux-500 focus:ring-offset-2`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
