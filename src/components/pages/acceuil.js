import { FaBeer } from 'react-icons/fa';
import { FaAngleRight } from "react-icons/fa";
import HarvestPicture from "../../assets/accueil/harvest.png"
import LegumesPicture from "../../assets/accueil/legumes.png"
import TabletPicture from "../../assets/accueil/tablet.png"
import LegumesVariable from "../../assets/accueil/bottom-section/legumes-variable.png"
import ApplePicture from "../../assets/accueil/bottom-section/apple.png"

function Accueil({executeFunction}) {

    return (
        <>
            <div className="min-h-screen bg-main-gray flex justify-center">
                <div className="bg-white w-4/5 flex flex-col items-center">
                    <div className="bg-accueil-background w-[95%] h-[175px] bg-center bg-cover m-4">
                        <div className="w-[90%] h-full justify-end items-end">
                            <span className='flex justify-end h-full items-center text-white text-center font-bold text-xl ' >
                                <div className=" cursor-pointer flex items-center gap-x-8">
                                    Apprenez-en plus <br /> sur nous
                                    <div className="text-black">
                                        <FaAngleRight />

                                    </div>
                                </div>

                            </span>

                        </div>
                    </div>

                    <div className="pt-8 font-bold text-lg flex flex-col items-center">
                        <h2 className='text-center'>Po-Market en <span className="text-orange-500">3</span> étapes :</h2>
                        <div className="flex justify-center pt-6">
                            <div className="flex justify-center items-center  w-[85%] gap-x-8">

                                <div className="font-normal text-sm text-gray-500 text-center w-full ">
                                    <div className="h-[250px] mb-8 relative">
                                        <img src={TabletPicture} alt="" className='w-full h-full object-cover rounded-lg	' />
                                        <div className="w-10 h-10 bg-orange-500 rounded-full absolute top-[92%] left-[-6%] flex justify-center items-center">
                                            <span className="text-white font-semibold text-lg">1</span>
                                        </div>
                                    </div>
                                    <span>Choisissez votre sélection dans notre catalogue</span>
                                </div>
                                <div className="font-normal text-sm text-gray-500 text-center w-full ">
                                    <div className="h-[250px] mb-8 relative">
                                        <img src={HarvestPicture} alt="" className='w-full h-full object-cover rounded-lg	' />
                                        <div className="w-10 h-10 bg-orange-500 rounded-full absolute top-[92%] left-[-6%] flex justify-center items-center">
                                            <span className="text-white font-semibold text-lg">2</span>
                                        </div>
                                    </div>
                                    <span>Choisissez votre sélection dans notre catalogue</span>
                                </div>
                                <div className="font-normal text-sm text-gray-500 text-center w-full ">
                                    <div className="h-[250px] mb-8 relative">
                                        <img src={LegumesPicture} alt="" className='w-full h-full object-cover rounded-lg	' />
                                        <div className="w-10 h-10 bg-orange-500 rounded-full absolute top-[92%] left-[-6%] flex justify-center items-center">
                                            <span className="text-white font-semibold text-lg">3</span>
                                        </div>
                                    </div>
                                    <span>Choisissez votre sélection dans notre catalogue</span>
                                </div>
                            </div>

                        </div>
                        <div className="my-10">
                            <button className='bg-main-orange px-8 py-4 rounded-3xl text-white text-sm'>En Savoir Plus</button>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div id='top-section' className="flex flex-row h-[350px]">
                            <div className="h-full w-1/2">
                                <img className="object-cover h-full w-full" src={ApplePicture} alt="" />

                            </div>
                            <div className="bg-[#4e601c] w-1/2 h-full text-white">
                                <div className="flex flex-col h-full justify-around text-xl font-base p-6">
                                    <span>Bien sélectionnés et consommés aux bons moments, les fruits contribuent au maintien de l’énergie, de la vigilance et de l’efficacité.</span>
                                    <span>Chez Po-market vous avez la garantie de manger des fruits frais et de saison</span>
                                    <div className="flex justify-end items-center">
                                    <button className=" bg-[#ffd059] text-sm px-4 py-2 rounded-3xl font-bold">Découvrir</button>

                                    </div>
                                </div>
                            </div>

                        </div>



                        <div id='bottom-section' className="flex flex-row h-[350px]">

                            <div className="bg-[#c29f6d] w-1/2 h-full text-white">
                                <div className="flex flex-col h-full justify-around text-xl font-base p-6">
                                    <span>Chez Po-Market nous n'utilisons pas de produits chimiques ni pour nourrir ni pour soigner nos plantes.</span>
                                    <span>Découvrez notre sélection de légumes cultivés en plein air</span>
                                    <div className="flex justify-start items-center">
                                    <button className=" bg-[#ffd059] text-sm px-4 py-2 rounded-3xl font-bold">Découvrir</button>

                                    </div>
                                </div>
                            </div>
                            <div className="h-full w-1/2">
                                <img className="object-cover h-full w-full" src={LegumesVariable} alt="" />

                            </div>
                        </div>
                    </div>

                    <div className="my-14 bg-white flex flex-col text-center w-[90%] text-sm text-gray-400">
                        <span>Toutes nos cultures sont conduites selon la charte de l’Agriculture Biologique, cela veut dire que toutes les semences et tous les plants que nous achetons sont labellisés AB.</span>
                        <span>Nous n'utilisons pas de produits chimiques ni pour nourrir ni pour soigner nos plantes. Pour les plants achetés, nous nous efforçons de travailler le plus souvent possible avec des producteurs locaux.</span>
                        <span>Nous vous proposons des légumes de plein air ainsi que des légumes produits sous tunnels froids (ce qui nous permet de vous proposer des légumes plus de 10 mois dans l'année !)</span>
                    </div>
                    <div className="bg-[#ffd059] w-full h-[250px] flex flex-col justify-center items-center text-center text-sm text-gray-400">
                        <div className="w-1/2">
                        <span className='font-bold text-white text-lg'>La Cueillette est ouverte le lundi de 14h à 18h et du mardi au dimanche de 10h à 18h.</span>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Accueil
