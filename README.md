# ORM-E-Commerce

 [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)


![Example](/orm-ecommerce-gi.gif)
  

  ## Table of Contents
  * [Description](#description)
  * [Requirements](#requirements)
  * [Models](#models)
  * [Installation](#installation)
  * [Licenses](#licenses)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)

  ## Description
  As a manager at an internet retail company, you want to develop a robust back-end for your e-commerce website using the latest technologies to stay competitive in the market. This guide will walk you through setting up an Express.js API with Sequelize to interact with a PostgreSQL database.

  ## Requirements
  Express.js API
  PostgreSQL Database
  Sequelize ORM
  Environment Variables for Configuration

  ## Models

  # Category
  id: Integer, Primary Key, Auto Increment, Not Null
  category_name: String, Not Null
  # Product
  id: Integer, Primary Key, Auto Increment, Not Null
  product_name: String, Not Null
  price: Decimal, Not Null, Validates Decimal
  stock: Integer, Not Null, Default Value 10, Validates Numeric
  category_id: Integer, References Category.id
  # Tag
  id: Integer, Primary Key, Auto Increment, Not Null
  tag_name: String
  ProductTag
  id: Integer, Primary Key, Auto Increment, Not Null
  product_id: Integer, References Product.id
  tag_id: Integer, References Tag.id
  Associations
  Product belongs to Category
  Category has many Products
  Product belongs to many Tags (through ProductTag)
  Tag belongs to many Products (through ProductTag)

  ## Installation
  Clone the repository:

  Copy code
  git clone 
  cd 
  Install dependencies: npm install 


  Copy code
  npm install
  Set up environment variables:
  Create a .env file in the root of your project and add your PostgreSQL configuration:

  env
  Copy code
  DB_NAME=<your-database-name>
  DB_USER=<your-database-username>
  DB_PASSWORD=<your-database-password>
  DB_HOST=localhost
  DB_PORT=5432
  Database Setup
  Create the database:
  Ensure your PostgreSQL server is running and create the database using a PostgreSQL client or command line.

  Run schema and seed commands:


  Copy code
  npm run schema
  npm run seed
  Starting the Server
  Invoke the application:


  Copy code
  npm start
  Verify the server is running:
  Open your browser and navigate to http://localhost:3000. You should see a message indicating the server is running.

  
  ## Licenses
    This project is covered under the MIT license.

  ## Contributing
  GitHub

  ## Tests
  no test

  ## Questions
  Have questions about this project?  
  GitHub: https://github.com/AnamarisOrtiz  
  Email: anamarisortiz@hotmail.com

  ## Credits
  Anamaris Ortiz
