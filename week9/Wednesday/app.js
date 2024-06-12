class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }
  isEquilateralTriangle() {
    if (
      this.side1 === this.side2 &&
      this.side1 === this.side3 &&
      this.side2 === this.side3
    ) {
      console.log("Yes This is a EquilateralTriangle");
    } else {
      console.log("NO This is a EquilateralTriangle");
    }
  }
  isRightTriangle() {
    if (
      this.assign(this.side1, this.side2, this.side3) ||
      this.assign(this.side2, this.side1, this.side3) ||
      this.assign(this.side3, this.side2, this.side1)
    ) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
  isIsoseles() {
    return 0;
  }
  isScalene() {
    return 0;
  }
  assign(one, two, three) {
    return one * one === two * two + three * three;
  }
}

//const assign = (one, two, three) => one * one === two * two + three * three;

const EquilateralTriangle = new Triangle(10, 9, 10);
const RightTriangle = new Triangle(4, 4, 6);
RightTriangle.isRightTriangle();
//aTriangle.isEquilateralTriangle();
