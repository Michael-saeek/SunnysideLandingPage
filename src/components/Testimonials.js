import React from 'react';
import emily from '../images/image-emily.jpg'
import jennie from '../images/image-jennie.jpg'
import thomas from '../images/image-thomas.jpg'

const Testimonials = () => {
    return (
        <>
            <section className="testimonials">
                <h2>CLIENTS TESTIMONIALS</h2>

                <article className='clientTestimonials'>


                    <div className='client1'>
                        <img src={emily} alt='' title='' />

                        <p>
                            We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                        </p>

                        <h3>
                            <strong>Emily R.</strong>
                            <br/>
                            <span> Marketing Director </span>
                        </h3>
                    </div>


                    <div className='client2'>
                        <img src={thomas} alt='' title='' />

                        <p>
                            Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
                        </p>

                        <h3>                 
                            <strong>Thomas S.</strong>
                            <br/>
                            <span> Chief Operating Officer </span> 
                        </h3>
                    </div>
                    

                    <div className='client3'>
                        <img src={jennie} alt='' title='' />

                        <p>
                        Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
                        </p>

                        <h3>
                            <strong>Jennie F.</strong>
                            <br/>
                            <span>Business Owner</span>
                        </h3>
                    </div>
                </article>
             
            </section>
        </>
    )


};

export default Testimonials;
