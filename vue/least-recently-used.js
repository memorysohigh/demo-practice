const lru = require('lru-cache')

let cache = new lru({
    max: 500,
    maxAge: 2000
})
cache.set('a', 111111111111)
console.log(cache.get('a'));

setTimeout(() => {
    console.log(cache.get('a'));
}, 1500);