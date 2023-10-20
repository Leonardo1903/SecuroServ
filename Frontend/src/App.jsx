import { Suspense, lazy } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const Docs = lazy(() => import("./pages/Docs"));
const Detect = lazy(() => import("./pages/Detect"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className=" flex justify-center content-center bg-black">
            <InfinitySpin width="200" color="#fc5b3f" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detect" element={<Detect />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
