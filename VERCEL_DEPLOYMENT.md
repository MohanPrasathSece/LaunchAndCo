# Vercel Deployment Guide

This project is now configured to work with Vercel serverless functions, so when you deploy the frontend, the email functionality will work automatically.

## Setup Steps

### 1. Configure Environment Variables in Vercel

Go to your Vercel project dashboard → Settings → Environment Variables and add:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
RECIPIENT_EMAIL=your-email@gmail.com
```

### 2. Gmail Setup

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate App Password:**
   - Go to Google Account settings → Security → App passwords
   - Select "Mail" for the app and "Other (Custom name)" for device
   - Enter a name like "Launch & Close Website"
   - Copy the generated password (16 characters)
3. **Use the app password** as `SMTP_PASS` in your environment variables

### 3. Deploy to Vercel

```bash
# Install dependencies
npm install

# Deploy to Vercel
vercel --prod
```

Or connect your GitHub repository to Vercel for automatic deployments.

## How It Works

### Serverless Functions
- `api/send-email.js` - Handles email sending
- `api/health.js` - Health check endpoint
- These functions run automatically when deployed to Vercel

### Frontend Integration
- `src/services/emailService.ts` - Service for making API calls
- Automatically switches between local development and production URLs

### API Endpoints
- **POST** `/api/send-email` - Send contact form email
- **GET** `/api/health` - Check email service status

## Usage Example

```typescript
import { sendEmail } from '@/services/emailService';

// In your contact form component
const handleSubmit = async (formData) => {
  try {
    const result = await sendEmail(formData);
    if (result.success) {
      alert('Email sent successfully!');
    }
  } catch (error) {
    alert('Failed to send email. Please try again.');
  }
};
```

## Environment Variables

### Local Development (.env)
```env
VITE_LOGIN_TYPE=gmail
VITE_APP_ID=app-7ucknklb89a9
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
RECIPIENT_EMAIL=your-email@gmail.com
```

### Vercel Production
Add the same variables (without VITE_ prefix) in Vercel dashboard.

## Benefits

✅ **Single deployment** - Frontend and email functions deploy together  
✅ **No server management** - Vercel handles the infrastructure  
✅ **Automatic scaling** - Serverless functions scale as needed  
✅ **Cost efficient** - Pay only for what you use  
✅ **Easy maintenance** - No server updates or security patches  

## Testing Locally

To test email functionality locally:

1. Set up your `.env` file with real Gmail credentials
2. Run `npm run dev`
3. The email service will use the serverless functions in the `api/` folder

## Security Notes

- Never commit your `.env` file to version control
- Use app passwords, not your main Gmail password
- Consider using OAuth2 for production environments
- Monitor your email usage to avoid hitting Gmail limits
