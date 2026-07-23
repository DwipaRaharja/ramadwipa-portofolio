import { ArrowLeftIcon } from "@phosphor-icons/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "Page Not Found — Ramadwipa";
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-32 text-center">
      <div>
        <p className="text-primary text-sm font-bold tracking-widest uppercase">
          404 error
        </p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Page not found</h1>
        <p className="text-text-muted mt-4">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="bg-primary focus-visible:outline-primary mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <ArrowLeftIcon className="size-5" weight="bold" />
          Back to home
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
