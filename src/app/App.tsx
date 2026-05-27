import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import RefactoredRoute from "../routes/RefactoredRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RefactoredRoute />} />
        <Route path="/refactored" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
