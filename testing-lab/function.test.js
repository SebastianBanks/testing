const {returnTwo, greeting, add, multiply, divide, subtract} = require("./functions.js")


test('returns 2', () => {
    expect(returnTwo()).toBe(2)
})

test('greeting', () => {
    expect(greeting('James')).toBe("Hello, James")
    expect(greeting('Jill')).toBe('Hello, Jill')
})

test('add', () => {
    expect(add(1, 2)).toBe(3)
    expect(add(5, 9)).toBe(14)
})

describe('myFunctions', () => {
    
    test('multiply', () => {
        expect(multiply(6, 3)).toBe(18)
        expect(multiply(1, 1)).toBe(1)
    })
    
    test('divide', () => {
        expect(divide(2, 2)).toBe(1)
        expect(divide(100, 25)).toBe(4)
    })
    
    test('subtract', () => {
        expect(subtract(10, 6)).toBe(4)
        expect(subtract(4, 4)).toBe(0)
    })
})

