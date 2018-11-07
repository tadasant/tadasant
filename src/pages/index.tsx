import { SFC } from 'react'
import * as React from 'react';
import Shell from '../components/Shell';
import gitHubLogo from '../../assets/github.svg';
import linkedInLogo from '../../assets/linkedin.svg';

const IndexPage: SFC = () => (
  <Shell>
    <h1 style={{textAlign: 'center'}}>🚧 Under Construction! 🚧</h1>
    {/*<Link to="/about/">About</Link>*/}

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

  </Shell>
)

export default IndexPage
