import React from 'react';
import eggImg from '../images/mobile/image-transform.jpg'
import standOut from '../images/desktop/image-stand-out.jpg'

const Sections = () => {
  return (
    <>
      <section className='sections-grid'>

          <div className='articles-img1'>
            <img src={eggImg} alt='imgEgg' />
          </div>


          <div className='article_bg'>
            <article className='articles1'>
              <h2>Transform your brand</h2>
              <br />
              <p>
                We are a full-service creative agency specializing in helping brands grow fast.
                Engage your clients through compelling visuals that do most of the marketing for you.
                <br />
              </p>

              <a className='learn1' href='#'> LEARN MORE </a>
            </article>
          </div>


          <div className='articles-img2'>
            <img src={standOut} alt='' />
          </div>


          <div className='article_bg'>
            <article className='articles2'>
              <h2>Stand out to the right audience</h2>
              <br />
              <p>
                Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
                <br />
              </p>

              <a className='learn2' href='#'> LEARN MORE </a>
            </article>
          </div>

          <div className='article_bg3'>
            <article className='articles3'>
              <h2>  Graphic design </h2>
              <br />
              <p>
              Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
                <br />
              </p>
            </article>
          </div>

          <div className='article_bg4'>
            <article className='articles4'>
              <h2>  Photography </h2>
              <br />
              <p>
              Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                <br />
              </p>
            </article>
          </div>


      </section>
    </>
  )
};

export default Sections;
