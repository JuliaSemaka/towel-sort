
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) {
        return [];
    }
    let res = [];
    matrix.forEach((element, index) => {
        if (index % 2) {
            element = element.reverse();
        }
        res.push(...element);
    });
  return res;
}
