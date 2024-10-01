#!/usr/bin/node

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const message = process.stdin.read();
  if (message !== null) {
	  process.stdout.write(`Your name is: ${message}`);
  }
});

process.stdion.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
