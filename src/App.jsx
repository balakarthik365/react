import "./App.css";
import Card from "./components/Card.jsx";
import TouristPlaceJson from "./components/TouristPlaceJson.jsx";
import TouristPlace from "./components/TouristPlace.jsx";
// import UsersJson from "./components/usersJson.jsx";
// import Users from "./components/users.jsx";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import UserDetails from "./components/UserDetails.jsx";
import Details from "./pages/Details.jsx";
import Home from "./pages/Home.jsx";
import SearchMovies from "./components/SearchMovies.jsx";
import TodoCards from "./components/TodoCards.jsx";
import Todos from "./components/Todos.jsx";
import Forms from "./components/Forms.jsx";
import GPTHome from "./components/GPTHome";
import GPTImg from "./components/GPTImg";
import { Link } from "react-router-dom";
import logo from "./assets/GPT/logo.svg";
function App() {
  const items = [
    {
      id: 1,
      name: "Butter Chicken",
      image:
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnV0dGVyJTIwY2hpY2tlbnxlbnwwfDB8MHx8fDI%3D",
      description:
        "Rich creamy tomato gravy with tender chicken pieces, subtly spiced and rounded with butter for comforting flavour explosion every bite.",
      price: 320,
      type: "non-veg",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Paneer Tikka Masala",
      image:
        "https://media.istockphoto.com/id/1488738113/photo/paneer-tikka-masala.webp?a=1&b=1&s=612x612&w=0&k=20&c=CnEF2-pNMa1KZhQo-eKpMlUFB1QMnOI9ITC3YoiyfsY=",
      description:
        "Grilled cubes of cottage cheese simmered in tangy spicy tomato onion masala, perfect with naan or steamed basmati rice alike.",
      price: 280,
      type: "veg",
      rating: 3.5,
    },
    {
      id: 3,
      name: "Chicken Biryani",
      image:
        "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hpY2tlbiUyMEJpcnlhbml8ZW58MHwwfDB8fHwy",
      description:
        "Aromatic layers of long grain rice, saffron, tender meat, infused with spices, yoghurt and slow cook giving authentic smoky flavour.",
      price: 350,
      type: "non-veg",
      rating: 3.8,
    },
    {
      id: 4,
      name: "Masala Dosa",
      image:
        "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFzYWxhJTIwRG9zYXxlbnwwfDB8MHx8fDI%3D",
      description:
        "Crispy fermented rice and lentil crepe wrapped around spicy potato filling, served with coconut chutney and tangy sambar for breakfast delight.",
      price: 120,
      type: "veg",
      rating: 4.5,
    },
  ];

  return (
    <>
      <div className="container ">
        {/* <Navbar /> */}
        <div className="py-3 px-24 flex justify-between items-center border-b border-green-800 sticky top-0 bg-white">
          <Link to="/gpt">
            <img src={logo} alt="GPT logo" className="h-8 w-8 object-cover" />
          </Link>
          <div className="flex justify-center gap-4 items-center  font-semibold text-md text-blue-600 ">
            <Link
              className="  px-2 py-1 rounded-lg  hover:bg-blue-900 hover:text-white"
              to="/gpt"
            >
              Home
            </Link>
            <Link
              className=" px-2 py-1 rounded-lg  hover:bg-blue-900 hover:text-white"
              to="/gptImg"
            >
              Generate Image
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/gpt" element={<GPTHome />} />
          <Route path="/gptImg" element={<GPTImg />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:slug" element={<Details />} />
          <Route path="/searchMovies/" element={<SearchMovies />} />
          {/* <Route
            path="/food"
            element={
              <div className="p-3">
                <h2 className="font-bold text-2xl my-2 text-center">
                  Select your food
                </h2>
                <div className="flex gap-10 p-2 my-3">
                  {items.map((item) => (
                    <Card items={item} />
                  ))}
                </div>
              </div>
            }
          />
          <Route
            path="/places"
            element={<TouristPlace places={TouristPlaceJson} />}
          />
          <Route path="/" element={<Users users={UsersJson} />}></Route>
          <Route path="/users/:uId" element={<UserDetails />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
//JSX - JavaScript XML is the syntax used by React
//It allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods
//JSX converts HTML tags into react elements
//JSX is not a string or HTML. It is a syntax extension of JavaScript
//JSX comes with the full power of JavaScript
//JSX prevents injection attacks
//JSX is faster than regular JavaScript because it performs optimization while compiling code to create React elements
//<></> - React Fragment, it allows us to group a list of children without adding extra nodes to the DOM
//React components must return a single parent element
//We can use className instead of class in JSX because class is a reserved word in JavaScript
//We can use camelCase for event handlers in JSX instead of lowercase
//We can use curly braces {} to embed JavaScript expressions in JSX
//We can use ternary operators and logical && operator for conditional rendering in JSX
//We can use map() method to render lists in JSX
//We can create reusable components in React by creating functions that return JSX
