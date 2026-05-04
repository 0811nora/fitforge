const Button = ({ text, style, type, icon = null }) => {
  const baseStyle = "cursor-pointer rounded-xl  py-2.5 text-white  transition-colors duration-300";

  return (
    <>
      <button className={`${baseStyle} ${style} `} type={type}>
        <div className="flex gap-3">
          {icon && <img src={icon} alt="" className="w-5" />}
          {text}
        </div>
      </button>
    </>
  );
};

export default Button;
