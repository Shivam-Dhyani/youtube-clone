const LeftNavMenuItem = (props) => {
  const { name, type, icon } = props;
  return (
    <div className="text-white flex items-center px-4 py-5 gap-5 rounded-sm">
      {icon}
      {name}
    </div>
  );
};

export default LeftNavMenuItem;
