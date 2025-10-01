import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Users({ users }) {
  const [user, setUser] = useState(users);
  const [activeUserId, setActiveUserId] = useState(null);
  useEffect(() => {
    if (activeUserId !== null) {
      const timer = setTimeout(() => {
        setActiveUserId(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [activeUserId]);

  return (
    <>
      <div className="relative">
        {user.map((user) => {
          function followRequestHandler() {
            setUser((prev) =>
              prev.map((u) =>
                u.id === user.id ? { ...u, requestSent: true } : u
              )
            );
            setActiveUserId(user.id); // Set the active user ID
          }
          function unFollowRequestHandler() {
            setUser((prev) =>
              prev.map((u) =>
                u.id === user.id ? { ...u, requestSent: false } : u
              )
            );
            setActiveUserId(user.id); // Hide the message when unfollowed
          }
          return (
            <div
              key={user.id}
              className="w-[450px] p-3 mx-auto border border-neutral-400 my-3 hover:cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                  <img
                    src={user.img}
                    alt={user.name}
                    className="w-20 h-20 rounded-full object-fill border border-neutral-400"
                  />

                  <Link to={`/users/${user.id}`} state={user}>
                    <div className=" font-bold hover:text-blue-700">
                      <h1 className="text-xl ">{user.name}</h1>
                      <p className="text-sm text-neutral-600 hover:text-blue-700">
                        @{user.username}
                      </p>
                      <p className="text-sm mt-2">{user.profession}</p>
                    </div>
                  </Link>
                </div>
                {user.requestSent ? (
                  <button
                    onClick={unFollowRequestHandler}
                    className="bg-orange-600 text-white font-semibold text-sm px-3 py-2 rounded-lg shadow-md shadow-orange-900 hover:cursor-pointer"
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={followRequestHandler}
                    className="bg-blue-600 text-white font-semibold text-sm px-3 py-2 rounded-lg shadow-md shadow-blue-900 hover:cursor-pointer"
                  >
                    Follow
                  </button>
                )}
              </div>
              {/* Show the message only for the active user */}
              {activeUserId === user.id && user.requestSent && (
                <div className="fixed bottom-5 right-5 px-6 py-3 border border-green-700 bg-green-500 text-white inline-block rounded-lg font-bold shadow-md shadow-green-700">
                  Follow request Sent to {user.username}!
                </div>
              )}
              {activeUserId === user.id && !user.requestSent && (
                <div className="fixed bottom-5 right-5 px-6 py-3 border border-orange-700 bg-orange-500 text-white inline-block rounded-lg font-bold shadow-md shadow-orange-700">
                  Unfollowed {user.username}!
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Users;
