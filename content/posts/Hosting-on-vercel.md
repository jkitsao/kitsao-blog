---
title: Hosting your projects on vercel
description: we take a look at how easy it is to deploy your project to vercel with git intergration
date: 2021-1-02T11:00:00.000Z
author: Jackson kitsao
image: https://i.insider.com/5e990b018427e9308029c328?width=600&format=jpeg&auto=webp
---

![hosting on vercel](https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png)


As developers projects are very important whether you are trying to learn a new tech or framework
or just building your portfolio, projects are key to improving your skills.
<!-- people need to see your projects expose your projects to everyone 
this is where hosting providers come in and vercel is great for this  -->
once your project is done you need to host it on a server to allow others to access your work 
this is where platforms like vercel come in..

## What is vercel ?
Vercel is a cloud platform for static sites and Serverless Functions. It enables developers to host Jamstack websites and web services with instant deploy, automatic scaling, with no configuration.
Vercel is also the team behind [nextjs](https://nextjs.org/) The React Framework for server side rendering

## Create A Vercel Account

First, you'll need to create a Vercel account. If you don't already have one, you can create one [here.](https://vercel.com/signup)

![sign up image](https://res.cloudinary.com/whey/image/upload/v1609587607/tipjarr/vercel_signup_y9wdsz.png)

After creating your account, you will be ridirected to your dashboard

## Deployment process with Git intergration

Once you have signed up to Vercel, you can use **GitHub**, **GitLab**, or **Bitbucket** to deploy an existing project – then with a deployment for every push – by selecting a repository from your Git account.

You just need to select a git provider to start deploying your existing repositories and projects

After your project has been imported, all subsequent pushes to branches will generate Preview Deployments, and all changes made to the Production Branch (commonly "main") will result in a Production Deployment.
<!-- Select a Git provider below to get started deploying your existing repositories and projects: -->
Vercel allows for automatic deployments on every branch push and merges onto the Production Branch of your GitHub, GitLab, and Bitbucket projects.

## Git repo
Setting up your GitHub, GitLab, or Bitbucket repository on Vercel is only a matter of clicking the "New Project" button on the top right of your dashboard and following the steps.

![vercel's new project tab](https://res.cloudinary.com/whey/image/upload/v1609589491/tipjarr/vercel_projects_tab_xwrqnw.png)

After clicking it, you'll be presented with a list of Git repositories that the Git account you've signed up with has write access to.

![vercel's Git repo gist](https://res.cloudinary.com/whey/image/upload/v1609590427/tipjarr/vercel_repos_voq0jg.png)

When you create a new Project from a Git repository on Vercel, the Production Branch will be selected in the following order:

* The main branch.
* If not present, the master branch (more details).
* [Only for Bitbucket] If not present, the "Production Branch" setting of your Git repository is used.
* If not present, the Git repository's default branch.

## Custom domains

**What is a Domain ?**

Domain name is the address of your website that people type in the browser URL bar to visit your website

By default, all deployments are assigned a .vercel.app suffixed domain.

This domain can be replaced with a Custom Domain of your choice. This Custom Domain can be purchased with Vercel or a third-party like 

[custom domains documentation](https://vercel.com/docs/custom-domains)

## Serverless functions 

What are Serverless Function ?

"serverless functions are single-purpose, programmatic functions that are hosted on managed infrastructure. These functions, which are invoked through the Internet, are hosted and maintained by cloud computing companies." [what are serverless functions](https://www.pubnub.com/blog/what-is-a-serverless-function/)

With Vercel, you can easily deploy Serverless functions 

You can use Serverless Functions to handle user authentication, form submission, database queries, custom slack commands, and more.

To deploy Serverless Functions without any additional configuration, you can put files with extensions matching supported languages and exported functions in the /api directory at your project's root.

NOTE: If you are using Next.js, use the /pages/api directory instead.
[Read more about API functionality with Next.js](https://vercel.com/docs/serverless-functions/introduction)

## Pricing (Hobby plan)

Vercel offers a Hobby plan that is more than enough for your personal projects
<!-- Hobby plans are limited to personal, -->

![pricing image](https://res.cloudinary.com/whey/image/upload/v1609587952/tipjarr/vercel_pricing_v2ofpc.png)

**The free plan includes**

* HTTPS-enabled Custom Domains

* Continuous Deployment with Git

* High-performance Edge Network

* Unlimited Websites & APIs

* Serverless Functions in Node.js, Go, and more

*** Also With the free plan you can ***

Deploy from

* GitHub personal accounts
* GitLab personal accounts
* Bitbucket personal accounts
* Command-Line Interface

find out more about  pricing [here](https://vercel.com/pricing)