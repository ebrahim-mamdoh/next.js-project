import { useRouter } from "next/router";
import Image from "next/image";

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const product = await res.json();

  return {
    props: { product },
  };
}

export default function ProductDetails({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container mt-5">
      <button className="btn btn-secondary mb-3" onClick={() => router.back()}>
        🔙 العودة
      </button>
      
      <div className="row">
        {/* صورة المنتج */}
        <div className="col-md-6">
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={500}
            height={400}
            className="img-fluid rounded shadow"
          />
        </div>

        {/* تفاصيل المنتج */}
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <p className="text-muted">{product.description}</p>
          <h4 className="text-success">💲 {product.price}</h4>
          <p>⭐ {product.rating} | 🏷️ {product.category}</p>
          <button className="btn btn-primary">🛒 أضف إلى السلة</button>
        </div>
      </div>
    </div>
  );
}
