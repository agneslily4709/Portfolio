import React from 'react'
import {FaReadme} from 'react-icons/fa'
const Blogs = () => {
  let blog = [
    {
      title:"Gender Equality - My perception",
      mediumLink: "https://agneslily2772.medium.com/gender-equality-87c096826286",
      thubmNail:"https://miro.medium.com/max/1400/1*eYg7FotVW_btVo_YAe49bw.jpeg"
    },
    {
      title:"HTTP1.1 vs HTTP2 - Intro to Web",
      mediumLink: "https://agneslily2772.medium.com/introduction-to-browser-web-1d3704ae5bd4",
      thubmNail:"https://miro.medium.com/max/1400/1*NcHxWsBu6FMhvK6gaICMHA.png"
    },
    {
      title:"Meterological Data Analysis",
      mediumLink: "https://agneslily2772.medium.com/meterological-data-analysis-agnes-lily-3cb700a1e6b9",
      thubmNail:"https://miro.medium.com/max/1400/1*d0hqc1qAXUff7yPmR3-MiA.jpeg"
    },
    {
      title:"Objects in JavaScript",
      mediumLink: "https://agneslily2772.medium.com/introduction-to-browser-web-6bdc0d81fe43",
      thubmNail:"https://miro.medium.com/max/1400/1*9oOwlxZUBl_T8uAYRpUenA.png"
    },
    {
      title:"Recognize Written Digits",
      mediumLink:"https://agneslily2772.medium.com/recognizing-written-digits-using-scikit-learn-4d91da376781",
      thubmNail:"https://miro.medium.com/max/1400/1*PtG0uIWHiBkMxGggfZtZxw.png"
    }
  ]
  return (
    <section className='container' id='blogs'>
      <h1 className='section-header'>BLOGS</h1>
      <div className="blogCards">
        {blog && blog.map((blg,idx)=>(
          <div key={idx} className="blg card">
          <img className="card-img-top" src={blg.thubmNail} alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{blg.title}</h5>
            <a target="_blank"  rel='noreferrer' href={blg.mediumLink} className="btn btn-dark">Read   <FaReadme/></a>
          </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Blogs