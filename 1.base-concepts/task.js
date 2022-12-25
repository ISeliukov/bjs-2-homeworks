"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d;

    d = b**2 - 4 * a * c;
    if(d === 0) {
      arr[0] = -b / (2 * a);
    }
    else if(d > 0) {
      arr[0] = (-b + Math.sqrt(d) ) / (2 * a);
      arr[1] = (-b - Math.sqrt(d) ) / (2 * a);
    }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
let prc;
let cntrb;
let amnt;
let cntmon;
let i;
let paym;

  if(isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) return false;

  prc = parseInt(percent, 10) / (100 * 12);
  cntrb = parseInt(contribution, 10);
  amnt = parseInt(amount, 10);
  cntmon = parseInt(countMonths, 10);
  if(cntmon === 0) return false;
  paym = 0;
  for(i = 1; i <= cntmon; i++) {
    paym += (amnt - cntrb) * (prc + (prc / (((1 + prc) ** cntmon) - 1)));
  }
  paym = (Math.round((paym + Number.EPSILON) * 100)) / 100;

  return  paym;
}