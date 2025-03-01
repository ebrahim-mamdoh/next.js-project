import ProductDetails from './ProductDetails'; // ✅ استدعاء صحيح

export default function ProductPage({ params }) {
  return <ProductDetails id={params.id} />; // ✅ الآن يتم تمرير `id` بشكل صحيح
}
