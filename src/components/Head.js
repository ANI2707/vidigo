import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch=useDispatch();

  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }
  return (
    <div className=" grid grid-flow-col p-4 shadow-lg">
      <div className="flex  col-span-1">
        <div  className="cursor-pointer">
          <MenuIcon onClick={toggleMenuHandler}/>
        </div>

        <img
          className="h-8 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
          alt=""
        />
      </div>
      <div className="col-span-10 text-center">
        <input
          className="w-1/2 border border-gray-400 px-4 py-2 rounded-l-full"
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          Search
        </button>
      </div>
      <div className=" col-span-1">
        <AccountCircleIcon />
      </div>
    </div>
  );
};

export default Head;
