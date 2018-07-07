---
layout: post
title:  "Creating our Website with Jekyll"
date:   2017-08-09 23:00:00 -0300
image:  jekyll_github.png
author: "Rodrigo Long Chen Kashiwakura"
breadcrumb: articles
categories: programming
comments: true
---

---
**RESOURCES**

Website github: <a href="https://github.com/paperstartgames/website" target="_blank">link</a>

---

At the start, the idea of creating some games came also with the idea of creating a public diary to keep up with the development of everything related to it and sharing the adventure. So, what better way to create a public diary than a website? That is when I started searching for free HTML templates, until I found this one: <a href="http://ahmedessa.net/box/" target="_blank">http://ahmedessa.net/box/</a>, which I found very user friendly. With the template chosen, I started customizing it, changing the stylesheet, javascript and HTML to my liking. That is when it hit me, that everytime I would like to do a new post/article, I would have to create a new HTML template, change the homepage and reindex everything all over again just for it. Too much of work for just an new article, right? For my luck, there is one little framework called Jekyll. <br><br>

#### What is Jekyll?

Jekyll is a simple static site generator with the focus on creating posts/articles fast. It takes the content, that can be created via Markdown or Liquid templates, and renders out a complete static website ready to be served. Jekyll is a gem created for Ruby, which is a friendly programming language, that makes the development of everything easy and fast.

Right now, you should be thinking that to do a Jekyll website, you would have to know how to program in Ruby. The good news is that you don't. The only knowledge which it is necessary, is to install Jekyll and other plugins. Now, let's get into it!<br><br>

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

The command above will generate the basic Jekyll website. Which you can start by running:

```bash
jekyll s
```

The website will be served at the url: <a href="http://127.0.0.1:4000" target="_blank">http://127.0.0.1:4000</a>. That's a start! Now, the next step is figuring out how to turn the static website into Jekyll.<br><br>

#### Understanding Jekyll folders

If you access <a href="https://github.com/paperstartgames/website" target="_blank">Paperstart Games github repository</a>, you will notice that the project contains much more folders than just **_posts**, which is generated initially. Right now, I will explain what each one of them is responsible for.

---
**_assets**

This folder is used to store the static files, such as images, CSS and JavaScript. It is good to keep in mind that this is a convention created by this tutorial and that you could put it anywhere you like. But if you do, you will later have to change the _config.yml (document where all the configurations are stored)

---

**_layouts**

This folder is used to store the HTML templates that will be used majorly through the whole website. This is where Jekyll shines, because instead of repeating HTML code over and over again, here you can reutilize it as much as you want to.

---

**_includes**

This folder is used to organize parts of HTML code. Instead of writing everything into the layout file, you can split it into minor include files and make the layout file easier to be read.

---

**_posts**

This is where you will write your articles/posts. The files that will be stored over there, will be made of pure information. It will not be necessary to write any more HTML code to match the template, instead you will be able to use markdown, which is a more friendly way of writing information.

---

**_site**

This folder is created when `jekyll s` is executed. This folder is where your website will always be generated statically by default.

---

Given that now, you know how Jekyll is organized. It's time to find patterns in the static HTML files and turn it into a layout.<br><br>

#### Finding patterns for Layouts

Begin looking for repeating patterns in every static HTML page, because every pattern found, can be reutilized. Everytime one layout is created, all HTML put inside can be used over and over again (just like copy and paste), but the part &#123;{ content }&#125; will allow us to put more HTML layouts in there or markdown content. The following image will help to understand it better:

<img src="{% asset_path article/jekylllayoutconcept.png %}" alt="" class="img-responsive" />
image from: <a href="http://jekyllrb.com/tutorials/convert-site-to-jekyll/" target="_blank">http://jekyllrb.com/tutorials/convert-site-to-jekyll/</a>

As result, it was possible to divide Paperstart Website as three different layouts:

---

***default.html***

This layout contains everything that is repeated in every page, which is the header containing Paperstart Games icon and MENU. Also the footer, which always shows the company's copyright. The CSS and JS are also inserted here, since every page uses the same static files.

<img src="{% asset_path article/default_jekyll.png %}" alt="" class="img-responsive" />

---

***page.html***

This layout contains the title and breadcrumb of the page, which can be found almost everywhere with exception from the homepage.

<img src="{% asset_path article/page_jekyll.png %}" alt="" class="img-responsive" />

---

***post.html***

Finally, this is the layout used by every post, which contains a reserved space for the posts title and to the right, links to social media and categories.

<img src="{% asset_path article/post_jekyll.png %}" alt="" class="img-responsive" />

---

Perfect! With the layouts explained, we can begin simplifying the websites HTML code by dividing it into smaller chunks and putting it together inside **_includes** folder. <br><br>

#### Simplifying the layout

Take a look at **default.html** in its original format:

```html
---
layout: compress
---

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Paperstart Games | {{ page.title }}">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Paperstart Games | {{ page.title }}</title>

    <!-- Bootstrap -->
    {% css bootstrap.min %}
    <link href="/ionicons/css/ionicons.min.css" rel="stylesheet">

    <!-- main css -->
    {% css main %}

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>

  <!-- Preloader -->
  <div id="preloader">
      <div class="pre-container">
          <div class="spinner">
              <div class="double-bounce1"></div>
              <div class="double-bounce2"></div>
          </div>
      </div>
  </div>
  <!-- end Preloader -->

  <div class="container-fluid">
    <!-- box header -->
  <header class="box-header">
    <div class="box-logo">
      <a href="/"><img src="{% asset_path paperstart_black.png %}" width="80" alt="Logo" align="left"></a>
      <h1 id="logo_text" hidden>&nbsp;PAPERSTART GAMES</h1>
    </div>
    <!-- box-nav -->
    <a class="box-primary-nav-trigger" href="#0">
      <span class="box-menu-text">Menu</span><span class="box-menu-icon"></span>
    </a>
    <!-- box-primary-nav-trigger -->
  </header>
  <!-- end box header -->
    <nav>
    <ul class="box-primary-nav">
      <li class="box-label">Paperstart Games</li>

      <li><a href="/">Home</a></li>
      <li><a href="/about/">About us</a></li>
      <li><a href="/objectives/">objectives</a></li>
      <li><a href="/articles/">articles</a></li>
      <li><a href="/contact/">contact us</a></li>

      <li class="box-label">Follow us</li>
      {% include social.html %}
    </ul>
  </nav>
  </div>
    
  { content }

  <footer>
    <div class="container-fluid">
      <p class="copyright">© Paperstart Games 2017</p>
    </div>
  </footer>

  <!-- back to top -->
  <a href="#0" class="cd-top"><i class="ion-android-arrow-up"></i></a>
  <!-- end back to top -->

  <!-- jQuery -->
  {% js jquery-2.1.1 %}
  <!--  plugins -->
  <script async src="{% asset_path modernizr.js %}"></script>
  <script async src="{% asset_path bootstrap.min.js %}"></script>
  <script async src="{% asset_path menu.js %}"></script>
  <script async src="{% asset_path animated-headline.js %}"></script>
  <script async src="{% asset_path isotope.pkgd.min.js %}"></script>
  <script async src="{% asset_path custom.js %}"></script>

</body>
</html>
```
This file has approximately 100 lines, which is not easy to understand. That is why, it is an good idea to divide it by scope. For example, we can take the head tag and save it into a different file, such as **head.html**, then take the header into **header.html**, and so on. Following this idea, it was possible to create the following **default.html**:

```html
---
layout: compress
---

{ % include head.html % }
<body>

  <!-- Preloader -->
  <div id="preloader">
      <div class="pre-container">
          <div class="spinner">
              <div class="double-bounce1"></div>
              <div class="double-bounce2"></div>
          </div>
      </div>
  </div>
  <!-- end Preloader -->

  <div class="container-fluid">
    { % include header.html % }
    { % include menu_nav.html % }
  </div>
    
  { content }

  { % include footer.html % }

</body>
</html>
```

It is a interesting result, because not only it was possible to reduce the number of lines from 100 to 30, but also it is much easier to understand what it contains and what it renders! Finally, as last topic, we will compress all static files and make sure it works! This is the part we are going to include some plugins!<br><br>

#### Minifying Static Files

Begin by adding new gems into the project by creating a file called `Gemfile` and inserting:

```bash
source 'https://rubygems.org'
gem 'jekyll'

# Jekyll plugins
gem 'jekyll-assets'

# Gems to compact CSS and JS
gem 'uglifier'      
gem 'sass'
```

Keep in mind that `Gemfile` is a file for the command `bundle install`, which uses the bundle gem and installs eveything that's inside it. After executing it, add to **_config.yml**, to begin compressing static files:

```bash
plugins:
  - jekyll-assets

assets:
  prefix: "/assets"
  sources:
    - _assets/css
    - _assets/img
    - _assets/js
  compress:
    css:  sass
    js:   uglifier
```

Sass and Uglifier are necessary gems to compact CSS and JavaScript files. The configuration above is to inform Jekyll that the project uses jekyll-assets plugin and that they will be inside `assets` folder with three subfolders named: `css`, `js` and `img`.

That's the moment where we insert all our static files into these three folders and reference each static file as:

---

**CSS:** { % css css_file_name % }
**JS:** { % js js_file_name % }
**IMG:** { % asset_path img_file_name.png % }

---

And that's all you need to know to understand how whole Jekyll websites are generated and start your own! But it's not over yet! After you finished creating your own website with Jekyll, you can serve it for everyone to see using Github-Pages.<br><br>

#### Serving Jekyll with Github-Pages

First of all, create an account at <a href="https://github.com/" target="_blank">Github</a> and create a new repository.

<img src="{% asset_path article/jekyll_github_create.png %}" alt="" class="img-responsive" />

Now, it is important to change the folder where the website is generated to the folder **docs**, because since August 2016, Github started letting users serve their websites from this folder. So, in order to do that, add the following configuration to your **_config.yml** file:

```bash
destination:  ./docs
```

This configuration will make your jekyll website be generated inside **docs** folder instead of **_site**. Now, with everything created, enter your jekyll project directory and push it into Github by executing for the first time:


```bash
git init
git add .
git commit -m "Serving my first Jekyll generated Website!"
git remote add origin REMOTE_REPOSITORY_URL
git push origin master
```

With **docs** folder inside the master branch, it is now possible to visit the settings in the repository page to change Github Pages Source from None to master branch /docs folder, as the following image shows.<br>

<img src="{% asset_path article/jekyll_github_pages.png %}" alt="" class="img-responsive" />

After doing this, you can visit your new website by accessing: `username.github.io/repository_name`

Now you have it! Your first new static website generated via Jekyll! Thank you very much for the company and I would like to hear what you think about this tutorial. Suggestions are always welcome!
