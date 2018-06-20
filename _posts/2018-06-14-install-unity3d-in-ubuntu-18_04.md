---
layout: post
title:  "Install Unity3D in Ubuntu 18.04"
date:   2018-06-14 23:00:00 -0300
image:  unity3d.png
author: "Rodrigo Long Chen Kashiwakura"
breadcrumb: articles
categories: game programming
comments: true
---

---
**RESOURCES**

Unity3D on Linux: <a href="https://forum.unity.com/threads/unity-on-linux-release-notes-and-known-issues.350256/page-2" target="_blank">link</a>

---

In order to install Unity3D into Ubuntu 18.04, you need to download the latest version available <a href="https://forum.unity.com/threads/unity-on-linux-release-notes-and-known-issues.350256/page-2#post-3525218" target="_blank">here</a>. After downloading it, you should turn it executable and begin the installation via the following commands:

```bash
sudo apt install libgtk2.0-0 libsoup2.4-1 libarchive13 libpng16-16 libgconf-2-4
cd ~/Downloads
chmod +x UnitySetup-YYYY.X.ZZZ
./UnitySetup-YYYY.X.ZZZ
```

After the install, it´s a good idea to move Unity3D into the **opt** folder and also create a symbolic link connected to it:

```bash
cd
sudo mv UnitySetup-YYYY.X.ZZZ /opt/Unity3D
sudo ln -s /opt/Unity3D/Editor/Unity /usr/bin/unity3d
```

Now, with the symbolic link created, you are able to execute Unity3d via **unity3d** command. Also, you will need to install an IDE to write C# code. I recommend MonoDevelop, which can be installed via:

```bash
sudo apt install apt-transport-https dirmngr
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 3FA7E0328081BFF6A14DA29AA6A19B38D3D831EF
echo "deb https://download.mono-project.com/repo/ubuntu stable-bionic main" | sudo tee /etc/apt/sources.list.d/mono-official-stable.list
sudo apt update
sudo apt install mono-complete monodevelop
```

Finally, in Unity3D, go to **Edit > Preferences** and access **External Tools**. There, in **External Script Editor** drop down list, click on **Browse...**, where you will locate the MonoDevelop Editor in **/usr/bin/monodevelop**, or if it isn´t there, find it via **whereis monodevelop** command. And that´s all you need to start game programming in Ubuntu 18.04.<br><br>

#### WARNINGS

---

**1. Problem with Unity3D AudioClips**

If Unity3D is not recognizing the .wav, .mp3, ... as AudioClips, you should install **lib32stdc++6**

**2. Failed to load module "canberra-gtk-module"**

If every time you start Unity3D, this message appears in the console, you should install **libcanberra-gtk-module**
