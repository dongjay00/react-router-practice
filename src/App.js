import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
// import About from "./pages/About";
import Article from "./pages/Article";
// import Articles from "./pages/Articles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";
// import Profile from "./pages/Profile";

const About = React.lazy(() => import("./pages/About"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Articles = React.lazy(() => import("./pages/Articles"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/about"
          element={
            <React.Suspense fallback={<>...</>}>
              <About />
            </React.Suspense>
          }
        />
        <Route
          path="/profiles/:username"
          element={
            <React.Suspense fallback={<>...</>}>
              <Profile />
            </React.Suspense>
          }
        />
      </Route>
      <Route
        path="/articles"
        element={
          <React.Suspense fallback={<>...</>}>
            <Articles />
          </React.Suspense>
        }
      >
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
