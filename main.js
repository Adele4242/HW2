
//first
let a = '34'
console.log(+a)
console.log(Number(a))
console.log(Math.round(a))

//second
let b = 29.92
console.log(Math.floor(b)) // округление v menshuyu storonu
console.log(Math.ceil(b)) //округление v bolshuyu storonu
console.log(Math.round(b))  //округление до ближайшего целого, становится числом
console.log(Math.trunc(b)) //убирает все числа после точки
console.log(b.toFixed()) //округление до ближайшего целого, становится строкой

//third
console.log(Math.ceil(Math.random() * 10))
console.log(Math.ceil(Math.random() * 60) + 30)
console.log(Math.ceil(Math.random() * 300) + 200)

//fourth
let c = 'aBRAcADBRA'
console.log(c.toUpperCase())
console.log(c.toLowerCase())


//fifth
let d = 'Hello world'
console.log(d[d.length - 1])
console.log(d[d.length - 2])
console.log(d.substring(0, 1))
console.log(d.substring(1, 2))
console.log(d.substr(0, 1))
console.log(d.substr(1, 1))

//sixth
let e = 'Hello world'
console.log(e.length)

//seventh
let f = 'abracaDabra'
console.log(f.indexOf('D'))  //выдает значение индекса подстроки
console.log(f.indexOf('b', 2))  //выдает значение индекса подстроки, начиная с определенной позиции
console.log(f.lastIndexOf('a'))  //выдает значение индекса подстроки, начиная поиск с конца

//eigth
let g = 'Propagination'
console.log(g.slice(0, 6)) //возвращает часть строки от начала(0) до конца(6)
console.log(g.slice(-3))  //возвращает часть строки от начала(-3) до конца строки
console.log(g.substring(6)) //возвращает часть строки от начала(6) до конца строки, не имеет минусового значения
console.log(g.substring(3, 0)) //возвращает часть строки от начала(3) до конца(0), аргументы меняются местами
console.log(g.substr(3, 10)) //возвращает часть строки от начала(3) длиной 10 символов


