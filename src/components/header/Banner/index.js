import Carousel from 'react-bootstrap/Carousel'
import banner02 from "../../../public/images/banner02.jpg"
import banner03 from "../../../public/images/banner03.jpg"
import banner04 from "../../../public/images/banner04.jpg"
import banner05 from "../../../public/images/banner05.jpg"
import banner06 from "../../../public/images/banner06.jpg"

const Banner = () => {

  const bnrImages = [
    {imgUrl:banner02},
    {imgUrl:banner06},
    {imgUrl:banner04},
    {imgUrl:banner03},
    {imgUrl:banner05}
  ]

  return (
    <>
      <div>
        <Carousel fade>
          {
            bnrImages.map((image, i) => (
              <Carousel.Item key={i}>
                <div className='bnrImgWrapper'>
                  <img
                    src={image.imgUrl}
                    alt="First slide"
                  />  
                </div>

                <Carousel.Caption >
                  <h3 style={{textShadow: "0px 0px 10px rgba(0, 0, 0, 1)"}}>Where Luxury Meets Location</h3>
                  <p style={{textShadow: "0px 0px 3px rgba(0, 0, 0, 1)"}}>Happiness inspired by unlimited luxury. Own your dreams with luxury and Savings</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))
          }
        </Carousel>
      </div>
    </>
  );
}
 
export default Banner;