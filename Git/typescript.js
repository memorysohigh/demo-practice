var getValue = function () {
    return 0;
};
var List;
(function (List) {
    List[List["A"] = getValue()] = "A";
    List[List["B"] = 8888888888] = "B";
    List[List["C"] = 8888888889] = "C";
})(List || (List = {}));
console.log(List.A); // 0
console.log(List.B); // 2
console.log(List.C); // 3
