---
layout: default
title: Distraction Free YouTube

---

# Distraction Free YouTube
## Why?
Before I started working at Oracle, I developed a Chrome Extension that would help me have a better ‘relationship’ with YouTube. YouTube has been a site of unproductivity and procrastination for me because it’s so easy to binge-watch irrelevant videos. It’s just a mess, with all the information and elements that are screaming for your attention; video thumbnails, categories, shorts, comments, ads, etc. Take a look:

| ![YouTube Homepage](https://imgur.com/bRdPQot "YouTube Homepage") |
|:--:|
| *YouTube Homepage* |
|:--:|

So I set on a journey to develop a Web Extension to remove much of the information displayed on screen.

## First steps
Because I’ve never developed a Web Extension before, I watched a couple of tutorials to help me dimension what to expect. After that, I went straight to the well-documented page of Chrome Extensions. There I found some tutorials/projects to get me started on my journey. At first, I was lost, and couldn’t understand what all the documentation meant. It was after completing the tutorial projects on detecting URLs, injecting scripts and CSS files, and communicating between scripts and services workers, I became familiar with how to read the documentation and what some of the terms meant. 


## The Extension
As I write right now, I forgot what difficulties I was facing during the project (probably JS shenanigans). But, once I understood that my problem was just ‘removing’ CSS elements from the YouTube web page, developing got easy. The tedious part was to identify which CSS elements needed to be ‘removed’ because it involved inspecting the webpage. Once the CSS elements were identified, they were recorded on a CSS file that should be injected, with the attribution of ‘display: none’.

To finish the project, I also changed YouTube's background color to be a true black, so that it would blend with my web browser. Here is the final product:

| ![Before Homepage](https://imgur.com/AXOoD5E "Before Homepage") |
|:--:|
| *Before Homepage* |
|:--:|

| ![After Homepage](https://imgur.com/3EwbrN3 "After Homepage") |
|:--:|
| *After Homepage* |
|:--:|

| ![Before Search](https://imgur.com/uqud1Sv "Before Search") |
|:--:|
| *Before Search* |
|:--:|

| ![After Search](https://imgur.com/Cn2SrXx "After Search") |
|:--:|
| *After Search* |
|:--:|

| ![Before Video](https://imgur.com/wibjnB5 "Before Video") |
|:--:|
| *Before Video* |
|:--:|

| ![After Video](https://imgur.com/g6k7EAV "After Video") |
|:--:|
| *After Video* |
|:--:|

I’m in love with what I have done. There are no more distractions, and focusing on a video looks clean.

The source code can be seen [here](https://github.com/J35HN/simple-distraction-free-YouTube).