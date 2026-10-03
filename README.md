# React Photo Gallery App

A responsive photo gallery web application built with **React** and **Vite**, featuring a clean user interface and dynamic data fetching from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/photos).

---

## 🚀 Features

- **Dynamic Data Fetching:** Fetches photo data asynchronously using the native `fetch()` API with `useState` and `useEffect`.
- **Component-Based Architecture:** Organized using modular components (`Header`, `PhotoGallery`, `PhotoCard`, `Footer`).
- **Data Display:** Displays the first 100 photos utilizing JavaScript's `map()` method and React `props`.
- **Responsive Design:** Styled using Tailwind CSS to look great on mobile phones, tablets, and desktop screens.
- **Detailed Information:** Each card showcases the photo, Photo ID, Album ID, and Title.

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite
- **Styling:** Tailwind CSS
- **API:** JSONPlaceholder Photos API

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── PhotoCard.jsx
│   └── PhotoGallery.jsx
├── App.jsx
├── App.css
└── main.jsx