import { useEffect, useState } from 'react';
import AdminNavBar from './AdminNavBar';

const AdminBookCount = () => {
  const [userBookCounts, setUserBookCounts] = useState([]);

  useEffect(() => {
    const fetchUserBookCounts = async () => {
      try {
        const response = await fetch('http://localhost:8000/users/books-count/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUserBookCounts(data);
      } catch (error) {
        console.error('Failed to fetch user book counts:', error);
      }
    };

    fetchUserBookCounts();
  }, []);

  return (
    <div>
      <AdminNavBar />
      <div className="flex justify-center items-center h-screen bg-[url('/images/library2.jpg')] bg-cover bg-center">
        <div className="bg-white p-6 rounded shadow-md w-3/4">
          <h2 className="text-3xl font-bold mb-4">Books Added by Users</h2>
          <table className="min-w-full text-black border-separate border-spacing-2 border-slate-300 bg-slate-300">
            <thead>
              <tr>
                <th className="border p-2">Username</th>
                <th className="border p-2">Books Added</th>
              </tr>
            </thead>
            <tbody>
              {userBookCounts.length > 0 ? (
                userBookCounts.map((user) => (
                  <tr key={user.username}>
                    <td className="border p-2">{user.username}</td>
                    <td className="border p-2">{user.book_count}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="border p-2 text-center">No data available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminBookCount;
