# String.prototype.matchGroup

There is a frequently use case of regular expressions is to match and return matches of reference group or groups. 
Unfortunately, native `match` or `exec` method is unhandy, you have to check null and unpack a strange structural data. 
So we come up with the `matchGroup` method on string prototype. 

## Usage

```javascript
import 'https://better-js.fenz.land/src/string-prototype/matchGroup.js';

const string= '<a href="https://better-js.fenz.land/">BetterJS</a>';
const regex= /href="([^"]*)"/;

const link= string.matchGroup( regex, 1, );

link === 'https://better-js.fenz.land/';
```

As we see, we pick out the link with a group easily. For more readability, we can use named group as well. 

```javascript
const string= '<a href="https://better-js.fenz.land/">BetterJS</a>';
const regex= /href="(?<link>[^"]*)"/;

const link= string.matchGroup( regex, 'link', );

link === 'https://better-js.fenz.land/';
```

A better practice is omit the secondary parameter and use spreading. 

```javascript
const string= '<a href="https://better-js.fenz.land/">BetterJS</a>';
const regex= /href="(?<link>[^"]*)"/;

const { link, }= string.matchGroup( regex, );

link === 'https://better-js.fenz.land/';
```

In this way, you can match more groups at one time. 

```javascript
const string= '<a href="https://better-js.fenz.land/">BetterJS</a>';
const regex= /href="(?<link>[^"]*)"[^<>]*>(?<label>.*?)<\/a>/;

const { link, label, }= string.matchGroup( regex, );

link === 'https://better-js.fenz.land/';
label === 'BetterJS';
```

What's more, we also support return structured data directly. 

```javascript
const data= string.matchGroup( regex, [ { name:'label', href:'link', }, ], );

data sameas [
	{
		name: 'BetterJS',
		href: 'https://better-js.fenz.land/',
	},
];
```
