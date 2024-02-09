import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeView from './views/HomeView';
import NotFound from './views/NotFound';
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomeView />}/>
        <Route path="*" element={<NotFound/>} />
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
