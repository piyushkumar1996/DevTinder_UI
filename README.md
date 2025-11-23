# React + Vite

- Setup project with vite react.
- Remove unwanted files
- Install Tailwind
- Install dasiy ui
- add NavBar daisy ui component
- install react router
- add createBrowserRouter, Routes , route
- create a body layout to add navbar routes and footer
- add children route using outlet

# Login page

- create login page
- add username and password field
- install axios
- make login api call with required details
- install cors and add it as middleware for cors issue
- make api calls with paramter credentials so that cookies are forward

# Setup redux store

- configure the store
- Provide store to app
- create user slice - name , initial state , action and reducer
- update the user slice after login
- fetch data from user slice using useSelector and update navbar
- create config file for storing base url
- refactor the code

#  login on page load and log out feature

- validate token on page load
- If token valid update user slice
- redirect to login page if token is invalid
- add client side routing for profile and home page
- add log out api and navigate to log in page
- handle invalid cred error message