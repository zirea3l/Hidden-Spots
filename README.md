# 🌍 Hidden Spots — Location-Based Community App

Hidden Spots is a fullstack mobile app that allows users to discover and share meaningful emotional places—like peaceful viewpoints, creative corners, or romantic hideaways—using a map-based interface and community stories.

---

## 📱 Features

- 🗺️ Interactive Map (with user location)
- 📍 Add/View Hidden Spots with geotagged markers
- 💬 Share emotional stories and vibes (e.g., Serene, Creative, Romantic)
- 📷 Upload spot images (stored in Cloudinary)
- 🔎 Filter spots by vibe
- ☁️ Backend with Express + MongoDB + Cloudinary

---

## 🛠 Tech Stack

### Frontend (📱 React Native via Expo)
- `expo`
- `react-native-maps`
- `expo-location`
- `react-navigation` (optional)
- `axios`

### Backend (🧠 Node.js + Express)
- `express`
- `mongoose`
- `cloudinary`
- `dotenv`
- `cors`

---

## Folder Structure

hidden-spots/
├── hidden-spots-backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── config/
│   ├── utils/
│   ├── middleware/
│   ├── .env
│   └── server.js

├── hidden-spots-app/
│   ├── components/
│   ├── screens/
│   ├── services/
│   ├── constants/
│   ├── styles/
│   └── App.js

├── .gitignore
└── README.md


## 📦 Installation

### 🧾 1. Clone the repository

```bash
git clone https://github.com/zirea3l/hidden-spots.git
cd hidden-spots
```

### 🔧 2. Setup the Backend

```bash
cd hidden-spots-backend
npm install
```

Create `.env` file in `backend/`

```bash
PORT=5000
MONGO_URI=mongodb://localhost:27017/hiddenSpots
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Run MongoDB (in a separate terminal):

```bash
mongod
```

Then start the backend server:

```bash
npm run dev
```

### 📱 3. Setup the Frontend (Expo)

```bash
cd ../hidden-spots-app
npm install
```

Update `constants/config.js`:

```bash
export const API_BASE_URL = 'http://<your-ip>:5000/api'; // Replace <your-ip> with local IP
```

Then run the app:

```bash
npx expo start
```


