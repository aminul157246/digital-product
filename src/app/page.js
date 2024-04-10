
import Image from 'next/image';
import hero from '@/assets/images/hero.png';
import Botton from './components/Button/Botton';

export default function Home() {
  return (
    <div className='flex justify-center gap-12 mx-12 items-center'>

      <div>
        <h1 className='text-6xl  font-bold'>
          Better design for <br /> your digital products.
        </h1>
        <p className='my-6'>
          Turning your Idea into Reality. We bring together <br /> the teams from the
          global tech industry.
        </p>
        <Botton url={'portfolio'} text="Portfolio"/>
      </div>

      <div>
      <Image width={700} height={700} alt='' src={hero} ></Image>
      </div>
    </div>
  );
}
