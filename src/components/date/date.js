import { useEffect, useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

function Date() {

    const [dates, setDates] = useState(
        [
            {
                day: 'Jeudi',
                date: '21 Juillet',
                selected: true,
            },
            {
                day: 'Vendredi',
                date: '22 Juillet',
                selected: false,
            },
            {
                day: 'Samedi',
                date: '23 Juillet',
                selected: false,
            },
        ]
    )

    function selecteDate(item) {
        let newDates = [...dates]
        newDates.map((item) => {item.selected = false})
        newDates[dates.indexOf(item)].selected = true
        setDates(newDates)
    }
    return (
        <>
            <div className="">
                <div className="flex items-center justify-center py-12 w-full">
                    <div className="border-t-4 border-dashed border-black w-[35%]"></div>
                    <div className="px-6 flex whitespace-nowrap font-bold text-xl">
                        Quel jour?
                    </div>
                    <div className="border-t-4 border-dashed border-black w-[35%]"></div>
                </div>
                <div className="flex justify-between items-center px-8">
                    <div className="left">
                        <FaChevronLeft className="w-12 h-12 cursor-pointer" fill="#FFD059" />
                    </div>

                    {}
                    <div className="dates flex justify-around items-center w-full">
                        {dates.map((item) => {
                            return (
                                <div className={`bg-gray-100 rounded-lg p-8 py-6 flex flex-col items-center gap-y-3 cursor-pointer ${item.selected ? "!bg-orange-500 text-white": ''}`}
                                onClick={() => selecteDate(item)}>
                                    <span className="text-lg">{item.day}</span>
                                    <span className={`text-lg italic ${item.selected ? "text-white" : "text-[#FFD059]"}`}>{item.date}</span>
                                </div>
                            )
                        })}

                    </div>
                    {}

                    <div className="right">
                        <FaChevronRight className="w-12 h-12 cursor-pointer" fill="#FFD059" />
                    </div>

                </div>
            </div>

            <div className="">
                <div className="flex items-center justify-center py-12 w-full">
                    <div className="border-t-4 border-dashed border-black w-[33%]"></div>
                    <div className="px-6 flex whitespace-nowrap font-bold text-xl">
                        Quelle heure?
                    </div>
                    <div className="border-t-4 border-dashed border-black w-[33%]"></div>
                </div>
                <div class="flex flex-col">
                    <div className="h-fit flex justify-around items-center">
                        <div class="form-check h-fit flex items-center gap-x-4 m-0">
                            <input class="w-[3em] h-[3em] form-check-input appearance-none rounded-full border-2 border-solid border-black h-4 w-4 bg-white checked:bg-orange-500 checked:border-orange-500 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label inline-block text-gray-800 text-xl" for="flexRadioDefault1">
                                De 10 à 14 h
                            </label>
                        </div>
                        <div class="form-check h-fit flex items-center gap-x-4">
                            <input class="w-[3em] h-[3em] form-check-input appearance-none rounded-full border-2 border-solid border-black h-4 w-4 bg-whte checked:bg-orange-500 checked:border-orange-500 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label inline-block text-gray-800 text-xl" for="flexRadioDefault2">
                                De 14 à 18 h
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
            <div className=" w-[90%] my-8">
                    <button className='bg-[#fe7e11] font-bold w-full px-14  py-3 rounded-3xl text-white text-sm'>Etape suivante</button>

                </div>
            </div>
            
        </>
    )
}


export default Date
