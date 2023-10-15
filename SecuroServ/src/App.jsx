import { Suspense, lazy } from "react";
import "./App.css";

// Use React.lazy and import() to create dynamic imports for your components
const Landing = lazy(() => import("./components/Landing"));
const Blog = lazy(() => import("./components/Blog"));
const Features = lazy(() => import("./components/Features"));
const Steps = lazy(() => import("./components/Steps"));
const News = lazy(() => import("./components/News"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      {/* Wrap the lazy-loaded components with Suspense for loading handling */}
      <Suspense fallback={<div>Loading...</div>}>
        <Landing />
        <Blog />
        <Features />
        <Steps />
        <News />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
