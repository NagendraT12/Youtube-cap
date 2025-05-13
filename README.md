# 🎥 YouTube Clone

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"/>
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="JWT"/>
</div>

[![GitHub stars](https://img.shields.io/github/stars/NagendraT12/Youtube-clown?style=social)](https://github.com/NagendraT12/Youtube-clown/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/NagendraT12/Youtube-clown?style=social)](https://github.com/NagendraT12/Youtube-clown/network/members)
[![GitHub issues](https://img.shields.io/github/issues/NagendraT12/Youtube-clown)](https://github.com/NagendraT12/Youtube-clown/issues)
[![GitHub license](https://img.shields.io/github/license/NagendraT12/Youtube-clown)](https://github.com/NagendraT12/Youtube-clown/blob/main/LICENSE)

## 📋 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Screenshots](#-screenshots)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [API Documentation](#-api-documentation)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🏠 Home Page
- Modern and responsive UI design
- Video grid with hover effects
- Category filters
- Search functionality
- Sidebar navigation
- User authentication status

### 🔐 Authentication
- JWT-based authentication
- Google OAuth integration
- Secure password hashing
- Protected routes
- Session management

### 🎬 Video Features
- Video player with controls
- Like/Dislike functionality
- Comments system (CRUD)
- Video upload/management
- Video categories
- Related videos

### 📺 Channel Management
- Channel profile creation
- Video upload interface
- Channel customization
- Video management
- Analytics dashboard

### 🔍 Search & Filters
- Real-time search
- Category-based filtering
- Advanced search options
- Search history

### 📱 Responsive Design
- Mobile-first approach
- Tablet optimization
- Desktop layout
- Touch-friendly interface

## 🛠 Tech Stack

### Frontend
- React.js
- Redux for state management
- Custom CSS with modern design
- Responsive UI components
- Material-UI integration

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT authentication
- RESTful API design

### Development Tools
- Git for version control
- npm for package management
- ESLint for code quality
- Prettier for code formatting

## 📸 Screenshots

### Home Page
![Home Page](screenshots/home.png)

### Video Player
![Video Player](screenshots/player.png)

### Channel Page
![Channel Page](screenshots/channel.png)

## 🚀 Installation

1. Clone the repository
```bash
git clone https://github.com/NagendraT12/Youtube-clown.git
cd Youtube-clown
```

2. Install dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Start the development servers
```bash
# Start backend server
cd backend
npm run dev

# Start frontend server
cd ../frontend
npm start
```

## 🔑 Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## 📚 API Documentation

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/google` - Google authentication
- `GET /api/auth/me` - Get current user

### Videos
- `GET /api/videos` - Get all videos
- `POST /api/videos` - Upload video
- `GET /api/videos/:id` - Get video by ID
- `PUT /api/videos/:id` - Update video
- `DELETE /api/videos/:id` - Delete video

### Channels
- `GET /api/channels` - Get all channels
- `POST /api/channels` - Create channel
- `GET /api/channels/:id` - Get channel by ID
- `PUT /api/channels/:id` - Update channel
- `DELETE /api/channels/:id` - Delete channel

### Comments
- `GET /api/comments/:videoId` - Get video comments
- `POST /api/comments` - Add comment
- `PUT /api/comments/:id` - Update comment
- `DELETE /api/comments/:id` - Delete comment

## 📁 Project Structure

```
youtube-clone/
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── redux/
│       ├── services/
│       └── utils/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── utils/
└── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Nagendra T - [@NagendraT12](https://github.com/NagendraT12)

## 🙏 Acknowledgments

- YouTube for inspiration
- All contributors who have helped this project
- Open source community

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/NagendraT12">Nagendra T</a></sub>
</div>

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

