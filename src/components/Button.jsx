const Button = ({ children, bgcolor = "bg-gray-2", icon }) => {
  return (
    <button
      className={`${bgcolor} h-[46px] w-[157px] cursor-pointer rounded-[4px] font-bold text-white capitalize ${icon ? "flex items-center justify-center" : ""}`}
    >
      {children}
      {icon && (
        <img
          className="relative top-[2px] left-[5px]"
          src={icon}
        />
      )}
    </button>
  );
};
export default Button;
