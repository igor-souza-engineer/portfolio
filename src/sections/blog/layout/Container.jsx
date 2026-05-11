export default function Container({ children }) {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-6 pt-14 pb-24 md:py-28 lg:px-8">
      {children}
    </div>
  );
}