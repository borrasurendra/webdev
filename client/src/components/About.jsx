import React from 'react'
import About1 from '../assests/about1.jpg'

const About = () => {
  return (
    <div>
        <section id="about">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src={About1} alt='About' className='w-75 mt-5' />
                    </div>
                    <div className="col-md-6">
                        <h3 className="fs-5 mb-0"> About Us</h3>
                        <h1 className="display-6 mb-2">Who <b>We</b> Are</h1>
                        <hr className='w-50'/>
                        <p className="lead mb-4">Our talented team of designers creates visually captivating websites that reflect your brand identity. We focus on user experience, ensuring that your site not only looks fantastic but also functions flawlessly on all devices.Our web developers are skilled in a variety of programming languages and frameworks. We build websites from scratch or enhance existing ones, ensuring they are secure, fast, and scalable.</p>
                       <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>

                       <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Now</button>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
  )
}

export default About