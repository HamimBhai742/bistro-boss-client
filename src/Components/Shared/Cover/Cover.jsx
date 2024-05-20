import React from 'react';

const Cover = ({ img, titel ,subtitel}) => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
                {/* <div className="hero-overlay bg-[#15151599]"></div> */}
                <div className="hero-content text-center text-neutral-content bg-[#15151599] p-32">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl font-bold font-cinzel">{titel}</h1>
                        <p className="font-cinzel text-2xl">{subtitel}</p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;