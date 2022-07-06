
import { BsFillBasket2Fill } from "react-icons/bs";
import Cueillette from "../cueillette/cueillette";
import Date from "../date/date";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai"
import PotatoPic from "../../assets/legumes/potato.png"
import Recap from "../récap/recap"
import { useEffect, useState } from "react";

function ShoppingCart() {
    const selected = "!bg-orange-500 text-white"
    const [selectedIndex, changeIndex] = useState(0)
    const [items, setItems] = useState(
        [
            {
                name: 'Abricot',
                disponibility: 'Disponible',
                price: '2.2',
                amount: 2,
                src: 'https://www.pngmart.com/files/1/Apricot-Transparent-PNG.png'
            },
            {
                name: 'Poivrons Mix',
                price: '3.0',
                amount: 1,
                src: 'https://www.imagensempng.com.br/wp-content/uploads/2021/08/02-22.png'
            },
            {
                name: 'Pomme de terre César',
                disponibility: 'Disponible',
                price: '3.6',
                amount: 1,
                src: 'https://www.k24klik.com/blog/wp-content/uploads/2022/01/potato.jpeg'
            },

        ]
    )
    const [total, setTotal] = useState(items.reduce((sum, obj) => { return sum += parseFloat(obj.price) * obj.amount }, 0))


    function changeAmount(item, operation) {
        let changedItems = [...items]

        if (operation === "increase") {
            changedItems[items.indexOf(item)].amount += 1
        }
        if (operation === "decrease" && changedItems[items.indexOf(item)].amount > 1) {
            changedItems[items.indexOf(item)].amount -= 1
        }
        if (operation === "delete") {
            changedItems.splice(items.indexOf(item), 1)
        }
        const newTotal = changedItems.reduce((sum, obj) => { return sum += parseFloat(obj.price) * obj.amount }, 0)
        // Object.values(changedItems).reduce((a, b) => {return parseFloat(a.price)*a.amount + parseFloat(b.price)*b.amount});
        setTotal(newTotal)
        console.log(newTotal)
        console.log(changedItems)
        setItems(changedItems)
    }
    return (
        <>


            <div className=" bg-main-gray flex flex-col items-center">
                <div className="bg-white min-h-screen h-full w-4/5">
                    <div className="flex items-center justify-center py-12 ">
                        <div className="bg-orange-500 w-full h-1"></div>
                        <div className="px-6">
                            <BsFillBasket2Fill className="w-8 h-8" fill="#F97316" />
                        </div>
                        <div className="bg-orange-500 w-full h-1"></div>
                    </div>

                    {/* Shopping Cart Component */}
                    <div className={`flex flex-col justify-center items-center gap-y-8 py-12 ${selectedIndex != 0 ? 'hidden' : ''}`}>
                        {items.map((item) => {
                            return (
                                <div className="grid grid-cols-3 items-center justify-center w-[85%]">
                                    {/* image */}
                                    <div className="grid grid-cols-shopping-cart-cols">
                                        <div className="w-24 h-24">
                                        <img src={item.src} className="object-contain" alt="" />

                                        </div>
                                        <div className="flex flex-col pl-8">
                                            {/* description */}
                                            <span className="text-gray-300 italic">Ferme de Vitain</span>
                                            {/* name */}
                                            <span className="text-2xl font-bold">{item.name}</span>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-center">
                                        <span className="font-bold text-2xl">{(item.amount * parseFloat(item.price)).toFixed(2)} €</span>
                                    </div>
                                    <div className="flex justify-center items-center gap-x-4">
                                        <div className="border-2 border-solid 
                        border-[#FFD059] flex items-center justify-center
                        rounded-full w-6 h-6 cursor-pointer" onClick={() => changeAmount(item, 'increase')}>
                                            <AiOutlinePlus fill="#FFD059" size="1.5rem" />

                                        </div>
                                        <span className="px-2 font-bold text-lg">{item.amount}</span>

                                        <div className="border-2 border-solid 
                        border-[#FFD059] flex items-center justify-center
                        rounded-full w-6 h-6 cursor-pointer">
                                            <AiOutlineMinus fill="#FFD059" size="1.5rem" onClick={() => changeAmount(item, 'decrease')} />

                                        </div>
                                        <div className="border-2 border-solid 
                        border-[#F97316] flex items-center justify-center
                        rounded-full w-6 h-6 cursor-pointer">
                                            <AiOutlineClose fill="#F97316" size="1.5rem" onClick={() => changeAmount(item, 'delete')} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                        <div className="w-[90%] bg-orange-500 h-1 my-4"></div>
                        <div className="w-[90%] flex flex-col gap-y-4">
                            <div className="flex justify-between font-bold text-2xl
                    text-[#FFD059]">
                                <span>Total des articles:</span>
                                <span>{total.toFixed(2)} €</span>

                            </div>
                            <div className="flex justify-between text-gray-500">
                                <span>Poids estimé du panier:</span>
                                <span>4kg</span>
                            </div>
                        </div>
                        <div className="flex justify-end items-end w-[90%] my-8">
                            <button className='bg-[#fe7e11] font-bold w-fit px-14  py-3 rounded-3xl text-white text-sm' onClick={() => changeIndex(1)}>Etape suivante</button>

                        </div>

                    </div>


                    {selectedIndex != 0 ? <div className="flex items-center justify-center">
                        <div className="w-[90%] flex justify-around">
                            <div className="flex items-center flex-col">
                                <div className={`bg-gray-300 rounded-full w-12 h-12 p-4 font-bold cursor-pointer flex justify-center items-center 
                            ${selectedIndex == 1 ? "!bg-orange-500 text-white" : ''}`}
                                    onClick={() => changeIndex(1)}>
                                    <span>1</span>
                                </div>
                                <span className="text-gray-300 pt-3">Mode de cueillette</span>
                            </div>
                            <span className="text-3xl font-bold
                text-orange-500 w-fit tracking-widest">-------</span>
                            <div className="flex items-center flex-col">
                                <div className={`bg-gray-300 rounded-full w-12 h-12 p-4 font-bold cursor-pointer flex justify-center items-center 
                            ${selectedIndex == 2 ? "!bg-orange-500 text-white" : ''}`}
                                    onClick={() => changeIndex(2)}>
                                    <span>2</span>
                                </div>
                                <span className="text-gray-300 pt-3">Date et heure</span>
                            </div>
                            <span className="text-3xl font-bold
                text-orange-500 w-fit tracking-widest">-------</span>
                            <div className="flex items-center flex-col">
                                <div className={`bg-gray-300 rounded-full w-12 h-12 p-4 font-bold cursor-pointer flex justify-center items-center 
                            ${selectedIndex == 3 ? "!bg-orange-500 text-white" : ''}`}
                                    onClick={() => changeIndex(3)}>
                                    <span>3</span>
                                </div>
                                <span className="text-gray-300 pt-3">Récap et paiement</span>
                            </div>
                        </div>
                    </div>: null}
                    
                    {selectedIndex == 1 ? <Cueillette /> : null}
                    {selectedIndex == 2 ? <Date /> : null}
                    {selectedIndex == 3 ? <Recap/> : null}
                </div>

            </div>


        </>
    )
}

export default ShoppingCart