import usersJson from "./usersJson";
import { useParams, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function UserDetails() {
  // let { uId } = useParams();
  // let user = usersJson.find((user) => user.id == uId);
  // const location = useLocation();
  const user = useLocation().state;
  // console.log(user);
  return (
    <>
      <div className="w-[680px] mx-auto mt-25 ">
        <div className="flex items-center gap-6">
          <img
            src={user.img}
            alt={user.username}
            className="h-35 w-35 border border-neutral-500 rounded-full object-fill"
          />
          <div className="p-2">
            <div className="text-2xl font-bold">{user.name}</div>
            <div className="text-sm font-semibold text-neutral-500">
              {user.username}
            </div>
            <div className="mt-2">
              <div className="text-xl font-semibold">{user.profession}</div>
              <div className="text-sm">
                <span className="font-semibold">Bio</span>: {user.bio}
              </div>
            </div>
            <div className="flex items-center justify-between mt-3">
              <div className="flex gap-4 items-center">
                <div className="text-sm bg-neutral-300 font-medium text-black py-1 px-4 rounded-lg">
                  {user.followers} Followers
                </div>
                <div className="text-sm bg-neutral-300 text-black font-medium py-1 px-4 rounded-lg">
                  {user.following} Following
                </div>
              </div>
              <div className="">
                {user.requestSent ? (
                  <div className="text-sm bg-green-900 text-white font-medium py-1 px-4 rounded-lg">
                    Following
                  </div>
                ) : (
                  <div className="text-sm bg-blue-900 text-white font-medium py-1 px-4 rounded-lg">
                    Follow
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[860px] mx-auto flex items-center gap-4 flex-wrap mt-10">
        {user.posts.map((post) => (
          <>
            <img
              className="w-[260px] h-[260px]"
              src={post.img}
              alt=""
              srcset=""
            />
            <img
              className="w-[260px] h-[260px]"
              src={post.img}
              alt=""
              srcset=""
            />
          </>
        ))}
      </div>
    </>
  );
}
export default UserDetails;
