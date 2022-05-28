import React from 'react';

const DetailHeader = ({ h1, h2 }) => {
    return (
        <div>
            <h2 className="text-xl text-primary font-semibold text-center mt-12">{h2}</h2>
            <h1 className="text-3xl text-center font-bold mb-10">{h1}</h1>
            <div className="divider"></div>
        </div>
    );
};

export default DetailHeader;