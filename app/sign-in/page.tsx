"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function SignIn() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

const router = useRouter();

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError("");

  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  const data = await res.json();
  if (!res.ok) {
    setError(data.error || "Login failed");
  } else {
    router.push("/dashboard"); // 👈 client-side redirect
  }
};
// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   setError("");
//   console.log("Redirecting to /dashboard...");
//   router.push("/dashboard");
// };


  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="w-96 rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">Login</h1>
        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
        
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="mb-3 w-full rounded border px-3 py-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="mb-4 w-full rounded border px-3 py-2"
        />
        <button type="submit" className="w-full rounded bg-black py-2 text-white">
          Sign In
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link href="/sign-up" className="text-blue-600">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}


// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function SignIn() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");

//     try {
//       // 🔹 For now, skip backend call
//       console.log("Redirecting to /dashboard...");
//       router.push("/dashboard");
//     } catch (err) {
//       setError("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-50">
//       <form
//         onSubmit={handleSubmit}
//         className="w-96 rounded-lg bg-white p-8 shadow-lg"
//       >
//         <h1 className="mb-6 text-2xl font-bold text-gray-800">Login</h1>

//         {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

//         <input
//           type="email"
//           placeholder="Email"
//           value={form.email}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//           className="mb-3 w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-black"
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={(e) => setForm({ ...form, password: e.target.value })}
//           className="mb-4 w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-black"
//           required
//         />

//         <button
//           type="submit"
//           className="w-full rounded bg-black py-2 text-white hover:bg-gray-800 transition"
//         >
//           Sign In
//         </button>

//         <p className="mt-4 text-center text-sm text-gray-600">
//           Don’t have an account?{" "}
//           <Link href="/sign-up" className="text-blue-600 hover:underline">
//             Sign Up
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }
