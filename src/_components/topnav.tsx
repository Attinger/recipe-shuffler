import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function TopNav () {
    return (
        <div className="flex justify-between bg-blue">
            <h1>Recipe Shuffler</h1>
            <div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
      </div>
    )
}