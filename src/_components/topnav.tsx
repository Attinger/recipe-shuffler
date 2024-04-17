import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function TopNav () {
    return (
        <div className="flex justify-between items-center bg-blue-500 py-2 px-4 text-white">
            <h1 className="text-lg font-bold">Recipe Shuffler</h1>
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