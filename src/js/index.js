async function fetchRandomPic() {
  const res = await fetch(
    "https://api.unsplash.com/photos/random?client_id=KU2xKkCfogrNGxcflWBJ8cqyeAtU2LGMylH6pHmpHis&orientation=landscape&query=nature"
  );

  const data = await res.json();
  console.log(data);
}
fetchRandomPic