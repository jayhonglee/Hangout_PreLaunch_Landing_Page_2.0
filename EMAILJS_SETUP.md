# EmailJS Setup Instructions

This application uses EmailJS to send waitlist signup emails to `hangouthiveapp@gmail.com`.

## Setup Steps

1. **Create an EmailJS Account**

   - Go to https://www.emailjs.com/
   - Sign up for a free account (allows 200 emails/month)

2. **Add an Email Service**

   - Go to "Email Services" in your EmailJS dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail recommended)
   - Follow the setup instructions to connect your email account
   - Note your **Service ID**

3. **Create an Email Template**

   - Go to "Email Templates" in your EmailJS dashboard
   - Click "Create New Template"
   - Use this template structure:

     ```
     To: hangouthiveapp@gmail.com
     Subject: New Waitlist Signup

     A new user has joined the Vancouver waitlist!

     Email: {{user_email}}
     ```

   - Note your **Template ID**

4. **Get Your Public Key**

   - Go to "Account" → "General" in your EmailJS dashboard
   - Copy your **Public Key**

5. **Update the Configuration**
   - Open `src/components/WaitlistForm.tsx`
   - Replace the following values:
     - `YOUR_SERVICE_ID` with your Service ID
     - `YOUR_TEMPLATE_ID` with your Template ID
     - `YOUR_PUBLIC_KEY` with your Public Key

## Alternative: Using Environment Variables

For better security, you can use environment variables:

1. Create a `.env` file in the root directory:

   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

2. Update `WaitlistForm.tsx` to use:

   ```typescript
   const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
   const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
   const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
   ```

3. Add `.env` to your `.gitignore` file to keep credentials private
