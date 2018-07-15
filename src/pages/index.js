import React from 'react'

import Layout from '../components/layout'
import gitHubLogo from '../../assets/github.svg';

const IndexPage = () => (
  <Layout>
    <h1 style={{textAlign: 'center'}}>🚧 Under Construction! 🚧</h1>
      <a href='https://github.com/tadasant/tadasant'>
        <img style={{maxHeight: '2em'}} src={gitHubLogo} alt='GitHub Logo' />
      </a>
  </Layout>
)

export default IndexPage
