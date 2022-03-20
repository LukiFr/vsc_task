import "bootstrap/dist/css/bootstrap.min.css";
import PostsView from "./components/PostsView/PostsView";
import PostView from "./components/PostView/PostView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddButton from "./components/AddButton/AddButton";
import NewPostAndCommentModal from "./components/NewPostAndCommentModal/NewPostAndCommentModal";
import { useState } from "react";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <AddButton onClick={() => setModalOpen(true)} />
      <BrowserRouter>
        <NewPostAndCommentModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
        <Routes>
          <Route path="/" element={<PostsView />} />
          <Route path="/post/:id" element={<PostView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
