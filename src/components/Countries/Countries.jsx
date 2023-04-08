import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Countries = () => {
    const countries = useLoaderData();

    return (
        <div>
            <h3>All Countries : {countries.length}</h3>
        </div>
    );
};

export default Countries;