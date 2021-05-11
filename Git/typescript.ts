const getValue = () => {
  return 0
}

enum List {
  A = getValue(),
  B =8888888888,  // 此处必须要初始化值，不然编译不通过
  C
}
console.log(List.A) // 0
console.log(List.B) // 2
console.log(List.C) // 3