function Card({ items }) {
  return (
    <>
      <div className="border border-neutral-400 rounded-xl shadow-md shadow-neutral-900 ">
        <div className="relative">
          <img
            src={items.image}
            className="rounded-t-xl w-100 h-60 object-fill"
            alt=""
          />
          {items.rating >= 4 ? (
            <div className="absolute bottom-3 left-3 px-2 py-[2px] font-bold text-sm bg-green-200 text-green-800 border border-green-500 rounded-full inline shadow-sm shadow-green-500">
              Best seller!
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="p-3">
          <div className="flex items-center justify-between my-2">
            <h2 className="font-bold text-2xl">{items.name}</h2>
            <span className="p-1 border border-green-950 rounded-md">
              <span
                className={
                  items.type == "veg"
                    ? "px-3 bg-green-950 rounded-md"
                    : "px-3 bg-red-950 rounded-md"
                }
              ></span>
            </span>
          </div>
          <p className="text-md font-semibold text-black">
            {items.description}
          </p>
        </div>
        <div className="flex items-center justify-between bg-neutral-200 p-2 rounded-b-xl">
          <h3 className="font-semibold text-lg">₹ {items.price}</h3>
          <button
            className="py-2 font-semibold px-5 bg-black text-white rounded-lg hover:cursor-pointer"
            onClick={() => alert(`${items.name} added to cart!`)}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}
export default Card;
//props - properties, they are read-only components which must be kept pure i.e. immutable
//We can pass data from parent to child component using props
//We can use defaultProps to set default values for props
