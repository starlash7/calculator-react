const Button = ({ name, onClickButton }) => {
  return (
    <button
      className="bg-green-100 w-10 h-10 rounded-md flex justify-center items-center shadow-sm
      }"
      onClick={onClickButton}
    >
      {name}
    </button>
  );
};

export default Button;
