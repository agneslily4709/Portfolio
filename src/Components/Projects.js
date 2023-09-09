import React from 'react'

const Projects = () => {
  let project = [
    {
    projectName : "Escuela",
    deployedUrl : "https://escuela.herokuapp.com/",
    github : "https://github.com/AgnesLily2772/ESCUELA",
    description: "Escuela is a web application to record and monitor student both academic as well as extra curricular activities. This is a MERN stack website with the MongoDb as database, Express as Web Framework, React for Frontend and Node for Web Server."
    },
    {
      projectName : "GyanDaan",
      deployedUrl : "https://gyandaan2772.netlify.app/",
      github : "https://github.com/AgnesLily2772/Gyandaan",
      description: "Gyandaan is a website to help students who can't afford coaching classes. Here both students and volunteers/mentors can sign up. This is website is made using frontend technology React JS and Firebase framework."
    },
    {
      projectName : "Booky View",
      deployedUrl : "https://booky-view.netlify.app/",
      github : "https://github.com/AgnesLily2772/BookyView",
      description: "Now I have recently built a MERN stack project which comprises of Front-End, Back-end and Database components. This is website where we can find a lot of books and reviews."
    },
    {
      projectName : "StringTool",
      deployedUrl : "https://stringtool.netlify.app/",
      github : "https://github.com/AgnesLily2772/StringTool",
      description: "String tool is a project using JavaScript which manipulates the text with various functionalities. It was a basuc project where I learnt about different functionalities of JavaScript."
    },
    {
      projectName : "React Search App",
      deployedUrl : "https://react-search-app-2772.netlify.app/",
      github : "https://github.com/AgnesLily2772/ReactSearchApp",
      description: "This website is all about getting data from API and displaying with the data. Also, this website contains advanced filters, search options and pagination. Everything was built dynamically using React JS."
    },
    {
      projectName : "My Shop Cart",
      deployedUrl : "https://my-shop-cart.netlify.app/",
      github : "https://github.com/AgnesLily2772/July-3-Task",
      description: "The Shop Cart website is made using React JS with enriched UI that allows the users to add items to cart, Empty the cart and give ratings to a particular product."
    },
  ]
  return (
    <section className='container' id='projects'>
    <h1 className='section-header'>PROJECTS</h1>
         <div className='project'>
          {project && project.map((item,idx)=>(
            <div key={idx} className="card proCard">
            <div className="card-header" style={{backgroundColor:"navy"}}>
            </div>
            <div className="card-body" style={{backgroundColor:"#e5f6df"}}>
              <h4 className="card-title"style={{color:"crimson"}}>{item.projectName}</h4>
              <p className="card-text" style={{color:"navy"}}>{item.description}</p>
              <a href={item.github} rel='noreferrer' target="_blank" className="btn btn-primary m-2">Github Link</a>
              <a href={item.deployedUrl} rel='noreferrer' target="_blank" className="btn btn-success m-2">Deployed Url</a>
            </div>
          </div>
          ))}
      </div>  
    </section>
  )
}
export default Projects