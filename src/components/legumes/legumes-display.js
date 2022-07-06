
import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';
function LegumesComponent({currentItems}) {
    
    return (
        <>
        <div className="grid grid-cols-4 mt-8">
        {currentItems.map((item) => {
                return (
                    <div className="flex flex-col justify-center items-center max-w-[300px] ">
                        <img className='w-[300px] h-[170px] object-contain max-w-1/2' src={item.src} alt="" />
                        <div className="flex flex-col gap-y-2  w-[80%] h-[40%]">
                            <span className="font-bold">{item.name}</span>

                            {item.disponibility === "Disponible" ? <span className="text-green-500 font-bold">{item.disponibility}</span> : null}
                            {item.disponibility === "Indisponible" ? <span className="text-red-500 font-bold">{item.disponibility}</span> : null}
                            {item.disponibility === "En cours de réapprovisionnement" ? <span className="text-orange-500 font-bold">{item.disponibility}</span> : null}

                            <span className="font-bold pt-8">{item.price} € / Kg  </span>
                        </div>
                        <div className="my-10 w-[80%]">
                            <button className='bg-[#fe7e11] font-bold w-full  py-3 rounded-3xl text-white text-sm'>Ajouter au panier</button>
                        </div>
                    </div>
                )
            })}
        </div>
            

        </>
    )
}

export default LegumesComponent
