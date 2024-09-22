import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AdminDashboard from './components/AdminDashboard';
import AddBooks from './components/AddBooks';
import UsersignIn from './components/UsersignIn';
import UsersignUp from './components/UsersignUp';
import AdminsignUp from './components/Adminsignup';
import Adminsignin from './components/Adminsignin';
import BorrowedBooks from './components/BorrowedBooks';
import PurchasedBooks from './components/PurchasedBooks';
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
        <Route path="/admin/add-books" element={<AddBooks />} />
        <Route path="/admin/remove-book" element={<RemoveBook />} />
        <Route path="/usersignin" element={<UsersignIn />} />
        <Route path="/usersignup" element={<UsersignUp />} />
        <Route path="/adminsignin" element={<Adminsignin />} />
        <Route path="/adminsignup" element={<AdminsignUp/>} />
        <Route path="/admin/borrowed-books" element={<BorrowedBooks />} />
        <Route path="/admin/purchased-books" element={<PurchasedBooks />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/user/books-to-borrow" element={<BooksToBorrow />} />
        <Route path="/user/borrowed-books" element={<BorrowedBooks />} />
        <Route path="/user/purchased-books" element={<PurchasedBooks />} />
        <Route path="/user/books-on-sale" element={<BooksOnSale />} />
      </Routes>
    </Router>
  );
}

export default App
