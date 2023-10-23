# BMI Calculator application - JavaScript

A BMI (Body Mass Index) Calculator is a tool that assesses an individual's body weight relative to their height, providing a numerical value that indicates whether a person is underweight, normal weight, overweight, or obese. It's a simple and widely used method for gauging a person's overall body composition and potential health risks associated with their weight. Users typically input their height and weight, and the calculator computes the BMI value, which is then interpreted to provide insight into a person's general health status in terms of body weight.

## Description

A BMI (Body Mass Index) Calculator is a computational tool used to determine a person's body weight in relation to their height. It is an example of this in the provided JavaScript code. The result of this calculation is a number called the Body Mass Index, which provides information about possible health effects associated with a person's weight and serves as an indicator of that person's overall body composition.

The BMI Calculator typically functions as follows:

**User Input**

Users are asked to enter a number of personal information. These specifics, which are encoded, include sex, height, weight, and birthdate. These inputs are necessary for the precise computation of BMI.

**Interactive Interface**

Due to the calculator's integration into a web application, users can conveniently enter their data through an interactive interface. The user interactions, such as choosing their sex, entering their height and weight, and entering their birthdate, are recorded in the code using event listeners.

**Data Processing**

To process and work with the data supplied by the user, the code includes a number of utility functions. These procedures make sure the input values are accurate and suitable for use in calculating BMI.

**BMI Calculation**

The BMI Calculator's main purpose is to determine the user's BMI based on their height and weight. The weight (in kilograms) is divided by the square of the height (in meters) in the code for this calculation. In order to provide a clear and concise BMI value, the result is rounded.

**Interpretation and Display**

The code uses conditional statements to interpret the result and identify the user's body weight category after the BMI value has been calculated. As the interpretation of BMI can change depending on age, it makes a distinction between adolescents and adults. The user interface prominently displays the calculated BMI along with an appropriate label, such as "underweight," "normal weight," "overweight," or "obese."

**Error Handling**

Error-handling mechanisms in the code can recognize missing or incorrect user input. To effectively direct users through the input process when necessary data is missing, it prompts them to enter it or displays error messages.

**Interactive Feedback**

Users of the BMI Calculator receive instant feedback, enabling them to better understand their body weight status and any associated health risks. It helps users make decisions about their health and wellbeing that are well-informed.

In conclusion, a BMI Calculator, demonstrated by this JavaScript code, is a useful tool used in web applications that enables users to quickly and easily determine their body mass index. It uses information supplied by the user to calculate BMI values, provides interpretations, and gives crucial details about their body weight, ultimately assisting in making health-conscious decisions.

> **Important Note**
>
> Please be aware that the World Health Organization's (WHO) standards and guidelines are the source of all information used in the calculations made by this BMI Calculator. The WHO is a reputable global health organization whose standards are widely accepted in the health and nutrition industries. You can be sure that the BMI results presented here comply with these widely recognized criteria for evaluating body mass index and its effects on health. Feel free to speak with a medical expert for more advice if you have any questions or concerns.


## Features

- Built with vanilla JavaScript
- [Tailwind](https://tailwindcss.com/)
- [Feather Icons](https://feathericons.com/)
- [Parcel](https://parceljs.org/)

## Getting Started

### Prerequisites

The only prerequisites you need to have in place are [Node.js](https://nodejs.org/en) and [Visual Studio Code](https://code.visualstudio.com/) (VS Code).

### Installation

To ensure a smooth setup process, it is essential to follow step-by-step the installation instructions.

```sh
# Install packages
npm install

# Run in dev mode
npm run dev

# Run in prod mode
npm run serve
```
