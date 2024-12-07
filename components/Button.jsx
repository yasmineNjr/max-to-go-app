const Button = ({ styles, title, onClickHandler, icon }) => (
  
    <div
      className={` flex flex-row items-center justify-center gap-2 py-4 px-6 h-[50px] bg-secondaryColor font-bold text-[18px] text-primaryColor outline-none ${styles} rounded-xl `}
      onClick={onClickHandler}
    >
        {icon}
        <h2>{title}</h2>
    </div>
    // <button 
    //   type="button" 
    // >
    //   
    // </button>
);

export default Button