# MicroLearn Landing Page

A demo landing page for a micro-learning platform targeting busy professionals aged 25-40. This project is designed for **demonstration and practice purposes**, specifically for learning AWS CodePipeline and CI/CD workflows.

## 🎯 Project Purpose

This landing page showcases:

- **Product Concept**: MicroLearn - 3-minute skill lessons with gamification
- **Target Audience**: Busy professionals who want continuous upskilling
- **Key Features**: Leadership, coding, and communication micro-lessons
- **Landing Page Test**: Free "Mini Course of the Week" email opt-in

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Custom CSS with modern gradients and animations
- **Deployment Target**: AWS (via CodePipeline)

## 🚀 AWS CodePipeline Practice

This project serves as a hands-on learning environment for:

- Setting up AWS CodePipeline for React applications
- Configuring automated build and deployment workflows
- Practicing CI/CD best practices in AWS
- Integrating with AWS services (S3, CloudFront, etc.)

## 📦 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- AWS account (for deployment practice)

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

This project is configured for deployment via AWS CodePipeline. The typical workflow includes:

1. **Source Stage**: Code is pulled from repository
2. **Build Stage**: Vite builds the production bundle
3. **Deploy Stage**: Artifacts deployed to AWS S3/CloudFront

### Build Output

The production build outputs to the `dist/` directory and includes:

- Optimized React bundle
- Minified CSS
- Static assets

## 📁 Project Structure

```
src/
├── App.tsx          # Main landing page component
├── App.css          # Landing page styles
├── index.css        # Global styles
└── main.tsx         # Application entry point
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach
- **Modern UI**: Gradient backgrounds, smooth animations
- **Email Capture**: Form validation for lead generation
- **Accessibility**: Focus states and semantic HTML

## 📝 Notes

This is a **practice/demo project** for:

- Learning AWS deployment workflows
- Testing CodePipeline configurations
- Experimenting with React + Vite + TypeScript
- Validating landing page conversion patterns

Not intended for production use without further development and testing.
