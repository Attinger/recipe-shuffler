import { Modal } from "../../modal";
import FullPageImageView from "~/components/full-image-page";

export default function RecipeModal({
    params: {id: recipeId},
}: {
    params: {id: string};
}) {
    const idAsNumber = Number(recipeId);
    if(Number.isNaN(idAsNumber)) return;

    return (
        <Modal>
            <FullPageImageView id={idAsNumber} />
        </Modal>
    )
}