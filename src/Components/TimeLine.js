import React from 'react';

const TimeLine = () => {
    return (
        <div>
            <div className='md:w-2/4 mx-8  mt-[-100px] md:mx-auto bg-[#0069ff] rounded-2xl p-6 text-white'>
                <div>
                    <div>
                        <h1 className='text-3xl font-bold text-center'>Schedule for the next batch</h1>
                    </div>
                    <div className='grid grid-cols-1 mt-16 md:grid-cols-2'>
                        <p className=' font-semibold'>Enrollment starts: Saturday, December 10, 2022</p>
                        <p className=' font-semibold'>Batch Orientation: Wednesday, December 26, 2022</p>
                        <p className='mt-4 font-semibold'>Enrollment ends: December 24, 2022 Saturday</p>
                        <p className=' mt-4 font-semibold'>Class starts: Friday, December 30, 2022</p>
                    </div>
                    <div className='rounded-full justify-between flex items-center p-3 mt-12 bg-[#1e2b47]'>
                        <p >If you are interested in enrolling in 5th batch, register on the website</p>
                        <button className='bg-pink-500  py-2 rounded-full px-8 ml-2 '>Enrol Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeLine;