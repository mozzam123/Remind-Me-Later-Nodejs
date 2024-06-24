# Remind-me-later

Remind-me-later is a web application built with Node.js that allows users to set reminders for themselves with customizable messages. Users can specify the date, time, message content, and how they want to be reminded (via SMS or Email).

## Features

- **Customizable Reminders**: Set reminders with specific dates, times, and messages.
- **Flexible Notification Methods**: Choose to be reminded via SMS or Email.
- **User-Friendly Interface**: Simple and intuitive API for creating reminders.

## Technologies Used

- **Node.js**: The runtime environment for executing JavaScript on the server.
- **Express.js**: A web application framework for building the API.
- **Nodemailer**: For sending email notifications.
- **MongoDB**: A NoSQL database for storing reminder data.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/mozzam123/Remind-Me-Later-Nodejs.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd Remind-Me-Later-Nodejs
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Set up environment variables:** Create a `.env` file in the root directory and add the following:
    ```env
    DB_URI=mongodb://localhost:27017/remind_me_later
    EMAIL_SERVICE=your_email_service_provider
    EMAIL_USER=your_email@example.com
    EMAIL_PASS=your_email_password
    ```

## Usage

1. **Start the Node.js server:**
    ```bash
    npm start
    ```

2. **Access the API endpoint:** Visit `http://127.0.0.1:2500/api/reminder/create` to access the API endpoint for creating reminders.

## API Endpoints

### Create Reminder

**Endpoint:** `POST /api/reminder/create/`

**Payload:**
```json
{
    "date": "YYYY-MM-DD",
    "time": "HH:MM:SS",
    "message": "Your reminder message here",
    "reminder_method": "SMS/Email"
}
