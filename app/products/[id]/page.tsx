import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProductCard from "../../components/ProductCard";
import Stars from "../../components/Stars";
import { getProduct, products, relatedProducts } from "../../data/products";

// Pre-build one static page per product at build time.
export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id);

  // If the id in the URL does not match a product, show the 404 page.
  if (!product) {
    notFound();
  }

  const related = relatedProducts(product);

  return (
    <main className="container">
      <nav className="crumbs">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href={`/#${product.category}`}>{product.category}</Link>
        <span>/</span>
        <span className="crumbs-here">{product.name}</span>
      </nav>

      <article className="detail">
        <div
          className="detail-art"
          style={{
            background: `linear-gradient(135deg, ${product.accent}, ${product.accent2})`,
          }}
        >
          {product.badge && <span className="card-badge">{product.badge}</span>}
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              width={720}
              height={540}
              priority
              className="detail-photo"
            />
          ) : (
            <span className="detail-emoji">{product.emoji}</span>
          )}
        </div>

        <div className="detail-body">
          <span className="card-category">{product.category}</span>
          <h1 className="detail-name">{product.name}</h1>
          <p className="detail-tagline">{product.tagline}</p>
          <Stars rating={product.rating} />
          <span className="detail-price">${product.price}</span>
          <p className="detail-desc">{product.description}</p>

          <div className="detail-specs">
            <h2>Key specs</h2>
            <ul>
              {product.specs.map((spec) => (
                <li key={spec}>{spec}</li>
              ))}
            </ul>
          </div>

          <div className="detail-actions">
            <button type="button" className="btn btn-primary">
              Add to cart
            </button>
            <Link href="/" className="btn btn-ghost">
              Back to catalog
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="related">
          <h2 className="related-title">More in {product.category}</h2>
          <div className="grid">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
