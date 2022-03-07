
import scImage01 from "../../public/images/scImage (1).jpg"
import scImage02 from "../../public/images/scImage (2).jpg"
import scImage03 from "../../public/images/scImage (3).jpg"
import scImage04 from "../../public/images/scImage (4).jpg"
import scImage05 from "../../public/images/scImage (5).jpg"
import scImage06 from "../../public/images/scImage (6).jpg"


const Scroller = () => {
  const scImages = [
    {imgUrl:scImage01}, 
    {imgUrl:scImage02}, 
    {imgUrl:scImage03}, 
    {imgUrl:scImage04}, 
    {imgUrl:scImage05}, 
    {imgUrl:scImage06}
  ]

  const imgDetails = scImages.map((obj, i, array) => {
    array[i].delay = array[i-1] ? array[i-1].delay + 3.33 : 0
    return obj  
  })

  return (
    <div className="scroller container-fluid mt-4 py-4">
      <div className="imagesWrapper">
        {imgDetails.map((image, key) => (
          <div className="imageBox mx-3" key={key} style={{animationDelay: `${image.delay}s`}}>
            <div style={{width:"100%", height:"100%", position:"relative"}}>
              <img
                src={image.imgUrl}
                alt="sclr"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Scroller;