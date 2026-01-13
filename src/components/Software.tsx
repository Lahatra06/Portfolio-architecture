import React from 'react';
import { Cpu, Layers, Box, Pencil, Ruler, Grid3x3 } from 'lucide-react';

const software = [
  {
    icon: Ruler,
    name: 'AutoCAD',
    description: 'Dessin technique et plans 2D/3D de précision',
    category: 'CAO/DAO',
  },
  {
    icon: Layers,
    name: 'Revit',
    description: 'Modélisation BIM pour projets complexes',
    category: 'BIM',
  },
  {
    icon: Box,
    name: 'ArchiCAD',
    description: 'Conception architecturale intégrée',
    category: 'BIM',
  },
  {
    icon: Pencil,
    name: 'SketchUp',
    description: 'Modélisation 3D intuitive et rapide',
    category: '3D',
  },
  {
    icon: Cpu,
    name: '3DS Max',
    description: 'Rendus photoréalistes et animations',
    category: 'Rendu',
  },
  {
    icon: Layers,
    name: 'Lumion',
    description: 'Visualisation architecturale en temps réel',
    category: 'Rendu',
  },
  {
    icon: Box,
    name: 'V-Ray',
    description: 'Moteur de rendu haute qualité',
    category: 'Rendu',
  },
];

export function Software() {
  return (
    <section id="logiciels" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 text-gray-900">Nos Outils & Logiciels</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies de pointe pour des résultats professionnels
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {software.map((tool, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all group"
            >
              <div className="absolute top-3 right-3 text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                {tool.category}
              </div>
              <div className="w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <tool.icon size={28} className="text-white" />
              </div>
              <h3 className="text-lg mb-2 text-gray-900">{tool.name}</h3>
              <p className="text-sm text-gray-600">{tool.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2 text-blue-600">7+</div>
              <p className="text-gray-700">Logiciels professionnels</p>
            </div>
            <div>
              {/* <div className="text-3xl mb-2 text-blue-600">15+</div>
              <p className="text-gray-700">Années d'expertise</p> */}
            </div>
            <div>
              <div className="text-3xl mb-2 text-blue-600">3+</div>
              <p className="text-gray-700">Ingénieur en Bâtiment et Travaux Publics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
