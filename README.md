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

There is a limited amount of manpower in SCDF emergency medical services (EMS). Therefore, it is important that EMS should tend to the critical cases instead of the non-emergency ones. People have miused the EMS services for minor and less critical cases and this causes a wastage of SCDF's precious resources. As such, SCDF might possibly overlook people who are in dire need of help. 

### How can technology help?

Our solution enables the members of the public to identify the current symptoms shown by the victim swiftly using image classification in the event that the members of the public are unable to gauge the severity of the situation.
Our solution enables the members of the public to perform the suitable first aid measures according to the victim’s condition and mitigate the problem before the SCDF arrives to help the patient.

### The idea

Our solution aims to relieve the burden on SCDF of having to entertain non-emergency cases. We have utilised the IBM Cloud Annotations and Watson Machine Learning Services to train an image classification model to decipher the conditions posed by the victim.  We trained the model using multiple images of people having medical conditions such as physical injury, cardiac arrest, falls and heat stroke. The model is integrated with our front-end interface, the React webapp, so that the members of the public do not need to download a mobile application to access our solution.

## Demo video

[![Watch the video](https://youtu.be/mhXcSJAJN1Q)](https://youtu.be/mhXcSJAJN1Q)

## The architecture

<img src="https://github.com/leonyeo/projectzero-EMSAdvisor_SCDFXIBM/blob/master/src/components/readMe.PNG"/>

1. The user navigates to the site and uploads an image.
2. IBM Cloud Annotations model classifies and identifies image features.
3. The user can answer additional question for a more accurate diagnosis.
4. The site displays instructions for responding to the situation.

## Long description

[More detail is available here](DESCRIPTION.md)

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
