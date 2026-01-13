import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const teamMembers = [
  {
    id: 1,
    name: 'Radimilahy Tsiresy',
    role: 'Architecte Principal',
    description: 'Ingénieur en Bâtiment et Travaux Publics, expertise en modélisation numérique et dimensionnement des structures en béton armé et en béton précontraint, conformément aux règlements BAEL et BPEL',
    image: 'https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhcmNoaXRlY3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc3NzAxNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    email: 'radimilahynirina@gmail.com',
  },
  {
    id: 2,
    name: 'Rarimanana Vallecio Tahinjanahary Charlycio',
    role: 'Ingénieur en Construction',
    description: 'Ingénieur en Bâtiment et Travaux Publics, disposant de compétences en étude, modélisation et dimensionnement des ouvrages. ',
    image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzcxNzEyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    email: 'vallecio.ranaivoson@gmail.com',
  },
  {
    id: 3,
    name: 'Andrianantenaina Tahina Hasina Fidelys',
    role: 'Spécialiste CAO/DAO 3D',
    description: 'Maîtrise des logiciels AutoCAD, Revit, SketchUp et 3DS Max, métreur et ingénieur de structure',
    image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NzcxNzEyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    email: 'tahina817@gmail.com',
  },
  {
    id: 4,
    name: 'Rabenarivo Lahatra',
    role: 'Coordinateur de Projet',
    description: 'Développeur et coordinateur, assure la gestion des projets au sein de Titan Construct',
    image: 'public/images/lahatra.jpg',
    email: 'rabenarivolahatra@gmail.com',
  },
];

export function Team() {
  return (
    <section id="equipe" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900">Notre Équipe</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des professionnels passionnés et expérimentés à votre service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-1 text-gray-900">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                <div className="flex gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={18} className="text-gray-700" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} className="text-gray-700" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
