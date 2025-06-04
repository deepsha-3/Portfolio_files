import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, Moon, Sun, Camera, Instagram, MailCheck } from 'lucide-react';
// import {ChevronLeft, ChevronRight} from 'lucide-react';
// import Typed from 'typed.js'

  


function App() {
  const [isDark, setIsDark] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);


  // import React from "react";
// import "./Navbar.css";
  // return (
  //   <nav className="navbar">
  //     <div className="logo">
  //       <img src="logo.png" alt="Logo" />
  //     </div>
  //     <ul className="nav-links">
  //       <li><a href="#" className="active">Gallery</a></li>
  //       <li><a href="#">About Me </a></li>
  //       <li><a href="#">Skills</a></li>
  //       <li><a href="#">Projects</a></li>
  //       <li><a href="#">Get In Touch </a></li>
  //     </ul>
  //   </nav>
  // );


  const backgroundImages = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920",
     "public/Image/img7.jpeg",
    "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=1920",
     "public/Image/black.png",
    "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=1920",
    "public/Image/wh.png",
   "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=1920",
    // "image/img2.jpeg",
    "public/Image/b.png",
    // "image/img8.jpeg",
 
  ];    
    const gallerySections = [
  {
    sectionTitle: "Project Collection",
    images: [
      { url: "public/Image/iot_attendance_connections.png" },
      { url: "public/Image/attendancepic.jpg" },
      { url: "public/Image/SmartHAS.webp" },
      // { url: "image/proj2.jpg" }
    ]
  },

  {
    sectionTitle: "Team Collaboration and Group Work",
    images: [
      { url: "public/Image/G2.jpg" },
      { url: "public/Image/digitalsathigc.jpg" },
      { url: "public/Image/collagegc.jpg" },
      { url: "public/Image/nfdinGc.jpg" },
      { url: "public/Image/adsCo.jpg" }
    ]
  },

  {
    sectionTitle: "My Pictures",
    images: [
      { url: "public/Image/my3.jpg" },
      { url: "public/Image/my2.jpg" },
      // { url: "image/my.jpg" },
      // { url: "image/my4.jpg" },
      // { url: "image/my5.jpg" }
    ]
  }

];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const projects = [
    {
      title: "Project One: Calculator Project",
      description: "Calculator project is my first projet. In this project, I use HTML, CSS, JavaScript. HTML defines different tags and looks. CSS is used for adding colors and style to these HTML elements and tags. JavaScript is used to perform the logic of the calculator.",
      image: "../public/Image/calculator.png",
      link: "../src/WEB/HTML/calculator.html"
    },

    {
      title: "Project Two: Digital Clock",
      description: "Digital clock is my second project. In this project, I use HTML, CSS, JavaScript. The digital clock displays the current time in hours, minutes, and seconds. It updates every second to show the real-time clock.",
      image: "../public/Image/dc.png",
      link: "../src/WEB/HTML/digitalclock.html"
    },

    {
      title: "Project Three: Color Game ",
      description: "The color game is a fun and interactive web application. In this project, I use HTML, CSS. The game presents a color and asks the user to identify it by clicking on the correct color box.",
      image: "../public/Image/color.png",
      link: "../src/WEB/HTML/colorgame.html"
    },

     {
      title: "Project Four: Typing Speed Test",
      description: "Typing Speed Test is a web application that measures how fast you can type. In this project, I use HTML, CSS, JavaScript. The application displays a random text, and the user has to type it as quickly as possible. It calculates the typing speed in words per minute (WPM) and provides feedback on accuracy.",
      image: "../public/Image/typParagraph.png",
      link: "../src/WEB/HTML/typinggame.html"
    },

    {
      title: "Project Five: Quiz Game",
      description: " Quiz game is a fun and interactive web application. In this project, I use HTML, CSS, JavaScript. The game presents a series of questions and multiple-choice answers. The user selects the correct answer, and the application keeps track of the score.",
      image: "../public/Image/quiz.png",
      link: "../src/WEB/HTML/quizgame.html"
    },

    {
      title: "Project Six: OTP Verification",
      description: "OTP Verification is a security feature used to verify user identity. In this project, I use HTML, CSS, JavaScript. The application generates a one-time password (OTP) and verify the code.",
      image: "../public/Image/otppicture.png",
      link: "../src/WEB/HTML/otp.html"
    },
  ];

  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100]
  
  const opacityOutput = [0, 1, 0];
  const opacity = useTransform(x, xInput, opacityOutput);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-200">
      {/* Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 transition-colors duration-200"
      >
        {isDark ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {/* Hero Section */}
      
      <motion.header 
        className="h-screen hero-background relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`background-slide ${index === currentImageIndex ? 'active' : 'inactive'}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <motion.p>My name is</motion.p>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            >
          Dipisha Dumre
            </motion.h1>
            {/* <motion.p 
              className="text-xl md:text-2xl mb-8"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            
              const TypingEffect = () => {
                useEffect(() => {
                 const typed = new Typed("#input", {
                   strings: ["Frontend Developer", "UI/UX Designer"],
                    typeSpeed: 100,
                     backSpeed: 90,
                      loop: true,
                 });

                 return () => typed.destroy(); // Cleanup when unmounting
                 }, []);

            return <span id="input"></span>;
            };
            
            </motion.p> */}
            <motion.div 
              className="flex justify-center space-x-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a href="https://github.com/deepsha-3" className="p-2 hover:text-primary-light dark:hover:text-primary-dark transition-colors"><Github size={24} /></a>
              <a href="https://www.instagram.com/deep_sha_dumre/following/" className="p-2 hover:text-primary-light dark:hover:text-primary-dark transition-colors">< Instagram size={24} /></a>
              {/* <a href="https://github.com/deepsha-3" className="p-2 hover:text-primary-light dark:hover:text-primary-dark transition-colors"><Discord size={24} /></a> */}
              <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" className="p-2 hover:text-primary-light dark:hover:text-primary-dark transition-colors"><Mail size={24} /></a>
            </motion.div>
          </div>
        </div>
      </motion.header>



      {/* ------Gallery Section----------- */}
      <section className="py-20 bg-neutral-100 dark:bg-neutral-800 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            {...fadeIn}
          >
            <Camera className="w-12 h-12 mx-auto mb-6 text-neutral-600 dark:text-neutral-400" />
            <h2 className="text-4xl font-bold mb-4">Gallery</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              A glimpse into my development journey
            </p>
          </motion.div>
          
          <motion.div 
      ref={constraintsRef}
      className="gallery-container overflow-x-auto scrollbar-hide"
      whileTap={{ cursor: "grabbing" }}
    >

      <motion.div 
        className="gallery-track flex"
        drag="x"
        dragConstraints={constraintsRef}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        style={{ x }}
      >


        {gallerySections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="gallery-section flex-shrink-0 w-full">
            <h3 className="text-2xl font-bold mb-4">{section.sectionTitle}</h3>
            <div className="flex overflow-x-auto scrollbar-hide">
              {section.images.map((image, index) => (
                <motion.div
                  key={image.url}
                  className="gallery-item flex-shrink-0 w-64 mr-4"
                  whileHover={{ scale: isDragging ? 1 : 1.02 }}
                >
                  <img src={image.url} alt={`Gallery Image ${index + 1}`} className="w-full h-auto" />
                </motion.div>
              ))}
            </div>
          </div>
        ))}

{/*         
        {gallerySection.map(( image, index) => (
          <motion.div
            key={image.url}
            className="gallery-item flex-shrink-0 w-64 mr-4"
            whileHover={{ scale: isDragging ? 1 : 1.02 }}
          >
            <img src={image.url} alt={image.title} className="w-full h-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <h3 className="text-white text-xl font-semibold">{image.title}</h3>
            </div>
          </motion.div>
        ))} */}
      </motion.div>
    </motion.div>
        </div>
      </section>

      
      <section 
    className="py-20 bg-neutral-50 dark:bg-neutral-800 transition-colors duration-200" 
    id="about">

    <div className="container mx-auto px-4">
        <motion.div 
            className="max-w-4xl mx-auto flex items-center gap-8 text-left"
            {...fadeIn}
        >
      
            <img 
                src="../public/Image/meee.jpg" 
                alt="Dipisha Dumre" 
                className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full shadow-lg"
            /> 
            
            <div>
                <h2 className="text-4xl font-bold mb-6">About Me</h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    I'm a passionate tech student with two years of experience in web development, specializing in crafting beautiful and functional web applications. 
                    From interactive UI designs to dynamic features, I bring creativity and precision to every project.
                    My expertise in modern frameworks ensures seamless user experiences tailored to diverse needs.
                </p> 
                
                {/* CV Download Button */}
                <a 
                    href="Dipisha Dumre cv.pdf" 
                    download
                    className="mt-6 inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
                >
                    Download CV
                </a>
            </div>
        </motion.div>
    </div>
</section> 


      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-neutral-900 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            {...fadeIn}
          >
            <Code2 className="w-12 h-12 mx-auto mb-6 text-neutral-600 dark:text-neutral-400" />
            <h2 className="text-4xl font-bold">Skills</h2>
          </motion.div>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} 
            transition={{ staggerChildren: 0.2 }}
          >
            {[ 'C', 'C++', 'C#', 'HTML', 'CSS','JavaScript', 'Python', 'Database', 'React','Node.js'].map((skill, index) => (
              <motion.div
                key={skill}
                className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold">{skill}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            {...fadeIn}
          >
            <Briefcase className="w-12 h-12 mx-auto mb-6 text-neutral-600 dark:text-neutral-400" />
            <h2 className="text-4xl font-bold">Projects</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">{project.description}</p>
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
                  >
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
    <section className="py-20 bg-white dark:bg-neutral-900 transition-colors duration-200">
      <div className="container mx-auto px-4 flex flex-col items-center gap-10">
        <div className="w-full text-center">
          <h2 className="text-3xl font-semibold">Get In Touch</h2>
        </div>
        <div className="flex flex-col md:flex-row w-full items-start gap-10">
          
          {/* Contact Details */}
          <motion.div className="w-full md:w-1/2 space-y-6 text-center md:text-left p-6 bg-gray-100 dark:bg-neutral-800 rounded-lg shadow-lg" {...fadeIn}>
            <h3 className="text-xl font-medium">Contact Info</h3>
            <div>
              <strong>Phone :</strong> <br />
              <a href="tel:9748210375" className="text-gray-500">9748210375</a>
            </div>
            <div>
              <strong>Email :</strong> <br />
              <a href="mailto:dipishadumre12@gmail.com" className="text-gray-500">dipishadumre12@gmail.com</a>
            </div>
            <div>
              <strong>Location:</strong> <br />
              Syangja, Nepal
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div className="w-full md:w-1/2 p-6 bg-gray-100 dark:bg-neutral-800 rounded-lg shadow-lg" {...fadeIn}>
            <h3 className="text-xl font-medium">Send a Message</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Enter your name" className="w-full p-3 rounded-md border dark:border-neutral-700" />
              <input type="email" placeholder="Enter your email" className="w-full p-3 rounded-md border dark:border-neutral-700" />
              <textarea placeholder="Enter your message" className="w-full p-3 rounded-md border dark:border-neutral-700 h-32"></textarea>
              <button className="bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition">
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>

      {/* Footer */}
      <footer className="py-8 bg-neutral-900 dark:bg-black text-neutral-400 dark:text-neutral-500">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Dipisha Dumre. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;