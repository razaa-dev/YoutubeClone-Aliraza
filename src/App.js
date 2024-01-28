import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResults from "./components/SearchResults";
import VideoDetails from "./components/VideoDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "./context/contextApi";
function App() {
  return (
    <AppContext>
      <BrowserRouter>
      <div className="flex flex-col h-full">
        <Header/>
        <Routes>
          <Route exact path="/"  element={<Feed />} />
          <Route path="/searchResults/:searchQuery"  element={<SearchResults/>} />
          <Route path="/video/:id"  element={<VideoDetails/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
