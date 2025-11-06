# 🌦️ Weather Forecast App

A modern and responsive weather application built using **HTML, CSS, Bootstrap, and JavaScript**.  
The app automatically detects the user’s location using the **Geolocation API** and displays real-time weather data fetched from **WeatherAPI**.  
Users can also search for any city to view a 3-day weather forecast with a clean and dynamic user interface.

---

## 🚀 Features

- 🌍 **Automatic Location Detection:**  
  Uses the browser’s Geolocation API to get your current latitude and longitude.

- 🔍 **City Search:**  
  Allows users to search for weather in any city worldwide.

- 🌤️ **3-Day Forecast:**  
  Displays the current weather and forecasts for the next two days.

- 🌀 **Loading Spinner:**  
  Shows a smooth spinner while fetching data.

- ⚠️ **Error Handling:**  
  Displays a user-friendly message if a city is not found or if something goes wrong.

- 💡 **Responsive UI:**  
  Designed to look great on both desktop and mobile screens.

---

## 🛠️ Technologies Used

- **HTML5** – for the structure of the app.  
- **CSS3** – for responsive and clean UI design.  
- **Bootstrap 5** – for layout structure and modern responsive styling.  
- **Vanilla JavaScript (ES6+)** – for functionality and API integration.  
- **WeatherAPI** – for real-time weather data.  
- **Geolocation API** – to detect user location.

---

## ⚙️ How It Works

1. On page load, the app tries to get the user’s current location using `navigator.geolocation`.  
   - If permission is granted → fetches weather data for your coordinates.  
   - If permission is denied → defaults to **Cairo**.
2. Weather data is fetched asynchronously using `fetch()` and displayed dynamically on the page.
3. When the user types a city name in the search box, the app fetches weather data for that city in real time.
4. The UI updates automatically with temperature, weather condition, icons, wind speed, and rain chances.

---

## 🧩 Code Highlights

- **Async/Await** for clean asynchronous handling.
- **Try/Catch/Finally** for error handling and spinner control.
- **Modular Structure:**  
  Functions like `getWeather()` and `displayRowData()` keep the code organized.

---

## 📸 Demo Preview

Live Demo Here : https://mostafa-khaled77.github.io/Weather-App/
/ه
