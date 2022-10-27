import { romanNumbers } from './romanNumerals'

describe('Testing roman numerals conversion', () => {
  it('should return empty string if 0', () => {
    expect(romanNumbers(0)).toBe('')
  })
   
  it('should return I if 1', () =>{
    expect(romanNumbers(1)).toBe('I')
  })

  it('should return II if 2', () =>{
    expect(romanNumbers(2)).toBe('II')
  })

  it('should return IV if 4', () =>{
    expect(romanNumbers(4)).toBe('IV')
  })

  it('should return V if 5', () =>{
    expect(romanNumbers(5)).toBe('V')
  })

  it('should return VI if 6', () =>{
    expect(romanNumbers(6)).toBe('VI')
  })

  it('should return XLIV if 44', () =>{
    expect(romanNumbers(44)).toBe('XLIV')
  })

  it('should return XLVIII if 48', () =>{
    expect(romanNumbers(48)).toBe('XLVIII')
  })

  it('should return XCIX if 99', () =>{
    expect(romanNumbers(99)).toBe('XCIX')
  })

  it('should return CXLIX if 149', () =>{
    expect(romanNumbers(149)).toBe('CXLIX')
  })

  it('should return CDLXXXVI if 486', () =>{
    expect(romanNumbers(486)).toBe('CDLXXXVI')
  })

  it('should return CMXCIX if 999', () =>{
    expect(romanNumbers(999)).toBe('CMXCIX')
  })

  it('should return MMMCMXCIX  if 3999', () =>{
    expect(romanNumbers(3999)).toBe('MMMCMXCIX')
  })
})
