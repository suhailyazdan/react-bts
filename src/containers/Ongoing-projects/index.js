import ong01 from "../../public/images/ong01.jpg"
import ong02 from "../../public/images/ong02.jpg"
import ong03 from "../../public/images/ong03.jpg"
import ong04 from "../../public/images/ong04.jpg"
import ong05 from "../../public/images/ong05.jpg"
import ong06 from "../../public/images/ong06.jpg"

const OngoingProjects = () => {
  let url = ""
  return (
    <>
      <div className="container">
        <div className='bg-pattern-grey rounded-3 my-4 p-5 h-100 fontColor__red'>
          <h4>Completed Projects</h4>
          <hr />
          
          <div className='row'>
            <div className='col-12 col-sm-6'>
              <div className="card bg-secondary border-radius shadow my-3" >
                <div className='row g-0'>
                  <div className='col-12 col-lg-5'>
                    <div className='mx-4 mt-4 mb-lg-4'>
                      <div className="g-Box">
                        <img
                          src={ong01}
                          alt="First slide"
                        />
                      </div>
                    </div>
                  </div>

                  <div className='col-12 col-lg-7'>
                    <div className="card-body mb-0 mb-md-3 h-100 mx-2 mx-lg-0 d-flex flex-column align-items-center align-items-lg-start justify-content-center">
                      <h5 className="card-title">Kalpa Green Park</h5>
                      <p className="card-text text-center text-lg-start">Boasts of fully grown gardens, entertainment decks &amp; spacious pools, gym, spa etc.</p>
                      <a href={url} className="btn btn-primary">Project Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12 col-sm-6'>
              <div className="card bg-secondary border-radius shadow my-3" >
                <div className='row g-0'>
                  <div className='col-12 col-lg-5'>
                    <div className='mx-4 mt-4 mb-lg-4'>
                      <div className="g-Box">
                        <img
                          src={ong02}
                          alt="First slide"
                        />
                      </div>
                    </div>
                  </div>

                  <div className='col-12 col-lg-7'>
                  <div className="card-body mb-0 mb-md-3 h-100 mx-2 mx-lg-0 d-flex flex-column align-items-center align-items-lg-start justify-content-center">
                      <h5 className="card-title">Kalpa Residential</h5>
                      <p className="card-text text-center text-lg-start">Boasts of fully grown gardens, entertainment decks &amp; spacious pools, gym, spa etc.</p>
                      <a href={url} className="btn btn-primary">Project Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12 col-sm-6'>
              <div className="card bg-secondary border-radius shadow my-3" >
                <div className='row g-0'>
                  <div className='col-12 col-lg-7'>
                    <div className="card-body mb-0 mb-md-3 h-100 mx-2 mx-lg-0 d-flex flex-column align-items-center align-items-lg-end justify-content-center">
                      <h5 className="card-title">Beach Valley Homes</h5>
                      <p className="card-text text-center text-lg-end">Boasts of fully grown gardens, entertainment decks &amp; spacious pools, gym, spa etc.</p>
                      <a href={url} className="btn btn-primary">Project Details</a>
                    </div>
                  </div>

                  <div className='col-12 col-lg-5'>
                    <div className='mx-4 mb-4 mt-lg-4'>
                      <div className="g-Box">
                        <img
                          src={ong03}
                          alt="First slide"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12 col-sm-6'>
              <div className="card bg-secondary border-radius shadow my-3" >
                <div className='row g-0'>
                  <div className='col-12 col-lg-7'>
                    <div className="card-body mb-0 mb-md-3 h-100 mx-2 mx-lg-0 d-flex flex-column align-items-center align-items-lg-end justify-content-center">
                      <h5 className="card-title">Golden Orchid</h5>
                      <p className="card-text text-center text-lg-end">Boasts of fully grown gardens, entertainment decks &amp; spacious pools, gym, spa etc.</p>
                      <a href={url} className="btn btn-primary">Project Details</a>
                    </div>
                  </div>

                  <div className='col-12 col-lg-5'>
                    <div className='mx-4 mb-4 mt-lg-4'>
                      <div className="g-Box">
                        <img
                          src={ong04}
                          alt="First slide"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12 col-sm-6'>
              <div className="card bg-secondary border-radius shadow my-3" >
                <div className='row g-0'>
                  <div className='col-12 col-lg-5'>
                    <div className='mx-4 mt-4 mb-lg-4'>
                      <div className="g-Box">
                        <img
                          src={ong05}
                          alt="First slide"
                        />
                      </div>
                    </div>
                  </div>

                  <div className='col-12 col-lg-7'>
                    <div className="card-body mb-0 mb-md-3 h-100 mx-2 mx-lg-0 d-flex flex-column align-items-center align-items-lg-start justify-content-center">
                      <h5 className="card-title">Ultra Luxury Apartents</h5>
                      <p className="card-text text-center text-lg-start">Boasts of fully grown gardens, entertainment decks &amp; spacious pools, gym, spa etc.</p>
                      <a href={url} className="btn btn-primary">Project Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12 col-sm-6'>
              <div className="card bg-secondary border-radius shadow my-3" >
                <div className='row g-0'>
                  <div className='col-12 col-lg-5'>
                    <div className='mx-4 mt-4 mb-lg-4'>
                      <div className="g-Box">
                        <img
                          src={ong06}
                          alt="First slide"
                        />
                      </div>
                    </div>
                  </div>

                  <div className='col-12 col-lg-7'>
                    <div className="card-body mb-0 mb-md-3 h-100 mx-2 mx-lg-0 d-flex flex-column align-items-center align-items-lg-start justify-content-center">
                      <h5 className="card-title">Kalpa Estate Club</h5>
                      <p className="card-text text-center text-lg-start">Boasts of fully grown gardens, entertainment decks &amp; spacious pools, gym, spa etc.</p>
                      <a href={url} className="btn btn-primary">Project Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default OngoingProjects;