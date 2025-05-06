# StreamAI - AI-Powered Movie Streaming Platform

StreamAI is an innovative movie streaming platform that combines **AI movie suggestions** and an immersive movie-watching experience. The app is designed to provide a smooth user experience with features like a **login system**, dynamic movie cards, and movie trailers, along with **AI-powered recommendations** powered by OpenAI's GPT-3.5 model and DeepReek R1 models.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [How to Use](#how-to-use)
- [Project Setup](#project-setup)
- [Deployment](#deployment)
- [License](#license)

## Features

- **Login/Signup System**: Users can create accounts and sign in to access personalized movie recommendations and content.
- **Movie Cards**: Browse top-rated, trending, and upcoming movies with movie posters, titles, and brief descriptions.
- **Movie Details**: Click on a movie card to watch the trailer and view detailed information such as movie title, overview, and more.
- **AI-Powered Recommendations**: Toggle the **CineGPT** button to access AI-based movie suggestions. You can search for movies in various languages, genres, or specific actions using the **search bar** and **dropdown menu**.
- **Multi-Language Support**: The platform supports 8+ languages for movie suggestions, making it accessible to a global audience.
- **StreamHub**: Home page that acts as the control center for accessing trending movies and using AI recommendations.
- **Integrated AI Models**: Using OpenAI’s **GPT-3.5** and **DeepReek R1** models to suggest movies based on your input, genre preferences, and more.

## Tech Stack

- **Frontend**: 
  - React.js
  - Tailwind CSS
  - React Router
  - Axios for API calls

- **Backend (AI Integration)**:
  - OpenAI API (GPT-3.5 for movie recommendations)
  - DeepReek R1 model (AI-driven suggestions)
  
- **Authentication**:
  - Firebase Authentication (SignUp/SignIn)

- **Deployment**: 
  - Netlify for live deployment

## How to Use

1. **Login/SignUp**: 
   - On the landing page, you’ll find options to sign up or sign in. 
   - Use Firebase Authentication to securely manage your login process.

2. **Browse Movies**: 
   - Once signed in, navigate to the browser page.
   - Watch a variety of movies with their posters and descriptions.
   - Select a movie, and it will play directly on the video player with the movie title and description displayed.

3. **AI Movie Suggestions**:
   - Toggle the **CineGPT** button to access AI-based movie suggestions.
   - Use the search bar and dropdown menu to filter movies by language, genre, and more.
   - View movie recommendations generated based on your input.

4. **StreamHub**: 
   - Go back to the homepage by clicking **StreamHub** in the navigation.
   - This takes you back to the home screen to explore more movies.


### Prerequisites

- **Node.js** and **npm** installed on your machine.
- **Firebase** account for authentication.
- **OpenAI API key** for GPT-3.5 integration.


