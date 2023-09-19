# Expice - Gatsby static site with blog backend on WordPress

## Application Demo

Live link: [Expice web app](https://upbeat-jennings-ef82c3.netlify.app/)

## Table of contents

- [Info](#general-info)
- [Technologies](#technologies)
- [Development](#development)
- [Setup](#setup)
- [Deployment](#deployment)

## General info

"Expice" is a frontend Web application which was developed as a pet project, where Gatsby framework is connected to WordPress CMS, which sends blog posts data to application using GraphQL.
All new added posts in WordPress are synced with Netlify platform, where frontend app is published, so each time user adds new blog post in WordPress CMS app is automatically rebuilded on Netlify.

## Technologies used:

- Gatsby React-Based Framework for SSG:
  - gatsby-plugin-image
  - gatsby-plugin-nprogress
  - gatsby-plugin-react-helmet
  - gatsby-plugin-sharp
  - gatsby-source-filesystem
  - gatsby-source-wordpress
- React: Router, Hooks, Context API
- TypeScript
- Sass
- GraphQL
- Wordpress
- SwiperJS
- Stripe
- Prettier
- Eslint

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
npm run gatsby develop
```

&nbsp;

## Deployment

Application is deployed on Netlify and is available at https://upbeat-jennings-ef82c3.netlify.app/
