const Button = ({ styles, title, onClickHandler, icon }) => (
  
    <div
      className={` flex flex-row items-center justify-center gap-2 py-4 px-6 h-[50px] bg-secondaryColor font-bold text-[18px] text-primaryColor outline-none rounded-xl ${styles}  `}
      onClick={onClickHandler}
    >
        {icon}
        <h2>{title}</h2>
    </div>
);

export default Button