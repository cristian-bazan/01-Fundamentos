const { count } = require('console');
const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');

const wordCount = content.split(' ');

const reactWordCount = content.split(/React/ig).length;

const reactCount2 = wordCount.filter((word) => word.toLowerCase().includes('react')).length;

const reactCount3 = content.match(/react/ig ?? []).length;

console.log('Palabras:', wordCount.length);
console.log('Palabras:', reactWordCount); // case insensitive
console.log('Palabras:', reactCount2); // case insensitive
console.log('Palabras:', reactCount3, 'Correcto!'); // case insensitive