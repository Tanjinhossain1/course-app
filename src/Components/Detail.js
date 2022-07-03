import React from 'react';

const Detail = ({detail}) => {
    const {name,des,img} = detail;
    return (
        <div>
            <div className='bg-[#161231] rounded-lg h-[300px] p-4 text-white '>
                <img className='mb-4' height={70} width={70} src={img} alt="" />
                <h1 className='font-bold text-xl'>{name}</h1>
                <h1 className='mt-3'>{des}</h1>
            </div>
        </div>
    );
};

export default Detail;