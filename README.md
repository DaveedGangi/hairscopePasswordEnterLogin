# 🧪 Lab Access Interface 🔐

This project is a simple React application simulating a lab access interface. It features a basic authentication system with a hardcoded password, a timer that starts upon successful login, and a lock/door animation to visually represent access being granted. The application is designed to provide a fun, interactive experience while demonstrating fundamental React concepts.

## 🚀 Key Features

- **Authentication:** 🔑 Implements a password-based authentication system. The correct password is hardcoded for demonstration purposes.
- **Timer:** ⏱️ Starts a timer upon successful login, counting down from 10 minutes (600 seconds). Automatically logs the user out when the timer reaches zero.
- **Animation:** 🚪 Displays a lock and door animation upon successful login, providing visual feedback to the user.
- **Error Handling:** 🚫 Displays an error message if the user enters an incorrect password.
- **Responsive UI:** 📱 The user interface is designed to be responsive and adapt to different screen sizes.

## 🛠️ Tech Stack

| Category    | Technology           | Description                                                              |
|-------------|----------------------|--------------------------------------------------------------------------|
| Frontend    | React                | JavaScript library for building user interfaces                         |
|             | ReactDOM             | React DOM for rendering React components in the browser                  |
|             | Framer Motion        | A library for creating animations and transitions                        |
| Styling     | CSS                  | For styling the components                                               |
| Build Tools | React Scripts        | Set of scripts and configurations for building React applications        |
| Testing     | @testing-library/dom | Utilities for querying the DOM in tests                                |
|             | @testing-library/jest-dom | Jest matchers for testing DOM elements                               |
|             | @testing-library/react | Utilities for testing React components                                 |
|             | @testing-library/user-event | Simulates user interactions in tests                               |
| Other       | Web Vitals           | A library for measuring web vitals                                     |

## 📦 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js (version 16 or higher)
- npm (Node Package Manager) or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2.  Navigate to the project directory:

    ```bash
    cd hairscope-lab
    ```

3.  Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running Locally

1.  Start the development server:

    ```bash
    npm start
    # or
    yarn start
    ```

2.  Open your browser and navigate to `http://localhost:3000` to view the application.

## 📂 Project Structure

```
hairscope-lab/
├── public/
│   ├── index.html          # Main HTML template
│   ├── favicon.ico         # Favicon
│   ├── manifest.json       # Manifest file for PWA
│   └── robots.txt          # Robots.txt file
├── src/
│   ├── App.js              # Main application component
│   ├── App.css             # Stylesheet for the App component
│   ├── index.js            # Entry point of the React application
│   ├── index.css           # Global stylesheet
│   ├── reportWebVitals.js  # Function to measure and report web vitals
│   └── setupTests.js       # Setup file for testing
├── .gitignore              # Specifies intentionally untracked files that Git should ignore
├── package.json            # Metadata about the project, dependencies, and scripts
├── README.md               # Project documentation
└── node_modules/           # Directory containing the installed npm packages (not in the repository)
```



## 📬 Contact

If you have any questions or suggestions, feel free to contact me at [your-email@example.com](mailto:daveeddaveedd@gmail.com).

## 💖 Thanks

Thank you for checking out this project! I hope you find it helpful and interesting.

