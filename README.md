# Eventra - College Event Management Platform

Eventra is a modern web application designed to help college students discover, register, and review campus events while earning XP and Vibe Score points.

## Features

- **Event Discovery**: Browse and filter events by categories (Academic, Career, Cultural, etc.)
- **Event Registration**: Easy registration process with detailed event information
- **User Profiles**: Track your event participation, XP points, and Vibe Score
- **Authentication**: Secure login and registration system
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Frontend**:
  - React.js with TypeScript
  - Tailwind CSS for styling
  - React Router for navigation
  - Firebase Authentication
  - Lucide React for icons

- **Backend**:
  - Express.js
  - MongoDB with Mongoose
  - JWT for authentication
  - RESTful API architecture

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB
- Firebase account (for authentication)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/eventra.git
cd eventra
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5174`

## Project Structure

```
eventra/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
├── backend/
│   ├── models/        # MongoDB models
│   ├── routes/        # API routes
│   ├── middleware/    # Custom middleware
│   └── server.js      # Express server
├── public/            # Static assets
└── package.json       # Project dependencies
```

## Features in Detail

### Event Management
- View upcoming events with detailed information
- Filter events by category
- Register for events with a simple form
- Track event capacity and registration status

### User Experience
- Modern, responsive UI with Tailwind CSS
- Smooth animations and transitions
- Intuitive navigation
- Loading states and error handling

### Authentication
- Secure user registration and login
- Protected routes
- Session management
- Password reset functionality

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/eventra](https://github.com/yourusername/eventra) 
