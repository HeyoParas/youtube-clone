import React,{useEffect,useState} from 'react'
import hamburger from "../assets/hamburger.svg"
import youtube from "../assets/youtube.svg"
import search from "../assets/search.svg"
import profile from "../assets/profile.jpg"
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice.jsx'
    const Header = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    useEffect(()=>{

        //here we do debouncing
        const timer = setTimeout(()=>{
            suggestion();
        },200);

        return()=> {
            clearTimeout(timer);
        }

    },[searchQuery])

    function handleToggleMenu()
    {
        dispatch(toggleMenu());

    }
    
  const suggestion = async () =>{
    try {
      const response = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+searchQuery);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("suuggestion data",data[1]);
      setSuggestions(data[1]);
     
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  }

  return (
    <div className='flex p-3 my-1 justify-between shadow-lg'>
        <div className='flex mx-2 gap-x-4 w-[20%]'>
            <button 
            onClick={handleToggleMenu}
            ><img src={hamburger} alt="hamburger" /></button>
            <button><img src={youtube} alt="youtube" /></button>
        </div>
        <div className="w-[40%] flex flex-col relative">
    <div className="flex items-center w-full bg-white border border-gray-300 rounded-full shadow-sm focus-within:border-gray-400">
        <input 
            className="w-full px-4 py-2 rounded-l-full focus:outline-none text-gray-900"
            type="text" 
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onBlur={() => setSuggestions([])}
        />
        <button className="px-4 py-2 bg-gray-100 border-l border-gray-300 rounded-r-full hover:bg-gray-200">
            <img src={search} alt="search" className="w-6 h-6" />
        </button>
    </div>
    {suggestions.length > 0 && (
        <div className="absolute top-12 left-0 w-full bg-white border border-gray-300 shadow-lg rounded-lg z-50">
            {suggestions.map((item, idx) => (
                <p key={idx} className="hover:bg-gray-100 px-4 py-2 flex items-center cursor-pointer">
                    <img src={search} className="w-5 h-5 mr-3" alt="search" />
                    <span className="text-gray-800">{item}</span>
                </p>
            ))}
        </div>
    )}
</div>



        <div className='w-[20%] flex justify-end'>
            <button>
                <img src={profile} alt="profile"  
                className='w-9 h-9'
                />
            </button>
        </div>
    </div>
  )
}

export default Header
