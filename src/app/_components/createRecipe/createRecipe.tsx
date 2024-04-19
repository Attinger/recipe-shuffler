"use client"
import { useRef } from "react";
import { toast } from "sonner";
import { createRecipe } from "~/server/mutations";

export const CreateRecipe = () => {

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form 
      className="flex flex-col w-1/2 align-center m-auto" 
      ref={formRef} 
      action={
        async (formData: FormData) => {
          const result = await createRecipe(formData);

          if (result?.error) {
            alert('HEEEELLLO');
            toast.error(result.message);
          } else {
            toast.success('Rezept erfolgreich erstellt meine Damen und Herren');
            formRef.current?.reset();
          }
      }
    }>
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
    </form>
  );
};
