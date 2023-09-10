import React from 'react'

const Projects = () => {
  let project = [
    {
    projectName : "Escuela",
    github : "https://github.com/AgnesLily2772/ESCUELA",
    description: "Escuela is a web application to record and monitor student both academic as well as extra curricular activities. This is a MERN stack website with the MongoDb as database, Express as Web Framework, React for Frontend and Node for Web Server."
    },
    {
      projectName : "GyanDaan",
      github : "https://github.com/AgnesLily2772/Gyandaan",
      description: "Gyandaan is a website to help students who can't afford coaching classes. Here both students and volunteers/mentors can sign up. This is website is made using frontend technology React JS and Firebase framework."
    },
    {
      projectName : "Booky View",
      github : "https://github.com/AgnesLily2772/BookyView",
      description: "Now I have recently built a MERN stack project which comprises of Front-End, Back-end and Database components. This is website where we can find a lot of books and reviews."
    },
    {
      projectName : "Grocery Mapper",
      github : "https://github.com/AgnesLily2772/GroceryApp",
      description: " Developed this project for a Hackathon called HackSprint conducted by Guvi. I was asked to develop a Delivery app for Groceries. On this website, all items are listed on the website, along with prices. "
    },
    {
      projectName : "React Search App",
      github : "https://github.com/AgnesLily2772/ReactSearchApp",
      description: "This website is all about getting data from API and displaying with the data. Also, this website contains advanced filters, search options and pagination. Everything was built dynamically using React JS."
    },
    {
      projectName : "My Shop Cart",
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
            <div className="" style={{backgroundColor:"navy"}}>
            <h4 className="card-title text-center"style={{color:"springgreen",fontWeight:"bold",padding:"10px"}}>{item.projectName}</h4>
            </div>
            <div className="card-body" style={{backgroundColor:"lightyellow"}}>
              <p className="card-text" style={{color:"navy"}}>{item.description}</p>
            </div>
                <div className='text-center' style={{backgroundColor:"lightyellow"}} >
                <a href={item.github} rel='noreferrer' target="_blank" className="w-75 btn btn-danger">Github Link</a>
                </div>
          </div>
          ))}
      </div>  
    </section>
  )
}
export default Projects