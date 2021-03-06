
const utils = require('../utils/index');

let rword = /[^, ]+/g;
let builtInStr =
    'div,list,list-item,popup,refresh,richtext,stack,swiper,tab,tab-bar,tab-context,'+
    'a,text,image,progress,rating,'+
    'input,label,option,picker,select,slider,switch,textarea,'+
    'video,canvas,web,map'; 

let builtIn = {};
builtInStr.replace(rword, function(el) {
    builtIn[el] = el;
});


let map = Object.assign({}, builtIn);
'p,div,h1,h2,h3,h4,h5,h6,quoteblock'.replace(rword, function(el) {
    map[el] = 'div';
});
'span,b,s,code,quote,cite'.replace(rword, function(el) {
    map[el] = 'text';
});
map.button = 'input';
module.exports = utils.createNodeName(map, 'div');