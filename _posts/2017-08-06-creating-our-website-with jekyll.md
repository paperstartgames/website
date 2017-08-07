---
layout: post
title:  "Creating our Website with Jekyll"
date:   2017-08-06 17:00:00 -0300
image:  jekyll_github.png
author: "Rodrigo Long Chen Kashiwakura"
breadcrumb: articles
categories: programming
---

---
**RESOURCES**

Website github-page: <a href="https://github.com/paperstartgames/paperstartgames.github.io" target="_blank">https://github.com/paperstartgames/paperstartgames.github.io</a><br>
Website github: <a href="https://github.com/paperstartgames/website" target="_blank">https://github.com/paperstartgames/website</a>

---

At the start, the idea of creating some games came also with the idea of creating a public diary to keep up with the development of everything related to it and sharing the adventure. So, what better way to create a public diary than a website? That is when I started searching for free HTML templates and found this one: <a href="http://ahmedessa.net/box/" target="_blank">http://ahmedessa.net/box/</a>, which I found very user friendly. With the theme chosen, I started customizing it, changing the stylesheet, javascript and HTML to my liking. That is when it hit me, that everytime that I would like to do a new post/article, I would have to create a new HTML template, change the homepage, posts page and index everything all over again just for it. Too much of work for just an new article, right? For my luck, there is one little framework called Jekyll. <br><br>

#### What is Jekyll?

Jekyll is a simple static site generator with the focus on creating posts fast. It takes the content, that can be created via Markdown or Liquid templates, and renders out a complete static website ready to be served. Jekyll is a gem created for Ruby, which is a friendly programming language, that makes the development of anything easy and fast.

Right now, you should be thinking that to do a Jekyll website, you would have to know how to program in Ruby. The good news is that you don´t. The only knowledge which it is necessary is to install Jekyll and other plugins. Now, let´s get into it!<br><br>

#### Starting with Jekyll

First of all, install Ruby into your machine:

---

**Linux (Debian or Ubuntu):** sudo apt-get install -y ruby-full<br>
**Windows:** <a href="https://rubyinstaller.org/downloads/" target="_blank">https://rubyinstaller.org/downloads/</a>

---

After installing Ruby, install Jekyll and Bundler (Bundler is a gem that automates the instalation of other gems)

```bash
gem install jekyll
gem install bundler
```

After installing it, run:

```bash
jekyll new website
```

The command above will generate the basic website. Which you can start by running:

```bash
jekyll s
```

The website will be served at the url: <a href="http://127.0.0.1:4000" target="_blank">http://127.0.0.1:4000</a>. That´s a start! Now, the next step is figuring out how to turn the static website into the Jekyll.<br><br>

#### Understanding Jekyll folders

If you access <a href="https://github.com/paperstartgames/website" target="_blank">Paperstart Games github repository</a>, you will notice that the project contains much more folders than just _posts, which is generated initially. Right now, I will explain what each one of them is responsible for.

---
**_assets**

This folder is used to store the static files, such as images, CSS and JavaScript. It is good to keep in mind that this is a convention created by this tutorial and that you could put it anywhere you would like. But if you do, you will later have to change the _config.yml (document where all the configurations are stored)

---

**_layouts**

This folder is used to store the HTML templates that will be used majorly through the whole website. This is where Jekyll shines, because instead of repeating HTML code over and over again, here you can reutilize it as much as you want to.

---

**_includes**

This folder is used to organize parts of HTML code. Instead of writing everything into the layout file, you can split in into minor include files and make the layout file in the end, easier to be read.

---

**_posts**

This is where you will write your articles/posts. The files that will be stored over there, will be made of pure information. It will not be necessary to write any more HTML code to match the template, instead you will be able to use markdown, which is a more friendly way of writing texts.

---

**_site**

This folder is created when **jekyll s** is executed. This folder is where your website will always be generated statically.

---

Given that now, you know how Jekyll is organized. It is time to find patterns in the static HTML files from your website and turn it into a layout.

#### Finding patterns

Begin looking for repeating patterns in the static HTML pages. 

This file will help us install Jekyll framework and add some plugins, such as the creation of the sitemap automatically (sitemap helps your website to be found by the search engines) and minification of static files. After creating the Gemfile, install all its contents by running in the terminal in the same directory:

```bash
gem install bundler
bundle install
```

