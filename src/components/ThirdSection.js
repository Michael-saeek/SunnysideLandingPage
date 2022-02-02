import React from 'react';

import image1 from '../images/desktop/image-gallery-milkbottles.jpg'

import image2 from '../images/desktop/image-gallery-orange.jpg'

import image3 from '../images/desktop/image-gallery-cone.jpg'

import image4 from '../images/desktop/image-gallery-sugarcubes.jpg'

const ThirdSection = () => {
  return (
    <section className='ThirdSectionGrid'>
      <img src={image1} alt='milkbottles' title='milkbottles'/>

      <img src={image2} alt='orange' title='orange'/>

      <img src={image3} alt='cone' title='cone'/>

      <img src={image4} alt='sugarcubes' title='sugarcubes'/>
    </section>
  )
       

};

export default ThirdSection;
