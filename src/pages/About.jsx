import React from 'react';
import './About.css';
import AboutChef1 from '../utils/img/about-chef1.jpg';
import AboutChef2 from '../utils/img/about-chef2.jpg';
import { ImageGallery } from '../components/ImageGallery';
import { Reviews } from '../components/Reviews';

function About() {
    return (
        <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>About</h1>
                </div>
            </header>

            <div className='container my-5'>
                <p><h5>A Fusion of Cultures, A Symphony of Flavors:</h5>

Nestled in the heart of London's vibrant culinary scene, The London Fusion is a testament to the city's cosmopolitan spirit. Our menu is a captivating journey through a kaleidoscope of cultures, where traditional recipes intertwine with modern techniques to create an unforgettable dining experience. </p>
                <p>Our chefs, a melting pot of talent from around the globe, bring a unique perspective to each creation. We believe that food is not merely sustenance but an art form that evokes emotions and connects people. With a commitment to using the freshest, locally sourced ingredients, we strive to deliver an authentic and sustainable dining experience. Our restaurant is more than just a place to eat; it's a cultural hub where guests can explore the world through their taste buds. Join us on this gastronomic adventure as we redefine the boundaries of flavor and create unforgettable memories.</p>

                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={AboutChef1} className='img-fluid my-4' alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={AboutChef2} className='img-fluid my-4' alt="" />
                    </div>
                </div>

                
            </div>

            <div className='bg-dark text-light'>
                <ImageGallery />
            </div>

            <div className='my-5'>
                <Reviews />
            </div>
        </div>
    )
}

export default About;