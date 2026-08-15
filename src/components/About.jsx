import React from "react";

function About() {
  return (
    <div className="about">
      <div className="container">
        <p>About This Project</p>
        <h1>A Simple, Modern E-commerce Experience</h1>
        <p>
          Welcome to <strong>E-comBasic</strong>, a modern e-commerce frontend
          built with React.
        </p>

        <h2>The Project</h2>
        <p>
          This project was created to explore how a real-world online store can
          be designed and developed using modern frontend technologies. The goal
          was to create a clean, responsive, and intuitive shopping experience
          where users can easily browse products, explore categories, and view
          detailed product information.
        </p>

        <h2>What You Can Do</h2>
        <p>
          The application provides a simple shopping experience with a variety
          of products and categories.
        </p>

        <ul>
          <li>Browse a collection of products</li>
          <li>Explore products by category</li>
          <li>View detailed product information</li>
          <li>See prices, ratings, stock, and descriptions</li>
          <li>Navigate through a responsive interface</li>
          <li>Discover products through a clean and simple layout</li>
        </ul>

        <p>
          Product data is dynamically retrieved from the
          <strong>DummyJSON API</strong>, allowing the application to work with
          realistic product information without requiring a custom backend.
        </p>

        <h2>Built with React</h2>
        <p>
          This project was built using <strong>React</strong> and focuses on
          applying fundamental React concepts in a practical application.
        </p>

        <p>
          Throughout the project, I worked with reusable components, props,
          state management, effects, API requests, conditional rendering, and
          dynamic data.
        </p>

        <p>
          The project also provided an opportunity to work on component
          structure, user experience, responsive design, and handling data from
          an external API.
        </p>

        <h2>The Goal</h2>
        <p>
          The goal wasn't simply to create another product grid. I wanted to
          build something that feels like an actual e-commerce application while
          strengthening my understanding of React and frontend development.
        </p>

        <p>
          Every part of the project, from fetching products to displaying
          individual product details, is built around turning external data into
          a usable and engaging interface.
        </p>

        <h2>What's Next?</h2>
        <p>
          This project is still evolving. There are many features that could be
          added in the future, including:
        </p>

        <ul>
          <li>Shopping cart functionality</li>
          <li>Product search</li>
          <li>Advanced filtering and sorting</li>
          <li>Favorites</li>
          <li>Pagination</li>
          <li>User authentication</li>
          <li>Checkout flow</li>
          <li>Order management</li>
        </ul>

        <p>
          These improvements would allow the project to move closer to a
          complete e-commerce application while providing opportunities to
          explore more advanced frontend concepts.
        </p>

        <h2>A Portfolio Project</h2>
        <p>
          This website is a <strong>frontend portfolio project</strong>
          created for learning and demonstrating React development.
        </p>

        <p>
          Product information is provided by
          <strong>DummyJSON</strong> and is used for demonstration purposes.
        </p>

        <p>
          The project represents my ongoing journey in frontend development and
          my goal of building practical applications rather than only following
          isolated tutorials.
        </p>
      </div>
    </div>
  );
}

export default About;
