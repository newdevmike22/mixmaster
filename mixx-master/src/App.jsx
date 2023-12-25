import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { About, HomeLayout, Landing, Error, Newsletter, Cocktail } from "./pages"; 

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>,
  },
  {
    path:'/about',
    element:(
      <div>
        <About/>
      </div>
    ),
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
