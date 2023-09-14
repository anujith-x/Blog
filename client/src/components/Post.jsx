import React from 'react'

const Post = () => {
  return (
    <div className="post">
        <div className="image">
        <img src="https://cdn.pixabay.com/photo/2015/05/31/11/52/signs-791333_640.jpg" alt="" />
        </div>
        <div className="texts">
            <h2>Full-house battery backup coming later this year</h2>
            <p className="info">
              <a href="" className="author">Dawid Paszko</a>
              <time>2023-01-06 16:45</time>
            </p>
            <p className='summary'>Mark your calendars, startup fans, because TechCrunch is returning — live and in person — to the beautiful City by the Bay to host our flagship event, TechCrunch Disrupt, on October 18–20 at the Moscone West Convention Center followed by an online recap event on October 21.</p>
        </div>
      </div>
  )
}

export default Post