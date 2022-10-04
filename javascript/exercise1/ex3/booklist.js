// The Recipe Card
const service = {
  title: 'Mole',
  servings: 2,
  ingredients: ['cumin', 'cinnamon', 'cocoa'],
};

console.log(service.title);
console.log(service.servings);
service.ingredients.forEach((element) => {
  console.log(element);
});

// The Reading List
const list = document.createElement('ul');
document.body.appendChild(list);

const listBooks = [
  {
    title: 'The Design of EveryDay Thing',
    img: 'http://ecx.images-amazon.com/images/I/41j2ODGkJDL._AA115_.jpg',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human',
    img: 'http://ecx.images-amazon.com/images/I/41Z56GwEv9L._AA115_.jpg',
    author: 'Brian Christian',
    alreadyRead: true,
  },
];

listBooks.forEach((element) => {
  const listChild = document.createElement('li');
  const book = document.createElement('span');
  const img = document.createElement('img');
  const description = document.createTextNode(`${element.title} by ${element.author}`);

  img.setAttribute('src', element.img);

  book.appendChild(description);
  listChild.appendChild(img);
  listChild.appendChild(book);
  list.appendChild(listChild);

  if (element.alreadyRead) {
    console.log(`You already read "${element.title}" by ${element.author}`);
    book.style.color = 'gray';
  } else {
    console.log(`You still need to read "${element.title}" by ${element.author}`);
    book.style.color = 'blue';
  }
});
