import React from "react";
import Image from "next/image";
import Botton from "../components/Button/Botton";

const AboutPage = () => {
  return (
    <div className='m-12 m'>
      <div className='flex justify-center gap-12 items-center' style={{
        animation: 'bounce 1s infinite ease',
        animationDirection: 'alternate',
      }}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width={700}
          alt=""  height={700}/>
        <div className=''>
          <h1 className='text-6xl font-bold '>Digital Storytellers</h1>
          <h2 className='my-3'>
            Handcrafting award winning digital experiences
          </h2>

<Botton url='contact' text='Contact'  />

        </div>
      </div>
      <div className='flex justify-center gap-12 items-center'>
        <div className=''>
          <h1 className='text-3xl font-semibold'>Who Are We?</h1>
          <p className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>

        <div className=''>
          <h1 className='text-3xl font-semibold'>What We Do?</h1>
          <p className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <button>Contact</button>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;