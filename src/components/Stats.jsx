export default function Stats({ items }) {
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  return (
    <footer className="stats">
      <em>
        👜You have {numItems} items on your list, and you have packed{" "}
        {numPackedItems} (
        {numItems !== 0 ? (numPackedItems / numItems) * 100 : 0})%
      </em>
    </footer>
  );
}
