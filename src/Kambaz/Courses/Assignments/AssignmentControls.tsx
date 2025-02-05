import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
export default function AssignmentControls() {
    return (
      <div className="float-end">
        <Button variant="secondary" id="wd-add-assignment-group">
          <FaPlus/> Group</Button>
          <Button variant="danger" id="wd-add-assignment">
          <FaPlus/> Assignment</Button>
      </div> );}