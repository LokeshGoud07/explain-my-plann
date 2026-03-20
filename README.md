# Explain My Plan

Explain My Plan is an AI-powered web application that converts vague ideas into structured execution plans.

## Features

- AI Structuring Engine
- Missing Elements Detection
- Actionable Next Steps
- Clarity Score Calculation
- Before vs After Idea Comparison
- Export Plan to PDF
- Iterative Idea Improvement

## Tech Stack

Frontend: Next.js + Tailwind CSS  
Backend: Next.js API Routes  
AI Model: Groq (Llama 3)

## Setup Instructions

Clone the repository

```
git clone https://github.com/YOUR_USERNAME/explain-my-plan.git
```

Install dependencies

```
npm install
```

Run the development server

```
npm run dev
```

Open in browser

```
http://localhost:3000
```

## Environment Variables

Create `.env.local`

```
GROQ_API_KEY=your_api_key_here
```

## Deployment

The application is deployed using **Vercel**.

## Challenges Faced

- Handling server-side rendering issues with browser-only libraries
- Configuring Tailwind CSS with Next.js
- Ensuring AI responses consistently return structured JSON

## AI Prompt Design

The AI prompt is structured to enforce JSON output containing:

- Goal
- Method
- Steps
- Timeline
- Missing Elements
- Simplified Plan
- Actionable Next Steps

This ensures consistent and parseable responses for frontend rendering.
