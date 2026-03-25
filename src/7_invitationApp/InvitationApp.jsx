import {FaCheck, FaTimes, FaTrash} from "react-icons/fa";
import {useEffect, useState} from "react";
import axios from "axios";

const apiEndpoint = "http://localhost:8080/api/invitations";

const InvitationApp = () => {

    const [invitations, setInvitations] = useState([]);

    const [showAlert, setShowAlert] = useState(null); // variant: {success, danger, warning}, message: "failure message"

    const handleDataFetch = async () => {

        console.log("Step1: Starting Fetching invitations from API...");

        await axios
            .get(apiEndpoint)
            .then((response) => {
                console.log("Step2: Response received:", response);

                if (response.status === 200) {
                    setInvitations(response.data);
                    console.log("Step3: Invitations fetched and updated State successfully");
                } else {
                    console.log("unExpected response Status:", response.status);
                }
            })
            .catch((error) => {
                console.error("Error occurred during API Call", error);
                setShowAlert({variant: "danger", message: "Failed to fetch invitations. Please try again later."});
            })

    }

    const handleUpdateInvitationStatus = async (invitationId, status) => {

        await axios
            .put(`${apiEndpoint}/${invitationId}?status=${status}`)
            .then((response) => {
                if (response.status === 204) {
                    handleDataFetch();

                    setShowAlert({
                        variant: "success",
                        message: status === "accepted" ?
                            "Invitation accepted!" :
                            "Invitation declined!"
                    })
                }
            })
            .catch((error) => {
                console.error("Error occurred during API Call", error);
                setShowAlert({
                    variant: "danger",
                    message: "Failed to update invitation status. Please try again later."
                });
            })
    }



    useEffect(() => {
        handleDataFetch();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Your Invitations</h2>
            {/* Alert area */}
            {showAlert && <AlertMessage variant={showAlert.variant} message={showAlert.message}/>}

            {/* Add Invitation Form */}
            {/*<InvitationForm/>*/}

            {/* Invitations Table */}
            <InvitationTable invitations={invitations} handleUpdate={handleUpdateInvitationStatus}/>

        </div>
    );
};

export default InvitationApp;

// Separate Components for this App
function InvitationForm() {
    return <div className="mb-4">
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
    </div>;
}

function InvitationTable({invitations, handleUpdate}) {
    return <table className="table table-bordered table-striped">
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
        {invitations.map((invitation) => (
            <tr key={invitation.id}>
                <td>{invitation.id}</td>
                <td>{invitation.title}</td>
                <td>{invitation.date}</td>
                <td>{invitation.time}</td>
                <td>{invitation.location}</td>
                <td>
                <span
                    className={`badge ${invitation.status === "accepted" ? "bg-success" : invitation.status === "declined" ? "bg-danger" : "bg-warning text-dark"} `}>
                  {invitation.status.toUpperCase()}
                </span>
                </td>
                <td>{
                    invitation.status === "pending" && (
                        <>
                            <button className="btn btn-sm btn-success me-2"
                                    onClick={() => handleUpdate(invitation.id, "accepted")}
                            >
                                <FaCheck/> Accept
                            </button>
                            <button className="btn btn-sm btn-danger me-2"
                                    onClick={() => handleUpdate(invitation.id, "declined")}>
                                <FaTimes/> Decline
                            </button>
                        </>
                    )
                }
                    <button className="btn btn-sm btn-secondary">
                        <FaTrash/> Remove
                    </button>

                </td>
            </tr>
        ))
        }

        </tbody>
    </table>;
}

function AlertMessage({variant, message}) {
    return <div className={`alert alert-${variant} d-flex justify-content-between align-items-center`} role="alert">
        <div>{message}</div>
        <button type="button" className="btn-close" aria-label="Close"/>
    </div>;
}

