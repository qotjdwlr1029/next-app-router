export default function Modal({ children }) {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/60 mx-auto">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6">
        <div className="p-4 bg-white">{children}</div>
      </div>
    </div>
  );
}
