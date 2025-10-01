function TouristPlace({ places }) {
  return (
    <>
      <div className="text-center p-3">
        <h2 className="font-bold text-2xl my-2">Tourist Places</h2>
      </div>
      <div className="flex gap-8 my-3">
        {places.map((place) => (
          <div
            key={place.id}
            className={
              place.whenToVisit == "Winter"
                ? "relative border border-blue-400 rounded-lg shadow-sm shadow-blue-900 w-full"
                : "relative border border-orange-400 rounded-lg shadow-sm shadow-orange-900 w-full"
            }
          >
            <h2
              className={
                place.whenToVisit == "Winter"
                  ? "flex justify-center items-center rounded-t-lg text-center font-bold text-2xl p-2 text-white bg-blue-900"
                  : "flex justify-center items-center rounded-t-lg text-center font-bold text-2xl p-2 text-white bg-orange-900"
              }
            >
              <span>
                {place.placeName} - {place.ratings} &#9733;
              </span>

              {place.price < 15000 ? (
                <span className="text-sm">(Cheaper)</span>
              ) : (
                <span className="text-sm">(Expensive)</span>
              )}
            </h2>
            <img
              src={place.img}
              alt={place.placeName}
              className="h-60 w-full object-cover"
            />
            <ul className="list-disc p-5 ">
              <li className="font-semibold text-sm">{place.desc}</li>
            </ul>
            <p
              className={
                place.whenToVisit == "Winter"
                  ? "text-white text-center bg-blue-900 py-3 rounded-b-lg font-semibold text-md"
                  : "text-white text-center bg-orange-900 py-3 rounded-b-lg font-semibold text-md"
              }
            >
              For the package of Rs. {place.price}/-
            </p>
            <p
              className={
                place.whenToVisit == "Winter"
                  ? "absolute bottom-35 right-2 font-bold text-sm text-neutral-700 bg-blue-200 px-2 py-1 rounded-full border border-blue-500 shadow-sm shadow-blue-500"
                  : "absolute bottom-35 right-2 font-bold text-sm text-neutral-700 bg-orange-200 px-2 py-1 rounded-full border border-orange-500 shadow-sm shadow-orange-500"
              }
            >
              Best time to visit on {place.whenToVisit}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
export default TouristPlace;
