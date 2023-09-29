import React,{useState} from 'react'

const Projects = () => {
  let project = [
    {
    projectName : "Escuela",
    github : "https://github.com/AgnesLily2772/ESCUELA",
    deployedURL:"https://escuela-app.netlify.app/",
    category:"MERN",
    description: "Escuela is a web application to record and monitor student both academic as well as extra curricular activities. This is a MERN stack website with the MongoDb as database, Express as Web Framework, React for Frontend and Node for Web Server."
    },
    {
      projectName : "GyanDaan",
      github : "https://github.com/AgnesLily2772/Gyandaan",
      deployedURL:"https://gyandaan2772.netlify.app",
      category:"Frontend",
      description: "Gyandaan is a website to help students who can't afford coaching classes. Here both students and volunteers/mentors can sign up. This is website is made using frontend technology React JS and Firebase framework."
    },
    {
      projectName : "Booky View",
      github : "https://github.com/AgnesLily2772/BookyView",
      deployedURL:"https://bookyview.netlify.app/",
      category:"MERN",
      description: "Now I have recently built a MERN stack project which comprises of Front-End, Back-end and Database components. This is website where we can find a lot of books and reviews."
    },
    {      projectName : "Chat Sphere",
    github : "https://github.com/AgnesLily2772/Capstone-ChatSphere",
    deployedURL:"https://chat-sphere-app.netlify.app/",
    category:"MERN",
    description: "A dynamic MERN stack project featuring real-time chat functionality powered by Socket.io, enabling seamless communication in an immersive online environment."
    },
    {
      projectName : "Grocery Mapper",
      github : "https://github.com/AgnesLily2772/GroceryApp",
      deployedURL:"https://grocery-mapper.netlify.app/",
      category:"MERN",
      description: " Developed this project for a Hackathon called HackSprint conducted by Guvi. I was asked to develop a Delivery app for Groceries. On this website, all items are listed on the website, along with prices. "
    },
    {
      projectName : "React Search App",
      github : "https://github.com/AgnesLily2772/ReactSearchApp",
      deployedURL:"https://react-search-app-2772.netlify.app/",
      category:"Frontend",
      description: "This website is all about getting data from API and displaying with the data. Also, this website contains advanced filters, search options and pagination. Everything was built dynamically using React JS."
    },
    {
      projectName : "My Shop Cart",
      github : "https://github.com/AgnesLily2772/July-3-Task",
      deployedURL:"https://my-shop-cart.netlify.app",
      category:"Frontend",
      description: "The Shop Cart website is made using React JS with enriched UI that allows the users to add items to cart, Empty the cart and give ratings to a particular product."
    },
      {
        projectName : "Admin Master",
        github : "https://github.com/AgnesLily2772/Admin-Master/",
        deployedURL:"admin-master-app.netlify.app",
        category:"Frontend",
        description: "Efficient React project managing students, teachers, and courses using React Context for seamless data handling and effective educational resource management."
      },
      {
        projectName: "JS Playground",
        github:"https://github.com/AgnesLily2772/JS-Playground/",
        deployedURL: "https://js-playground-gallery.netlify.app/",
        category:"Web",
        description: "JS Playground is a collection of web projects showcasing the versatility of JavaScript. Dive into this playground to experiment with code and discover the possibilities of web development."
      },
  ]
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = project.filter((project) =>
    selectedCategory === 'All' ? true : project.category === selectedCategory
  );

  const categories = ['All', 'MERN', 'Frontend', 'Web'];

  return (
    <section className='container' id='projects'>
      <h1 className='section-header'>PROJECTS</h1>
      <div className='category-options mt-5'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
        className={`category-button ${selectedCategory === category ? 'active' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className='project'>
        {filteredProjects.map((item, idx) => (
          <div key={idx} className="card proCard">
            <div className="" style={{ backgroundColor: "navy" }}>
              <h4 className="card-title text-center" style={{ color: "springgreen", fontWeight: "bold", padding: "10px" }}>{item.projectName}</h4>
            </div>
            <div className="card-body" style={{ backgroundColor: "lightyellow" }}>
              <p className="card-text" style={{ color: "navy" }}>{item.description}</p>
            </div>
            <div className='text-center d-flex justify-content-evenly align-items-center' style={{ backgroundColor: "lightyellow" }}>
              <a href={item.github} rel='noreferrer' target="_blank" className="btn btn-danger me-2">Github Link</a>
              <a href={item.deployedURL} rel='noreferrer' target="_blank" className="btn btn-danger ms-2">Deployed URL</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;