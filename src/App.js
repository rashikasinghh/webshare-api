import React from 'react';
import {FacebookShareButton,FacebookIcon,TwitterShareButton,TwitterIcon,LinkedinIcon,LinkedinShareButton} from 'react-share';
import ShareButton from 'react-web-share-button';
 

function App () {
    return(
      <div style={{padding:150}}>
        <ShareButton title="Testing Sharing" text="Heroku deployed" url="https://webshare-api.herokuapp.com/"/>
      <FacebookShareButton url={'https://wwww.facebook.com'}>
        <FacebookIcon/>
        </FacebookShareButton>
        <TwitterShareButton url={'https://wwww.twitter.com'}>
        <TwitterIcon
          size={60}
          round />
       </TwitterShareButton>
       <LinkedinShareButton url={'https://wwww.Linkedin.com'}>
        <LinkedinIcon
          size={60}
          round />
       </LinkedinShareButton>
       
       </div>
    )
  }

export default App;
