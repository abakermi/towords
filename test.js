import test from 'ava';

const fs = require('fs');
const wordStream = require('./index');
	
test('should pipe into words', async t => {

	const input = fs.createReadStream('./fixture/in.txt');
    const ws = new wordStream();
    const output = fs.createWriteStream('test.txt');
	input.pipe(ws).pipe(output);
	const x=new Promise((resolve, reject) => {
		ws.on('end',()=>{
			resolve(true)
		})
		output.on('error',(err)=>reject(err))
	});
	await x
	const out = fs.readFileSync('test.txt', 'utf8');
	const data=fs.readFileSync('./fixture/in.txt', 'utf8')
	const in_ = data.split(/[\t\n\v\f\r \u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000]/).join('');
	console.log(in_);
	t.is(in_, out);
	fs.unlinkSync('test.txt');
});
