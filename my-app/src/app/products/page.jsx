import ProductList from './ProductList';

async function getProducts() {
  const res = await fetch('https://dummyjson.com/products', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch products');
  const data = await res.json();
  return data.products;
}

export default async function ProductsPage() {
  const products = await getProducts();  // ✅ جلب البيانات في Server Component
  
  return (
    <div >
      <ProductList initialProducts={products} />
    </div>
  );
}
