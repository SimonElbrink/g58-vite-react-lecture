import axios from "axios";

const BASE_URL = "http://localhost:8080/api/invitations";

// ==========================
// 1. GET ALL INVITATIONS
// ==========================
export const getAllInvitationsWithAxios = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (err) {
    console.error("Error fetching invitations:", err);
  }
};

//console.log(getAllInvitationsWithAxios()); // Not waiting for the response.

console.log(await getAllInvitationsWithAxios());


// ==========================
// GET INVITATION BY ID
// ==========================

export const getInvitationByIdWithAxios = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (err) {
    console.error(`Error fetching invitation with ID ${id}`, err);
  }
};

console.log(await getInvitationByIdWithAxios(2));


// ==========================
// CREATE NEW INVITATION (POST)
// ==========================

const invitationData = {
  "date": "2026-03-25",
  "location": "Teams meeting",
  "status": "pending",
  "time": "02:00 PM",
  "title": "Attendance"
}


export const createInvitationWithAxios = async (invitationData) => {
    try {
        const response = await axios.post(BASE_URL, invitationData);
        return response.data;
    } catch (err) {
        console.error('Error creating invitation', err);
    }
};

console.log(await createInvitationWithAxios(invitationData));

export const updateInvitationStatusWithAxios = async (id, status) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}?status=${status}`);
        return response.status;
    } catch (err) {
        console.error('Error updating invitation', err);
    }
};


console.log(await updateInvitationStatusWithAxios(1, "accepted"))
