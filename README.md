# Hobbyz
Hobbyz is a community-driven website that provides a platform for hobby enthusiasts to share their interests with like-minded people. It allows users to upload pictures of their hobbies, including but not limited to, photography, painting, knitting, cooking, and many more. Users can also comment on or like to other people's posts, creating a vibrant and engaging online community. Whether you are a seasoned hobbyist or a curious beginner, Hobbyz is the perfect place to explore your interests and connect with others who share your passion.


## Table of Contents
+ [UX](#ux "UX")

+ [User Stories](#user-stories "User Stories")

+ [Design](#design "Design")

+ [Features](#features "Features")

+ [Testing](#testing "Testing")

+ [Technologies Used](#technologies-used "Technologies Used")

+ [Components](#oomponents "Components")

+ [Deployment](#deployment "Deployment")

+ [Credits](#credits "Credits")

## UX

### Site Purpose:
- To foster engagement and connection within the hobby community by allowing users to share images of their hobbies, while interacting with and supporting other users through comments and likes.

### Site Goal:
- Hobbyz aims to cultivate a thriving community where hobby enthusiasts can discover new inspirations, share their experiences, and connect with like-minded individuals.

### Audience:
- Everyone with a passion for hobbies, from beginners to experts, seeking to reach out and connect with fellow enthusiasts.

### Communication:
- The website layout is designed to be user-friendly, visually appealing, and engaging, with a straightforward navigation panel for quick access to various sections. Users can effortlessly browse through hobby-related images and interact with others by liking or commenting on their posts.

### Current User Goals:
- To ensure that users return to Hobbyz regularly to discover new content, engage with their favorite hobbyists, and stay updated on the latest posts from users they follow.

### New User Goal:
- To captivate new users, encouraging them to delve into the wide array of hobbies showcased on the site and inspire them to share their own experiences.

### Future Goals:
- Implement different user account types to control the publishing of specific content, such as featured hobby collections or tutorials.
- Introduce private messaging functionality to enable users to communicate one-on-one or with a group of users.


## Features

### Existing Features:

#### Header:
![Header](src/assets/readme-images/Header.png)

#### Navigation
![Navbar](src/assets/readme-images/Navigation.png)

#### Posts Page:
![Posts Page](src/assets/readme-images/Posts%20Page.png)

#### Submission Form:
![Submission Form](src/assets/readme-images/Submission%20Form.png)

#### 404 Page Not Found:
![404](src/assets/readme-images/404%20Page%20Not%20Found.png)

#### Popular Profiles:
![Popular Profiles](src/assets/readme-images/Popular%20Profiles.png)

#### Sign-Up:
![Sign Up](src/assets/readme-images/Sign%20Up.png)

#### Sign-In:
![Sign In](src/assets/readme-images/Sign%20In.png)

#### Sign-Out:
![Sign Out](src/assets/readme-images/Sign%20Out.png)

#### Commenting:
![Commenting](src/assets/readme-images/Commenting.png)

#### Liking:
![Liking](src/assets/readme-images/Liking.png)

### Features not yet implemented:
- Notifications when a user receives a new comment, follower or like.
- Private messaging between users.
- Group messaging between users.
- Ability to block users, making it so that a user can choose to not see posts and comments from a blocked user.
- Contact form so that users can provide feedback.

## Testing
---
### Validator Testing

#### Lighthouse
- The page has a good rating in lighthouse except for in performance, this is due to the uploaded images not being properly sized, i have decided to leave this in due to not having enough time to correct it.

![Lighthouse](src/assets/readme-images/Lighthouse.png)

- The website was successfully tested for compatibility without any issues on Brave, Chrome, Safari, and a mobile device.

## Technologies Used
---
### Main Languages Used
- HTML5
- CSS3
- Javascript
- Postgres SQL

### The following tools and technologies were utilized:
- GitPod for building the project and creating the JSX and CSS files before pushing the project to GitHub.
- GitHub for storing the repository for submission.
- Google Fonts for site fonts.
- Font Awesome to incorporate icons into the navigation sections.
- Balsamiq for creating mockups of the project before commencing.
- Favicon to provide the code and image for the icon in the tab bar.
- Am I Responsive? to verify that the project looked good across all devices.
- ReactJS to develop the components that would collectively form the front-end application.
- React-Bootstrap, a styling library, that contributed to the layout of the site.
- Django for constructing the backend database that serves as an API for the front-end project.

## Components
In this project, multiple components have been developed and employed consistently across the entire project:

- axiosDefault.js: Facilitates seamless communication with the backend API.
- Asset.js: Provides a loading spinner and user avatar across the website.
- DropdownEdit.js: Enables users to edit their profile.
- CurrentUserContext.js: Determines the available functionality for users based on their logged-in status.
- ProfileDataContext.js: Offers the ability to follow and unfollow other users.
- utils.js: Delivers functionality to all components utilizing Infinite Scroll.
