// Copyright (c) 2022 liya getachew All rights reserved
//
// Created by: liya getachew
// Created on: Oct 6 2022
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function CalculateClicked() {
  document.getElementById("area").innerHTML =
    "<p>The area is: " + 10 * 6 + "cm²." + "</p>"
  document.getElementById("perimeter").innerHTML =
    "<p>The perimeter is: " + 2 * (10 + 6) + "cm." + "</p>"
}
