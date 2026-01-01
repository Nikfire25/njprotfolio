import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  // Auto redirect after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="text-xl mt-4">Page Not Found</p>
      <p className="text-muted-foreground mt-2">
        Redirecting to home in 3 seconds...
      </p>

      <button
        onClick={() => navigate("/", { replace: true })}
        className="mt-6 px-6 py-3 bg-primary text-white rounded-md hover:opacity-90 transition"
      >
        Go Home Now
      </button>
    </div>
  );
};

export default NotFound;
