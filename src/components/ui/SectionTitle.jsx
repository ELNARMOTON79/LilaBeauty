import './SectionTitle.css';

export default function SectionTitle({ label, heading, description }) {
  return (
    <div className="section-title">
      {label && <span className="section-title__label">{label}</span>}
      <h2 className="section-title__heading">{heading}</h2>
      {description && (
        <p className="section-title__description">{description}</p>
      )}
    </div>
  );
}
