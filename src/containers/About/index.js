import aboutUs from "../../public/images/aboutUs.jpg";
import aboutUsStrip from "../../public/images/about-us-strip.jpg";

const About = () => {


  return (
    <>
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-12 col-md-5">
            <div className="d-flex flex-column justify-content-between">
              <div>
                <h2 className="mt-3 text-primary">About Us</h2>
                <hr className="mt-3 text-primary" />
                <p>
                  Sankalpa Builders &amp; Developers are one of the Bangalore&apos;s finest builders &amp; developers, known for their special emphasis on quality. Established in 2004 providing unmatched residential buildings for Bangloreans. Every project in Sankalpa is strategically located and delivered on time. The company&apos;s belief is that its customers are its greatest assets. These assets have been won through sheer sincerity and transparency in dealings whether it is small or huge residential complexes.
                </p>

                <p>
                  We have been providing houses with the quality that is unmatched. Sankalpa developers employ the following quality policies ensure that its standard and reputation for high quality services are maintained and enhanced. Provide its customers, at all times, and with services complying with international standard of quality for all aspects of construction works. Meet the expectations and needs of customers. 
                </p>
              </div>

              <div className="w-100 mt-3">
                <div className="rounded-3 shadow overflow-hidden py-4" style={{backgroundColor: "#1e1f1c", textAlign: "center"}}>
                  <img
                    src={aboutUsStrip}
                    alt="about us"
                    style={{width: "80%"}}
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-md-7">
            <div className="rounded-3 shadow overflow-hidden m-2 m-md-5">
              <img
                src={aboutUs}
                alt="about us"
                style={{width: "100%"}}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default About;