// Brug det samme products array.
const products = [
  { id: 1, name: "Keyboard", price: 799 },
  { id: 2, name: "Mouse", price: 399 },
  { id: 3, name: "Monitor", price: 1999 },
  { id: 4, name: "Headphones", price: 599 },
];

export default function ProductDetails({ productId }) {
  // Brug find() til at finde produktet
  const product = products.find((product) => product.id === productId);

  // Vis produktets navn og pris i JSX
  return (
    <article>
      <h1>Produktdetaljer</h1>
      <h2>{product.name}</h2>
      <p>Pris: {product.price} kr.</p>
    </article>
  );
}
