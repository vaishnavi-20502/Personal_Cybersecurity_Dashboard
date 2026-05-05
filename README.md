# SIEM-Lite Cybersecurity Dashboard

A lightweight Security Information and Event Management (SIEM) system built using Node.js and PostgreSQL. This project simulates real-time log monitoring, anomaly detection, and security visualization to provide centralized visibility of system activities.

---

## Features

* Real-time log ingestion via REST API
* Structured log storage using PostgreSQL
* Rule-based anomaly detection (e.g., brute-force login attempts)
* Real-time alert system using WebSockets (Socket.io)
* Interactive dashboard for security metrics visualization
* Log simulation for testing using automated generator

---

## Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** PostgreSQL
* **Frontend:** HTML, JavaScript, Chart.js
* **Real-time Communication:** Socket.io

---

## Project Structure

```
siem-lite-dashboard/
│
├── server.js
├── db.js
├── .env
├── package.json
│
├── routes/
├── controllers/
├── services/
├── utils/
│
└── public/
    ├── index.html
    └── script.js
```

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/siem-lite-dashboard.git
cd siem-lite-dashboard
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Setup PostgreSQL

Create database:

```sql
CREATE DATABASE siem_dashboard;
```

Create table:

```sql
CREATE TABLE logs (
    id SERIAL PRIMARY KEY,
    timestamp TIMESTAMP,
    ip VARCHAR(50),
    username VARCHAR(50),
    action VARCHAR(50),
    status VARCHAR(20),
    raw_log TEXT
);
```

---

### 4. Configure environment variables

Create a `.env` file:

```
DB_USER=postgres
DB_HOST=localhost
DB_NAME=siem_dashboard
DB_PASSWORD=yourpassword
DB_PORT=5432
PORT=3000
```

---

### Running the Application

Start backend server:

```bash
node server.js
```

Run log generator:

```bash
node utils/logGenerator.js
```

Open browser:

```
http://localhost:3000
```

---

## How It Works

1. Logs are generated and sent to the backend API
2. Logs are stored in PostgreSQL
3. System analyzes logs for suspicious activity
4. Alerts are triggered for anomalies (e.g., multiple failed logins)
5. Dashboard displays real-time security metrics

---

## Anomaly Detection Logic

* Detects multiple failed login attempts from same IP within 1 minute
* Flags potential brute-force attacks
* Sends real-time alerts using WebSockets

---

## Future Improvements

* User authentication (JWT-based login)
* IP geolocation tracking
* Integration with real system logs
* Advanced analytics and filtering
* Deployment (Render / Railway / AWS)

---

## Contributing

Contributions are welcome! Feel free to fork this repo and submit pull requests.

---

## License

This project is open-source and available under the MIT License.

---

## Author

Vaishnavi Kesarwani
