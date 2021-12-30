/** Common Matchers */
test('test toBe', () => {
    expect(2 + 2).toBe(4)
    expect(2 + 3).not.toBe(6)
})

test('test toEqual', () => {
    const obj = {
        name: "Chen xin",
        age: 26,
    }
    obj.identity = 1
    expect(obj).toEqual({
        name: "Chen xin",
        age: 26,
        identity: 1
    })
})

/** Truthiness */
test('test toBeNull toBeUndefined toBeDefined toBeTruthy toBeFalsy', () => {
    const n = null;
    expect(n).toBeNull()    //  null
    expect(n).not.toBeUndefined()   //  undefined
    expect(n).toBeDefined() //  已定义
    expect(n).toBeFalsy()   //  假的
})
test('zero', () => {
    const n = 0;
    expect(n).not.toBeNull()
    expect(n).toBeDefined()
    expect(n).not.toBeUndefined()
    expect(n).toBeFalsy()
    expect(n).not.toBeTruthy()  //  真的
})

/** Numbers */
test('numbers', () => {
    const n = 2 + 2
    expect(n).toBeGreaterThan(3) //  大于
    expect(n).toBeGreaterThanOrEqual(3.5) //  大于或等于
    expect(n).toBeLessThan(5) //  小于
    expect(n).toBeLessThanOrEqual(4) //  小于或等于
    expect(n).toBe(4)
    expect(n).toEqual(4) //  等于

    const m = 0.1 + 0.2
    // expect(m).toEqual(0.3)   //  error
    expect(m).toBeCloseTo(0.3)  //  接近
})

/** Strings */
test('no I in team', () => {
    expect('team').not.toMatch('I')
})
test('stop in Christoph', () => {
    expect('Christoph').toMatch('stop')
})

/** Arrays and iterables */
test('the shopping list has milk on it', () => {
    const shoppingList = [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'milk',
        'milk',
    ];
    expect(shoppingList).toContain('milk')  //  包含
    expect(new Set(shoppingList)).toContain('milk');
})


/** Exceptions */
function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
}
  
test('compiling android goes as expected', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);
  
    // You can also use the exact error message or a regexp
    expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
  });