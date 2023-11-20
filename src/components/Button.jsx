export default function Button({ label, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      <span className="button-label">{label}</span>
      <span className="button-flair"></span>
    </button>
  );
}
