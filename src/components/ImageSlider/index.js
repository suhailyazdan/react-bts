import {useState, useRef, useEffect} from "react"
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import sldrImage01 from "../../public/images/sldrImage01.jpg"
import sldrImage02 from "../../public/images/sldrImage02.jpg"
import sldrImage03 from "../../public/images/sldrImage03.jpg"
import sldrImage04 from "../../public/images/sldrImage04.jpg"
import sldrImage05 from "../../public/images/sldrImage05.jpg"
import sldrImage06 from "../../public/images/sldrImage06.jpg"
import sldrImage07 from "../../public/images/sldrImage07.jpg"
import sldrImage08 from "../../public/images/sldrImage08.jpg"
import sldrImage09 from "../../public/images/sldrImage09.jpg"
import sldrImage10 from "../../public/images/sldrImage10.jpg"
import sldrImage11 from "../../public/images/sldrImage11.jpg"

const ImageSlider = () => {
  const sldrImages = [ sldrImage01, sldrImage02, sldrImage03, sldrImage04, sldrImage05, sldrImage06, sldrImage07, 
                       sldrImage08, sldrImage09, sldrImage10, sldrImage11 ]

  const [scrollValue, setScrollValue] = useState(0)

  const scrollStrip = useRef("scrollStrip");

  useEffect(() => {
    scrollStrip.current.scrollLeft = `${scrollValue}`;
  }, [scrollValue])

  const prev = () => {
    if(scrollValue > 0) {
      setScrollValue(scrollValue-50)
    }
  }

  const next = () => {
    if(scrollValue < scrollStrip.current.scrollLeftMax) {
      setScrollValue(scrollValue+50)
    }
  }

  return (
    <div>
      <div className='container slider bg-secondary mt-4'>
        <button className='leftArrow' onClick={prev}>
          <BsChevronCompactLeft /> 
        </button>

        <button className='rightArrow' onClick={next}>
          <BsChevronCompactRight />
        </button>

        <div className='scrollStrip' ref={scrollStrip}>
          {sldrImages.map((i, key) => (
            <div key={key} className="imageBox m-3 shadow">
              <img
                src={i}
                alt="First slide"
              />
            </div>                      
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default ImageSlider;