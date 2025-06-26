# React + Vite

# React Dashboard - Reports List with Category Filter

This is a simple React dashboard app that displays a list of reports fetched from a JSON file. Users can filter reports by category using a dropdown filter.

## Features

- Built with React using functional components and hooks
- Data fetched from a JSON file located in the `public` folder
- Components separated for better organization:
  - `ReportList.jsx` — handles fetching and displaying reports
  - `ReportCard.jsx` — displays individual report cards
  - `CategoryFilter.jsx` — dropdown to select categories and filter reports
- Responsive and user-friendly UI with Tailwind CSS
- Loading and error handling states included
- Created with Vite for fast development and build

## Installation

If you want to create the app from scratch using Vite, follow these steps:

````bash
cd Desktop
npm create vite@latest your-app-name
# When prompted, select "React" and "JavaScript"
cd your-app-name
npm install
npm run dev


## Run the App

To start the Vite development server and run the app locally, use:

```bash
npm run dev
````
