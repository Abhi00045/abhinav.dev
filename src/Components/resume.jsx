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
        <pre>Built with 🤍 &lt;/&gt; ☕</pre>
      </div>
    </div>
  );
};

export default ResumeCTA;
