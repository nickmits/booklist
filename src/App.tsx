import BookList from "./Features/BookList";
import MainLayout from "./Components/MainLayout";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import BookDetails from "./Features/BookDetails";
import Appbar from "./Components/Appbar";

function NavbarWrapper() {
  return (
    <div>
      <Appbar />
      <Outlet />
    </div>
  );
}
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavbarWrapper />,
      children: [
        {
          path: "/",
          element: (
            <MainLayout>
              <BookList />
            </MainLayout>
          ),
        },
        { path: "book-details/:bookId", element: <BookDetails /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
