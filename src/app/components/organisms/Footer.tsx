import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 text-gray-500 gap-48">
          <div className="text-center md:text-left">
            <h3 className="text-lg mb-2">About</h3>
            <p className="text-sm w-3/3 text-justify">
            The works displayed are from the collection of the MET Museum New York, and all are publicly accessible. All copyrights belong to the authors and the MET Museum. As part of the Met`&rsquo;`s Open Access policy, you can freely copy, modify, and distribute these images, even for commercial purposes. Public domain data for this object can also be accessed using the Met`&rsquo;`s Open Access API.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3">
            <div className="text-center md:text-left">
              <h3 className="text-lg mb-2">Links</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="/about" className="hover:underline">About us</a></li>
                <li><a href="/contact" className="hover:underline">Contacts</a></li>
                <li><a href="/privacy" className="hover:underline">Private Politics</a></li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-lg mb-2">Contacts</h3>
              <p className="text-sm">Email: contato@example.com</p>
              <a href="https://raqueldebiase.eu/" target='_blank' className='hover:underline hover:text-white text-sm'>raqueldebiase.eu</a>

              <div className="mt-2">
                <a href="#" className="text-blue-400 hover:underline">LinkedIn</a> | 
                <a href="#" className="text-blue-400 hover:underline"> GitHub</a> | 
              </div>

            </div>

            <div className="text-center md:text-left">
              <h3 className="text-lg mb-2">MET informations</h3>
              <p className="text-sm">Email: contato@example.com</p>
              <a href="https://raqueldebiase.eu/" target='_blank' className='hover:underline hover:text-white text-sm'>raqueldebiase.eu</a>

              <div className="mt-2">
                <a href="#" className="text-blue-400 hover:underline">LinkedIn</a> | 
                <a href="#" className="text-blue-400 hover:underline"> GitHub</a> | 
              </div>

            </div>
          </div>      
        </div>

        <div className="text-center text-gray-500 mt-24 mb-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Raquel De Biase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
