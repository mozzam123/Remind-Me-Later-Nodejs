# Remind-me-later

Remind-me-later is a web application built with Django that allows users to set reminders for themselves with customizable messages. Users can specify the date, time, message content, and how they want to be reminded (via SMS or Email).

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/mozzam123/Remind-Me-Later-Nodejs.git
    ```

2. Install dependencies:
    ```bash
    npm i
    ```

## Usage

1. Start the Django development server:
    ```bash
    npm start
    ```
3. Visit "http://127.0.0.1:2500/api/reminder/create" to access the API endpoint for creating reminders.

## API Endpoint

### Create Reminder

Endpoint: `POST /api/reminder/create/`

Payload:
```json
{
    "date": "YYYY-MM-DD",
    "time": "HH:MM:SS",
    "message": "Your reminder message here",
    "reminder_method": "SMS/Email"
}
