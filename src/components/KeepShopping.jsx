const KeepShopping = ({ items }) => {
  if (!items.length) return null;

  return (
    <div className="keep">
      <h3>Keep Shopping</h3>
      <div className="keep-grid">
        {items.map(i => (
          <div key={i.id}>
            <img src={i.image} alt={i.title} />
            <p>{i.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeepShopping;
