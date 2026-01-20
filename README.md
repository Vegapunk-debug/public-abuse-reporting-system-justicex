# JusticeX: Public Abuse Reporting System

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Status](https://img.shields.io/badge/Status-In%20Development-orange)
![Stack](https://img.shields.io/badge/Tech-MERN%20Stack-green)

> **Bridging the gap between citizens and authorities through secure, anonymous, and verifiable incident reporting.**

---

## About The Project

**JusticeX** is a civic-tech platform designed to empower citizens to report public grievances, abuse of power, or civic issues safely and efficiently. In many regions, reporting mechanisms are opaque, slow, or unsafe for the whistleblower. JusticeX solves this by providing a decentralized, transparent, and user-friendly interface for lodging complaints while ensuring data integrity.

### Key Features
* **Digital Incident Reporting:** Users can create detailed reports with titles, descriptions, and categories.
* **User Authentication:** Secure Signup and Login functionality using JWT (JSON Web Tokens) to protect user sessions.
* **Dashboard View:** A personalized dashboard where users can view the history and status of their submitted reports.
* **Responsive Interface:** A clean, user-friendly UI built with React that works across different device sizes.
* **Data Validation:** Robust backend validation ensures that all reports meet the necessary criteria before submission.

---

## Tech Stack

This project is built using the **MERN** ecosystem.

* **Frontend:** React.js, JavaScript (ES6+), Tailwind CSS, Redux Toolkit
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (with Mongoose ORM)
* **Authentication:** JWT & Google OAuth 2.0
* **External Services:** Cloudinary (Media), Google Maps API (Location)

---

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites
* Node.js (v18+)
* MongoDB (Local or Atlas URL)

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/Vegapunk-debug/public-abuse-reporting-system-justiceX.git](https://github.com/Vegapunk-debug/public-abuse-reporting-system-justiceX.git)
    cd public-abuse-reporting-system-justiceX
    ```

2.  **Install dependencies (Root, Client, and Server)**
    ```bash
    # Install server dependencies
    cd server
    npm install

    # Install client dependencies
    cd ../client
    npm install
    ```

3.  **Environment Variables**
    Create a `.env` file in the `server` directory and add the following:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_key
    ```

4.  **Run the application**
    ```bash
    # Run Backend (from server dir)
    npm run dev

    # Run Frontend (from client dir)
    npm start
    ```

---

## Screen Previews


| Landing Page | Reporting Interface |
|:---:|:---:|
| ![Landing](https://via.placeholder.com/400x200?text=Landing+Page+Preview) | ![Form](https://via.placeholder.com/400x200?text=Reporting+Form+Preview) |

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

## Contact

**Project Lead:** [Your Name]
**LinkedIn:** [Your LinkedIn Profile URL]
**Email:** [Your Email Address]

Project Link: [https://github.com/Vegapunk-debug/public-abuse-reporting-system-justiceX](https://github.com/Vegapunk-debug/public-abuse-reporting-system-justiceX)
