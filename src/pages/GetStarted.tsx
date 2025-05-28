import { Button } from "@/components/ui/button";
import { ArrowLeft, Lock, Cat } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto">
          <Button
            variant="ghost"
            className="text-blue-600 hover:bg-white/10 mb-6 font-semibold"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <div className="text-center">
            <div className="flex justify-center items-center gap-8 mb-8">
              <Lock className="h-24 w-24 text-blue-100" />
              <Cat className="h-24 w-24 text-blue-100" />
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Welcome to the World of Data Privacy
            </h1>
            <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
              It's tough, but here's to getting started!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted; 