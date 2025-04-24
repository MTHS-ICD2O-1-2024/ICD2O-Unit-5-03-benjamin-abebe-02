// Copyright (c) 2020 Mr. Coxall All rights reserved
// 
// Created by: Benjamin Abebe
// Created on: Feb 2025
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  const optionPositive = document.getElementById("option-positive").checked

  // process
  const positiveNumber = Math.floor(Math.random() * 6) + 1
  const negativeNumber = -1 * (Math.floor(Math.random() * 6) + 1)

  if (optionPositive) {
    // Display the number
    document.getElementById("answer").innerHTML = "<p>Generated number: " + positiveNumber + "</p>"
  } else {
    document.getElementById("answer").innerHTML = "<p>Generated number: " + negativeNumber + "</p>"
  }
}
