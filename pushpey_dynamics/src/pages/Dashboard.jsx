import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [contacts, setContacts] = useState([]);
  const [donations, setDonations] = useState([]);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        navigate('/adminlogin');
        return;
      }

      try {
        const contactRes = await axios.get('http://localhost:5000/api/contact', {
          headers: { Authorization: `Bearer ${ token }` },
        });

        const donationRes = await axios.get('http://localhost:5000/api/donation', {
          headers: { Authorization: `Bearer ${ token }` },
        });

        setContacts(contactRes.data);
        setDonations(donationRes.data);
      } catch (err) {
        console.error(err);
        localStorage.removeItem('token'); // Optional: clear the invalid token
        navigate('/adminlogin');
      }
    };

    fetchData();
  }, [token, navigate]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Contact Submissions</h2>
        <div className="bg-white shadow rounded p-4 overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Message</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((item, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">{item.email}</td>
                  <td className="border px-4 py-2">{item.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Donation Submissions</h2>
        <div className="bg-white shadow rounded p-4 overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((item, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">{item.email}</td>
                  <td className="border px-4 py-2">{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
