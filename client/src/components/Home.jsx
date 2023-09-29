import React from 'react'
//import './App.css';
import About from './About'
import Services from './Services'
import Contact from './Contact'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <section className="home">

            <div className="row justify-content-center">
                <div className="col-md-8 mt-5">
                    <h1 className='display-4 fw-bolder mb-4 text-center text-white'>
                    Turning Your Ideas into  Websites

                    </h1>
                    <p className='lead text-center fs-4 mb-5 text-white'>we are passionate about web development. We specialize in creating beautiful, functional, and user-friendly websites that leave a lasting impression. Whether you're a startup looking to establish your online presence or an established business aiming to revamp your website, we have the expertise to bring your vision to life.</p>
                <div className="buttons d-flex justify-content-center">
            <NavLink to="/contact" className='btn btn-light me-4 rounded-pill px-4 py-2'>Get Quote</NavLink>
            <NavLink to="/service" className='btn btn-outline-light  rounded-pill px-4 py-2'>Our Services</NavLink>

                </div>
                
                </div>
            </div>
        </section>
        <About/>
        <Services/>
        <Contact/>

    </div>
  )
}

export default Home
