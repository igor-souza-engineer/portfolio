export default function Container({ children }) {
  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-24 lg:px-8 lg:min-h-screen lg:pb-0">
      {children}
    </div>
  );
}