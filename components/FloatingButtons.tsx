export default function FloatingButtons() {
  return (
    <div className="fixed bottom-10 right-6 flex flex-col gap-4 z-50">
      <button className="bg-green-500 text-white p-4 rounded-full shadow-lg">
        WA
      </button>

      <button className="bg-black text-white p-4 rounded-full shadow-lg">
        📞
      </button>
    </div>
  );
}