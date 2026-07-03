 🌦 Weather Dashboard

A modern and responsive weather dashboard built with **React**, **Vite**, and the **OpenWeather API**. The application provides real-time weather information, location-based weather, search history, dynamic backgrounds, and a clean glassmorphism interface.

 ✨ Features

- 🔍 Search weather by city name
- 📍 Get weather using your current location
- 🌡 Real-time weather information
- 🌥 Dynamic weather backgrounds
- 🌙 Dark & Light theme
- 🕒 Search history using Local Storage
- ⏳ Loading spinner
- ❌ User-friendly error handling
- 📱 Fully responsive design
- 🎨 Modern glassmorphism UI
- ⚡ Built with React Hooks
- 5-Day Weather Forecast
- Temperature Unit Toggle (°C / °F)


 🛠 Technologies Used

- React
- Vite
- JavaScript (ES6+)
- CSS Modules
- OpenWeather API
- React Icons
- Local Storage
- HTML5
- CSS3


 📁 Project Structure
'''text
src/
│
├── components/
│   ├── SearchBox
│   ├── WeatherCard
│   ├── DetailCard
│   ├── SearchHistory
│   ├── LoadingSpinner
│   └── ErrorCard
│
├── hooks/
│   └── useWeather.js
|   |__ usesearchhistory.js
│   |__ useTheme.js
|
├── services/
│   └── weatherApi.js

│__ utils/
|     |__ foreastHelpers.js
|    |__ tempConvert.js
|     |__ timeHelpers.js
|    |__ weatherBackground.js
|     |__ weatherIcons.js
|
├── App.jsx
└── main.jsx
|__ screenshots/
```

 🚀 Installation

Clone the repository

```bash
git clone https://github.com/Sobia-iqbal56/Weather-App.git
```

Move into the project

```bash
cd Weather-App
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
VITE_WEATHER_API_KEY=YOUR_API_KEY
```

Run the development server

```bash
npm run dev
```

 🌍 API

This project uses the **OpenWeather API**.

Get your free API key from:

https://openweathermap.org/api

 📸 Screenshots

> Add screenshots here after uploading them.

Example:

```
screenshots/home.png

screenshots/dark-background.png

screenshots/light-backgrround.png
```

 📈 Future Improvements

- Hourly Forecast
- Air Quality Index
- Weather Maps
- Favorite Cities
- Animated Weather Icons
- Better Theme System
- PWA Support
- Performance Optimization

 📚 Learning Outcomes

This project helped me practice:

- React Components
- React Hooks
- Custom Hooks
- API Integration
- Environment Variables
- CSS Modules
- Local Storage
- Responsive Design
- Git & GitHub
- Modern UI Design

 👩‍💻 Author

**Sobia Iqbal**

Computer Software Engineering Student

Frontend Developer (Learning React)


 ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.