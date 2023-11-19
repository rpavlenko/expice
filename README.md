# Expice - Gatsby static site with blog backend on WordPress

## Application Demo

Live link: [Expice web app](https://upbeat-jennings-ef82c3.netlify.app/)

## Table of contents

- [Info](#general-info)
- [Technologies](#technologies)
- [Application description](#application)
- [Setup](#setup)
- [Deployment](#deployment)

## General info

"Expice" is a restaurant multipage website. It is a frontend web application developed as a pet project, where Gatsby framework is connected to WordPress CMS, which sends blog posts data for static site generation using GraphQL.
\
All new added posts in WordPress are synced with Netlify platform, where frontend app is published, so each time user adds new blog post in WordPress CMS app is automatically rebuilded on Netlify.

## Figma project: [Link](<https://www.figma.com/file/BPNGsnvGLONFyLlcxbNaKU/Expice-Restaurant-Template-(Copy)?type=design&node-id=0%3A1&mode=design&t=ih5HnB99eijhh0JA-1>)

## Technologies

- Gatsby v5 React-Based Framework for SSG. Used plugins:
  - [gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/)
  - [gatsby-plugin-nprogress](https://www.gatsbyjs.com/plugins/gatsby-plugin-nprogress/)
  - [gatsby-plugin-react-helmet](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/)
  - [gatsby-plugin-sass](https://www.gatsbyjs.com/plugins/gatsby-plugin-sass/)
  - [gatsby-plugin-sharp](https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp/)
  - [gatsby-source-filesystem](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/)
  - [gatsby-source-wordpress](https://www.gatsbyjs.com/plugins/gatsby-source-wordpress/)
  - [gatsby-transformer-json](https://www.gatsbyjs.com/plugins/gatsby-transformer-json/)
  - [gatsby-transformer-sharp](https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp/)
- React: Router, Hooks, Context API
- TypeScript
- Sass
- GraphQL
- Wordpress (as blog posts backend)
- SwiperJS (slider)
- Stripe (payments)
- Firebase authentication with Google provider
- Markdown for blog posts
- Prettier
- Eslint

## Application - page description

### Main Page

![](./src/images/readme-screens/main-page.png 'Main page')

### Blog posts list

![](./src/images/readme-screens/blog-post-list.png 'Blog posts list')

### Shop items list

![](./src/images/readme-screens/shop-items-list.png 'Shop items list')

### Blog post page (Post data from Wordpress)

![](./src/images/readme-screens/blog-post-md.png 'Blog post page from Wordpress')

### Blog post page (Post data from Markdown file)

![](./src/images/readme-screens/blog-post-md.png 'Blog post page from Markdown')

### Netlify form submission (Send form to site owner via Netlify Forms)

Netlify Forms were used in application for form submitting: [Netlify Forms setup](https://docs.netlify.com/forms/setup/).

![](./src/images/readme-screens/netlify-form.png 'Netlify form submission')

### React Context color form theme switch

![](./src/images/readme-screens/make-it.png 'Change color')

### Burger menu for mobile phones

![](./src/images/readme-screens/burger-closed.png 'Burger menu')

### Logged-in user

![](./src/images/readme-screens/logged.png 'Logged-in user')

## Setup

To run this project locally clone repository:

```sh
git clone git@github.com:rpavlenko/expice.git
```

Install dependencies:

```sh
npm install
```

Start local server:

```sh
gatsby develop
```

&nbsp;

## Deployment

Application is deployed on Netlify and is available at https://upbeat-jennings-ef82c3.netlify.app/
