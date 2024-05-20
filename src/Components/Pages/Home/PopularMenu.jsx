import React, { useEffect, useState } from 'react';
import Shaerd from '../../Shared/Shaerd';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menus] = useMenu()
    const populaeMenu = menus.filter(itm => itm.category === 'popular')
    return (
        <div>
            <div className='grid grid-cols-2 gap-8 max-w-[1170px] mx-auto my-5'>
                {
                    populaeMenu.map((item, idx) => <Shaerd key={idx} item={item}></Shaerd>)
                }
            </div>
            <div className='flex justify-center'>
                <button className='border-b-4 border-[#1F2937] font-inter text-xl font-medium rounded-lg btn btn-outline border-0 uppercase'>View Full  Menu</button>
            </div>
        </div>
    );
};

export default PopularMenu;