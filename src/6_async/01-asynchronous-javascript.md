### Asynchronous JavaScript

In JavaScript, code is usually executed line-by-line (Synchronous). However, some tasks—like fetching data from a server
or waiting for a timer—take time. Asynchronous JavaScript allows the program to keep running while waiting for these
tasks to finish.

#### Synchronous vs. Asynchronous

- **Synchronous**: Tasks happen one after another. If one task takes 5 seconds, the whole program "freezes" for 5
  seconds.
- **Asynchronous**: Tasks can start now and finish later. The program doesn't wait; it moves to the next task
  immediately. This allows the program to run in the background, keeping the website responsive to things like clicks or
  typing.

**Why and When to use it?**
We use asynchronous code for any task that takes time, such as:
1. **Network Requests** (fetching data from an API).
2. **Timers** (like `setTimeout`).
3. **File Operations** (reading or writing files).
4. **Database Queries**.

#### Callbacks and `setTimeout`

A **callback** is a function passed into another function to be executed later.
**Purpose of `setTimeout`**: It is a built-in function used to schedule a task to run after a certain delay (in
milliseconds). It is a simple way to simulate asynchronous behavior or delay an action.

**Example:**

```javascript
console.log("Step 1: Start");

setTimeout(() => {
    console.log("Step 2: This happens after 2 seconds");
}, 2000);

console.log("Step 3: End");

/* Output:
Step 1: Start
Step 3: End
Step 2: This happens after 2 seconds
*/
```

#### Promises (`.then` and `.catch`)

A **Promise** is a special JavaScript object representing the **eventual completion (success) or failure** of an asynchronous operation. Think of it as a "placeholder" for a value that is coming later.

**A Promise can have 3 states:**
1. **Pending**: The task is still running (Initial state).
2. **Resolved ✅**: The task finished successfully (Returns a result).
3. **Rejected ❌**: The task failed (Returns an error).

**Example:**

```javascript
const myPromise = new Promise((resolve, reject) => {
    // Simulating a real task (e.g., getting data)
    const success = true; 

    console.log("Promise started: Waiting for data...");

    setTimeout(() => {
        if (success) {
            // resolve() sends a successful result to .then()
            resolve("Data received! ✅");
        } else {
            // reject() sends an error message to .catch()
            reject("Error: Could not get data ❌");
        }
    }, 1500);
});

// Using (consuming) the Promise
myPromise
    .then(data => {
        // Runs only on SUCCESS
        console.log("Success message: " + data);
    })
    .catch(error => {
        // Runs only on FAILURE
        console.error("Failure message: " + error);
    });
```

#### Async / Await

Introduced in ES2017, `async` and `await` are keywords that let you write asynchronous code that **looks and behaves like regular synchronous code**.

- **`async`**: Marks a function as asynchronous. Any function marked with `async` automatically returns a Promise.
- **`await`**: Pauses the execution of the function until a Promise is "settled" (either Resolved or Rejected). This keyword can only be used inside an `async` function.

**Why use Async / Await?**
1. **Readability**: It's easier to follow the logic line-by-line without many `.then()` chains.
2. **Error Handling**: You can use standard `try...catch` blocks to handle errors, just like in normal code.

**Example:**

```javascript
// This function handles our previously created 'myPromise'
async function handlePromise() {
    try {
        console.log("Waiting for data...");

        // 'await' stops the function here until the promise finishes
        const result = await myPromise;

        // This line runs only if the promise was SUCCESSFUL
        console.log("Success Result: " + result);

    } catch (error) {
        // This line runs only if the promise FAILED
        console.error("Caught an Error: " + error);

    } finally {
        // This block always runs at the end
        console.log("Process finished.");
    }
}

handlePromise();
```

---

### Fetch API and Calling APIs

The **Fetch API** is used to make network requests (e.g., getting data from an API). It returns a promise. When using
`async/await`, we use `try...catch` to handle errors.

**1. GET Request (Retrieving Data)**
By default, `fetch` makes a GET request.

```javascript
async function getUserData() {
    try {
        console.log("Fetching data...");

        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        // Important: Always check if the response is OK (status 200-299)
        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const user = await response.json(); // Parsing JSON response
        console.log("User Name:", user.name);

    } catch (error) {
        console.log("Something went wrong:", error.message);
    } finally {
        console.log("Process finished.");
    }
}

getUserData();
```

**2. POST Request (Sending Data)**
To send data to a server, you need to provide an options object with the `method`, `headers`, and `body`.

```javascript
async function createPost() {
    try {
        const newPost = {
            title: "Learning Fetch",
            body: "The Fetch API is powerful!",
            userId: 1
        };

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // Telling the server we are sending JSON
            },
            body: JSON.stringify(newPost) // Converting object to JSON string
        });

        if (!response.ok) {
            throw new Error("Failed to create post");
        }

        const data = await response.json();
        console.log("Post created successfully! ✅", data);

    } catch (error) {
        console.error("Error creating post:", error.message);
    }
}

createPost();
```

**3. Concurrent API Calls (`Promise.all`)**
If you need to fetch data from multiple endpoints at the same time, `Promise.all` is much more efficient than waiting for each one sequentially.

```javascript
async function getMultipleResources() {
    try {
        // Start all requests simultaneously
        const [usersResponse, postsResponse] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users"),
            fetch("https://jsonplaceholder.typicode.com/posts")
        ]);

        const users = await usersResponse.json();
        const posts = await postsResponse.json();

        console.log(`Loaded ${users.length} users and ${posts.length} posts.`);

    } catch (error) {
        console.error("Error fetching multiple resources:", error);
    }
}

getMultipleResources();
```