---
layout: post
title:  "Creating our Website with Jekyll"
date:   2017-08-06 17:00:00 -0300
image:  jekyll_github.png
author: "Rodrigo Long Chen Kashiwakura"
breadcrumb: articles
categories: programming
---

At the start, the idea of creating some games came also with the idea of creating a public diary to keep up with the development of everything related to it and sharing the adventure. So, what better way to create a public diary than a website? That is when I started searching for free HTML templates and found this one: <a href="http://ahmedessa.net/box/" target="_blank">http://ahmedessa.net/box/</a>, which I found very user friendly. With the theme chosen, I started customizing it, changing the stylesheet, javascript and HTML to my liking. That is when it hit me, that everytime that I would like to do a new post/article, I would have to create a new HTML template, change the homepage, posts page and index everything all over again just for it. Too much of work for just an new article, right? For my luck, there is one little framework called Jekyll, which runs on Ruby.

#### What is Jekyll?

Ruby is a very friendly programming language, which makes the development of anything easy and fast. Right now, you should be thinking that to do a Jekyll website, you would have to know how to program in Ruby. The good news is that you don`t need it, the only part which it is necessary is to install Jekyll and other plugins. Now, let`s get into it! First of all, install Ruby into your machine:

```bash
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```
Linux: sudo apt install -y ruby
Windows: ___instalador

After installing it, create a file called Gemfile and insert the following lines:

```bash
source 'https://rubygems.org'
gem 'jekyll'

# Jekyll plugins
gem 'jekyll-sitemap'
gem 'jekyll-assets'

# Gems to compact CSS and JS
gem 'uglifier'      
gem 'sass'
```

This file will help us install Jekyll framework and add some plugins, such as the creation of the sitemap automatically (sitemap helps your website to be found by the search engines) and minification of static files. After creating the Gemfile, install all its contents by running the terminal in the same directory:

gem install bundler
bundle install