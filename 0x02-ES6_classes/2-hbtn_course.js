export default class HolbertonCourse {
	constructor (name, length, students)
	{
		if(typeof name !== 'string') throw new TypeError('name must be a string');
		if(!Number.isInteger(length))throw new TypeError('length must be a number');
		if (!Array.isArray(students))throw new TypeError('students must be an array');

		this._name = name;
		this._length = length;
		this._students = students;
	}
	
	get name() {
		return this._name;
	}
	
	set name(newName) {
		if (typeof newName !== 'string')throw new TypeError('name must be a string');
		this._name = newName;
	}
	
	get length() {
		return this._length;
	}
	
	set length(newLength) {
		if(!Number.isInteger(newLength))throw new TypeError('length must be a number');
		this._length = newLength;
	}
	
	get students() {
		return this._students;
	}
	
	set students(newst) {
		if(!Array.isArray(newst)) throw new TypeError('students must be an arrsy');
		this._students;
	}
}
