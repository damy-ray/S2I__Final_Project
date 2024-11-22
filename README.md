### in order to see api calls: Open a CORS Browser: 
open -na "Google Chrome" --args --disable-web-security --user-data-dir="/tmp/chrome_dev"

### To start prpject
`npm start`

### node version
v21

Runs the app in the development mode.\
Open [http://localhost:3000/login] to view it in your browser.

### To deploy
`npm run build`


1. Project Overview
Goal: To develop a Climate Dashboard that provides detailed insights into global environmental data such as CO2 levels, methane emissions, nitrous oxide (NO2) data, polar ice statistics, and global temperatures.
Motivation: With climate change being a pressing global issue, this dashboard aims to offer a user-friendly interface where users can easily access crucial climate data.
2. Core Pages and Features
CO2 Data Page:
API Used: Data is fetched from the global-warming.org CO2 API.
Table Component: Displays columns like Year, Month, Cycle, and Trend.
Pagination: To manage large datasets, pagination was implemented, allowing users to navigate through CO2 data in a user-friendly manner.
Methane Data Page:
API Used: Methane data from global-warming.org API.
Data Display: Displays columns such as Date, Average, Trend, Average Uncertainty, and Trend Uncertainty.
Pagination: As with the CO2 page, pagination was implemented to facilitate data navigation.
NO2 Data Page:
API Used: Nitrous oxide (NO2) data.
Table and Pagination: Implemented to show data on Average, Average Uncertainty, Day, Trend, and Trend Uncertainty.
Global Temperature Page:
API Used: Temperature data from the global-warming.org temperature API.
Table with Dynamic Data: Includes columns such as Land, Station, and Trend.
Polar Ice Data Page (GiaccioPolare):
API Used: Arctic data from the global-warming.org API.
Custom Table: Displays data on polar ice extent, including anomaly, monthly mean, and trend values.
3. Table Component Enhancements
Reusable Table Component:
The design shifted from having multiple individual table components to a single reusable component that can handle different datasets.
Customizable Columns: The table dynamically displays columns based on the data passed in (e.g., CO2 data vs. temperature data).
Improved Styling: A visually enhanced table, with alternating row colors, highlighted headers, and a design theme that reflects the project's focus on global warming and climate change.
4. User Interface (UI) Design
Navbar Component:
A responsive and minimalist navbar was created to navigate between different pages of the app (CO2 Data, Methane Data, NO2 Data, etc.).
Mobile View: A hamburger menu was implemented for small screen sizes to collapse the menu options into a dropdown, improving the user experience.
Dropdown Menus: On larger screens, dropdown menus were introduced to reduce clutter and maintain a clean interface.
Footer Component:
Designed with a consistent gradient color scheme to match the overall project theme.
Responsive Design: The footer adapts to screen size, with social media links and copyright information displayed cleanly on both mobile and desktop devices.
5. Pagination Implementation
Problem: Large datasets from APIs could overwhelm the user interface if all data was loaded and displayed at once.
Solution: Pagination was added to multiple pages to divide data into smaller chunks, making it easier for users to navigate through the information.
Navigation Buttons: Next and Previous buttons allow users to move through the pages seamlessly, with disabled states when they reach the first or last page.
6. API Integration
RestHelper Utility:
A custom helper was implemented to handle all authenticated API requests.
Error Handling: Error states were handled gracefully, showing messages when data could not be fetched.
Fetching and Displaying Data:
Each page pulls data from its respective API endpoint (CO2, methane, NO2, etc.) and transforms it into the table format for display.
7. Responsive Design
CSS Framework: TailwindCSS was used throughout the project for rapid UI development and responsive design.
Mobile-First Approach: All components were designed with mobile-first principles, ensuring that the app looks and works well on smaller screens before scaling up for desktop views.
Adaptations: Components like the table, navbar, and footer were adjusted to ensure they remain functional and aesthetically pleasing across different screen sizes.
8. Code Structuring and Organization
File Organization: The project is organized with clear directory structures like Components, Helpers, and Resources, which aids in maintainability.
JSConfig.json: A jsconfig.json file was added for cleaner import paths, allowing relative imports to be more readable and easier to manage.
9. Conclusion
This project successfully delivers a robust platform for displaying and navigating global climate data. With a clean UI, responsive design, and efficient data management through pagination, the Climate Dashboard provides users with a valuable tool for understanding climate change trends in an accessible manner.