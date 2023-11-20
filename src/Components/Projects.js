import React,{useState} from 'react'
import {FaKey} from "react-icons/fa"
import {BiSolidCopy} from "react-icons/bi"
const Projects = () => {
  let project = [
        {
                projectName : "Recipe Book",
                github : "https://github.com/AgnesLily2772/RecipeBook",
                deployedURL:"https://recipebook-frontend.netlify.app/",
                category:"MERN",
                description: "The Recipe Book is a web-based platform designed to help users organize, discover, and share their favorite recipes. Filter features and search functionality are enabled and this application provides a UI for creating, editing, categorizing, and searching for recipes.",
                hasDemoCredentials:true,
                email:"agneslily2727@gmail.com",
                password:"12345678"
        },
    {
    projectName : "Escuela",
    github : "https://github.com/AgnesLily2772/Escuela",
    deployedURL:"https://escuela-app.netlify.app/",
    category:"MERN",
    description: "Escuela is a web application to record and monitor student both academic as well as extra curricular activities. This is a MERN stack website with the MongoDb as database, Express as Web Framework, React for Frontend and Node for Web Server.",
    hasDemoCredentials:true,
    email:"agneslily2772@gmail.com",
    password:"12345678"
    },
    {
        projectName : "Grocery Mapper",
        github : "https://github.com/AgnesLily2772/GroceryMapper",
        deployedURL:"https://grocery-mapper.netlify.app/",
        category:"MERN",
        description: " Developed this project for a Hackathon called HackSprint conducted by Guvi. I was asked to develop a Delivery app for Groceries. On this website, all items are listed on the website, along with prices. ",
        hasDemoCredentials:true,
        email:"agneslily2772@gmail.com",
        password:"12345678"
      },
    {
      projectName : "Booky View",
      github : "https://github.com/AgnesLily2772/BookyView",
      deployedURL:"https://bookyview.netlify.app/",
      category:"MERN",
      description: "Now I have recently built a MERN stack project which comprises of Front-End, Back-end and Database components. This is website where we can find a lot of books and reviews.",
      hasDemoCredentials:false
    },
    {      projectName : "Chat Sphere",
    github : "https://github.com/AgnesLily2772/ChatSphere",
    deployedURL:"https://chat-sphere-app.netlify.app/",
    category:"MERN",
    description: "A dynamic MERN stack project featuring real-time chat functionality powered by Socket.io, enabling seamless communication in an immersive online environment.",
    hasDemoCredentials:true,
    email:"agneslily",
    password:"12345678"
    },
    {
        projectName : "My Shop Cart",
        github : "https://github.com/AgnesLily2772/MyShopCart",
        deployedURL:"https://my-shop-cart.netlify.app",
        category:"Frontend",
        description: "The Shop Cart website is made using React JS with enriched UI that allows the users to add items to cart, Empty the cart and give ratings to a particular product.",
        hasDemoCredentials:false
      },
      {
        projectName : "Admin Master",
        github : "https://github.com/AgnesLily2772/Admin-Master/",
        deployedURL:"https://admin-master-app.netlify.app",
        category:"Frontend",
        description: "Efficient React project managing students, teachers, and courses using React Context for seamless data handling and effective educational resource management.",
        hasDemoCredentials:false
      },
      {
        projectName: "JS Playground",
        github:"https://github.com/AgnesLily2772/JS-Playground/",
        deployedURL: "https://js-playground-gallery.netlify.app/",
        category:"Web",
        description: "JS Playground is a collection of web projects showcasing the versatility of JavaScript. Dive into this playground to experiment with code and discover the possibilities of web development.",
        hasDemoCredentials:false
      },
      {
        projectName : "Stroky Brush",
        github : "https://github.com/AgnesLily2772/Stroky-Brush",
        deployedURL:"https://stroky-brush.netlify.app/",
        category:"Frontend",
        description: "Built in React to draw using a canva. Features like eraser, brush color, brush width, brush opacity are available. I have used useRef hook to update the canva area. Finally, the drawing can also be downloaded in a png format.",
        hasDemoCredentials:false
      },
      {
        projectName : "Tic Tac Toe",
        github : "https://github.com/AgnesLily2772/tic-tac-toe",
        deployedURL:"https://tic-tac-toe-2772.netlify.app/",
        category:"Frontend",
        description: "It is a simple Tic Tac Toe game in React JS. The next player is displayed and the winner is announced. The whole logic is implemented using React Hooks and rendering concepts.",
        hasDemoCredentials:false
      },
      {
                projectName : "React Search App",
                github : "https://github.com/AgnesLily2772/ReactSearchApp",
                deployedURL:"https://react-search-app-2772.netlify.app/",
                category:"Frontend",
                description: "This website is all about getting data from API and displaying with the data. Also, this website contains advanced filters, search options and pagination. Everything was built dynamically using React JS.",
                hasDemoCredentials:false   
      },
      {
        projectName : "GyanDaan",
        github : "https://github.com/AgnesLily2772/Gyandaan",
        deployedURL:"https://gyandaan2772.netlify.app",
        category:"Frontend",
        description: "Gyandaan is a website to help students who can't afford coaching classes. Here both students and volunteers/mentors can sign up. This is website is made using frontend technology React JS and Firebase framework.",
        hasDemoCredentials:true,
        email:"agneslily2772@gmail.com",
        password:"12345678"
      }
  ]
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copyEmail,setEmailCopy] = useState("")
  const [copyPass,setPassCopy] = useState("")

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
            <div className="d-flex align-items-center justify-content-between card-header" style={{ backgroundColor: "navy" }}>
              <h4 className="" style={{ color: "springgreen", fontWeight: "bold", padding: "10px" }}>{item.projectName}</h4>
                {item.hasDemoCredentials ? 
                <button key={item.projectName} type='button' className='btn' style={{ color: "navy", fontWeight: "bold", padding: "10px",backgroundColor:"springgreen"}}  data-bs-toggle="modal" data-bs-target="#staticBackdrop">View <FaKey size={20}/></button>
                :null}

                <div className="modal fade" id="staticBackdrop"data-bs-backdrop="static" data-bs-keyboard="false"  tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Demo Credentials</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>{setEmailCopy("");setPassCopy("")}}></button>
                </div>
                <div className="modal-body">
                        <div className='credential'>
                                <p>Email: {item.email}</p><span className='btn btn-success' onClick={()=>{
                                        navigator.clipboard.writeText(item.email)
                                        setPassCopy("")
                                        setEmailCopy("Copied")
                                }}>{copyEmail} <BiSolidCopy type='button'/></span>
                        </div>
                        <div className='credential'>
                        <p>Password: {item.password}</p><span className='btn btn-success' onClick={()=>{
                                navigator.clipboard.writeText(item.password)
                                setEmailCopy("")
                                setPassCopy("Copied")
                        }}>{copyPass} <BiSolidCopy type='button'/></span>
                        </div>
                </div>
                </div>
                </div>
                </div>
            </div>
            <div className="card-body">
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