import { SearchRecipe } from "./_components/searchRecipe/SearchRecipe";
import { UserInfo } from "./_components/user/UserInfo";

export default function HomePage() {

  return (
    <main>
      <div>
        <UserInfo />
        <SearchRecipe />
      </div>
    </main>
  );
}
