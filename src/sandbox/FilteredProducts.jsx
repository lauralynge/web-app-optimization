
// Brug det samme products array.
const products = [
  { id: 1, name: "Keyboard", price: 799 },
  { id: 2, name: "Mouse", price: 399 },
  { id: 3, name: "Monitor", price: 1999 },
  { id: 4, name: "Headphones", price: 599 }
];

export default function FilteredProducts() {
  // Filtrér først produkterne
  const cheapProducts = products.filter((product) => product.price < 800);

  // Brug derefter map() til at vise cheapProducts
  return (
    <section>
        <h1>Filtreret produkter</h1>
      {cheapProducts.map((product) => (
        <article key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price} kr.</p>
        </article>
      ))}
    </section>
  );
}