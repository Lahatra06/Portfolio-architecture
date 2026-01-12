import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    title: 'Villa Moderne Luxueuse',
    category: 'Résidentiel',
    description: 'Villa contemporaine de 350m² avec piscine et jardin paysager',
    image: 'https://images.unsplash.com/photo-1679364297777-1db77b6199be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2NzY4Nzc4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    year: '2025',
  },
  {
    id: 2,
    title: 'Immeuble de Bureaux',
    category: 'Commercial',
    description: 'Centre d\'affaires moderne de 5 étages avec espaces partagés',
    image: 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njc3Mjk3MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    year: '2024',
  },
  {
    id: 3,
    title: 'Résidence Familiale',
    category: 'Résidentiel',
    description: 'Maison familiale écologique avec toiture végétalisée',
    image: 'https://images.unsplash.com/photo-1611272267060-82338bad4112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGhvdXNlJTIwbW9kZXJufGVufDF8fHx8MTc2Nzc3MDE0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    year: '2024',
  },
  {
    id: 4,
    title: 'Plans & Modélisation 3D',
    category: 'Plans DAO',
    description: 'Conception de plans techniques et rendus 3D photoréalistes',
    image: 'https://images.unsplash.com/photo-1721244653757-b76cc4679dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYmx1ZXByaW50JTIwZGVzaWdufGVufDF8fHx8MTc2NzcxMzEyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    year: '2025',
  },
  {
    id: 5,
    title: 'Chantier en Construction',
    category: 'Construction',
    description: 'Suivi et supervision de chantier résidentiel complexe',
    image: 'https://images.unsplash.com/photo-1723107638733-16ef49e5d4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY3NjQ5OTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    year: '2024',
  },
  {
    id: 6,
    title: 'Architecture Contemporaine',
    category: 'Commercial',
    description: 'Complexe commercial avec design avant-gardiste',
    image: 'https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njc3NjEzNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    year: '2025',
  },
];

const categories = ['Tous', 'Résidentiel', 'Commercial', 'Plans DAO', 'Construction'];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredProjects =
    selectedCategory === 'Tous'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projets" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-gray-900">Nos Projets Réalisés</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Découvrez une sélection de nos réalisations architecturales
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {project.year}
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">{project.category}</div>
                <h3 className="text-xl mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
