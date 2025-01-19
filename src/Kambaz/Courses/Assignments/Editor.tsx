export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />      
        <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assignment-group">Assignment Group</label>
          </td>
          <td>
            <select defaultValue="ASSIGNMENTS" id="wd-assignment-group"> 
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="LABS">LABS</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </td>
          <td>
            <select defaultValue="Percentage" id="wd-display-grade-as"> 
            <option value="Percentage">Percentage</option>
            <option value="Decimal">Decimal</option>
            <option value="Letter">Letter</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select defaultValue="Percentage" id="wd-submission-type"> 
            <option value="Online">Online</option>
            <option value="In Person">In Person</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-online-entry-options">Online Entry Options</label>
          </td>
          <td>
          <input type="checkbox" name="check-online-entry" id="wd-chkbox-text-entry"/>
        <label htmlFor="wd-chkbox-comedy">Text Entry</label><br/>

<input type="checkbox" name="check-online-entry" id="wd-chkbox-url"/>
<label htmlFor="wd-chkbox-drama">Website URL</label><br/>

<input type="checkbox" name="check-online-entry" id="wd-chkbox-media"/>
<label htmlFor="wd-chkbox-scifi">Media Recordings</label><br/>

<input type="checkbox" name="check-online-entry" id="wd-chkbox-annotations"/>
<label htmlFor="wd-chkbox-fantasy">Student Annotations</label><br/>

<input type="checkbox" name="check-online-entry" id="wd-chkbox-uploads"/>
<label htmlFor="wd-chkbox-fantasy">File Uploads</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign To</label>
          </td>
          <td>
          <input id="wd-assign-to" value={"Everyone"} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due Date</label>
          </td>
          <td>
          <input id="wd-due-date" value={"1/20/2025"} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-date-from">Available From</label>
          </td>
          <td>
          <input id="wd-date-from" value={"1/12/2025"} />
          </td>
          <td align="right" valign="top">
            <label htmlFor="wd-date-from">Until</label>
          </td>
          <td>
          <input id="wd-date-from" value={"1/23/2025"} />
          </td>
        </tr>
        <tr>
            <td>
                <label htmlFor="wd-cancel"></label>
                <button type="button"
                onClick={() => alert("Cancelled!")}
                id="wd-all-bad">
                Cancel
                </button>
            </td>
            <td>
                <label htmlFor="wd-save"></label>
                <button type="button"
                onClick={() => alert("Changes Saved!")}
                id="wd-all-good">
                Save
                </button>
            </td>
        </tr>
      </table>
    </div>
);}
