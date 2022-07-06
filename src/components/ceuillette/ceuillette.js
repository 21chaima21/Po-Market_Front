
function Cueillette({ ShoppingItems }) {
    
    return (
        <>
            <div className="flex items-center justify-center py-12 w-full flex flex-col">
                <div className="w-[90%] flex items-center justify-center">
                    <div className="border-t-4 border-dashed border-[#FFDE59] w-full"></div>
                    <div className="px-6 flex whitespace-nowrap font-bold text-xl text-[#FFDE59]">
                        Voulez-vous cueillir vous même votre sélection ?
                    </div>
                    <div className="border-t-4 border-dashed border-[#FFDE59] w-full"></div>
                </div>
                <div class="flex pt-12 w-4/5">
                    <div className="h-fit w-full flex flex-col justify-start items-start gap-y-12">
                        <div class="form-check h-fit flex items-center gap-x-12 m-0">
                            <input class="w-[3em] h-[3em] form-check-input appearance-none rounded-full border-2 border-solid border-black h-4 w-4 bg-white checked:bg-orange-500 checked:border-orange-500 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label inline-block text-gray-800 text-xl" for="flexRadioDefault1">
                                Oui je préfère cueillir moi même ma sélection
                            </label>
                        </div>
                        <div class="form-check h-fit flex items-center gap-x-12">
                            <input class="w-[3em] h-[3em] form-check-input appearance-none rounded-full border-2 border-solid border-black h-4 w-4 bg-whte checked:bg-orange-500 checked:border-orange-500 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label inline-block text-gray-800 text-xl" for="flexRadioDefault2">
                                Non, je préfère que vous me les cueiller
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center pb-12 w-full flex flex-col">
                <div className="w-[90%] flex items-center justify-center">
                    <div className="border-t-4 border-dashed border-[#FFDE59] w-full"></div>
                    <div className="px-6 flex whitespace-nowrap font-bold text-xl text-[#FFDE59]">
                        Information
                    </div>
                    <div className="border-t-4 border-dashed border-[#FFDE59] w-full"></div>
                </div>
                <div className="w-4/5 flex flex-col gap-y-6 pt-10">
                    <div className="flex justify-between text-xl">
                        <label htmlFor="telNumber">Numéro de téléphone : </label>
                        <input type="number" className="border-0 border-b-2 border-dashed border-gray-400 w-[70%] focus:outline-none" id="telNumber" />

                    </div>
                    <div className="flex justify-between text-xl">
                        <label htmlFor="prenom">Prénom : </label>
                        <input type="text" className="border-0 border-b-2 border-dashed border-gray-400 w-[70%] focus:outline-none" id="prenom" />

                    </div>
                    <div className="flex justify-between text-xl">
                        <label htmlFor="nom">Nom : </label>
                        <input type="text" className="border-0 border-b-2 border-dashed border-gray-400 w-[70%] focus:outline-none" id="nom" />

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


export default Cueillette
