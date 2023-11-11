import BookList from "./Features/BookList";
import MainLayout from "./Components/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookDetails from "./Features/BookDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout>
          <BookList />
        </MainLayout>
      ),
    },
    {
      path: "book-details/:bookId",
      element: <BookDetails />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
