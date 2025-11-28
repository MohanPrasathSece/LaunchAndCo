# Email Server Setup

This project includes a Node.js email server that handles contact form submissions using Gmail SMTP.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Gmail SMTP

#### Option A: Use App Password (Recommended)
1. Enable 2-Factor Authentication on your Google account
2. Go to Google Account settings → Security → App passwords
3. Generate a new app password for "Mail" on "Other (Custom name)"
4. Use this app password in your environment variables

#### Option B: Use OAuth2 (More secure for production)
- Set up OAuth2 credentials in Google Cloud Console
- Use OAuth2 instead of app passwords

### 3. Environment Variables

Copy `.env.example` to `.env` and update the values:

```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
RECIPIENT_EMAIL=your-email@gmail.com

# Server Configuration
PORT=3001
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

### 4. Run the Server

#### Development Mode (with auto-restart):
```bash
npm run server:dev
```

#### Production Mode:
```bash
npm run server
```

#### Run both frontend and server together:
```bash
npm run start
```

## API Endpoints

### Send Email
- **POST** `/api/send-email`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Test Subject",
    "message": "Test message content"
  }
  ```

### Health Check
- **GET** `/api/health`

## Features

- ✅ Input validation with Zod
- ✅ HTML email templates
- ✅ Confirmation email to sender
- ✅ CORS support
- ✅ Error handling
- ✅ Health check endpoint

## Security Notes

- Never commit your `.env` file to version control
- Use app passwords instead of your main Gmail password
- Consider using OAuth2 for production environments
- Enable rate limiting for production use

## Deployment

For Vercel deployment, you can use Vercel Functions instead of a separate server. The current setup is designed for development and can be adapted for serverless deployment.
