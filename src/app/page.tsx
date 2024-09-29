import { UserSignIn } from "@/components/auth/user-sign-in";

const HomePage = () => {
  return (
    <main className="container mx-auto">
      <h1 className="pt-10 text-center text-3xl text-red-600"> Hello LMS</h1>

      <UserSignIn />
    </main>
  );
};

export default HomePage;