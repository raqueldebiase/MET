import React from 'react';

interface AboutProps {
  title: string;
  id: string;
}

export const About: React.FC<AboutProps> = ({ title, id }) => {
  return (
    <section className="about bg-primary py-24" id={id}>
      <div className="container mx-auto px-8 flex flex-col md:flex-row py-8">
        <h2 className="text-3xl font-semibold text-white w-full md:w-1/3 mb-4 md:mb-0">{title}</h2>
        <p className="text-lg text-gray-500 w-full md:w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui quam blandit metus, sed lobortis diam orci nec neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui quam blandit metus, sed lobortis diam orci nec neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor interdum ullamcorper. Phasellus mattis, nulla et ultricies accumsan, dui quam blandit metus, sed lobortis diam orci nec neque.
        </p>
      </div>
    </section>
  );
};
