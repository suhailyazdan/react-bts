import {useState} from 'react';
import mrktImg1 from '../../public/images/mrkt (1).jpg'
import mrktImg2 from '../../public/images/mrkt (2).jpg'
import mrktImg3 from '../../public/images/mrkt (3).jpg'
import mrktImg4 from '../../public/images/mrkt (4).jpg'
import mrktImg5 from '../../public/images/mrkt (5).jpg'
import mrktImg6 from '../../public/images/mrkt (6).jpg'
import mrktImg7 from '../../public/images/mrkt (7).jpg'

import gymImg1 from '../../public/images/gym-swim (1).jpg'
import gymImg2 from '../../public/images/gym-swim (2).jpg'
import gymImg3 from '../../public/images/gym-swim (3).jpg'
import gymImg4 from '../../public/images/gym-swim (4).jpg'
import gymImg5 from '../../public/images/gym-swim (5).jpg'
import gymImg6 from '../../public/images/gym-swim (6).jpg'
import gymImg7 from '../../public/images/gym-swim (7).jpg'
import gymImg8 from '../../public/images/gym-swim (8).jpg'
import gymImg9 from '../../public/images/gym-swim (9).jpg'

import cmntImg1 from '../../public/images/cmnt (1).jpg'
import cmntImg2 from '../../public/images/cmnt (2).jpg'
import cmntImg3 from '../../public/images/cmnt (3).jpg'
import cmntImg4 from '../../public/images/cmnt (4).jpg'
import cmntImg5 from '../../public/images/cmnt (5).jpg'
import cmntImg6 from '../../public/images/cmnt (6).jpg'
import cmntImg7 from '../../public/images/cmnt (7).jpg'
import cmntImg8 from '../../public/images/cmnt (8).jpg'
import cmntImg9 from '../../public/images/cmnt (9).jpg'

import scrtImg1 from '../../public/images/scrt (1).jpg'
import scrtImg2 from '../../public/images/scrt (2).jpg'
import scrtImg3 from '../../public/images/scrt (3).jpg'
import scrtImg4 from '../../public/images/scrt (4).jpg'
import scrtImg5 from '../../public/images/scrt (5).jpg'
import scrtImg6 from '../../public/images/scrt (6).jpg'
import scrtImg7 from '../../public/images/scrt (7).jpg'


const ImageGallery = () => {
  const galleryImages = [
    {
      catagory: "nearby-market",
      imgUrls: [mrktImg1, mrktImg2, mrktImg3, mrktImg4, mrktImg5, mrktImg6, mrktImg7]
    },
  
    {
      catagory: "gym-swimming",
      imgUrls: [gymImg1, gymImg2, gymImg3, gymImg4, gymImg5, gymImg6, gymImg7, gymImg8, gymImg9]
    },
  
    {
      catagory: "community-hall",
      imgUrls: [ cmntImg1, cmntImg2, cmntImg3, cmntImg4, cmntImg5, cmntImg6, cmntImg7, cmntImg8, cmntImg9]
    },
  
    {
      catagory: "security",
      imgUrls: [ scrtImg1, scrtImg2, scrtImg3, scrtImg4, scrtImg5, scrtImg6, scrtImg7 ]
    }  
  ];

  const [imagesArray, setImagesArray] = useState(galleryImages[0])

  const selectImages = (btn) => {
    if (btn.id === "marketBtn") {
      setImagesArray(galleryImages[0])
    }else if (btn.id === "gymBtn") {
      setImagesArray(galleryImages[1])
    }else if (btn.id === "hallBtn") {
      setImagesArray(galleryImages[2])
    }else if (btn.id === "securityBtn") {
      setImagesArray(galleryImages[3])
    }
  }

  // console.log(imagesArray.imgUrls)

  return (
    <>
      <div className='container imageGallery bg-pattern-grey mt-4 p-5'>
        <h2 className='mb-2 text-center fontColor__red'>Photo Gallery</h2>
        <hr className='redLine__h mb-2' />
        
        <div className='d-flex flex-wrap justify-content-center w-100 my-4'>
          <button type="button" id="marketBtn"
            className="btn btn-primary btnRounded mx-2 my-2"
            onClick={(e) => selectImages(e.target)}
          >Nearby Market</button>

          <button type="button" id="gymBtn" 
            className="btn btn-primary btnRounded mx-2 my-2"
            onClick={(e) => selectImages(e.target)}
          >Gym / Swimming</button>

          <button type="button" id="hallBtn" 
            className="btn btn-primary btnRounded mx-2 my-2"
            onClick={(e) => selectImages(e.target)}
          >Community Hall</button>

          <button type="button" id="securityBtn" 
            className="btn btn-primary btnRounded mx-2 my-2"
            onClick={(e) => selectImages(e.target)}
          >Security</button>
        </div>

        {imagesArray &&
          <div className='row g-4'>
            <div className='col-6'>
              <div className='g-imageBox'>
                <img
                  src={imagesArray.imgUrls[0]}
                  alt="First slide"
                />
              </div>
            </div>


            <div className='col-6'>
              <div className='row gy-4'>
                {
                  [1, 2, 3, 4].map((n, i) => (
                    <div className='col-6' key={i}>
                      <div className='g-imageBox'>
                        <img
                          src={imagesArray.imgUrls[n]}
                          alt="First slide"
                        />
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        }
      </div>
    </>
  );
}
 
export default ImageGallery;