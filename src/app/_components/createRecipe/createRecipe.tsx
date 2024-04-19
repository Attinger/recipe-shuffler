"use client";
import { useFormState, useFormStatus } from "react-dom";
//import { useState } from "react";
import { generateRecipe } from "./recipeAction";

const initialState = {
  message: "",
}

export const CreateRecipe = () => {
  const [state, formAction] = useFormState(generateRecipe, initialState);
  const { pending } = useFormStatus();

  return (
    <form className="flex flex-col w-1/2 align-center m-auto" action={formAction}>
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
        />
      </div>
      <button type="submit" className="mt-4 p-2 bg-blue-500 text-white">Rezept erstellen</button>
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
};