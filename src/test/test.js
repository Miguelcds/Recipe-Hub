let fav = [2, 4, 7, 5, 3, 1]

const id = 9;


/*const setFav = (arr) => {
    fav = arr
}*/


const toggleFav = (id) => {
 
    let prev = []

  if (!fav.length) return fav.push(id);

  if (!fav.includes(id)) {
    prev = fav
    prev.push(id)
    return prev;
  }

  fav.map((f) => f !== id && prev.push(f));

  return prev
};

console.log(toggleFav(id));
