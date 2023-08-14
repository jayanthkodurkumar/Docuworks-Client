import Texteditor from "./Texteditor";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { v4 as uuidV4 } from "uuid";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<a href={`/documents/${uuidV4()}`}>create document</a>}
        />
        <Route path="/documents/:id" element={<Texteditor />} />
      </Routes>
    </Router>
  );
};

export default App;
