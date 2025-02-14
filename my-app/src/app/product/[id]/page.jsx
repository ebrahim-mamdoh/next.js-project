import ProductDetails from './productDetails'; // ✅ صحيح

export default function ProductPage({ params }) {
  return <ProductDetails id={params.id} />;
}
