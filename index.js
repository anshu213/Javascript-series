//Q1: Add two Numbers.................................................
function AddTwoNumbers(A, B) {
    return A + B;
}
// Example usage:
console.log(AddTwoNumbers(2, 5)); // Output: 7



//Q2: Find if the conditions are obeyed or not?...........................................
function Is_Valid(A, B) {
    return (A < 10 && A > B);
}
// Example usage:
console.log(Is_Valid(5, 3)); // Output: true
console.log(Is_Valid(10, 3)); // Output: false



//Q3: Check the conditions............................................................
function Check(A, B) {
    return (A % 10 === 0 || B % 10 === 0);
}
// Example usage:
console.log(Check(12, 20)); // Output: true
console.log(Check(11, 13)); // Output: false
console.log(Check(30, 40)); // Output: true



//Q4: Find the first digit of a 4 digit number..........................................
function First_Digit(N) {
    return Math.floor(N / 1000);
}
// Example usage:
console.log(First_Digit(4567)); // Output: 4



//Q5: Find the last digit of a 4 digit number..........................................
function Last_Digit(N) {
    return N % 10;
}
// Example usage:
console.log(Last_Digit(4567)); // Output: 7



//Q6: Find the remainder...........................................................
function Find_the_remainder(A, B) {
    return B % A;
}
// Example usage:
console.log(Find_the_remainder(2, 9)); // Output: 1



//Q7: Multiply two Numbers
function Multiply_two_number(A, B) {
    return A * B;
}
// Example usage:
console.log(Multiply_two_number(2, 5)); // Output: 10



//Q8: Marks Calculator........................................................
function Sum(A, B, C) {
    return A + B + C;
}
function Average(A, B, C) {
    return (A + B + C) / 3;
}
// Example usage:
let total = Sum(50, 20, 100);
let avg = Average(50, 20, 100);

console.log(total, avg.toFixed(2)); // Output: 170 56.6667










