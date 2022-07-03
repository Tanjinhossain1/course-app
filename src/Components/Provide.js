import React, { useEffect, useState } from 'react';
import Detail from './Detail';

const Provide = () => {
    const [details,setDetails] = useState([])
    useEffect(()=>{
        fetch('https://infinite-springs-80402.herokuapp.com/coursesDetail')
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])
    return (
        <div className='bg-[#1e2b47] py-32'>
            <div className=' gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:w-3/4 mx-auto'>
            {
                details.map((detail,index)=><Detail key={index} detail={detail}  />)
            }
        </div>
        </div>
    );
};

export default Provide;