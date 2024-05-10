import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
// import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { addCacheResults, addSearchVideos } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions,setSuggestions]=useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const searchCache=useSelector((state) => state.search);


  

  const getSearchSuggestions = async () => {
    console.log("Api Call - " + searchQuery);
    const response = await fetch(
      `http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=${searchQuery}`
    );
    const textData = await response.text();

    // $(document).ready(function () {
    //   window.suggestCallBack = function (data) {
    //     var suggestions = [];
    //     $.each(data[1], function (key, val) {
    //       suggestions.push({ value: val[0] });
    //     });
    //     suggestions.length = 10;
    //     const valuesArray = suggestions.map((obj) => obj.value);
    //     setSuggestions(valuesArray);
    //     dispatch(cacheResults({ [searchQuery]: valuesArray }));
    //   };

    //   $("#search").autocomplete({
    //     source: function (request, response) {
    //       $.getJSON(
    //         "https://suggestqueries.google.com/complete/search?callback=?",
    //         {
    //           hl: "en",
    //           ds: "yt",
    //           jsonp: "suggestCallBack",
    //           q: request.term,
    //           client: "youtube",
    //         }
    //       );
    //     },
    //   });
    // });


    //update cache
    dispatch(addCacheResults({
      // [searchQuery]:json[1]
    }))
  };

  const handleSearchQuerySubmit=async()=>{
    if(!searchQuery) return;

    const data= await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchQuery}&type=video&key=AIzaSyDTZbv-EYcJgkOmsnMbghMorfgo7FoTHhg
    `)

    const json=await data.json();
    dispatch(addSearchVideos(json?.items))
  }

  useEffect(() => {
    //API Call

    //Make an api call after every keypress
    //but if the difference between 2 API calls is <200ms
    //then decline the api call
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        //store this data in some state variable
        // setSuggestions(searchCache[searchQuery]);
        
      }
      else{
        getSearchSuggestions();

      }
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /*search text -> iPhone
   - key - p
   - render the component
   - useEffect();
   -start timer =>make api call after 200 ms


   -key - iP
   -re-render the component
   - useEffect();
   - start timer => make api call after 200ms
  

   -setTimeout(200) after 200 - make an API Call
  */

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className=" grid grid-flow-col p-4 shadow-lg w-full">
      <div className="flex  col-span-1">
        <div className="cursor-pointer">
          <MenuIcon onClick={toggleMenuHandler} />
        </div>

        <img
          className="h-8 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
          alt=""
        />
      </div>
      <div className="col-span-10 text-center">
        <div className="flex flex-col">
          <div>
            <input
              className="w-1/2 border border-gray-400 px-4 py-2 rounded-l-full"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button onClick={handleSearchQuerySubmit} className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
              Search
            </button>
          </div>

          {/* {showSuggestions && (
            <div className="fixed w-96 bg-white ">
              <ul>
                <li>Name</li>
                <li>Name</li>
                <li>Name</li>
                <li>Name</li>
                <li>Name</li>
              </ul>
            </div>
          )} */}
        </div>
      </div>

      <div className=" col-span-1">
        <AccountCircleIcon />
      </div>
    </div>
  );
};

export default Head;
