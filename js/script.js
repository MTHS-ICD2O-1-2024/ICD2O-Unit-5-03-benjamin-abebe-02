// Copyright (c) 2020 Mr. Coxall All rights reserved
// 
// Created by: Benjamin Abebe
// Created on: Feb 2025
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  const userAge = document.getElementById("user-age").value

  // proces
  if (userAge <= 3) {
    // Display the number
    document.getElementById("answer").innerHTML = "<p>Your to young so you can only waych G rated movies alone</p>"
  } else if (userAge <= 9){
    document.getElementById("answer").innerHTML = "<p>You can only watch G or PG rated movies alone</p>"
  } else if (userAge <= 13) {
    document.getElementById("answer").innerHTML = "<p>You can only watch PG-13 rated movies alone</p>"
  } else {
    document.getElementById("answer").innerHTML = "<p>You can only watch R rated movies alone</p>"
  }
}
