import HarvestPicture from "../../assets/accueil/harvest.png"
import LegumesPicture from "../../assets/accueil/legumes.png"
import TabletPicture from "../../assets/accueil/tablet.png"
import LegumesVariable from "../../assets/accueil/bottom-section/legumes-variable.png"
import ApplePicture from "../../assets/accueil/bottom-section/apple.png"
import { FaAngleRight } from "react-icons/fa";
import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
import PotatoPic from "../../assets/legumes/potato.png"

import LegumesComponent from "../legumes/legumes-display"
function PageLegumes() {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const [selected, setSelected] = useState('bg-orange-500 !text-white');
    const [currentComponent, setCurrentComponent] = useState('legumes')

    const [legumes, setLegumes] = useState([
        {
            name: 'Pomme de terre Purée',
            disponibility: 'Disponible',
            price: '1,20',
            src: PotatoPic
        },
        {
            name: 'Tomates',
            disponibility: 'En cours de réapprovisionnement',
            price: '2',
            src: 'https://imagensemoldes.com.br/wp-content/uploads/2020/07/Tomate-PNG-1280x720.png'
        },
        {
            name: 'Poivrons Mix',
            disponibility: 'Disponible',
            price: '3',
            src: 'https://www.imagensempng.com.br/wp-content/uploads/2021/08/02-22.png'
        },
        {
            name: 'Pomme de terre Vapeur ',
            disponibility: 'Indisponible',
            price: '1,5',
            src: 'https://www.imagensempng.com.br/wp-content/uploads/2021/08/03-3.png'
        },
        {
            name: 'Oignon Rouge',
            disponibility: 'Disponible',
            price: '2,3',
            src: 'https://www.pngmart.com/files/1/Red-Onion-PNG-HD.png'
        },
        {
            name: 'Patate douce',
            disponibility: 'Disponible',
            price: '6,49',
            src: 'https://www.gemuese.ch/media/tgfprfvs/suesskartoffeln_020919.png?width=720&height=720&format=png&quality=80'
        },
        {
            name: 'Pomme de terre César',
            disponibility: 'Disponible',
            price: '3,6',
            src: 'https://www.k24klik.com/blog/wp-content/uploads/2022/01/potato.jpeg'
        },
        {
            name: 'Carrotes ',
            disponibility: 'En cours de réapprovisionnement',
            price: '3,6',
            src: 'https://www.healthnews24seven.com/wp-content/uploads/2020/01/carrot.jpg'
        },

        {
            name: 'Chou Rouge',
            disponibility: 'Indisponible',
            price: '3,2',
            src: 'https://gardenseedsmarket.com/images/watermarked/5/thumbnails/1204/839/detailed/31/kapusta_koda_(4)_r.jpg'
        },
        {
            name: 'Tomates cerises',
            disponibility: 'Disponible',
            price: '4',
            src: 'https://zaowocowani.eu/wp-content/uploads/2020/04/pomidorykoktjalowe.jpg'
        },
        {
            name: 'Petits pois frais',
            disponibility: 'Disponible',
            price: '2,3',
            src: 'https://pbs.twimg.com/media/EqGP0ZVUwAM3GY4.jpg'
        },
        {
            name: 'Batavia verte ',
            disponibility: 'Disponible',
            price: '2',
            src: 'https://www.frutiver.com.br/wp-content/uploads/2017/07/ALFACELISA.png'
        },

        {
            name: 'Laitue',
            disponibility: 'Disponible',
            price: '1,5',
            src: 'https://kdeliveries.com/wp-content/uploads/2020/07/app_0003_30015-min-300x300.jpg'
        },
        {
            name: 'Radis Rose',
            disponibility: 'En cours de réapprovisionnement',
            price: '3,2',
            src: 'https://thumbs.dreamstime.com/b/red-cranberry-isolated-red-cranberry-isolated-white-background-131771996.jpg'
        },
        {
            name: 'Poireau',
            disponibility: 'Disponible',
            price: '4,5',
            src: 'https://www.animatedimages.org/data/media/1685/animated-leek-image-0016.gif'
        },
        {
            name: 'Oignon jaune',
            disponibility: 'Disponible',
            price: '2,5',
            src: 'https://media.baamboozle.com/uploads/images/14712/1551776628_201844'
        },
    ])
    const [legumesDeSaison, setLegumesDeSaison] = useState([
        {
            name: 'Courgette',
            disponibility: 'Disponible',
            price: '1,20',
            src: 'https://naturevkus.ru/upload/iblock/fc0/fc0755e898d726f7ba0d107c25e2d0af.jpeg'
        },
        {
            name: 'Choux Fleur',
            disponibility: 'Disponible',
            price: '1,20',
            src: 'https://www.santepratique.fr/wp-content/uploads/Chou-fleur.jpg'
        },
        {
            name: 'Betterave',
            disponibility: 'Disponible',
            price: '1,20',
            src: 'https://yandex-images.clstorage.net/bhn9l9332/e8a951TJ/aiJLUf9dlY9mFSu-MzNZQPIqkKdiKtK52dJSDQNWpjfT7nAoaRAnk1KICdA1kiMqqe38dhsiN8CUd33C4TB1qP9mfsUrnCRrlrU7vgPjyPBiWiAnkqqT-an313y2cwIXY-rkSIxmVDQAj29Xg4CkCF45WVbOUkZRJHfoNBYRMN2686vT3m_UaLaXq4miEjkAcrnHV2N5tXlu0dCbh8LSsjA4ZV5o1IbFUs0OFVHzNtveOnhkryLm9EZ2eiZ0dEMvOZHIUg1sxsuWRQkoYbMrctEIFldSq3Qpb0AAi8ShY7NBqkQOWQQm9qAsHjTgkOZI_FqKx1wyBtWmJ6nFhEZzXdqj-NHPPIfb5oeZKvABKpBA2dZVcgiGml4SIJnVwWCx4MnXDwsl1OcAHk7EIhJUujxaWacfQCSE9RSIV7VncV85Q3rDnXw0WQXmyslDA7mC0gu0BcLYNVhcY5PqloHDg6ELpW0qRcWWAg1t1fPCBIi_yIgGPQCnNIamGPTkh2G9OUA7ol1ftBnk5nnZgFNaARNqRIXSmfcoD0GDKHVgkDIxSyQM27T25iCtzaQg4PYL_huLhp0xh3dlZ9pnxwdgLwujmTKsfhep1JeoadGzeyGwW0ZWsAi1G_8RwCtH4rMwAehEfbsVFMUAvW-UAuNFKu_IO5euYEZ0txWp1NT0EV_IYkpjPe3lmIXHqKmw0CtT8emmtMCbdpv-8DAbtsMB89PJFt8LVSa3Yf-_tvJyJuv9SApG31CExMU0acR2xUDMmHGpMm7M5ZrWVBookAIpwcK79HWQOsc53vJQaaThs_PSqXYPm9f2hEBuP4cwswYYLJn5tEwi1fWGlphlZqYQHupx67JvrIeqJvT6quJz2VDTSEYEwOqW-8zyg8gGI-GyEXkEzGoHF0cgX-71ImBEqa1aiXauQjf1Ndf4VSdH0E37sqjT7X82WIYkOKmzI1nR4QqExaC6xnnec6HL5WLRA'
        },
        {
            name: 'Concombre',
            disponibility: 'Disponible',
            price: '1,20',
            src: 'https://offers.kd2.org/pics/40/a6/40a6d106e768f2d3fcd6c0a4d3e5cd5c02ce8e86.jpg'
        },
        {
            name: 'Haricots verts',
            disponibility: 'Disponible',
            price: '1,20',
            src: 'https://www.santepratique.fr/wp-content/uploads/Haricot-vert.jpg'
        },
    ])

    const [currentItems, setCurrentItems] = useState(currentComponent == 'legumes' ? legumes : legumesDeSaison );

    const changeCurrentItems = (component) => {
        console.log(component)
        if(component === 'legumes') {
            setCurrentComponent('legumes')
            setCurrentItems(legumes)
        }
        if(component === 'legumes-de-saison') {
            setCurrentComponent('legumes-de-saison')
            setCurrentItems(legumesDeSaison)
        }
    }

    return (
        <>
            <div className="min-h-screen bg-main-gray flex justify-center">
                <div className="bg-white w-4/5 flex flex-col items-center">
                    <div className="bg-page-legumes-background w-[95%] h-[175px] bg-center bg-cover m-4">
                        <div className="w-[90%] h-full justify-end items-end">
                            <span className='flex justify-end h-full items-center text-white text-center font-bold text-xl ' >
                                <div className=" cursor-pointer flex items-center gap-x-8">
                                    Découvrez notre sélection de <br /> légumes de saison
                                    <div className="text-black">
                                        <FaAngleRight />

                                    </div>
                                </div>

                            </span>

                        </div>
                    </div>


                    <div className=" w-[90%]">
                        <div className="border-b-8 border-solid border-orange-500 flex mb-16">
                            <button className={`bg-white px-8 py-2 font-bold text-orange-500 ${currentComponent === "legumes" ? selected : ''}`} 
                            onClick={() => changeCurrentItems('legumes')}>Légumes</button>
                            <button className={`bg-white px-8 py-2 font-bold text-orange-500 ${currentComponent === "legumes-de-saison" ? selected : ''}`} 
                            onClick={() => changeCurrentItems('legumes-de-saison')}>Légumes de saison</button>

                        </div>
                        <LegumesComponent currentItems={currentItems} />

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

export default PageLegumes