import { Plus, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);


  return (
    <div className="z-10 backdrop-blur-md" >
      <div className="bg-slate-900 bakcdrop-blur-md py-5 px-5 flex items-center justify-between">
        <div>
          <Link to={"/"}>
            <h1 className="text-4xl max-lg:text-2xl font-bold">DRAFT HUB</h1>
          </Link>
        </div>
        <div>
          <div className="flex items-center gap-4 max-lg:hidden px-5 font-bold">
            <Link to={"/"} className="hover:scale-103 active:scale-95 transition-all delay-150">HOME</Link>
            <Link to={"/favorites"} className="hover:scale-103 active:scale-95 transition-all delay-150">FAVORITES</Link>
            <Link to={"/my-templates"} className="hover:scale-103 active:scale-95 transition-all delay-150">MY TEMPLATES</Link>
            <Link
              to={"/create"}
              className="flex items-center bg-violet-500 py-2 px-5 rounded-lg hover:scale-103 active:scale-95 delay-150"
            >
              <Plus />
              <span>CREATE</span>
            </Link>
          </div>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setToggle((t) => !t)}>
            {toggle ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <div className="fixed  z-10 flex items-center justify-center w-full font-bold">
        {toggle && (
          <div className="bg-slate-500/90 flex flex-col gap-4 text-center w-full py-4 px-2" onClick={()=>setToggle(false)}>
            <Link to={"/"}>HOME</Link>
            <Link to={"/favorites"}>FAVORITES</Link>
            <Link to={"/my-templates"}>MY TEMPLATES</Link>
            <Link
              to={"/create"}
              className=" w-full flex items-center justify-center bg-violet-500 py-2 px-5 rounded-lg"
            >
              <Plus />
              <span>CREATE</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
