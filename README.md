# Next.js Dynamic Routing with TailwindCSS
This repository serves as a simple example of implementing dynamic routing in Next.js using Tailwind CSS for styling.

## Description
The project demonstrates basic usage of Next.js for dynamic routing to display a list of blogs and individual blog posts. Tailwind CSS is used for styling components.

## Demo
You can see a live demo of the project [here](https://blog-dynamic-routing-next.vercel.app/).

![Project Screenshot](https://img5.pic.in.th/file/secure-sv1/blog-dynamic-routing-next.png)

## Features
- Fetches blog data from a dummy API (https://dummyapi.online/api/blogposts).
- Displays a list of blogs on the main page (src/app/page.js).
- Clicking on a blog title navigates to its detailed view (src/app/blog/[slug]/page.js).
- Implements a loading state for better user experience (src/app/loading.js and src/app/blog/[slug]/loading.js).
- Uses a basic layout (src/app/layout.js) to wrap content with Tailwind CSS styles.

## Tech Stack
 - Next.js
 - TailwindCSS
 - React Router DOM
 - Axios

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Pharadol/blog-dynamic-routing-next
    ```

2. Navigate to the project directory:
    ```sh
    cd blog-dynamic-routing-next
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

4. Start the development server:
    ```sh
    npm run dev
    ```
