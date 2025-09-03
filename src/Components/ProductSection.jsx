import Card from "./Card";
import "./ProductSection.css";
const products = [
  {
    id: 1,
    name: "The Prompt Magazine",
    price: 120000,
    image: "/Notebook.png",
    discount: 0,
  },
  {
    id: 2,
    name: "Chunky Glyph Tee",
    price: 120000,
    image: "/Guy-min.png",
    discount: 0,
  },
  {
    id: 3,
    name: "All Smiles Nalgene",
    price: 120000,
    image: "/Bottle-min.png",
    discount: 0,
  },
  {
    id: 4,
    name: "Wildflower Hoodie",
    price: 120000,
    image: "/Girl-min.png",
    discount: 10,
  },
  {
    id: 5,
    name: "Inkblot Tee",
    price: 120000,
    image: "/Colourful-min.png",
    discount: 0,
  },
  {
    id: 6,
    name: "Gestures Longsleeve",
    price: 120000,
    image: "/Guy-min.png",
    discount: 0,
  },
  {
    id: 7,
    name: "Chunky Glyph Cap",
    price: 120000,
    image: "/Cap-min.png",
    big: true,
    discount: 0,
  },
  {
    id: 8,
    name: "Local Styles Crewneck",
    price: 120000,
    image: "/Maroon-min.png",
    big: true,
    discount: 0,
  },
  {
    id: 9,
    name: "Chunky Glyph Cap",
    price: 120000,
    image: "/Cap-min.png",
    discount: 0,
  },
  {
    id: 10,
    name: "Doodle Hoodie",
    price: 120000,
    image: "/Hoodie-min.png",
    discount: 0,
  },
  {
    id: 11,
    name: "Chunky Glyph Tee",
    price: 120000,
    image: "/Blacktshirt-min.png",
    discount: 0,
  },
  {
    id: 12,
    name: "All Smiles Nalgene",
    price: 120000,
    image: "/Bottle-min.png",
    discount: 0,
  },
  {
    id: 13,
    name: "The Prompt Magazine",
    price: 120000,
    image: "/Notebook.png",
    discount: 0,
  },
  {
    id: 14,
    name: "Independent Corners Tee",
    price: 120000,
    image: "/Turquoise-min.png",
    discount: 0,
  },
  {
    id: 15,
    name: "Independent Corners Tee",
    price: 120000,
    image: "/Turquoise-min.png",
    discount: 0,
  },
  {
    id: 16,
    name: "The Prompt Magazine",
    price: 120000,
    image: "/Notebook.png",
    discount: 0,
  },
  {
    id: 17,
    name: "Chunky Glyph Tee",
    price: 120000,
    image: "/Blacktshirt-min.png",
    discount: 0,
  },
  {
    id: 18,
    name: "All Smiles Nalgene",
    price: 120000,
    image: "/Bottle-min.png",
    discount: 0,
  },
];

const ProductSection = () => {
  return (
    <div className="product-grid">
      {products.map((product) => {
        return (
          <div key={product.id} className={product.big ? "big-item" : ""}>
            <Card
              productImage={product.image}
              name={product.name}
              price={product.price}
              big={product.big}
              discount={product.discount}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductSection;
