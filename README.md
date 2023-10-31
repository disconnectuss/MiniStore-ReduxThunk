# Mini Online Store with redux thunk
API url : `https://fakestoreapi.com/`

- This is a simple online store application built using React, Redux Thunk, and React Router DOM.
- It provides a basic structure for a main page where users can browse products and a shopping basket that counts the selected products and calculates the total price.

#Preview

https://github.com/disconnectuss/MiniStore-ReduxThunk/assets/129686850/bbbcdff4-2a09-43f3-8aca-858294d26e8c


## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.

## Getting Started

To get this project up and running on your local machine, follow these steps:

1. Clone the repository to your local machine:

   git clone `https://github.com/your-username/mini-online-store.git`
   cd mini-online-store
   npm install
   npm start

# Technologies Used
- React: A JavaScript library for building user interfaces.
- Redux Thunk: Middleware for handling asynchronous actions in Redux.
- React Router DOM: Library for routing in a React application.

# Folder Structure
components/MainPage.js: The main page component, where products are displayed.
components/Basket.js: The shopping basket component, which displays the selected products and calculates the total price.
redux/actions.js: Redux action creators for managing the state.
redux/reducers.js: Redux reducers to update the state.
services/api.js: Simulated API service with fake data.

# How it Works
The application provides a basic online store experience. Users can:
- View a list of products on the main page. 
- Add products to their shopping basket.
- View the number of items in the basket and the total price in the basket page.

# Redux Thunk
Redux Thunk is used in this project to manage asynchronous actions. This is important when fetching data from a real API. In this case, it's used to simulate API calls to add and remove products from the basket.

# React Router DOM
React Router DOM is used for routing within the application. It allows you to navigate between the main page and the basket page seamlessly.

!! Can be improved  with searh box, more basket features and user friendly basket icons..just wanted to try how to thunk middleware works.. See you next! :)
