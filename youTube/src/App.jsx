import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";

const App = () => {
  const [sidebar, setSidebar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div>
      <Navbar
        setSidebar={setSidebar}
        setSearchTerm={setSearchTerm}
        setIsSearching={setIsSearching}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              sidebar={sidebar}
              searchTerm={searchTerm}
              isSearching={isSearching}
              setIsSearching={setIsSearching}
            />
          }
        />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
