'use client'

import Image from 'next/image'
import Scripts from './scripts'
import { useState } from 'react'
import { Highlighter } from '@/components/ui/highlighter'
import { ShinyButton } from '@/components/ui/shiny-button'

export default function Home() {
  const [showAllProjects, setShowAllProjects] = useState(false)

  const projects = [
    {
      id: 1,
      title: "Persona Fine Tuning",
      description: "Advanced fine-tuning solution for creating personalized AI personas with custom behavior and knowledge.",
      image: "/images/fine-tune.png",
      imageAlt: "Persona Fine Tuning",
      url: "https://github.com/arnavk1872/dpo_lora"
    },
    {
      id: 2,
      title: "Hash Trail",
      description: "A comprehensive blockchain explorer for analyzing on-chain data, transactions, and smart contract interactions.",
      image: "/images/onchain.png",
      imageAlt: "Hash Trail",
      url: "https://github.com/arnavk1872/onchain-explorer"
    },
    {
      id: 3,
      title: "Chroma Explorer",
      description: "An advanced tool for exploring and visualizing data stored in ChromaDB vector databases with intuitive search and filtering capabilities.",
      image: "/images/chroma.png",
      imageAlt: "Chroma Explorer",
      url: "https://chroma-explorer.vercel.app/"
    },
    {
      id: 4,
      title: "Seekr",
      description: "A web app that lets users ask questions about YouTube videos in real time, ideal for education, research, and interactive learning.",
      image: "/images/Seekr.png",
      imageAlt: "Seekr",
      url: "https://github.com/arnavk1872/seekr"
    },
    {
      id: 5,
      title: "Grabbzo",
      description: "A mobile-first app and Website for dine-in, pre-ordering food and takeaway from nearby restaurants.",
      image: "/images/grabzo.png",
      imageAlt: "Grabbzo",
      url: "https://grabbzo.com"
    },
    {
      id: 6,
      title: "Legal Lancer",
      description: "A platform where clients can post freelance projects and skilled professionals can apply on said work.",
      image: "/images/LegalLancer.png",
      imageAlt: "Legal Lancer",
      url: "https://legalLancerIndia.com"
    },
    {
      id: 7,
      title: "altCtrlHistory",
      description: "An app where you change a moment in history and see how events might unfold in an alternate timeline.",
      image: "/images/altctrlHistory.png",
      imageAlt: "altCtrlHistory",
      url: "https://altcrtl-history.vercel.app/"
    },
    {
      id: 8,
      title: "Krypt Dapp",
      description: "Decentralized open sourced Cryptocurrency Sending and Transaction Recording Application",
      image: "/images/121.png",
      imageAlt: "Krypt Dapp",
      url: "https://github.com/arnavk1872/Krypt"
    },
    {
      id: 9,
      title: "Memories",
      description: "A social media app built using MERN stack, offering seamless experiences across every device.",
      image: "/images/as.png",
      imageAlt: "Memories",
      url: "https://github.com/arnavk1872/Memories_App"
    },
    {
      id: 10,
      title: "Eth-Marketplace",
      description: "Buy courses using Ethereum by linking your Metamask wallet",
      image: "/images/ec2.png",
      imageAlt: "Eth-Marketplace",
      url: "https://github.com/arnavk1872/Ethereum-Marketplace"
    },
    {
      id: 11,
      title: "Pynest",
      description: "Python code editor with inbuilt examples for assistance.",
      image: "/images/pynest.png",
      imageAlt: "Pynest",
      url: "https://python-code-editor-tawny.vercel.app/"
    },
    {
      id: 12,
      title: "Slack Bot",
      description: "A bot that can be used to ask for approval requests from any workspace participant.",
      image: "/images/slack.png",
      imageAlt: "Slack Bot",
      url: "https://github.com/arnavk1872/slack-bot"
    }
  ]

  const featuredProjects = projects.slice(0, 6)
  const additionalProjects = projects.slice(6)

  return (
    <>
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

      <header id="header" className="d-flex flex-column justify-content-center ">
        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
            <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
            <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
            <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
            <li><a href="#research" className="nav-link scrollto"><i className="bx bx-library"></i> <span>Research & Blogs</span></a></li>
            <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
          </ul>
        </nav>
      </header>

      <section id="hero" className="d-flex flex-column justify-content-center">
        <div id="flying-carrot-canvas"></div>
        <div className="container" data-aos="zoom-in" data-aos-delay="100">
          <p> Hey! I&apos;m </p>
          <h1>Arnav Khajuria</h1>
          <div className="social-links">
            <a href="https://twitter.com/Arnavkhajuria18" target="_blank" rel="noopener noreferrer" className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=arnavk1802@gmail.com" target="_blank" rel="noopener noreferrer" className="bi-envelope-fill">
              <i className="bx bxl-envelope"></i>
            </a>
            <a href="https://github.com/arnavk1872" target="_blank" rel="noopener noreferrer" className="github" id="1"><i className="bx bxl-github"></i></a>
            <a href="https://discord.com/channels/@me" target="_blank" rel="noopener noreferrer" className="discord"><i className="bx bxl-discord"></i></a>
            <a href="https://www.linkedin.com/in/arnav-khajuria-940376228/" target="_blank" rel="noopener noreferrer" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about ">
          <div className="container text-justify" data-aos="fade-up">
            <div className="section-title font ">
              <h2>About</h2>
              Hi, I&apos;m Arnav Khajuria, a <Highlighter action="highlight" color="#FFD700">full-stack software developer</Highlighter> with 2+ years of experience building web platforms,
              cloud infrastructure, and <Highlighter action="highlight" color="#FF9F66">AI-powered systems</Highlighter>. I graduated with a B.E. in Electronics & Communication
              Engineering from Government College of Engineering and Technology, J&K, India.

              I specialize in designing and implementing <Highlighter action="underline" color="#DDA0DD">intelligent systems</Highlighter>, with hands-on experience in <Highlighter action="highlight" color="#FF6B9D">applied AI</Highlighter>,
              <Highlighter action="highlight" color="#C77DFF">LLM-based workflows</Highlighter>, and end-to-end product development. My work spans frontend and backend engineering,
              DevOps, and integrating AI capabilities into production-ready applications. I&apos;m particularly interested in <Highlighter action="highlight" color="#4ECDC4"> agentic AI </Highlighter>, scalable system design and building secure solutions that deliver real-world value.

              Alongside AI, I actively explore blockchain technologies and decentralized systems. Outside of engineering,
              I&apos;m a gamer and musician.
            </div>
          </div>
        </section>

        <section id="resume" className="resume">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Resume</h2>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <h3 className="resume-title font-mono">Summary</h3>
                <div className="resume-item pb-0">
                  <h4>Skills</h4>
                  <div className="bg-white  p-2 rounded-md">
                    <h2 className="text-base font-semibold mb-2">AI & LLM Development</h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-200 rounded-full">Langchain</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">Mem0</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">RAG</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">LoRA</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">HuggingFace</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">LangGraph</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">ChromaDB</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">Python</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">PEFT</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">Qdrant</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">MCP</span>
                    </div>
                  </div>
                  <div className="bg-white  p-2 rounded-md">
                    <h2 className="text-base font-semibold mb-2">Front-End Development</h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-200 rounded-full">HTML</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">CSS</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">JS</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">React.js</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">Tailwind</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">Bootstrap</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">Next.js</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">Redux</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">Zustand</span>
                    </div>
                  </div>
                  <div className="bg-white  p-2 rounded-md">
                    <h2 className="text-base font-semibold mb-2">Backend Development</h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-200 rounded-full">MongoDB</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">EJS</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">Node.js</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">Express.js</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">REST</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">MySQL</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">PHP</span>
                    </div>
                  </div>
                  <div className="bg-white  p-2 rounded-md">
                    <h2 className="text-base font-semibold mb-2">Devops</h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-200 rounded-full">AWS</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">Jenkins</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">Docker</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">Kubernetes</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">Trivvy</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">New Relic</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">GCP</span>
                    </div>
                  </div>
                  <div className="bg-white  p-2 rounded-md">
                    <h2 className="text-base font-semibold mb-2">Blockchain Development</h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-200 rounded-full">Solidity</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">Hardhat</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">Polygon</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">Metamask</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">Ganache</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">Truffle</span>
                    </div>
                  </div>
                  <div className="bg-white  p-2 rounded-md">
                    <h2 className="text-base font-semibold mb-2">Miscellaneous Skills</h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-gray-200 rounded-full">System Design</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">Version Control</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">Agile</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">Problem Solving</span>
                      <span className="px-2 py-1 bg-gray-200 rounded-full">n8n</span>
                    </div>
                  </div>
                </div>

                <h3 className="resume-title font-mono">Education</h3>
                <div className="resume-item">
                  <h4>Bachelors in Electronics &amp; communication Engineering</h4>
                  <h5>2020 - 2024</h5>
                  <p className="font-semibold">Government College of Engineering &amp; Technology, Jammu</p>
                  <p>8.2 CGPA</p>
                </div>
                <div className="resume-item">
                  <h4>Class 12th </h4>
                  <h5>2019 - 2020</h5>
                  <p className="font-semibold">M.V International School, Jammu</p>
                  <p>Passed class 12th with 87% and an A+ Grade</p>
                </div>
                <div className="resume-item">
                  <h4>Class 10th </h4>
                  <h5>2018</h5>
                  <p className="font-semibold">Delhi Public School,Jammu</p>
                  <p>Passed class 10th with 86% and an A+ Grade</p>
                </div>
              </div>
              <div className="col-lg-6">
                <h3 className="resume-title font-mono">Professional Experience</h3>
                <div className="resume-item ">
                  <h4>Software developer</h4>
                  <h5 className="font-sans">Feb 25 - Present</h5>
                  <p className="font-semibold">Polkassembly - Remote</p>
                  <ul>
                    <li>‣ Built LLM-powered agent workflows using LangChain to automate parsing, summarization, and analysis of governance proposals within the Polkadot ecosystem. </li>
                    <li>‣ Designed and deployed Retrieval-Augmented Generation (RAG) pipelines using Mem0 and ChromaDB to enable context-aware, on-chain governance intelligence. </li>
                    <li>‣ Fine-tuned transformer-based models using Hugging Face and LoRA for sentiment analysis and user intent classification..</li>
                  </ul>
                </div>
                <div className="resume-item ">
                  <h4>Software developer</h4>
                  <h5 className="font-sans">Jan 24 - Feb 25</h5>
                  <p className="font-semibold">Avisoft - Jammu, J&K</p>
                  <ul>
                    <li>‣ Collaborating with cross-functional teams to gather requirements and deliver high-quality solutions. </li>
                    <li>‣ Increased the Lighthouse performance score from 60 to 84 through optimization techniques, enhancing overall user experience and website efficiency. </li>
                    <li>‣ Implementing best practices for code quality, testing, and version control.</li>
                  </ul>
                </div>
                <div className="resume-item ">
                  <h4>Blockchain Development Intern</h4>
                  <h5 className="font-sans">Feb 23 - April 23</h5>
                  <p className="font-semibold">NFJ Labs - Remote</p>
                  <ul>
                    <li>‣ Implemented blockchain solutions for secure and transparent transaction processing within the marketplace.</li>
                    <li>‣ Learned about consensus mechanisms,public key crptography & how they are implemented in real world projects.</li>
                  </ul>
                </div>
                <div className="resume-item">
                  <h4>Web Development Intern</h4>
                  <h5>June 22 - Aug 22</h5>
                  <p className="font-semibold">Study MONK - Remote</p>
                 
                </div>
                <div className="resume-item">
                  <h4>Web Development Intern</h4>
                  <h5>June 21 - July 21</h5>
                  <p className="font-semibold">Suvidha Foundation - Remote</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="portfolio section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Portfolio</h2>
              <p>Below is a curated list of projects I&apos;ve built or am currently working on. Each project showcases different technologies and problem-solving approaches. You can click on any project to explore its details and view the source code on my GitHub profile.</p>
            </div>
            <div className="row mt-4">
              {featuredProjects.map((project) => (
                <div key={project.id} className="col-lg-4 col-md-6 mb-4">
                <div className="portfolio-item bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-100 d-flex flex-column">
                  <div className="portfolio-img-wrapper overflow-hidden">
                      <img src={project.image} alt={project.imageAlt} className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110" />
                      </div>
                      <div className="p-4 flex-grow-1 d-flex flex-column">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                      <p className="text-gray-600 mb-4 flex-grow-1">{project.description}</p>
                      <div className="mt-auto">
                        <ShinyButton 
                          onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
                          className="w-full text-center bg-blue-500 text-white border-blue-500 border-2 px-4 py-2.5 font-semibold text-sm hover:bg-blue-700 hover:border-blue-700 transition-all duration-200"
                        >
                          View Project <i className="bi bi-arrow-right ms-2"></i>
                        </ShinyButton>
                      </div>
                    </div>
                  </div>
                      </div>
              ))}
              
              {showAllProjects && additionalProjects.map((project) => (
                <div key={project.id} className="col-lg-4 col-md-6 mb-4">
                    <div className="portfolio-item bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-100 d-flex flex-column">
                      <div className="portfolio-img-wrapper overflow-hidden">
                      <img src={project.image} alt={project.imageAlt} className="w-full h-56 object-cover transition-transform duration-300 hover:scale-110" />
                      </div>
                      <div className="p-4 flex-grow-1 d-flex flex-column">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                      <p className="text-gray-600 mb-4 flex-grow-1">{project.description}</p>
                      <div className="mt-auto">
                        <ShinyButton 
                          onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
                          className="w-full text-center bg-blue-600 text-white border-blue-600 border-2 px-4 py-2.5 font-semibold text-sm hover:bg-blue-700 hover:border-blue-700 transition-all duration-200"
                        >
                          View Project <i className="bi bi-arrow-right ms-2"></i>
                        </ShinyButton>
                      </div>
                    </div>
                  </div>
                      </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="btn btn-outline-primary px-3 py-2"
              >
                {showAllProjects ? (
                  <>
                    View Less <i className="bi bi-chevron-up ms-2"></i>
                  </>
                ) : (
                  <>
                    View More <i className="bi bi-chevron-down ms-2"></i>
                  </>
                )}
              </button>
            </div>
          </div>
        </section>

        <section id="research" className="research section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Research & Blogs</h2>
              <p>Research notes, documentation, and articles on AI, machine learning, and technology topics I&apos;ve been exploring.</p>
            </div>
            <div className="row mt-4">
              <div className="col-lg-6 mb-4">
                <div className="research-item bg-white rounded shadow-md p-4 h-100">
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-journal-text fs-2 text-info me-3"></i>
                    <div>
                      <h4 className="mb-1">How Do Large Language Models Work?</h4>
                      <p className="text-muted mb-0">Understanding LLM fundamentals</p>
                    </div>
                  </div>
                  <p className="mb-3">An in-depth exploration of how large language models function and the principles behind their ability to understand and generate human-like text.</p>
                  <a href="https://medium.com/@arnavk1802/how-do-large-language-models-work-cb94b5c173f2?postPublishedType=initial"
                    target="_blank" rel="noopener noreferrer" className="btn btn-info">
                    <i className="bi bi-box-arrow-up-right me-2"></i>Read Article
                  </a>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="research-item bg-white rounded shadow-md p-4 h-100">
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-journal-code fs-2 text-danger me-3"></i>
                    <div>
                      <h4 className="mb-1">What is Fine-Tuning?</h4>
                      <p className="text-muted mb-0">A guide to model fine-tuning</p>
                    </div>
                  </div>
                  <p className="mb-3">Learn about fine-tuning techniques for machine learning models, including when and how to apply them to adapt pre-trained models for specific tasks.</p>
                  <a href="https://medium.com/@arnavk1802/what-is-fine-tuning-74e712eb336a?postPublishedType=initial"
                    target="_blank" rel="noopener noreferrer" className="btn btn-danger">
                    <i className="bi bi-box-arrow-up-right me-2"></i>Read Article
                  </a>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="research-item bg-white rounded shadow-md p-4 h-100">
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-robot fs-2 text-success me-3"></i>
                    <div>
                      <h4 className="mb-1">Custom GPTs</h4>
                      <p className="text-muted mb-0">Research on custom GPT implementations</p>
                    </div>
                  </div>
                  <p className="mb-3">Research and documentation on custom GPT development, implementation strategies, and best
                    practices.</p>
                  <a href="https://spiffy-cylinder-060.notion.site/CUSTOM-GPT-s-21cf1d7ac5428071b8cbc940e5ff9676?pvs=73"
                    target="_blank" rel="noopener noreferrer" className="btn btn-success">
                    <i className="bi bi-box-arrow-up-right me-2"></i>View Docs
                  </a>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="research-item bg-white rounded shadow-md p-4 h-100">
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-journal-text fs-2 text-warning me-3"></i>
                    <div>
                      <h4 className="mb-1">Memory Systems</h4>
                      <p className="text-muted mb-0">Research on memory and cognitive systems</p>
                    </div>
                  </div>
                  <p className="mb-3">Documentation and research notes on memory systems, cognitive processes, and related
                    technologies.</p>
                  <a href="https://www.notion.so/Memory-231f1d7ac542803ebf10d0de2ec43a19?source=copy_link" target="_blank" rel="noopener noreferrer"
                    className="btn btn-warning">
                    <i className="bi bi-box-arrow-up-right me-2"></i>View Docs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Contact</h2>
            </div>
            <div className="row mt-1">
              <div className="col-lg-4">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>Jammu, J&K ,India</p>
                  </div>
                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>arnavk1802@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 mt-5 mt-lg-0">
                <form id="contactForm" className="php-email-form" action="/api/contact" method="POST">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                  </div>
                  <div className="form-group mt-3">
                    <textarea className="form-control" name="message" rows={5} placeholder="Message" required></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading" id="loadingMessage" style={{ display: 'none' }}>Your message has been sent. Thank you!</div>
                    <div className="error-message" id="errorMessage" style={{ display: 'none' }}>Error sending message. Please try again.</div>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>Arnav Khajuria 2025</span></strong>.
          </div>
        </div>
      </footer>

      <div id="preloader"></div>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <Scripts />
    </>
  )
}

