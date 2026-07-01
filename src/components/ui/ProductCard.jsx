import './ProductCard.css';

export default function ProductCard({ product, style }) {
  return (
    <article className="product-card" style={style} id={`product-${product.id}`}>
      <div className="product-card__image-wrapper">
        <img
          className="product-card__image"
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          loading="lazy"
        />
        {product.badge && (
          <span className="product-card__badge">{product.badge}</span>
        )}
      </div>
      <div className="product-card__info">
        <span className="product-card__brand">{product.brand}</span>
        <h3 className="product-card__name">{product.name}</h3>
      </div>
    </article>
  );
}
