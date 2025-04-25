# Church Website

A modern, responsive church website built with Next.js and Tailwind CSS.

## Features

- Responsive design for all devices
- Modern UI with Tailwind CSS
- Multiple pages including:
  - Home
  - About Us
  - Connect
  - Sermons
  - Give
- Contact form
- Sermon video integration
- Online giving integration

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd church-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
church-website/
├── app/
│   ├── about/
│   ├── connect/
│   ├── give/
│   ├── sermons/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
├── tailwind.config.js
└── next.config.js
```

## Customization

### Colors

You can customize the color scheme by modifying the `tailwind.config.js` file:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#1a365d',
      secondary: '#2d3748',
      accent: '#4299e1',
    },
  },
},
```

### Content

To update the content, modify the respective page components in the `app` directory.

## Deployment

The website can be deployed to any platform that supports Next.js applications, such as:

- Vercel
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## License

This project is licensed under the MIT License - see the LICENSE file for details. 