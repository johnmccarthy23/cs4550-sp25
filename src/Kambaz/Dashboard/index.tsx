import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (5)</h2> <hr />
<div id="wd-dashboard-courses">
<Row xs={1} md={5} className="g-4">
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
      <Card>
          <Link to="/Kambaz/Courses/2345/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/python.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS2345 Python</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Python Developer</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card> 
        </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
      <Card>
          <Link to="/Kambaz/Courses/3456/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/java.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS3456 Java</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Java Programmer</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card> 
        </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
      <Card>
          <Link to="/Kambaz/Courses/1356/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/angular.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS1356 Angular</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Angular Programmer</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card> </Col>
        <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
      <Card>
          <Link to="/Kambaz/Courses/3600/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/linux.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS3600 Linux</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Linux IT Guy</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card> </Col>
    </Row>

</div>
</div>
);}
