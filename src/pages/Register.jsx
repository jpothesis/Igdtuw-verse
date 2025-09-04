const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Create an Account</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border px-4 py-2 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="border px-4 py-2 rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="border px-4 py-2 rounded-lg"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 rounded-lg font-semibold hover:from-purple-500 hover:to-purple-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
