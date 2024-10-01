const testFn = (a: number, b: string) => {
    return a + Number(b);
}

const response = testFn(2, '4');
console.log("response", response); // Output should be 6
