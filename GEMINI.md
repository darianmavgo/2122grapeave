# Project Overview

This project is a single-page website for a rental property at 2122 Grape Ave. It is built using React, Vite, and Tailwind CSS. The website is designed to be a visually appealing and informative resource for potential tenants.

## Building and Running

To get started with this project, you will need to have Node.js and npm installed.

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm run dev
    ```
    This will start a development server on `http://localhost:5173`.

3.  **Build for production:**
    ```bash
    npm run build
    ```
    This will create a `dist` directory with the production-ready files.

4.  **Preview the production build:**
    ```bash
    npm run preview
    ```

## Development Conventions

### Technologies

*   **React:** The core of the application is built with React.
*   **Vite:** The project uses Vite for fast development and builds.
*   **Tailwind CSS:** The styling is done with Tailwind CSS, with a custom theme defined in `tailwind.config.js`.
*   **TypeScript:** The project is written in TypeScript.
*   **lucide-react:** The project uses lucide-react for icons.

### Project Structure

The project is organized as follows:

*   `src/`: This directory contains all the source code for the application.
*   `src/components/`: This directory contains all the React components.
*   `src/index.css`: This file contains the global CSS styles.
*   `src/main.tsx`: This is the entry point of the application.
*   `public/`: This directory contains all the static assets.

### Styling

The project uses Tailwind CSS for styling. The configuration is in the `tailwind.config.js` file. It includes a custom color palette, font families, and animations.

### Components

The application is broken down into the following components:

*   `Header`: The header of the website.
*   `Hero`: The hero section of the website.
*   `PropertyDetails`: A section with details about the property.
*   `PhotoGallery`: A gallery of photos of the property.
*   `Features`: A section with the features of the property.
*   `Location`: A section with the location of the property.
*   `Contact`: A section with contact information.
*   `Footer`: The footer of the website.
