import React from 'react';

const PortfolioLayout = ({children}) => {
    return (
        <div>
            <h2 className='text-6xl font-bold'>Our Work</h2>
            {children}
        </div>
    );
};

export default PortfolioLayout;