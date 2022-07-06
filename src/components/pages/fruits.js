
import { FaAngleRight } from "react-icons/fa";
import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
import PommeGPic from "../../assets/fruits/pomme-golden.png"
import PommeJPic from "../../assets/fruits/pomme-juliet.png"
import PommeGaPic from "../../assets/fruits/pomme-gala.png"
import GrenadePic from "../../assets/fruits/grenade.png"
import OrangeTGPic from "../../assets/fruits/orange-de-table.jpg"
import OrangeJPic from "../../assets/fruits/orange-a-jus.jpg"
import CitronVPic from "../../assets/fruits/citron-vert.png"
import CitronJPic from "../../assets/fruits/citron-jaune.jpg"
import AnanasPic from "../../assets/fruits/ananas.jpg"
import KiwiPic from "../../assets/fruits/kiwi.jpg"
import NectarinePic from "../../assets/fruits/nectarine.jpg"
import PecheBPic from "../../assets/fruits/peche-bio.png"
import RhubarbePic from "../../assets/fruits/rhubarbe.png"
import AbricotPic from "../../assets/fruits/abricot.jpg"
import MelonPic from "../../assets/fruits/melon.png"
import FraisePic from "../../assets/fruits/fraise.png"
import FramboisePic from "../../assets/fruits/framboise.png"
import BananePic from "../../assets/fruits/banane.jpg"
import FiguePic from "../../assets/fruits/figue.png"
import FigueBPic from "../../assets/fruits/figue-de-barbarie.png"
import PastequePic from "../../assets/fruits/pasteque.png"
import ManguePic from "../../assets/fruits/mangue.png"
import PoirePic from "../../assets/fruits/poire.png"
import CerisePic from "../../assets/fruits/cerise.png"
import RaisinBPic from "../../assets/fruits/raisin-blanc.png"
import RaisinRPic from "../../assets/fruits/raisin-rouge.png"

import FruitsComponent from "../fruits/fruits-display"
function PageFruits() {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const [selected, setSelected] = useState('bg-orange-500 !text-white');
    const [currentComponent, setCurrentComponent] = useState('fruits')

    const [fruits, setFruits] = useState([
        {
            name: 'Pomme Golden',
            disponibility: 'Disponible',
            price: '2,79',
            src: PommeGPic
        },
        {
            name: 'Pomme Juliet',
            disponibility: 'Disponible',
            price: '3,50',
            src: PommeJPic
        },
        {
            name: 'Pomme Gala',
            disponibility: 'Disponible',
            price: '3,20',
            src: PommeGaPic
        },
        {
            name: 'Grenade ',
            disponibility: 'Disponible',
            price: '8,30',
            src: GrenadePic
        },
        {
            name: 'Orange de table',
            disponibility: 'En cours de réapprovisionnement',
            price: '3,20',
            src: OrangeTGPic
        },
        {
            name: 'Orange à jus',
            disponibility: 'Indisponible',
            price: '2,40',
            src: OrangeJPic
        },
        {
            name: 'Citron vert',
            disponibility: 'Indisponible',
            price: '4,40',
            src: CitronVPic
        },
        {
            name: 'Citron jaune ',
            disponibility: 'Disponible',
            price: '2,60',
            src: CitronJPic
        },

        {
            name: 'Ananas',
            disponibility: 'En cours de réapprovisionnement',
            price: '4,20',
            src: AnanasPic
        },
        {
            name: 'Kiwi',
            disponibility: 'Disponible',
            price: '6,39',
            src: KiwiPic
        },
        {
            name: 'Nectarine',
            disponibility: 'Disponible',
            price: '4,60',
            src: NectarinePic
        },
        {
            name: 'Pêche Bio ',
            disponibility: 'Disponible',
            price: '4,30',
            src: PecheBPic
        },

        {
            name: 'Rhubarbe',
            disponibility: 'Disponible',
            price: '2,20',
            src: RhubarbePic
        },
        
    ])
    const [fruitsDeSaison, setFruitsDeSaison] = useState([
        {
            name: 'Abricot',
            disponibility: 'Disponible',
            price: '2,20',
            src: AbricotPic
        },
        {
            name: 'Melon',
            disponibility: 'Disponible',
            price: '2',
            src: MelonPic
        },
        {
            name: 'Fraise',
            disponibility: 'Disponible',
            price: '4,60',
            src: FraisePic
        },
        {
            name: 'Framboise',
            disponibility: 'Disponible',
            price: '5,20',
            src: FramboisePic
        },
        {
            name: 'Banane',
            disponibility: 'Disponible',
            price: '2,20',
            src: BananePic
        },
        {
            name: 'Figue',
            disponibility: 'Disponible',
            price: '3,20',
            src: FiguePic
        },
        {
            name: 'Figue de barbarie',
            disponibility: 'En cours de réapprovisionnement',
            price: '4,60',
            src: FigueBPic
        },
        {
            name: 'Pastéque',
            disponibility: 'Disponible',
            price: '2,20',
            src: PastequePic
        },
        {
            name: 'Mangue',
            disponibility: 'Indisponible',
            price: '4,20',
            src: ManguePic
        },
        {
            name: 'Poire',
            disponibility: 'Disponible',
            price: '3,30',
            src: PoirePic
        },
        {
            name: 'Cerise',
            disponibility: 'Disponible',
            price: '6,39',
            src: CerisePic
        },
        {
            name: 'Raisin Blanc',
            disponibility: 'Disponible',
            price: '2,50',
            src: RaisinBPic
        },
        {
            name: 'Raisin Rouge',
            disponibility: 'Indisponible',
            price: '2,20',
            src: RaisinRPic
        },
    ])

    const [currentItems, setCurrentItems] = useState(currentComponent == 'fruits' ? fruits : fruitsDeSaison );

    const changeCurrentItems = (component) => {
        console.log(component)
        if(component === 'fruits') {
            setCurrentComponent('fruits')
            setCurrentItems(fruits)
        }
        if(component === 'fruits-de-saison') {
            setCurrentComponent('fruits-de-saison')
            setCurrentItems(fruitsDeSaison)
        }
    }

    return (
        <>
            <div className="min-h-screen bg-main-gray flex justify-center">
                <div className="bg-white w-4/5 flex flex-col items-center">
                    <div className="bg-page-fruits-background w-[95%] h-[175px] bg-center bg-cover m-4">
                        <div className="w-[90%] h-full justify-end items-end">
                            <span className='flex justify-end h-full items-center text-white text-center font-bold text-xl ' >
                                <div className=" cursor-pointer flex items-center gap-x-8">
                                    Découvrez notre sélection de <br /> fruits de saison
                                    <div className="text-black">
                                        <FaAngleRight />

                                    </div>
                                </div>

                            </span>

                        </div>
                    </div>


                    <div className=" w-[90%]">
                        <div className="border-b-8 border-solid border-orange-500 flex mb-16">
                            <button className={`bg-white px-8 py-2 font-bold text-orange-500 ${currentComponent === "fruits" ? selected : ''}`} 
                            onClick={() => changeCurrentItems('fruits')}>Fruits</button>
                            <button className={`bg-white px-8 py-2 font-bold text-orange-500 ${currentComponent === "fruits-de-saison" ? selected : ''}`} 
                            onClick={() => changeCurrentItems('fruits-de-saison')}>Fruits de saison</button>

                        </div>
                        <FruitsComponent currentItems={currentItems} />

                    </div>


                    <div className="my-14 bg-white flex flex-col text-center w-[90%] text-sm text-gray-400">
                        <span>Toutes nos cultures sont conduites selon la charte de l’Agriculture Biologique, cela veut dire que toutes les semences et tous les plants que nous achetons sont labellisés AB.</span>
                        <span>Nous n'utilisons pas de produits chimiques ni pour nourrir ni pour soigner nos plantes. Pour les plants achetés, nous nous efforçons de travailler le plus souvent possible avec des producteurs locaux.</span>
                        <span>Nous vous proposons des légumes de plein air ainsi que des légumes produits sous tunnels froids (ce qui nous permet de vous proposer des légumes plus de 10 mois dans l'année !)</span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PageFruits