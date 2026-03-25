import { FaCheck, FaTimes, FaTrash } from "react-icons/fa";


const InvitationApp = () => {

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Your Invitations</h2>
      {/* Alert area */}
      <div className={`alert alert-success d-flex justify-content-between align-items-center`} role="alert">
        <div>Alert Message</div>
        <button type="button" className="btn-close" aria-label="Close"/>
      </div>

      {/* Add Invitation Form */}
      <div className="mb-4">
        <h4>Create a New Invitation</h4>
        <form>
          <div className="mb-3">
            <input
                type="text"
                className={`form-control is-invalid`}
                placeholder="Title"
            />
            <div className="invalid-feedback">error message</div>
          </div>

          <div className="mb-3">
            <input
                type="date"
                className={`form-control is-invalid`}
            />
            <div className="invalid-feedback">error message</div>
          </div>

          <div className="mb-3">
            <input
                type="time"
                className={`form-control is-invalid`}
            />
              <div className="invalid-feedback">errors message</div>
          </div>

          <div className="mb-3">
            <input
                type="text"
                className={`form-control is-invalid`}
                placeholder="Location"
            />
            <div className="invalid-feedback">errors message</div>
          </div>

          <button type="submit" className="btn btn-primary">
            Add Invitation
          </button>
        </form>
      </div>

        {/* Invitations Table */}
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
        <tr>
          <th>#</th>
          <th>Invitation</th>
          <th>Date</th>
          <th>Time</th>
          <th>Location</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>Birthday Party</td>
          <td>2024-03-25</td>
          <td>18:00</td>
          <td>Central Park</td>
          <td>
                <span className="badge bg-warning text-dark">
                  Pending
                </span>
          </td>
          <td>
            <button className="btn btn-sm btn-success me-2">
              <FaCheck /> Accept
            </button>
            <button className="btn btn-sm btn-danger me-2">
              <FaTimes /> Decline
            </button>
            <button className="btn btn-sm btn-secondary">
              <FaTrash /> Remove
            </button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Team Meeting</td>
          <td>2024-03-26</td>
          <td>10:00</td>
          <td>Conference Room</td>
          <td>
                <span className="badge bg-success">
                  Accepted
                </span>
          </td>
          <td>
            <button className="btn btn-sm btn-secondary">
              <FaTrash /> Remove
            </button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Dinner Party</td>
          <td>2024-03-27</td>
          <td>19:30</td>
          <td>Italian Restaurant</td>
          <td>
                <span className="badge bg-danger">
                  Declined
                </span>
          </td>
          <td>
            <button className="btn btn-sm btn-secondary">
              <FaTrash /> Remove
            </button>
          </td>
        </tr>
        </tbody>
      </table>

    </div>
  );
};

export default InvitationApp;
