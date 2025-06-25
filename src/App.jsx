import { useState, useEffect } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faEnvelope, faBriefcase, faArrowDown, faLink, faCode, faRocket, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import myImage from '/src/assets/images/my_profile.jpg';



function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  const skills = [
    { name: 'React', level: 90, color: '#61DAFB' },
    { name: 'JavaScript', level: 85, color: '#F7DF1E' },
    { name: 'TypeScript', level: 80, color: '#3178C6' },
    { name: 'Node.js', level: 75, color: '#339933' },
    { name: 'Python', level: 70, color: '#3776AB' },
    { name: 'CSS/Tailwind', level: 95, color: '#06B6D4' },
  ]

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      tech: ['React', 'Firebase', 'CSS'],
      github: '#',
      live: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      tech: ['React', 'API Integration', 'Charts.js'],
      github: '#',
      live: '#'
    }
  ]

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="nav-menu desktop-menu">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          {/* Dark Mode Toggle & Mobile Menu */}
          <div className="nav-controls">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="theme-toggle"
              aria-label="Toggle dark mode"
            >
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />

            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle mobile menu"
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />

            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="mobile-nav-link"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="profile-image">
            <img
              src={myImage}
              alt="Profile"
            />
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Nhoy</span>
          </h1>
          <p className="hero-subtitle">
            Frontend Developer & UI/UX Designer
          </p>
          <p className="hero-description">
            I create beautiful, responsive web applications with modern technologies.
            Passionate about clean code, user experience, and bringing ideas to life.
          </p>
          <div className="hero-buttons">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn btn-primary"
            >
              View My Work
            </button>
            <a
              href="/src/cv.jsx"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> View CV
            </a>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow">
            <FontAwesomeIcon icon={faArrowDown} />
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=400&fit=crop"
                alt="Working"
              />
            </div>
            <div className="about-text">
              <h3>Passionate Developer with 5+ Years of Experience</h3>
              <p>
                I'm a frontend developer who loves creating digital experiences that make a difference.
                My journey started with curiosity about how websites work, and it has evolved into a
                passion for building scalable, user-friendly applications.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge with the developer community through blog posts and mentoring.
              </p>
              <div className="stats">
                <div className="stat-item">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">30+</div>
                  <div className="stat-label">Designs</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Apps</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} className="project-link">
                      <FontAwesomeIcon icon={faCode} className="mr-1" /> Code
                    </a>
                    <a href={project.live} className="project-link">
                      <FontAwesomeIcon icon={faRocket} className="mr-1" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="contact-description">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can bring your ideas to life!
          </p>

          <div className="contact-grid">
            <div className="contact-item">
              <div className="contact-icon"><FontAwesomeIcon icon={faEnvelope} /></div>
              <h3>Email</h3>
              <p>junexspress91@gmail.com</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><FontAwesomeIcon icon={faBriefcase} /></div>
              <h3>GitHub</h3>
              <p>@junexspress91</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><FontAwesomeIcon icon={faLink} /></div>
              <h3>Facebook</h3>
              <p>@Nhoy</p>
            </div>
          </div>

          <button className="btn btn-primary contact-btn">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 John Doe. Built with React & Vite.</p>
        </div>
      </footer>
    </div>
  )
}

export default App