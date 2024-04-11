import React from 'react';

const Category = ({params}) => {
    // console.log(params);
    return (
        <div>
            <h3>{params.category}</h3>

        </div>
    );
};

export default Category;