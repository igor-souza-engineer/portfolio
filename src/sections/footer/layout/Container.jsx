export default function Container({ children }) {
  return (
    <div className="mx-auto max-w-[860px] px-6 py-8 lg:px-0">
      {children}
    </div>
  );
}