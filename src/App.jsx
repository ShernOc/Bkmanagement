import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AdminDashboard from './components/AdminDashboard';
import AdminBookCount from './components/AdminBookCount';
import AdminBorrowedBooks from './components/AdminBorrowedBooks';
import UsersignIn from './components/UsersignIn';
import UserAddBooks from './components/UserAddBooks';
import UsersignUp from './components/UsersignUp';
import AdminsignUp from './components/Adminsignup';
import Adminsignin from './components/Adminsignin';
import AdminPurchasedBooks from './components/AdminPurchasedBooks'
import BorrowedBooks from './components/BorrowedBooks';
import UserPurchasedBooks from './components/UserPurchasedBooks';
import BooksToBorrow from './components/BooksToBorrow';
import UserDashboard from './components/UserDashboard';
import BooksOnSale from './components/BooksOnSale';
import RemoveBook from './components/RemoveBook';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/book-count" element={<AdminBookCount />} />
        <Route path="/admin/borrowed-books" element={<AdminBorrowedBooks />} />
        <Route path="/admin/remove-book" element={<RemoveBook />} />
        <Route path="/usersignin" element={<UsersignIn />} />
        <Route path="/usersignup" element={<UsersignUp />} />
        <Route path="user/add-books" element={<UserAddBooks />} />
        <Route path="/adminsignin" element={<Adminsignin />} />
        <Route path="/adminsignup" element={<AdminsignUp/>} />
        <Route path="/admin/borrowed-books" element={<BorrowedBooks />} />
        <Route path="/admin/purchased-books" element={<AdminPurchasedBooks />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/user/books-to-borrow" element={<BooksToBorrow />} />
        <Route path="/user/borrowed-books" element={<BorrowedBooks />} />
        <Route path="/user/purchased-books" element={<UserPurchasedBooks />} />
        <Route path="/user/books-on-sale" element={<BooksOnSale />} />
      </Routes>
    </Router>
  );
}

export default App
