# Online-Teaching-Platform-Backend-API

This backend API powers the course management system for an online learning platform. It facilitates instructors in creating courses, allows learners to sign up for them, and enables instructors to engage with learners through comments.

## Database Design

- Instructors have profiles.
- Instructors can create and manage multiple courses.
- Learners can register for courses.
- Instructors can comment on learner registrations.

## APIs

- **Create Course**: Instructors can create new courses.
- **Update Course Details**: Instructors can modify course information.
- **Course Registration**: Learners can sign up for courses.
- **Lead Update**: Instructors can change learner status.
- **Lead Search**: Instructors can find learners by name or email.
- **Add Comment**: Instructors can comment on learner registrations.

## Technologies Used

- Node.js
- Express.js
- MySQL

## Usage

To set up and run the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Sunny12110867/Online-Teaching-Platform-Backend-API.git
    ```

2. Navigate to the project directory:
    ```bash
    cd Online-Teaching-Platform-Backend-API

    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up the MySQL database and execute the provided SQL script.

5. Update database settings in the project files.

6. Start the server:
    ```bash
    npm start
    ```

## Contributing

We welcome pull requests. If you plan on making major changes, please open an issue first to discuss them.
