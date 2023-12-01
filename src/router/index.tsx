import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import RootPage from "../pages/root";
import ProfilePage from "../pages/profilepage";
import MessagePage from "../pages/messagepage";
import HomePage from "../pages/homepage";
import DiscoverPage from "../pages/discoverpage";
  
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
  