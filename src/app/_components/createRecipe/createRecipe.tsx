"use client"
import React, { useRef, useState } from 'react';
import { toast } from "sonner";
import { createRecipe } from "~/server/mutations";

interface Ingredient {
  ingredient: string;
  unit: 'ml' | 'l' | 'gramm' | 'kilogram';
}

export const CreateRecipe = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [ingredients, setIngredients] = useState<Ingredient[]>([{ ingredient: '', unit: 'ml' }]);
  const [isPrivate, setIsPrivate] = useState<boolean>(false);

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { ingredient: '', unit: 'ml' }]);
  };

  const handleIngredientChange = (index: number, value: string) => {
    const newIngredients = [...ingredients];
    const ingredient = newIngredients[index];
    if (ingredient) {
      ingredient.ingredient = value;
      setIngredients(newIngredients);
    }
  };
  
  const handleUnitChange = (index: number, value: 'ml' | 'l' | 'gramm' | 'kilogram') => {
    const newIngredients = [...ingredients];
    const ingredient = newIngredients[index];
    if (ingredient) {
      ingredient.unit = value;
      setIngredients(newIngredients);
    }
  };


  return (
    <form 
      ref={formRef} 
      className="flex flex-col w-1/2 align-center m-auto"
      action={
        async (formData: FormData) => {
          formData.append('isPrivate', isPrivate.toString());
          formData.append('ingredients', JSON.stringify(ingredients));
          const result = await createRecipe(formData);

          if (result?.error) {
            toast.error(result.message);
          } else {
            toast.success('Rezept erfolgreich erstellt meine Damen und Herren');
            formRef.current?.reset();
          }
        }
      }
    >
    <h1>Erstelle dein Rezept</h1>
    <div className="flex flex-col">
        <label className="mb-2">Name des Rezepts</label>
        <input 
          type="text"
          name="title"
          required
          className="bg-white p-1 text-black"
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-2">Kurze Beschreibung des Rezepts</label>
        <textarea 
          name="description"
          className="bg-white p-1 text-black"
          placeholder="Beschreibe hier in kurzer Form dein Rezept."
          ></textarea>
      </div>
      {ingredients.map((item, index) => (
        <div key={index} className="flex items-center mb-2">
          <input
            type="text"
            placeholder="Ingredient"
            name="ingredient"
            value={item.ingredient}
            onChange={(e) => handleIngredientChange(index, e.target.value)}
            className="p-1 text-black flex-1"
          />
          <select
            value={item.unit}
            name="unit"
            onChange={(e) => handleUnitChange(index, e.target.value as 'ml' | 'l' | 'gramm' | 'kilogram')}
            className="ml-2"
          >
            <option value="ml">ml</option>
            <option value="l">l</option>
            <option value="gramm">gramm</option>
            <option value="kilogram">kilogram</option>
          </select>
        </div>
      ))}
      <button type="button" onClick={handleAddIngredient} className="p-2 bg-blue-200 text-black">Add Ingredient</button>
      <div>
        <input
          type="checkbox"
          checked={isPrivate}
          onChange={(e) => setIsPrivate(e.target.checked)}
          className="mr-2"
        />
        <label>Make Recipe Private</label>
      </div>
      <button type="submit" className="mt-4 p-2 bg-blue-500 text-white">Rezept erstellen</button>
    </form>
  );
};
