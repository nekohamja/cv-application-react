export default function Button({ label, className, onClick, icon }) {
  return (
    <button className={className} onClick={onClick}>
      {icon}
      <span className="button-label">{label}</span>
      <span className="button-flair"></span>
    </button>
  );
}
