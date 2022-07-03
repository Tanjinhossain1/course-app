import React from 'react';

const Banner = () => {
    
    return (
        <div className='min-h-screen bg-[#3500b8]'>
            <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img alt='' src="https://i.ibb.co/x7LxWj0/1622955725643.png" class="max-w-sm rounded-lg" />
    <div className='text-white lg:w-2/4'>
      <h1 class="text-5xl font-bold">Complete Web Development Course</h1>
      <p class="py-6">From scratch, this course will easily swallow everything you need to become a professional web developer without any prior experience.</p>
      <button class="btn btn-primary mb-32">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;