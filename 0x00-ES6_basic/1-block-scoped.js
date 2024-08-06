#!/usr/bin/node

export default function taskBlock(trueOrFalse) {
	const task = false;
	const task2 = true;

	let newTask = task;
	let newtask2 = task2;

  if (trueOrFalse) {
    newTask = true;
    newTask2 = false;
  }

  return [newTask, newTask2];
}
