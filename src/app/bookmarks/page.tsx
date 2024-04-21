import Link from "next/link";
import { getAllRecipes } from "~/server/queries";
import { FaClock } from 'react-icons/fa';

export const dynamic = "force-dynamic";

export default async function Dasboard() {
    const recipes = await getAllRecipes();

    return (
      <div className="bg-white p-4">
          <h2 className="text-2xl font-bold mb-4">Meine erstellten Rezepte</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recipes.map((recipe) => (
                  <div key={recipe.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                      <Link href={`/recipes/${recipe.id}`}>
                          <div className="block p-4">
                              <div className="flex justify-between items-center">
                                  <h3 className="text-lg font-semibold text-gray-700 truncate">{recipe.title}</h3>
                                  <div className="flex items-center justify-center">
                                    <FaClock className="text-gray-500" size="16" />
                                    <span className="text-sm text-gray-500 ml-4">Lorem mins</span>
                                  </div>
                              </div>
                              <img src="../../recipe-shuffler.webp" alt={recipe.title} width={75} height={75} className="my-2"/>
                              <div className="flex justify-between items-center">
                                  <div className="flex items-center">
                                      <p className="text-sm text-gray-600 ml-2">By Lorem Name</p>
                                  </div>
                                  <div className="flex items-center">
                                      <p className="text-yellow-400">{/* Stars here */}</p>
                                  </div>
                              </div>
                          </div>
                      </Link>
                  </div>
              ))}
          </div>
      </div>
  )
}