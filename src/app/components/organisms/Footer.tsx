import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 text-gray-500 gap-24">
          {/* Coluna 1: Direitos Autorais */}
          <div className="text-center md:text-left">
            <h3 className="text-lg mb-2">About</h3>
            <p className="text-sm">
              As obras exibidas são do acervo do MET Museum. Todos os direitos autorais pertencem aos autores e ao MET Museum.
            </p>
          </div>

          {/* Coluna 2: Links de Navegação */}
          <div className="text-center md:text-left">
            <h3 className="text-lg mb-2">Important Links</h3>
            <ul className="space-y-1">
              <li><a href="/about" className="hover:underline">Sobre Nós</a></li>
              <li><a href="/contact" className="hover:underline">Contato</a></li>
              <li><a href="/privacy" className="hover:underline">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Coluna 3: Informações de Contato */}
          <div className="text-center md:text-left">
            <h3 className="text-lg mb-2">Contacts</h3>
            <p className="text-sm">Email: contato@example.com</p>
            <p className="text-sm">Telefone: (11) 1234-5678</p>
            <div className="mt-2">
              <a href="#" className="text-blue-400 hover:underline">Facebook</a> | 
              <a href="#" className="text-blue-400 hover:underline">Twitter</a> | 
              <a href="#" className="text-blue-400 hover:underline">Instagram</a>
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
