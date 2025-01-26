const CommandButton = ({ styles, title, onClickHandler, icon }) => (
  
    <div
      className={` flex flex-row items-center justify-center gap-2 py-4 px-6 h-[25px] w-fit font-bold text-[14px] text-primary border border-primary outline-none ${styles} rounded-xl `}
      onClick={onClickHandler}
    >
        {icon}
        <h2>{title}</h2>
    </div>
);

export default CommandButton