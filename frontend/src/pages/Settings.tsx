import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { fetchProfile } from '../store/slices/profileSlice';
import Navbar from '../components/Navbar';

const Settings = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { profile } = useSelector((state: RootState) => state.profile);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Settings</h1>
          <p className="text-sm text-gray-600 mt-1">Configure your application preferences</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-purple-100">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Application Settings</h2>
          <p className="text-gray-600">Settings page coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;

