import { Camera } from 'lucide-react';

function Header() {
  return (
    <header className="bg-linear-to-r from-blue-600 to-indigo-700 text-white shadow-md py-4 px-6 mb-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Camera className="w-8 h-8" />
          <h1 className="text-2xl font-bold tracking-wide">Photo Gallery</h1>
        </div>
        <p className="text-sm bg-blue-500/30 px-3 py-1 rounded-full">React + Vite Project</p>
      </div>
    </header>
  );
}


export default Header;