import { Form, Row, Col, Button } from "react-bootstrap";

export default function AssignmentEditor() {
    return (
      <div>
      <Form>
          <Form.Group as={Row} className="mb-3"> 
            <Form.Label> Assignment Name </Form.Label>
       <Form.Control type="text" placeholder="Assignment Name"/>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Control type="text" placeholder="Assignment Description">
            </Form.Control>
          </Form.Group>
          <Form.Group>
          <Form.Label> Points </Form.Label>
            <Form.Control type="number" placeholder="100"/>
          </Form.Group>
          <Form.Group>
            <Form.Label> Assignment Group </Form.Label>
            <Form.Select>
            <option value="ASSIGNMENTS" selected>ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="LABS">LABS</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label> Display Grade As </Form.Label>
            <Form.Select>
              <option value="Percentage">Percentage</option>
              <option value="Letter">Letter</option>
              <option value="GPA">GPA</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="">
            <Form.Label> Submission Type </Form.Label>
            <Form.Select>
              <option value="Online">Online</option>
              <option value="In-Person">In-Person</option>
            </Form.Select>
            <Form.Label> Online Entry Options </Form.Label>
            <Form.Check type="checkbox" label="Text Entry"
           checked name="formHorizontalChecks"/>
           <Form.Check type="checkbox" label="Website URLs" name="formHorizontalChecks"/>
           <Form.Check type="checkbox" label="Media Recordings" name="formHorizontalChecks"/>
           <Form.Check type="checkbox" label="Student Annotations" name="formHorizontalChecks"/>
           <Form.Check type="checkbox" label="File Uploads" name="formHorizontalChecks"/>
          </Form.Group>
          <Form.Group>
          <Form.Label> Assign To </Form.Label>
          <Form.Control type="text" placeholder="Everyone"/>
          <Form.Label> Due </Form.Label>
          <Form.Control type="date"/>
          <Row>
          <Col>
          <Form.Label> Available From </Form.Label>
          <Form.Control type="date"/>
          </Col>
          <Col>
          <Form.Label> Until </Form.Label>
          <Form.Control type="date"/>
          </Col>
          </Row>
          </Form.Group>
      </Form>
      <Button variant="danger" className="float-end ml-3">Save</Button>
      < Button variant="secondary" className="float-end">Cancel</Button>
      
      </div>

);}
