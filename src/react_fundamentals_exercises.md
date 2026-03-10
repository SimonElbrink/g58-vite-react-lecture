# React Fundamentals Exercises

## 1) App Header
**Question:**  
Create a component `AppHeader` that renders a `<header>` element containing a title and a short tagline passed via props. 
The title is required.
The tagline is optional and should have a default value of `"Welcome"`.

---

## 2) Greeting Banner
**Question:**  
Create a component `GreetingBanner` that accepts `name` and `role` props. Display:  
```
Welcome back, {name} — {role}
```
If `role` is not provided, only display `"Welcome back, {name}"` without the dash.

---

## 3) Profile Card
**Question:**  
Create a component `ProfileCard` that displays:  
- an avatar (URL from `avatar` prop)  
- the name  
- the job title  
- the email address  

If the `avatar` prop is missing, display the user’s initials instead.

---

## 4) Primary Button
**Question:**  
Create a component `PrimaryButton` that accepts a `label` prop (default `"Submit"`) and a `disabled` prop.  
- If `disabled` is `true`, style it to look inactive and prevent clicks.

---

## 5) Quantity Selector
**Question:**  
Create a component `QuantitySelector` that:  
- starts with `qty = 1` in state  
- has “−” and “+” buttons to change `qty`  
- does not allow `qty` to be less than 1  
- calls `onChange(qty)` prop whenever quantity changes  

---

## 6) Password Field
**Question:**  
Create a component `PasswordField` with an input and a toggle button:  
- default input type is `"password"`  
- clicking toggle changes type to `"text"` and vice versa  
- the button label changes between `"Show"` and `"Hide"`  

---

## 7) Like Button
**Question:**  
Create a component `LikeButton` that:  
- starts at `initialCount` prop (default 0)  
- increments count when clicked  
- prevents more than 1 increment every 500ms (debounce/guard)  

---

## 8) Contact Search
**Question:**  
Create a component `ContactSearch` that:  
- accepts a `contacts` array of `{ id, name }`  
- filters contacts by search query (case-insensitive) from a controlled input  
- highlights the matching part of the name in the results  

---

## 9) To-Do List
**Question:**  
Create a component `TodoList` that:  
- has an input and “Add” button  
- appends new tasks to a list when added  
- each task has a checkbox to mark complete  
- displays counts: “X open, Y done”  
- clears input after adding a task  

---

## 10) Product Details Modal
**Question:**  
Create a component `ProductDetails` that:  
- shows a “View details” button  
- when clicked, opens a `Modal` child with `title`, `price`, and `onClose` props  
- modal closes when clicking outside it or pressing the close button  

---

## 11) Expense Tracker
**Question:**  
Create a component `ExpenseTracker` that:  
- allows entering a label and numeric amount  
- adds valid entries to a list  
- displays the total (two decimal places)  
- shows an inline error if label is empty or amount is not a number  

---

## 12) Dashboard Tabs
**Question:**  
Create a component `DashboardTabs` that:  
- accepts an array of `{ id, label, content }`  
- displays buttons for each tab  
- shows content for the active tab  
- supports keyboard navigation: Left/Right arrows change the active tab  
- active tab button has `aria-selected="true"`  
