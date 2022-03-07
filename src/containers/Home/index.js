import React from 'react'
import FeatureSection from '../../components/FeatureSection'
import ImageGallery from '../../components/ImageGallery'
import ImageSlider from '../../components/ImageSlider'
import KeyFeatures from '../../components/KeyFeatures'
import EnquiryForm from '../../components/EnquiryForm'


const Home = () => {
  return (
    <>
      <FeatureSection />
      <ImageGallery />
      <ImageSlider />

      <div className='container mt-4 px-0'>
        <div className='row g-4'>
          <div className='col-12 col-md-6'>
            <div className='h-100'>
              <KeyFeatures />
            </div>
          </div>

          <div className='col-12 col-md-6'>
            <div className='h-100'>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home