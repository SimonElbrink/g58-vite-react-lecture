//console.log(getAllInvitationsWithAxios()); // Not waiting for the response.
import {
  getAllInvitationsWithAxios,
  getInvitationByIdWithAxios,
  createInvitationWithAxios,
  updateInvitationStatusWithAxios,
  deleteInvitationWithAxios,
} from "./InvitationAPI.js";

// --- Manual Test Script ---
// Note: This script is intended to be run in a browser console (imported in App or main)
// or by using a tool that supports ES Modules and fetch/axios (like Vite's dev server).

export const runFullApiTest = async () => {
  console.group("--- Starting Invitation API Full Test ---");

  try {
    // 1. Create a new invitation
    console.log("1. Creating a new invitation...");
    const newInvitation = {
      date: "2026-03-25",
      location: "Teams meeting",
      status: "pending",
      time: "02:00 PM",
      title: "Attendance",
    };
    const created = await createInvitationWithAxios(newInvitation);
    console.log("✅ Created:", created);

    // 2. Get all invitations
    console.log("2. Fetching all invitations...");
    const allInvitations = await getAllInvitationsWithAxios();
    console.log("✅ All Invitations:", allInvitations);
    console.log("✅ All Invitations Count:", allInvitations.length);

    const invitationId = created.id;

    // 3. Update the invitation status
    const status = "accepted";
    console.log(`3. Updating invitation ${invitationId} status to "${status}"`);
    const updatedStatus = await updateInvitationStatusWithAxios(
      invitationId,
      status,
    );
    console.log("✅ Updated Status Response:", updatedStatus);

    // 4. Get invitation by ID
    console.log(`4. Fetching invitation with ID ${invitationId}...`);
    const singleInvitation = await getInvitationByIdWithAxios(invitationId);
    console.log("✅ Found:", singleInvitation);

    // 5. Delete the invitation
    console.log(`5. Deleting invitation ${invitationId}...`);
    const deleted = await deleteInvitationWithAxios(invitationId);
    if (deleted) console.log("✅ Deleted successfully");
  } catch (error) {
    console.error("❌ Test failed:", error.message);
    console.log(
      "Make sure your Spring Boot backend is running at http://localhost:8080",
    );
  }

  console.groupEnd();
};

// Auto-run if this script is loaded (optional, depends on how you use it)
runFullApiTest();
