import React from 'react';
import { Building2, Hammer, Ruler, Cuboid } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Architecture',
    description: 'Conception architecturale complète, de l\'esquisse au projet final, adaptée à vos besoins et à votre budget.',
  },
  {
    icon: Hammer,
    title: 'Bâtiment & Construction',
    description: 'Supervision et gestion de projets de construction, garantissant qualité, délais et respect des normes.',
  },
  {
    icon: Ruler,
    title: 'Plans 2D',
    description: 'Élaboration de plans techniques détaillés avec logiciels DAO professionnels pour tous types de projets.',
  },
  {
    icon: Cuboid,
    title: 'Modélisation 3D',
    description: 'Visualisation réaliste en 3D de vos projets avec rendus photoréalistes et visites virtuelles immersives.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une gamme complète de services pour réaliser vos projets architecturaux
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <service.icon size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
