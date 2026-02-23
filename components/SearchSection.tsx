export default function SearchSection() {
  return (
    <div className="flex justify-center -mt-10 mb-16">
      <div className="flex shadow-lg bg-white rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Type here what do you want"
          className="px-6 py-4 w-[400px] outline-none"
        />
        <button className="bg-black text-white px-6 font-semibold">
          SEARCH
        </button>
      </div>
    </div>
  );
}