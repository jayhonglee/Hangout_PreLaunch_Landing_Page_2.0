# Google Analytics Engagement Tracking

This document outlines all the engagement metrics being tracked on the HangoutHive landing page.

## Tracked Metrics

### 1. Page Views

- **Event**: Automatic page view tracking
- **Location**: On page load
- **What it tracks**: Every visitor to the website

### 2. Scroll Depth

- **Event**: `scroll`
- **Thresholds**: 25%, 50%, 75%, 90%, 100%
- **What it tracks**: How far users scroll down the page
- **Data**: Scroll depth percentage

### 3. Button Clicks

- **Event**: `button_click`
- **Tracked Buttons**:
  - "Join Vancouver Waitlist" (in hero section)
  - "Join Vancouver Waitlist" (in footer)
  - Carousel indicator buttons (radio buttons)
- **Data**: Button name and location

### 4. Form Input Interactions

#### Input Focus

- **Event**: `input_focus`
- **What it tracks**: When users click/focus on the email input field
- **Data**: Input name and type

#### Input Typing

- **Event**: `input_typing`
- **What it tracks**: When users start typing in the email input field
- **Data**: Input name and type

### 5. Form Submissions

- **Events**:
  - `form_submit_success` (successful submission)
  - `form_submit_error` (failed submission)
- **What it tracks**: Waitlist form submission attempts and outcomes
- **Data**: Form name and success status

### 6. Carousel Interactions

- **Event**: `carousel_slide`
- **What it tracks**:
  - When carousel auto-advances to a new slide
  - When users manually click carousel indicators
- **Data**: Current slide number and total slides

## Viewing Metrics in Google Analytics

1. **Go to Google Analytics Dashboard**: https://analytics.google.com/
2. **Navigate to Reports** → **Engagement** → **Events**
3. **View specific events**:
   - `button_click` - See all button interactions
   - `input_focus` - See email input engagement
   - `input_typing` - See typing activity
   - `scroll` - See scroll depth distribution
   - `carousel_slide` - See carousel engagement
   - `form_submit_success` - See successful form submissions
   - `form_submit_error` - See form submission errors

## Key Metrics to Monitor

### Engagement Metrics

- **Total Visitors**: Automatic tracking
- **Scroll Depth**: Percentage of users reaching 25%, 50%, 75%, 90%, 100%
- **Button Click Rate**: Clicks on "Join Vancouver Waitlist" buttons
- **Form Engagement**: Input focus and typing events
- **Carousel Engagement**: Slide views and interactions

### Conversion Metrics

- **Form Submission Success Rate**: `form_submit_success` vs `form_submit_error`
- **Email Input Completion**: Users who focus and type vs those who don't

### User Behavior

- **Scroll Patterns**: Where users stop scrolling
- **Interaction Points**: Which buttons get the most clicks
- **Carousel Usage**: How many users interact with the carousel

## Event Categories

All custom events are categorized for easy filtering:

- **engagement**: User interactions (clicks, scrolls, typing)
- **conversion**: Form submissions and conversions

## Notes

- All tracking is done client-side using Google Analytics gtag.js
- Events are sent in real-time to your Google Analytics account
- Data may take a few hours to appear in the dashboard
- No personal information (like email addresses) is sent to Google Analytics
