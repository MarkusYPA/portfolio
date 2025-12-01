# Dynamic Portfolio Website

This project is a single-page, dynamic portfolio website. The content is loaded from a JavaScript configuration file, allowing for easy updates without altering the HTML structure.

## Technical Implementation

The portfolio operates using client-side JavaScript to build the page dynamically.

*   **`index.html`**: The main HTML file that provides the basic structure and layout for the portfolio. It includes placeholders for content that will be populated by JavaScript. It also loads the Tailwind CSS framework via a CDN for styling.

*   **`config.js`**: This file acts as a centralized database for the portfolio's content. It contains a single configuration object (`portfolioConfig`) where all personal data is stored, including:
    *   Profile information (name, tagline, description, social links).
    *   Theme settings, such as primary and background colors that map to Tailwind CSS classes.
    *   Lists of technical skills and featured projects.

*   **`script.js`**: This script runs when the DOM is fully loaded. It reads the `portfolioConfig` object from `config.js` and injects the data into the appropriate elements in `index.html`. It dynamically creates the skill badges and project cards based on the arrays defined in the configuration.

## How to Use

1.  **Edit `config.js`**: Open the `config.js` file and modify the values within the `portfolioConfig` object to reflect your own information, projects, and skills.
2.  **Update Assets**: Replace the images in the `assets/` directory (like `profile.png` and `favicon.png`) with your own.
3.  **Open `index.html`**: Open the `index.html` file in a web browser to see your customized portfolio. There is no build step required.
