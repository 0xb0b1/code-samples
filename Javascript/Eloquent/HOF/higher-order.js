const SCRIPTS = require("./scripts.js");

function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}

function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}

function characterScript(code) {
    for (let script of SCRIPTS) {
        if(script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if ( known == -1 ) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

function textScripts(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name != "none");

    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";

    return scripts.map(({name, count}) => {
        return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
}

 console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'))
// console.log(Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year))));
// console.log(Math.round(average(SCRIPTS.filter(s => !s.living).map(s => s.year))));
