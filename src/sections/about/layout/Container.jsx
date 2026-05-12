export default function Container({ children }) {
  return (
    <div className="mx-auto max-w-[1200px] px-6 pt-1 pb-20 lg:px-8 lg:py-20">
      {children}
    </div>
  );
}