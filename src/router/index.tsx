import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import RootPage from "../pages/root";
import ProfilePage from "../pages/profile";
import MessagePage from "../pages/message";
import HomePage from "../pages/home";
import DiscoverPage from "../pages/discover";
  
export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootPage />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/message" element={<MessagePage />} />
      </Route>
    )
  );
  