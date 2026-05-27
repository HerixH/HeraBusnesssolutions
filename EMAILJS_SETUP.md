# EmailJS Setup Guide

This guide will help you configure EmailJS to receive emails when someone submits the contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)
3. Verify your email address

## Step 2: Create an Email Service

1. Log in to your EmailJS dashboard
2. Go to **Email Services** → **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for easy setup)
   - **Outlook/Office 365**
   - **Custom SMTP** (for other providers)
4. Follow the setup instructions for your chosen provider
5. **Save your Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** → **Create New Template**
2. Use this template structure:

**Template Name:** Contact Form Submission

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
Hello HERA Business Solutions Team,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Needed: {{service}}
Message: {{message}}

---
This email was sent from your website contact form.
```

3. **Save your Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called API Key)
3. **Copy your Public Key**

## Step 5: Update Your Contact Form

1. Open `src/components/Contact.js`
2. Find these lines (around line 20-22):
```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
```

3. Replace with your actual credentials:
```javascript
const EMAILJS_SERVICE_ID = 'service_xxxxxxxxx';  // Your Service ID
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxxxx'; // Your Template ID
const EMAILJS_PUBLIC_KEY = 'your-public-key-here'; // Your Public Key
```

## Step 6: Test Your Setup

1. Start your development server: `npm start`
2. Fill out the contact form on your website
3. Submit the form
4. Check your email inbox (info@herabusiness.com) for the form submission

## Alternative: Using Environment Variables (Recommended for Production)

For better security, use environment variables:

1. Create a `.env` file in the root directory:
```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update `Contact.js` to use environment variables:
```javascript
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
```

3. **Important:** Add `.env` to your `.gitignore` file to keep credentials secure

## Troubleshooting

### Emails not sending?
- Check browser console for errors
- Verify all three IDs are correct
- Make sure your email service is connected properly
- Check EmailJS dashboard for error logs

### Gmail Setup Issues?
- You may need to enable "Less secure app access" or use App Passwords
- Consider using a custom SMTP instead

### Need More Emails?
- Free tier: 200 emails/month
- Paid plans start at $15/month for 1,000 emails

## Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: support@emailjs.com

