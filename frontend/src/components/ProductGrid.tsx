export default function ProductGrid({ children }) {
  return (
    <div className="grid grid-cols-6 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-6 p-4">
      {children}
    </div>
  );
}