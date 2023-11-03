/*
	Сделать с помощь set уникализацию массива объектов:

	[
		{id: 1, name: "Вася"},
		{id: 2, name: "Петя"},
		{id: 2, name: "Петя"}
	]
*/

const objArr = [
	{ id: 1, name: "Вася" },
	{ id: 2, name: "Петя" },
	{ id: 3, name: "Коля" },
	{ id: 4, name: "Коля" },
	{ id: 1, name: "Вася" },
	{ id: 2, name: "Петя" },
	{ id: 1, name: "Вася" },
	{ id: 3, name: "Коля" }
];

const resSet = new Set();

objArr.forEach(({id, name}) => {
		const arr = Array.from(resSet.keys());

		if (arr.find(el => id === el['id'])) {
			return;
		} else { 
			resSet.add({ id, name });
		}
	}
);

console.log(resSet);
