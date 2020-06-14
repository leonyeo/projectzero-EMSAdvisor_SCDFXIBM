# EMS Advisor - SCDF X IBM Lifesaver's Innovation Challenge: Call for Code 2020

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Website](https://img.shields.io/badge/View-Website-blue)]()

This repo contains our submission for the SCDF X IBM Lifesaver's Innovation Challenge: Call for Code 2020

## Contents

1. [Short description](#short-description)
1. [Demo video](#demo-video)
1. [The architecture](#the-architecture)
1. [Long description](#long-description)
1. [Project roadmap](#project-roadmap)
1. [Getting started](#getting-started)
1. [Live demo](#live-demo)
1. [Built with](#built-with)
1. [Authors](#authors)
1. [License](#license)
1. [Acknowledgments](#acknowledgments)

## Short description

### What's the problem?

Part of the World Health Organization's guidance on limiting further spread of COVID-19 is to practice social distancing. As a result, schools in most affected areas are taking precautionary measures by closing their facilities. With school-aged children at home for an indeterminate amount of time,  keeping them engaged, entertained, and on top of their education is important.

### How can technology help?

Schools and teachers can continue to engage with their students through virtual classrooms, and even create interactive spaces for classes. As parents face a new situation where they may need to homeschool their children, finding appropriate online resources is important as well.

### The idea

It's imperative that learning and creating can continue when educational institutions have to shift the way they teach in times of crises, such as the COVID-19 pandemic. Providing a set of open source tools, backed by IBM Cloud and Watson Services, will enable educators to more easily make content available for their students.

## Demo video

[![Watch the video](https://github.com/Code-and-Response/Liquid-Prep/blob/master/images/IBM-interview-video-image.png)](https://youtu.be/vOgCOoy_Bx0)

## The architecture

![Video transcription/translation app](https://developer.ibm.com/developer/tutorials/cfc-starter-kit-speech-to-text-app-example/images/cfc-covid19-remote-education-diagram-2.png)

1. The user navigates to the site and uploads an image.
2. IBM Cloud Annotations model classifies and identifies image features.
3. The user can answer additional question for a more accurate diagnosis.
4. The site displays instructions for responding to the situation.

## Long description

[More detail is available here](DESCRIPTION.md)

## Project roadmap

![Roadmap](roadmap.jpg)

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Install the latest version of Node at [https://nodejs.org/en/](https://nodejs.org/en/)

`git clone` the repo and `cd` into it by running the following command:

```bash
git clone https://github.com/leonyeo/projectzero-EMSAdvisor_SCDFXIBM.git
cd projectzero-EMSAdvisor_SCDFXIBM
```

### Installing

```bash
npm install
```

> **Note: You’ll need to have Node 8.10.0 or later on your local development machine.** You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to easily switch Node versions between different projects.

### Run the App

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
You can also view it on your mobile browser by accessing the IP address provided in the cmd line.

## Live demo

You can find a running system to test at []()

## Built with

* [IBM Cloud Annotations](https://cloud.annotations.ai/login) - Image classification tool
* [IBM Watson Machine Learning](https://www.ibm.com/sg-en/cloud/machine-learning) - Machine Learning instance powering IBM Cloud Annotations
* [React](https://reactjs.org/) - Javascript Web Framework

## Authors

* **Leon Yeo** -  [leonyeo](https://github.com/leonyeo)
* **Poon Sin Ta** -  [poonsinta96](https://github.com/poonsinta96)
* **Qiu Hui Qian** -  [qhq97](https://github.com/qhq97)
* **Serene Loo** -  [serene loo](https://github.com/sereneloo)
* **Yandy Yee** -  [yandyyee](https://github.com/yandyyee)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Based on [IBM Cloud Annotations Classification Demo](https://github.com/cloud-annotations/classification-react).