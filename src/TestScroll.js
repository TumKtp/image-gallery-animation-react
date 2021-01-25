import React from "react";
import { ScrollAnimation } from "react-animation";

export default function TestScroll() {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <h1>animateIn</h1>
    </ScrollAnimation>
  );
}
