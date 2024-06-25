import "./Project.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

function Project() {
  return (
    <>
      <div className="wrapper">
        <h1>Project</h1>
        <div className="items">
          <div className="project p1">
            <p>VChat</p>
            <br></br>
            <img src={project1} alt="VChat" />
            <br></br>
            <br></br>
            <a href="https://v-chat-frontend-blue.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button>Click to See</button>
            </a>
            <br></br>
          </div>
          <div className="project p2">
            <p>Calculator</p>
            <br></br>
            <img src={project2} alt="Calculator JavaScript" />
            <br></br>
            <br></br>
            <a href="https://ivanyuantama.github.io/Calculator/" target="_blank" rel="noopener noreferrer">
              <button>Click to See</button>
            </a>
            <br></br>
          </div>
          <div className="project p3">
            <p>RentLab</p>
            <br></br>
            <img src={project3} alt="RentLab" />
            <br></br>
            <br></br>
            <a href="https://rent-lab-ctey.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button>Click to See</button>
            </a>
            <br></br>
          </div>
          <div className="project p4">
            <p>JBus Android</p>
            <br></br>
            <img src={project4} alt="JBus" />
            <br></br>
            <br></br>
            <a href="https://github.com/IvanYuantama/JBus-android" target="_blank" rel="noopener noreferrer">
              <button>Click to See</button>
            </a>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
