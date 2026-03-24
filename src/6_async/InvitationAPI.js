import axios from "axios";

const BASE_URL = "http://localhost:8080/api/invitations";

// ==========================
// GET ALL INVITATIONS
// ==========================
export const getAllInvitationsWithAxios = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (err) {
    console.error("Error fetching invitations:", err);
  }
};

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

// ==========================
// CREATE NEW INVITATION (POST)
// ==========================
export const createInvitationWithAxios = async (invitationData) => {
  try {
    const response = await axios.post(BASE_URL, invitationData);
    return response.data;
  } catch (err) {
    console.error("Error creating invitation", err);
  }
};

// ==========================
// UPDATE INVITATION STATUS (PUT)
// ==========================
export const updateInvitationStatusWithAxios = async (id, status) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}?status=${status}`);
    return response.status;
  } catch (err) {
    console.error("Error updating invitation", err);
  }
};

// ==========================
// DELETE INVITATION
// ==========================
export const deleteInvitationWithAxios = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.status === 204;
  } catch (err) {
    console.error(`Error deleting invitation with ID ${id}`, err);
  }
};
