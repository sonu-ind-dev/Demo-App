# Login Data App (React Native)

A React Native mobile application demonstrating a complete authentication flow with login, dummy account creation, global state management, and API-driven data rendering.  
The project is built using Expo and follows production-ready architectural patterns.

---

## Features

- Login screen with email and password
- Dummy account creation for new users
- Auto-fill credentials after account creation
- Global login and logout handling
- State-based navigation
- Header with app title and logout action
- Data fetching and rendering using public API
- Clean and scalable project structure

---

## Tech Stack

- **React Native** – Mobile application framework
- **Expo** – Development and build toolchain
- **React Navigation** – Screen and navigation management
- **Context API** – Global authentication state
- **Axios** – HTTP client for API calls
- **FakeStore API** – Public mock backend

---

## APIs Used

### 1. Create Dummy User
Creates a new user every time the API is called.  
Used to simulate account creation for users who do not have credentials.

## Folder Structure

loginDataApp/
│
├── App.js -> Application entry point; wraps navigation and global providers.
│
├── src/
│   │
│   ├── context/
│   │   └── AuthContext.js -> Manages authentication state and provides login/logout methods globally.
│   │
│   ├── navigation/
│   │   └── AppNavigator.js -> Handles screen navigation and conditional routing based on auth state.
│   │
│   ├── screens/
│   │   ├── LoginScreen.js -> Login UI with email/password, dummy account creation, and password toggle.
│   │   └── DataScreen.js -> Displays product data with debounced search and empty state handling.
│   │
│   ├── styles/
│       ├── colors.js -> Centralized color constants used across the application.
│       ├── common.js -> Shared reusable styles for inputs, labels, and layout.
│       ├── loginStyles.js -> Styles specific to the login screen components.
│       └── dataStyles.js -> Styles related to the data listing and search UI.
│
└── README.md

