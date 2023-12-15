import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContext } from "./context/contextApi";
import Header from "./components/Header";
import Feed from "./pages/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./pages/VideoDetails";

export default function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="h-full flex flex-col"></div>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route
            path="/searchResults/:searchQuery"
            element={<SearchResult />}
          />
          <Route path="/video/:id" element={<VideoDetails />} />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
}
