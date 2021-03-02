let i = 0
try {
    i = 10;
    throw new Error('error 1');

} catch (ex) {
    i = i + 100;
    console.error('Error:' + ex.message);
} finally {
    i = i + 1000;
    console.log('block finale');
}
console.log('i= ' + i);
