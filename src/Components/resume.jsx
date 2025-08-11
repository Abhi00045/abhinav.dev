import React, { useState } from 'react';
import '../Components/resume.css'

const ResumeCTA = () => {
  // const [likes, setLikes] = useState(2);

  // const handleLike = () => {
  //   setLikes(likes + 1);
  // };

  return (
    <div className="resume-cta-container">
      <div className="resume-cta-text">
        <p className="main-line"><a href="£">Actually, my resume speaks better →</a></p>
        <p className="sub-line">maybe you’ll also like it</p>
      </div>

      {/* <div className="like-button" onClick={handleLike}>
        <span role="img" aria-label="heart">🤍</span> {likes}
      </div> */}

      <div className="footer flex justify-center" >
        <img src="https://64.media.tumblr.com/9f71811b188248bd7fb217a9e915b566/tumblr_n3p1a3E6V31szb9vao1_1280.gif" className='w-60' alt="" />
        <pre>Built with 🤍 &lt;/&gt; ☕</pre>
      </div>
    </div>
  );
};

export default ResumeCTA;
