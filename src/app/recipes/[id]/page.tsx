import { Modal } from "~/app/@modal/modal";
import FullPageImageView from "~/components/full-image-page";

export default function RecipePage({
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