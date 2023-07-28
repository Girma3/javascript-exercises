const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
const getTheTitles = function(arrray) {
let titles = [];
for (let i = 0;i < arrray.length;i++){
    let title = arrray[i].title
    titles.push(title)
}
return titles
};
console.log(getTheTitles(books))
// Do not edit below this line
module.exports = getTheTitles;
