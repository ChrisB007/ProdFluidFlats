import { signIn, signOut, useSession } from "next-auth/client";

export default function Header() {
  const [session, loading] = useSession();

  return (
    <header>
      <p className="signIn-paragraph ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
        {!session && (
          <>
            <a
              href={`/api/auth/signin`}
              className=""
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Sign In
            </a>
          </>
        )}
        {session && (
          <>
            <a
              href={`/api/auth/signout`}
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign out
            </a>
          </>
        )}
      </p>
    </header>
  );
}
