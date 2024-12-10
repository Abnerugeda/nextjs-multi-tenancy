export async function loginAction(formData: FormData) {
  "use server";

  const { username, password } = Object.fromEntries(formData);

  const response = await fetch("http://localhost:8000/auth/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (response.ok) {
    const { token } = await response.json();
    console.log(token);
  }
}

export function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen ">
      <form className="space-y-4" action={loginAction}>
        <h1 className="text-2xl font-bold">Login</h1>
        <div>
          <label className="block" htmlFor="">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="border-2 border-red-700 p-2 w-full"
          />
        </div>

        <div>
          <label className="block">Password</label>
          <input
            type="password"
            name="password"
            className="border p-2 w-full border-2 border-red-700"
          />
        </div>
        <button className="bg-blue-500 text-white p-2 w-full mt-1">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
