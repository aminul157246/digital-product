import React from 'react';
import Image from 'next/image';
import img from '@/assets/images/illustration.png';
const OurWork = () => {
    return (
        <>
            <h1 className="text-6xl text-center mt-4 font-bold mb-8">Our Work</h1>
            <div className="m-12 grid grid-cols-3 container mx-auto py-8">

                <div>
                    <div className="flex items-center justify-center mb-4">
                        <Image src={img} width={500} height={500} alt="Our Work" />
                    </div>
                    <p className="text-2xl text-center">
                        Illustration
                    </p>
                </div>
                <div>
                    <div className="flex items-center justify-center mb-4">
                        <Image src={img} width={500} height={500} alt="Our Work" />
                    </div>
                    <p className="text-2xl text-center">
                        Illustration
                    </p>
                </div>
                <div>
                    <div className="flex items-center justify-center mb-4">
                        <Image src={img} width={500} height={500} alt="Our Work" />
                    </div>
                    <p className="text-2xl text-center">
                        Illustration
                    </p>
                </div>
            </div>
        </>
    );
};

export default OurWork;