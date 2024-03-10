CREATE TABLE IF NOT EXISTS Instructors (
    instructor_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    expertise_area VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS Courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    instructor_id INT,
    title VARCHAR(100),
    description TEXT,
    max_seats INT, 
    end_date DATE,
    start_date DATE,
    FOREIGN KEY (instructor_id) REFERENCES Instructors(instructor_id)
);

CREATE TABLE IF NOT EXISTS Leads (
    lead_id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100),
    phone_number VARCHAR(20),
    linkedin_url VARCHAR(255),
    course_id INT,
    learner_name VARCHAR(100),
    application_date DATE,
    status VARCHAR(20),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

CREATE TABLE IF NOT EXISTS Comments (
    comment_id INT PRIMARY KEY AUTO_INCREMENT,
    course_id INT,
    comment_text TEXT,
    instructor_id INT,
    lead_id INT,
    comment_date DATE,
    FOREIGN KEY (instructor_id) REFERENCES Instructors(instructor_id),
    FOREIGN KEY (lead_id) REFERENCES Leads(lead_id)
);


INSERT IGNORE INTO Instructors (name, email, expertise_area) VALUES
('Rahul Sharma', 'rahul.sharma@example.com', 'Machine Learning'),
('Neha Patel', 'neha.patel@example.com', 'Web Development'),
('Priya Gupta', 'priya.gupta@example.com', 'Data Analysis'),
('Amit Singh', 'amit.singh@example.com', 'Software Engineering'),
('Pooja Desai', 'pooja.desai@example.com', 'UI/UX Design');

INSERT IGNORE INTO Courses (instructor_id, title, description, max_seats, start_date, end_date) VALUES
(1, 'Machine Learning Basics', 'Introduction to basic concepts of machine learning.', 50, '2024-04-01', '2024-06-01'),
(2, 'Full Stack Web Development', 'Comprehensive training in full stack web development.', 60, '2024-04-15', '2024-06-15'),
(3, 'Data Analysis Fundamentals', 'Fundamental principles and techniques of data analysis.', 40, '2024-05-01', '2024-07-01'),
(4, 'Software Development Fundamentals', 'Fundamental principles of software development.', 45, '2024-05-15', '2024-07-15'),
(5, 'UI/UX Design Fundamentals', 'Fundamental principles and techniques of UI/UX design.', 55, '2024-06-01', '2024-08-01');

INSERT IGNORE INTO Leads (course_id, learner_name, email, phone_number, linkedin_url, application_date, status) VALUES
(1, 'Sneha Joshi', 'sneha.joshi@example.com', '9876543201', 'https://www.linkedin.com/in/sneha-joshi/', '2024-03-20', 'Pending'),
(2, 'Rajesh Kumar', 'rajesh.kumar@example.com', '9876543202', 'https://www.linkedin.com/in/rajesh-kumar/', '2024-03-22', 'Accepted'),
(3, 'Ananya Singh', 'ananya.singh@example.com', '9876543203', 'https://www.linkedin.com/in/ananya-singh/', '2024-03-25', 'Rejected'),
(4, 'Manish Shah', 'manish.shah@example.com', '9876543204', 'https://www.linkedin.com/in/manish-shah/', '2024-03-28', 'Pending'),
(5, 'Kavita Reddy', 'kavita.reddy@example.com', '9876543205', 'https://www.linkedin.com/in/kavita-reddy/', '2024-04-01', 'Accepted');

INSERT IGNORE INTO Comments (instructor_id, lead_id, course_id, comment_text, comment_date) VALUES
(1, 6, 1, 'Great to see your interest! We will review your application soon.', '2024-03-21'),
(2, 7, 2, 'Welcome to the course! Feel free to ask any questions.', '2024-03-23'),
(3, 8, 3, 'Thank you for your application. Unfortunately, this course is currently full.', '2024-03-26'),
(4, 9, 4, 'We are excited to have you join our course! Get ready for an amazing journey.', '2024-03-29'),
(5, 10, 5, 'Congratulations on being accepted to our UI/UX Design Fundamentals course!', '2024-04-02');
