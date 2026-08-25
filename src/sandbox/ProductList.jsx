// Brug dette array
const products = [
  { id: 1, name: "Keyboard", price: 799 },
  { id: 2, name: "Mouse", price: 399 },
  { id: 3, name: "Monitor", price: 1999 },
];

//Tilføj derefter et nyt produkt til products og kontrollér, at det automatisk bliver vist.
products.push({ id: 4, name: "Laptop", price: 9999 });

// Brug map() til at vise alle produkter
export default function ProductList() {
  return (
    <div>
        <h1>Produktliste</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: {product.price} DKK</p>
        </div>
      ))}
    </div>
  );
}

// 