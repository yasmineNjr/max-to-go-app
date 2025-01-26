const Button = ({ styles, title, onClickHandler, icon }) => (
  
    <div
      className={`cursor-pointer flex flex-row items-center justify-center gap-2 py-4 px-6 bg-primary font-bold h-[25px] text-foreground outline-none rounded-xl ${styles}  `}
      onClick={onClickHandler}
    >
        {icon}
        <h2>{title}</h2>
    </div>
);

export default Button