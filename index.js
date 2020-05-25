'use strict';

const Transform = require('stream').Transform

module.exports = class toWords extends Transform {
	constructor() {
		super()
		this.list=[]
	}
	_transform(chunk, encoding, done) {
		chunk = chunk.toString(); // utf8
		encoding = 'utf8';
		chunk = chunk.toString()
		this.list=chunk.split(/[\t\n\v\f\r \u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000]/).filter((i)=>i!==''&&i.length)
		while (this.list.length>0) {
			const w=this.list.shift()
			const p=Buffer.from(w,'utf8').toString()

			this.push(p)
			
		}
		
		done()
	}

}
