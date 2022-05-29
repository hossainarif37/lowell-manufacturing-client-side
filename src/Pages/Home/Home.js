import React from 'react';
import Footer from '../Shared/Footer';
import About from './About';
import ContactUs from './ContactUs';
import HomepageHero from './HomepageHero';
import Parts from './Parts';
import Reviews from './Reviews';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <HomepageHero></HomepageHero>
            <About></About>
            <Parts></Parts>
            <Summary></Summary>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
        </div >
    );
};

export default Home;