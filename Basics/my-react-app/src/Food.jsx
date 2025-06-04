function Food() {
  const food1 = "Pizza";
  const food2 = "Burger";

  return (
    <ul>
      <li>Pasta</li>
      <li>{food1}</li>
      <li>{food2.toUpperCase()}</li>
      <li>Juice</li>
      <li>Sushi</li>
    </ul>
  );
}

export default Food;
