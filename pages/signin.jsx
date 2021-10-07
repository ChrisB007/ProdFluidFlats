import { useState } from "react";
import { GoogleLoginButton } from "react-social-login-buttons";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";

function Signin() {
  const [authorized, setAuthorized] = useState();
  const [loading] = useSession;
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-gray-300 to-gray-200 flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-6 text-2xl font-extrabold text-black">
              Gain access to your account
            </h2>
          </div>

          <div className="mt-8">
            <div>
              <div>
                <p className="text-sm font-medium text-black">
                  Enter your email for password-less login
                </p>

                <div className="mt-6">
                  <form action="api/auth" method="POST" className="space-y-6">
                    <div>
                      <label
                        htmlFor="email"
                        name="email"
                        className="hideus block text-sm font-medium text-black"
                      >
                        Email address
                      </label>
                      <div>
                        <input
                          className="hideus inputField appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          type="email"
                          placeholder="Your email"
                          value=""
                          onChange={(e) => setEmail(e?.target?.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        onClick={() => signIn()}
                        className="button  w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        disabled={loading}
                      >
                        <span>{loading ? "Loading" : "Gain Access"}</span>
                      </button>
                    </div>
                  </form>
                </div>

                <div className="mt-6 relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-900">
                      Or with a provider
                    </span>
                  </div>
                </div>
                <div className="m-4">
                  <GoogleLoginButton loading={authorized} onClick="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
  );
}

export default Signin;
