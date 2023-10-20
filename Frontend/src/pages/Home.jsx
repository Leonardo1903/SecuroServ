import { Suspense, lazy } from "react";

// Use React.lazy and import() to create dynamic imports for your components
const Hero = lazy(() => import("../components/Home/Hero"));
const Blog = lazy(() => import("../components/Home/Blog"));
const Features = lazy(() => import("../components/Home/Features"));
const News = lazy(() => import("../components/Home/News"));
const Footer = lazy(() => import("../components/Home/Footer"));

function Home() {
  return (
    <div>
      {/* Wrap the lazy-loaded components with Suspense for loading handling */}
      <Suspense fallback={"Loading..."}>
        <Hero />
        <Blog />
        <Features />
        <News />
        <Footer />
      </Suspense>
    </div>
  );
}

export default Home;
