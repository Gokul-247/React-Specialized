import React from 'react'
import "../Assets/CSS/resume.css";
import profilepic from "../Assets/Images/face.jpg";

const ResumePage = () => {
    const styles = {
        textDecoration: 'underline'
    }

  return (
    <div>
        <header>
        <img align="left" src={profilepic} 
        style={{height:"100px", width:"100px", borderRadius:"50%"}}/>
        <img align="right" height="100px" width="100px" 
        src="https://media.istockphoto.com/id/1354898581/photo/shot-of-a-young-businessman-using-a-laptop-in-a-modern-office.jpg?s=612x612&w=is&k=20&c=yDKrKMX39OY5T1l_pCVSPw_oFm5szr62Ha0Mw95ihj0="/>
        <h1 style={styles}>Gokul T A</h1>
        <p>Email: <a href="mailto:nomail@example.com">gokul@gmail.com</a> | Phone: +91 8512345678 | LinkedIn: <a href="https://linkedin.com/in/gokulta" target="_blank">linkedin.com/in/gokulta</a></p>
      </header>

      <section>
        <h2>Objective</h2>
        <p>To secure a challenging position that allows me to utilize my skills and contribute to the growth of the organization, and continue to develop professionally in a dynamic and supportive environment.</p>
      </section>

      <section>
          <h2>Skills</h2>
          <ul class="skills">
              <li>Programming Languages: <span class="highlight">JavaScript, Python, Java</span></li>
              <li>Web Development: <span class="highlight">HTML, CSS, JavaScript, React, Node.js</span></li>
              <li>Databases: <span class="highlight">MySQL, MongoDB</span></li>
              <li>Version Control: <span class="highlight">Git, GitHub</span></li>
          </ul>
      </section>

      <section>
          <h2>Education</h2>
          <ul class="education">
              <li><strong>Bachelor in Computer Applicationse</strong>, XYZ University - 2018</li>
              <li><strong>Masters in Computer Applications</strong>, ABC Academy - 2019</li>
          </ul>
      </section>

      <section>
          <h2>Experience</h2>
          <ul class="experience">
              <li>
                  <strong>Software Engineer</strong> - Tech Solutions Inc. (2021 - Present) <br/>
                  <em>Key Achievements:</em>
                  <ul>
                      <li>Developed and maintained scalable web applications using React and Node.js.</li>
                      <li>Collaborated with cross-functional teams to ensure agile delivery of software.</li>
                      <li>Improved application performance, reducing load times by 30%.</li>
                  </ul>
              </li>
              <li>
                  <strong>Junior Developer</strong> - WebWorks Ltd. (2019 - 2021) <br/>
                  <em>Key Achievements:</em>
                  <ul>
                      <li>Built and deployed e-commerce websites using HTML, CSS, and JavaScript.</li>
                      <li>Implemented responsive design for mobile-friendly experiences.</li>
                      <li>Created custom widgets for client websites that improved user engagement.</li>
                  </ul>
              </li>
          </ul>
      </section>

      <section>
          <h2>Projects</h2>
          <ul class="projects">
              <li><strong>Project Management App</strong> - A web app that helps teams manage tasks, assign deadlines, and track progress. Built using React and Node.js.</li>
              <li><strong>E-commerce Website</strong> - An online store with payment integration and user authentication. Developed with HTML, CSS, JavaScript, and MongoDB.</li>
          </ul>
      </section>

      <section>
          <h2>Languages</h2>
          <ul>
              <li>English (Intermediate)</li>
              <li>Hindi (Native)</li>
          </ul>
      </section> 
    </div>
  )
}

export default ResumePage