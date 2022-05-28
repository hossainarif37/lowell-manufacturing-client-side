import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddAReview from './Pages/Dashboard/AddAReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Payment from './Pages/Dashboard/Payment';
import Blog from './Pages/Blogs/Blogs';

function App() {
  const queryClient = new QueryClient();

  return (
    <div className='max-w-7xl mx-auto px-10'>
      <QueryClientProvider client={queryClient}>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/purchase/:productId' element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }></Route>
          <Route path='/dashboard' element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>}>
            <Route index element={<MyOrders></MyOrders>} />
            <Route path='myOrders' element={<MyOrders></MyOrders>} />
            <Route path='payment/:id' element={<Payment></Payment>} />
            <Route path='addAReview' element={<AddAReview></AddAReview>} />
            <Route path='myProfile' element={<MyProfile></MyProfile>} />
          </Route>
          <Route path='/blogs' element={<Blog></Blog>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
        </Routes>
        <ToastContainer></ToastContainer>
      </QueryClientProvider>
    </div>
  );
}

export default App;
