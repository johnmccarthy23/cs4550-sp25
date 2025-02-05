import { Form, Row, Col, InputGroup, ListGroup } from "react-bootstrap";
import { FaMagnifyingGlass, FaFileCircleCheck } from "react-icons/fa6";
import { BsGripVertical } from "react-icons/bs";
import AssignmentHeaderButtons from "./AssignmentHeaderButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControls from "./AssignmentControls";
export default function Assignments() {
    return (
      <div>
        <Form>
          <Row>
            <Col>
                <Form.Group as={Row}>
                        <InputGroup>
                                <InputGroup.Text>
                                    <FaMagnifyingGlass />
                                </InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Search for assignments"
                            />
                        </InputGroup>
                    </Form.Group>
                    </Col>
                    <Col>
                      <AssignmentControls/>
                      </Col>
          </Row>
          </Form>
      <div className="wd-title p-3 ps-2 bg-secondary"> 
      <BsGripVertical className="me-2 fs-3" /> Assignments
      <AssignmentHeaderButtons/>
      </div>
      <ListGroup className="wd-lessons rounded-0" >
        <ListGroup.Item className="wd-lesson p-3 ps-1" action href="http://localhost:5173/index.html#/Kambaz/Courses/1234/Assignments/123">
        <BsGripVertical className="me-2 fs-3" /> <FaFileCircleCheck className="text-success me-2 fs-3"/>
          A1 - ENV + HTML <AssignmentControlButtons/> </ListGroup.Item>
        <ListGroup.Item className="wd-lesson p-3 ps-1" action href="http://localhost:5173/index.html#/Kambaz/Courses/1234/Assignments/456">
        <BsGripVertical className="me-2 fs-3" /> <FaFileCircleCheck className="text-success me-2 fs-3"/>
          A2 - CSS + BOOTSTRAP <AssignmentControlButtons/> </ListGroup.Item>
        <ListGroup.Item className="wd-lesson p-3 ps-1" action href="http://localhost:5173/index.html#/Kambaz/Courses/1234/Assignments/789">
        <BsGripVertical className="me-2 fs-3" /> <FaFileCircleCheck className="text-success me-2 fs-3"/>
          A3 - JAVASCRIPT + REACT <AssignmentControlButtons/> </ListGroup.Item>
      </ListGroup>
       </div>
  );}