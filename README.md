# API (Application Programming Interface)

- An API is used to communicate between different resources available on the internet.
- API calls are asynchronous: the response arrives after a time delay, so the code must not assume the data is available immediately.

## Techniques to Call an API from the Frontend

### 1. Async/Await

- Lets asynchronous code be written in a synchronous-looking style.
- Avoids callback hell and makes the code easier to read.
- Works on top of Promises, with errors handled using `try...catch`.

Files: `asyncawait.html`, `asyncawait.js`

### 2. AJAX (Asynchronous JavaScript and XML)

- Works using the `XMLHttpRequest` object.
- Allows data to be fetched and the page to be updated without a full reload.

Files: `ajax.html`, `ajax.js`

### 3. Fetch

- A modern, Promise-based way to make HTTP requests.
- Cleaner syntax than `XMLHttpRequest`, with no callbacks needed.

Files: `fetch.html`, `fetch.js`
