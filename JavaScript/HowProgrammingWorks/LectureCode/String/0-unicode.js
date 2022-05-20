'use strict';

const s1 = 'start\
end';

const s2 = `start
end`;

console.dir({ s1, s2 });

/*

\b: backspace U+0008
\f: form feed U+000C
\n: line feed U+000A
\r: carriage return U+000D
\t: horizontal tab U+0009
\v: vartical tab U+000B
\': single quote U+0027
\": double quote U+0022
\\: backslash U+005C

*/

console.log('\xA9\xAE'); // hex code
console.log('\u00A9\u00AE'); // unicode