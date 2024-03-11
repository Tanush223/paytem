import { Link } from "react-router-dom";

const BottomWarning = ({ lable, to, buttonText }) => {
  return (
    <>
      <div>
        <div className="">
          <div>{lable}</div>
        </div>
        <Link className="pointer underline pl-1 cursor-pointer" to={to}>
          {buttonText}
        </Link>
      </div>
    </>
  );
};
export default BottomWarning;
