## Data Fetching from APIs

To make our React applications dynamic, we need to fetch data from the internet (APIs). An **API (Application Programming Interface)** acts as a bridge between our React frontend and a database or server.

In modern JavaScript and React, there are two primary ways to fetch this data: the built-in **Fetch API** and the popular **Axios** library.

---

### 1. The Fetch API

The `fetch()` function is built directly into modern web browsers. You don't need to install anything to use it.

-   **Built-in**: No extra package size added to your project.
-   **Promise-based**: It uses JavaScript Promises to handle asynchronous operations.
-   **Two-Step Process**: `fetch()` returns a "Response" object. To get the actual data (like JSON), you must call `.json()` on that response.

**Theoretical Workflow:**
1.  Call `fetch('url')`.
2.  Wait for the response.
3.  Convert the response to JSON.
4.  Use the data in your component (usually saving it to `useState`).

---

### 2. Axios Library

**Axios** is a third-party library that you must install (`npm install axios`). It is widely used in professional React projects because it makes data fetching simpler and more powerful.

-   **Automatic JSON Transformation**: Unlike `fetch`, Axios automatically converts the response into a JavaScript object for you.
-   **Better Error Handling**: Axios considers any status code outside the 2xx range (like 404 or 500) as an error automatically.
-   **Interceptors**: Allows you to "intercept" requests or responses to add headers (like Auth tokens) globally.
-   **Wider Browser Support**: Handles some older browser edge cases better than the native `fetch`.

---

### Fetch vs. Axios Comparison

| Feature                    | Fetch API (Native)                      | Axios (Library)                          |
|:---------------------------|:----------------------------------------|:-----------------------------------------|
| **Installation**           | Built-in (No install needed)            | Needs `npm install axios`                |
| **JSON Data**              | Must manually call `.json()`            | Automatic (available in `.data`)         |
| **Error Handling**         | Only fails on network issues            | Fails on 4xx/500 status codes too        |
| **Request Timeout**        | Not easily supported                    | Built-in support                         |
| **Global Configuration**   | Must be handled manually                | Supports "Interceptors" and base URLs    |

---

### When to Use Which?

-   **Use Fetch**: For small projects, quick prototypes, or when you want to keep your "bundle size" as small as possible without adding external dependencies.
-   **Use Axios**: For professional, large-scale applications where you need advanced features like interceptors, automatic error handling, or global settings for your API calls.

---

### Example: CRUD Operations with Axios

```javascript
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/invitations';

// ==========================
// 1. GET ALL INVITATIONS
// ==========================
export const getAllInvitationsWithAxios = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (err) {
        console.error('Error fetching invitations:', err);
    }
};

// ==========================
// 2. GET INVITATION BY ID
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
// 3. CREATE NEW INVITATION (POST)
// ==========================

export const createInvitationWithAxios = async (invitationData) => {
    try {
        const response = await axios.post(BASE_URL, invitationData);
        return response.data;
    } catch (err) {
        console.error('Error creating invitation', err);
    }
};

// ==========================
// 4. UPDATE INVITATION STATUS (PUT)
// ==========================

export const updateInvitationStatusWithAxios = async (id, status) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}?status=${status}`);
        return response.status;
    } catch (err) {
        console.error('Error updating invitation status', err);
    }
};

// ==========================
// 5. DELETE INVITATION
// ==========================

export const deleteInvitationWithAxios = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
        return true;
    } catch (err) {
        console.error('Error deleting invitation', err);
    }
};
```

---

