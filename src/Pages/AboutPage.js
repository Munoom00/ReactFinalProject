import React from 'react'
import Title from '../Components/Title'
import { InnerLayout, MainLayout } from '../styles/Layout'

const AboutPage = () => {
  return (
    <>
      <MainLayout>
        <InnerLayout>
          <Title title={'About Me'} span={'About me'}/>
        </InnerLayout>
      </MainLayout>
    </>
  )
}

export default AboutPage