import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import Logo from "../../assets/logo.png"
import { FaSearch } from "react-icons/fa";
import { BsFillBasket2Fill } from "react-icons/bs"
import { IoPersonCircle } from "react-icons/io5"
function Navbar() {
    return (
        <>

            <div className="w-full h-[400px] bg-header-background bg-cover bg-no-repeat	bg-center	">

                <div id="bottom-part" className="h-full flex justify-end items-center flex-col">
                    <div className="flex justify-start items-center w-[80%] h-full">
                        <img src={Logo} alt="" className="w-56 h-fit" />

                    </div>

                    <div class="relative flex items-center text-orange-500 w-[325px] focus:outline-none">
                        <input
                            type="text"
                            name="search"
                            placeholder="Rechercher"
                            autocomplete="off"
                            aria-label="Rechercher"
                            class="w-full pr-3 pl-4 py-2 bg-[#FEEFEF] font-semibold placeholder-orange-500 border-none"
                        />
                        <FaSearch class="w-5 h-5 absolute left-[85%] ml-3 pointer-events-none " />

                    </div>
                    <div id="navbar" className="bg-orange-500 w-4/5	py-2 my-5 flex
                    justify-center items-center">
                        <div className="components flex justify-around text-white 
                        font-bold text-lg w-[90%]">
                            <span><Link to="/accueil" >Accueil</Link></span>
                            <span><Link to="/fruits" >Fruits</Link></span>
                            <span><Link to="/page-legumes" >Légumes</Link></span>
                            <span><Link to="/" >Contact</Link></span>
                            <span><Link to="/" >Notre histoire</Link></span>
                        </div>
                        <div className="w-fit flex gap-x-4">
                            <Link to="/shopping-cart" >
                                <BsFillBasket2Fill className="w-6 h-6 cursor-pointer " href="/accueil" />

                            </Link>
                            <Link to="/accueil" >
                                <IoPersonCircle className="w-6 h-6 cursor-pointer" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Navbar
