import React from 'react';
import Link from 'next/link'
const Botton = ({text, url}) => {
    return (
        <div >
            <Link href={url}>
                <button className="bg-green-400 btn px-4 py-2">{text}</button>
            </Link>
        </div>
    );
};

export default Botton;