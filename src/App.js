import './App.css';
import Navbar from './components/Navbar';

function App() {
  
  return (
  
    <div>
      <Navbar />
      <div className="intro">
        <h1>Muhammad Azaz</h1>
        <p>Front-end web developer</p>
      </div>
      <div id="about" className="about me">
        <h1 className="headings">About Me</h1>
        <hr className="blueline" />
      </div>
      <div className="img">
      <img src="/images/azaz23.jpg" alt="Muhammad Azaz" />

      </div>
      <div className="ese">
        <div id="education" className="boxes">
          <h3>Education</h3>
          <p><strong>Bachelor of Science in Computer Science</strong></p>
          <p>Graduated from COMSATS University with a strong grasp of computer science principles. Gained extensive knowledge in areas such as Web Development, Data Structures, Algorithms, and Software Engineering through a rigorous curriculum and hands-on projects.</p>
        </div>
        <div id="skills" className="boxes">
          <h3>Skills</h3>
          <ul>
            <li><strong>Front-end Development:</strong> Proficient in HTML, CSS, and JavaScript for building interactive and responsive web interfaces.</li>
            <li><strong>Frameworks & Libraries:</strong> Familiar with React, Bootstrap, and other modern frameworks to enhance development efficiency and user experience.</li>
            <li><strong>Version Control:</strong> Experienced with Git and GitHub for managing code versions and collaborating with teams.</li>
          </ul>
        </div>
        <div id="experience" className="boxes">
          <h3>Experience</h3>
          <p><strong>Front-end Developer Intern at Developershub corporation</strong></p>
          <p>Contributed to various web development projects, focusing on creating responsive layouts and interactive elements. Worked closely with senior developers to refine front-end functionalities and troubleshoot issues, gaining practical experience in real-world development environments.</p>
        </div>
      </div>
      <div className="contactsection">
        <h1 id="con" className="headings">Contact</h1>
        <hr className="blueline" />
        <form id="contact form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>

    
  );
}

export default App;