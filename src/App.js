import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;