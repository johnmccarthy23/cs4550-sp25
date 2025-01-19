import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
<div id="wd-dashboard-courses">
  <div className="wd-dashboard-course">
    <Link to="/Kambaz/Courses/1234/Home"
          className="wd-dashboard-course-link" >
      <img src="/images/reactjs.jpg" width={200} />
      <div>
        <h5> CS1234 React JS </h5>
        <p className="wd-dashboard-course-title">
          Full Stack software developer  </p>
        <button> Go </button>
      </div>
    </Link>
  </div>
  <div className="wd-dashboard-course">
  <Link to="/Kambaz/Courses/2345/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/python.jpg" width={200} />
            <div>
              <h5> CS2345 Python </h5>
              <p className="wd-dashboard-course-title">
                Data Science  </p>
              <button> Go </button>
            </div>
          </Link>
  </div>
  <div className="wd-dashboard-course">
  <Link to="/Kambaz/Courses/3456/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/java.jpg" width={200} />
            <div>
              <h5> CS3456 Java </h5>
              <p className="wd-dashboard-course-title">
                Java developer  </p>
              <button> Go </button>
            </div>
          </Link>
  </div>
  <div className="wd-dashboard-course">
    <Link to="/Kambaz/Courses/1356/Home"
          className="wd-dashboard-course-link" >
      <img src="/images/angular.jpg" width={200} />
      <div>
        <h5> CS1356 Angular </h5>
        <p className="wd-dashboard-course-title">
          Angular developer  </p>
        <button> Go </button>
      </div>
    </Link>
  </div>
  <div className="wd-dashboard-course">
    <Link to="/Kambaz/Courses/2575/Home"
          className="wd-dashboard-course-link" >
      <img src="/images/robot.jpg" width={200} />
      <div>
        <h5> CS2575 Robotics Programming </h5>
        <p className="wd-dashboard-course-title">
          Robot  </p>
        <button> Go </button>
      </div>
    </Link>
  </div>
  <div className="wd-dashboard-course">
    <Link to="/Kambaz/Courses/3600/Home"
          className="wd-dashboard-course-link" >
      <img src="/images/linux.jpg" width={200} />
      <div>
        <h5> CS3600 Linux </h5>
        <p className="wd-dashboard-course-title">
          Linux  </p>
        <button> Go </button>
      </div>
    </Link>
  </div>
  <div className="wd-dashboard-course">
    <Link to="/Kambaz/Courses/4875/Home"
          className="wd-dashboard-course-link" >
      <img src="/images/ml.jpg" width={200} />
      <div>
        <h5> CS4875 Machine Learning </h5>
        <p className="wd-dashboard-course-title">
          ML Engineer  </p>
        <button> Go </button>
      </div>
    </Link>
  </div>
</div>
</div>
);}
