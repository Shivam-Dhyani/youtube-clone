const LeftNavMenuItem = (props) => {
  const { name, className, icon, onClick } = props;
  return (
    <div
      className={`text-white flex items-center px-4 py-2 gap-3 rounded-lg mx-3 my-[2px] cursor-pointer ${className} hover:bg-white/[0.15]`}
      onClick={onClick}
    >
      <span className="text-xl">{icon}</span>
      {name}
    </div>
  );
};

export default LeftNavMenuItem;
