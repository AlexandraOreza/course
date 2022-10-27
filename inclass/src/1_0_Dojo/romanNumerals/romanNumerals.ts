export const romanNumbers = (num: number) => {
  let numbersL = {"M":1000, "CM": 900, "D":500, "CD":400, "C":100, "XC":90, "L":50, "XL":40, "X":10, "IX":9, "V":5, "IV":4,"I":1}
  let romN = ""
  for (let key in numbersL){
    while(num >= numbersL[key]){
      romN += key
      num -= numbersL[key]
    }
  }
  return romN
}
