export default function Container({ children }) {
  return (
    <div className="mx-auto max-w-[1200px] px-6 lg:px-8 min-h-screen">
      {children}
    </div>
  )
}