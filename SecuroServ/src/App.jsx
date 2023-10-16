import { Suspense, lazy } from "react";
import { InfinitySpin } from "react-loader-spinner";
import "./App.css";

// Use React.lazy and import() to create dynamic imports for your components
const Landing = lazy(() => import("./components/Landing"));
const Blog = lazy(() => import("./components/Blog"));
const Features = lazy(() => import("./components/Features"));
const News = lazy(() => import("./components/News"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      {/* Wrap the lazy-loaded components with Suspense for loading handling */}
      <Suspense
        fallback={
          <div className=" flex justify-center content-center bg-black">
            <InfinitySpin width="200" color="#fc5b3f" />
          </div>
        }
      >
        <Landing />
        <Blog />
        <Features />
        <News />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
