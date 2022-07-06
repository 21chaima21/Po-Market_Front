
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import LogoPoMarket from "../../assets/logo.png"
import Instagram from "../../assets/instagram.svg"
import Youtube from "../../assets/youtube.svg"
import Facebook from "../../assets/facebook.svg"

function Footer() {
    return (
        <>

            <div className="h-[400px] bg-black text-white flex flex-row justify-center items-center">
                <div id="left-part" className="">
                    <img src={LogoPoMarket} alt="" className="w-56 h-auto bg-white px-8 py-4" />
                    <div className="icons flex pt-8 justify-center items-center">
                        <img src={Instagram} alt="" className="w-16 cursor-pointer flex justify-center items-center" />
                        <img src={Facebook} alt="" className="w-16 cursor-pointer" />
                        <img src={Youtube} alt="" className="w-16 cursor-pointer" />

                    </div>
                </div>
                <div id="right-part" className="w-[65%]  h-full">
                    <div className="flex flex-col items-end justify-center h-full text-2xl gap-y-4">
                        <a href="">Qui sommes nous </a>
                        <a href="">Contact </a>
                        <a href="">Mentions légales </a>
                        <a href="">Conditions générales de vente </a>
                        <a href="">Politique de confidentialité </a>

                    </div>
                </div>
            </div>
        </>
    )
}


export default Footer
