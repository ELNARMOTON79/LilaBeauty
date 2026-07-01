import { useState, useEffect } from 'react';
import { useInView } from '../../hooks/useInView';
import SectionTitle from '../ui/SectionTitle';
import ProductCard from '../ui/ProductCard';
import {
  CATEGORIES,
  CATEGORY_LABELS,
  getProductsByCategory,
} from '../../data/products';
import './Catalog.css';

const ALL_KEY = 'all';
const ITEMS_PER_PAGE = 6;

const TABS = [
  { key: ALL_KEY, label: 'Todos' },
  ...Object.entries(CATEGORY_LABELS).map(([key, label]) => ({ key, label })),
];

export default function Catalog() {
  const [activeTab, setActiveTab] = useState(ALL_KEY);
  const [currentPage, setCurrentPage] = useState(1);
  const [animationKey, setAnimationKey] = useState(0);
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const allProducts =
    activeTab === ALL_KEY
      ? Object.values(CATEGORIES).flatMap(getProductsByCategory)
      : getProductsByCategory(activeTab);

  const totalPages = Math.ceil(allProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleProducts = allProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Reset page and trigger animation when tab changes
  useEffect(() => {
    setCurrentPage(1);
    setAnimationKey((prev) => prev + 1);
  }, [activeTab]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setAnimationKey((prev) => prev + 1);

    // Scroll to top of catalog section smoothly
    const section = document.getElementById('catalog');
    if (section) {
      const navbarHeight = 80;
      const top = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <section className="catalog section" id="catalog" ref={ref}>
      <div className="container">
        <SectionTitle
          label="Catálogo"
          heading="Nuestros Productos"
          description="Explorá nuestra selección de productos originales de las mejores marcas."
        />

        <div className="catalog__tabs" role="tablist" aria-label="Product categories">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              className={`catalog__tab ${activeTab === tab.key ? 'catalog__tab--active' : ''}`}
              onClick={() => handleTabChange(tab.key)}
              role="tab"
              aria-selected={activeTab === tab.key}
              id={`tab-${tab.key}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          className="catalog__grid"
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          key={animationKey}
        >
          {visibleProducts.length > 0 ? (
            visibleProducts.map((product, index) => (
              <div
                className="catalog__grid-item"
                key={product.id}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <p className="catalog__empty">No products found in this category.</p>
          )}
        </div>

        {totalPages > 1 && (
          <nav className="catalog__pagination" aria-label="Catalog pagination">
            <button
              className="catalog__page-btn catalog__page-btn--arrow"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`catalog__page-btn ${currentPage === page ? 'catalog__page-btn--active' : ''}`}
                onClick={() => handlePageChange(page)}
                aria-label={`Page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            ))}

            <button
              className="catalog__page-btn catalog__page-btn--arrow"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
