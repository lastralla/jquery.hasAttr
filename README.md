jquery.hasAttr
==============

JQuery plugin to filter a collection by an attribute

Usage
=====

For markup such as this.

`<input id="a" class="d" placeholder="AAA">`

`<input id="b" class="d" rel="whatever 1">`

`<input class="c d" placeholder="1CCC">`

`<input class="c d" rel="whatever 2">`

`<input class="c d" placeholder="2CCC">`

Use as follows.

`console.log( $('#a').hasAttr('placeholder') ); // 1 element`
`console.log( $('#b').hasAttr('placeholder') ); // empty collection`
`console.log( $('.c').hasAttr('placeholder') ); // 2 elements in collection`
`console.log( $('.d').hasAttr('placeholder') ); // 3 elements in collection`
`console.log( $('.d').hasAttr('rel') ); // 2 elements in collection`
`console.log( $('#missing').hasAttr('placeholder') ); // empty collection`
