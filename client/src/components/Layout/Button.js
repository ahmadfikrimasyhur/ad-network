const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`${
        props.inverted
          ? "text-infleux-700 hover:text-infleux-800 ring-1 ring-infleux-700"
          : "text-white bg-infleux-700 hover:bg-infleux-800"
      } disabled:opacity-50 disabled:cursor-not-allowed	font-semibold md:py-2 md:px-4 py-1 px-2 text-xs md:text-base rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-infleux-500 focus:ring-offset-2 ${
        props.className
      }`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
