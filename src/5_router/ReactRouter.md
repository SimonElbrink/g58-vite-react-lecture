## 15. React Router (JavaScript Version)

**React Router** is the standard library for routing in React. It allows you to build **Single Page Applications (SPAs)** with multiple views and seamless navigation without refreshing the page.

### 1. Installation

To use React Router in your project, you need to install the `react-router` package:

```bash
npm install react-router
```

---

### 2. What is a Single Page Application (SPA)?

In a traditional website, clicking a link sends a request to the server, which then sends back a completely new HTML page. This causes a "flicker" and a full page reload.

In an **SPA** built with React and React Router:
- The entire app loads at once.
- When you click a link, React Router changes the URL in the browser bar.
- React then "swaps" the current component with a new one based on the URL.
- No page reload occurs, making the app feel fast and "app-like."

---

### 3. Key Features of React Router (v7+)

Modern React Router uses a **Data-Driven** approach. Here are the core components and hooks used:

| Feature                   | Description                                                                              |
|:--------------------------|:-----------------------------------------------------------------------------------------|
| **`createBrowserRouter`** | The modern API to define your route hierarchy as an array of objects.                    |
| **`RouterProvider`**      | The component that provides the router configuration to your entire app.                 |
| **`<Link>`**              | Replaces the standard `<a>` tag to enable navigation without a page reload.              |
| **`<NavLink>`**           | A special version of `<Link>` that knows if it is "active," perfect for navigation bars. |
| **`<Outlet />`**          | A placeholder component that renders the "child" route inside a "parent" layout.         |
| **`useParams`**           | A hook to access dynamic parameters from the URL (e.g., `/user/:id`).                    |
| **`useNavigate`**         | A hook that allows you to navigate programmatically (e.g., after a form is submitted).   |

---

### 4. Implementation Example: Basic Router

In our **Router Demo** (`src/5_router/RouterDemo`), we defined our routes like this:

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Shared UI like Navbar
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "user/:userId", element: <UserProfile /> }, // Dynamic Route
      { path: "*", element: <NotFound /> }, // 404 Catch-all
    ],
  },
]);
```

### 5. Initialization: Providing the Router

Once you have defined your routes, you must provide them to your application using the `<RouterProvider />` component in your main entry point (usually `main.tsx` or `main.jsx`).

*File: `src/main.jsx`*
```jsx
import { RouterProvider } from 'react-router-dom';
import RouterDemo from './5_router/RouterDemo';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterDemo />
  </StrictMode>
);
```

---

### 6. Shared Layouts with `<Outlet />`

Instead of adding the `Navbar` and `Footer` to every single page, we use a **Root Layout**. The `<Outlet />` tells React Router exactly where the page content should be injected.

*File: `src/5_router/Layout.jsx`*
```jsx
const Layout = () => {
  return (
    <div className="app-container">
      <Navbar /> {/* Stays on every page */}
      <main>
        <Outlet /> {/* This is where Home, About, or Contact will appear */}
      </main>
      <Footer /> {/* Stays on every page */}
    </div>
  );
};
```

---

### 7. Dynamic Routing and Parameters

Dynamic routing allows one page to handle many different IDs. For example, a User Profile page:

**Route Definition:** `path: "user/:userId"`

**Accessing the ID in the Component:**
```jsx
import { useParams } from 'react-router';

const UserProfile = () => {
  const { userId } = useParams(); // Extracts 'userId' from the URL
  return <h1>Viewing Profile for User ID: {userId}</h1>;
};
```

---

### 8. Programmatic Navigation

Sometimes you want to move the user to a new page automatically (e.g., after clicking "Send Message" or "Login").

```jsx
import { useNavigate } from 'react-router';

const Contact = () => {
  const navigate = useNavigate();

  const handleSend = () => {
    // Logic to send data...
    navigate("/"); // Redirect user back to Home page
  };

  return <button onClick={handleSend}>Send and Go Home</button>;
};
```
