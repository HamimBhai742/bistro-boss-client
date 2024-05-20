import React from 'react';
import OurCard from '../ShopCard/OurCard';

const GridLay = ({items}) => {
    console.log(items);
    return (
        <div className='grid grid-cols-3 max-w-[1170px] mx-auto gap-5'>
            {
                items.map((item, idx) => <OurCard key={idx} item={item}></OurCard>)
            }
        </div>
    );
};

export default GridLay;