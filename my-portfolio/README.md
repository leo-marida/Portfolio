# Personal Portfolio - Leonard Rabih Marida

This is the source code for my personal portfolio website, built with React, Vite, and Framer Motion to create a visually engaging and interactive experience.

## Features

-   **Stunning Visuals:** An animated "Digital Constellation" background using `react-tsparticles`.
-   **Smooth Animations:** Seamless page transitions and intricate component animations powered by `Framer Motion`.
-   **Fully Responsive:** Designed to look great on all devices, from mobile phones to desktop monitors.
-   **Multi-Page Layout:** A clean, organized structure with pages for Home, About, Projects, and Contact.
-   **Functional Contact Form:** An integrated contact form using **EmailJS** that sends submissions directly to my email without a backend.

## Tech Stack

-   **Framework:** [React](https://reactjs.org/) with [Vite](https://vitejs.dev/)
-   **Routing:** [React Router](https://reactrouter.com/)
-   **Animation:** [Framer Motion](https://www.framer.com/motion/)
-   **Particle Effects:** [React TParticles](https://particles.js.org/)
-   **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
-   **Contact Form:** [EmailJS](https://www.emailjs.com/)

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v16 or later)
-   [npm](https://www.npmjs.com/)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/my-portfolio.git
    cd my-portfolio
    ```

2.  **Install NPM packages:**
    ```bash
    npm install
    ```

3.  **Set up EmailJS for the Contact Form:**
    This step is crucial for the contact form to work.

    a. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account.
    
    b. **Add a new Email Service.** Choose your email provider (e.g., Gmail) and connect your account. After connecting, EmailJS will show you a **Service ID**. Copy it.

    c. **Create an Email Template.** Go to the "Email Templates" section and create a new template. You can use the default one. It uses variables in double curly braces. Make sure your template includes `{{user_name}}`, `{{user_email}}`, and `{{message}}`. After saving, you will get a **Template ID**. Copy it.

    d. **Get your Public Key.** Your **Public Key** can be found in the "Account" section of your EmailJS dashboard.

4.  **Create an Environment Variables File:**

    a. In the root of your project folder, create a new file named `.env`.

    b. Add your EmailJS credentials to this file like so:

    ```
    VITE_EMAILJS_SERVICE_ID=your_service_id_here
    VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
    VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
    ```
    
    **Important:** Vite requires environment variables to be prefixed with `VITE_`.

### Running the Application

Once the setup is complete, you can run the development server:

```bash
npm run dev
```

This will start the application, and you can view it in your browser at `http://localhost:5173` (or whatever port your terminal indicates).