import { getRecipe } from "~/server/queries";

export default async function FullPageImageView(props: {id:number}){
    const recipe = await getRecipe(props.id);
    
    return (
        <div>
            <p>{recipe?.title}</p>
            <p>{recipe?.description}</p>
        </div>
    )
}