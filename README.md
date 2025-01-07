# 📱 Task Manager App

A complete mobile task management application developed with React Native and Expo, integrated with an AWS-hosted API.

## 📋 About the Project

The Task Manager is a mobile application that allows users to efficiently manage their daily tasks in an intuitive way. With authentication features, complete CRUD operations, and a responsive interface, the app offers a smooth experience for personal organization.

## 🚀 Technologies Used

- **React Native**: Mobile development framework
- **TypeScript**: Programming language
- **Expo**: Development platform
- **Styled Components**: Styling
- **Axios**: HTTP client for API consumption
- **Jest & React Testing Library**: Testing framework

## ⚙️ Main Features

- **User Authentication**
  - Secure login system
  - Session management

- **Task Management**
  - Create, view, edit, and delete tasks
  - Search by title or description
  - Separation between created and completed tasks
  - Loading animations during operations

## 🔧 Installation and Setup

1. Clone the repository:
```bash
git clone [REPOSITORY_URL]
```

2. Install dependencies:
```bash
cd [DIRECTORY_NAME]
npm install
```

3. Configure environment variables:
- Create a `.env` file in the project root
- Add the necessary variables following the `.env.example`

4. Start the project:
```bash
expo start
```

## 📱 How to Use

1. Login with credentials:
   - Username: admin
   - Password: password

2. On the main screen, you can:
   - View all tasks
   - Add new tasks
   - Search for specific tasks
   - Toggle between created and completed tasks

## 🔌 API Endpoints

- `POST /login` - User authentication
- `GET /tasks` - List tasks
- `POST /tasks` - Create task
- `PUT /tasks/{id}` - Update task
- `DELETE /tasks/{id}` - Remove task

## ✅ Testing

The project includes unit tests to ensure code quality:

```bash
# Run tests
npm test

# Check coverage
npm test -- --coverage
```

Minimum coverage: 50% of main components

## 📱 Screens

### Login Screen
- Email and password fields
- Credentials validation
- Error handling

### Main Screen
- Search field
- Task listing
- Status filters (created/completed)
- Add task button

## 📅 Development Period

December 24, 2024 to January 03, 2025

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/MyFeature`)
3. Commit your changes (`git commit -m 'Add MyFeature'`)
4. Push to the branch (`git push origin feature/MyFeature`)
5. Open a Pull Request

## 📝 How to use

Link to see the explanation of the app

https://www.loom.com/share/579c0b8811f34bc9a25be67f649fde44?sid=b636ca5f-b99e-4fce-b662-314176b60fd9
