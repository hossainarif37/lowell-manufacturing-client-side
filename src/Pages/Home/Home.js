import React from 'react';
import HomepageHero from './HomepageHero';
import Parts from './Parts';
import Reviews from './Reviews';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <HomepageHero></HomepageHero>
            <Parts></Parts>
            <Summary></Summary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;