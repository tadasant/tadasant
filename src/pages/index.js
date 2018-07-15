import React from 'react'

import Layout from '../components/layout'
import gitHubLogo from '../../assets/github.svg';
import linkedInLogo from '../../assets/linkedin.svg';

const IndexPage = () => (
  <Layout>
    <h1 style={{textAlign: 'center'}}>🚧 Under Construction! 🚧</h1>

    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{paddingRight: '2vw'}}>
        <a href='https://github.com/tadasant/tadasant'>
          <img style={{height: '2em'}} src={gitHubLogo} alt='GitHub Logo'/>
        </a>
      </div>
      <div style={{paddingLeft: '2vw'}}>
        <a href='https://www.linkedin.com/in/antanavicius/'>
          <img style={{height: '2em'}} src={linkedInLogo} alt='LinkedInLogo'/>
        </a>
      </div>
    </div>

  </Layout>
)

export default IndexPage
