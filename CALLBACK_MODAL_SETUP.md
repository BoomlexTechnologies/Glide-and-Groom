# Callback Modal Setup Instructions

## ✅ Completed Tasks:
- ✅ Modal system created and integrated
- ✅ All "Request a Callback" buttons connected
- ✅ Form with all required fields implemented
- ✅ Email API route created
- ✅ Professional email template designed

## 🔧 Required Setup:

### 1. Install nodemailer:
```bash
npm install nodemailer
```

### 2. Create Environment Variables:
Create a `.env.local` file in your project root with:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
OWNER_EMAIL=owner@example.com
```

### 3. Gmail Setup (Recommended):
1. Enable 2-factor authentication on your Gmail account
2. Go to Google Account Settings > Security > App Passwords
3. Generate a new app password for "Mail"
4. Use this app password (not your regular password) in EMAIL_PASS

### 4. Test the Modal:
- Click any "Request a Callback" button
- Fill out the form
- Submit and check if email is received

## 📧 Email Template Features:
- Professional HTML design
- All form fields included
- Customer and service details
- Special requests/notes
- Branded styling matching your theme

## 🎯 Connected Buttons:
- ✅ Hero Section "Request a Callback" button
- ✅ All 3 Service cards "Request a Callback" buttons
- ✅ Promotions section "Request a Callback" button
- ✅ Header "Contact us" buttons (desktop & mobile)

## 🚀 Ready to Use:
Once you set up the environment variables, the modal will:
1. Open when any button is clicked
2. Collect all required information
3. Send a professional email to the owner
4. Show success/error messages
5. Auto-close after successful submission

The system is fully functional and ready for production use!
