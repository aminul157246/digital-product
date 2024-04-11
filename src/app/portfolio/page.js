import React from "react";
import Link from "next/link";
import illustration from '@/assets/images/illustration.png';
import websites from '@/assets/images/websites.jpg';
import apps from '@/assets/images/apps.jpg';


import Image from 'next/image';
const Portfolio = () => {
  return (
    <div className='m-12'>
      <h1 className='text-2xl font-semibold'>Choose a gallery</h1>
      <div className='flex justify-center items-center gap-12'>
        <Link href="/portfolio/illustrations" className=''>
          <Image src={illustration} alt="" width={280} height={300}></Image>
          <p className='text-xl font-bold text-white pl-12 -mt-12'>Illustrations</p>
        </Link>
        <Link href="/portfolio/websites" className=''>
        <Image src={websites} alt="" width={500} height={500}></Image>

          <p className='text-xl font-bold text-white pl-12 -mt-12'>Websites</p>
        </Link>
        <Link href="/portfolio/application" className=''>
        <Image src={apps} alt="" width={500} height={500}></Image>

          <p className='text-xl font-bold text-white pl-12 -mt-12'>Application</p>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;