import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const USSpecific = () => {
  const navigate = useNavigate();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.state-law');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      elements.forEach((el) => observerRef.current?.unobserve(el));
    };
  }, []);

  const stateLaws = [
    {
      state: "California",
      law: "California Consumer Privacy Act (CCPA)",
      effective: "2020",
      description: "Grants California residents rights regarding their personal information and imposes obligations on businesses."
    },
    {
      state: "Virginia",
      law: "Consumer Data Protection Act (CDPA)",
      effective: "2023",
      description: "Provides consumers with rights to access, correct, delete, and obtain a copy of their personal data."
    },
    {
      state: "Colorado",
      law: "Colorado Privacy Act (CPA)",
      effective: "2023",
      description: "Gives consumers the right to access, correct, delete, and opt out of the sale of their personal data."
    },
    {
      state: "Connecticut",
      law: "Connecticut Data Privacy Act (CTDPA)",
      effective: "2023",
      description: "Establishes a framework for controlling and processing personal data."
    },
    {
      state: "Utah",
      law: "Utah Consumer Privacy Act (UCPA)",
      effective: "2023",
      description: "Provides consumers with rights to access, delete, and opt out of the sale of their personal data."
    },
    {
      state: "Iowa",
      law: "Iowa Consumer Data Protection Act",
      effective: "2025",
      description: "Gives consumers control over their personal data and requires businesses to be transparent about data practices."
    },
    {
      state: "Indiana",
      law: "Indiana Consumer Data Protection Act",
      effective: "2026",
      description: "Establishes consumer rights and business obligations regarding personal data."
    },
    {
      state: "Tennessee",
      law: "Tennessee Information Protection Act",
      effective: "2025",
      description: "Provides consumers with rights to access, correct, delete, and opt out of the sale of their personal data."
    },
    {
      state: "Montana",
      law: "Montana Consumer Data Privacy Act",
      effective: "2024",
      description: "Grants consumers rights over their personal data and requires businesses to implement reasonable security measures."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <style>
        {`
          .state-law {
            opacity: 0;
            transform: translateY(8px);
            transition: all 1000ms ease-out;
          }
          .state-law.reveal {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>

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
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              US-Specific Laws
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A comprehensive overview of state-level data privacy regulations across the United States
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {stateLaws.map((law, index) => (
              <div
                key={law.state}
                className="state-law"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{law.state}</h2>
                      <h3 className="text-lg text-blue-600 font-semibold">{law.law}</h3>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Effective {law.effective}
                    </span>
                  </div>
                  <p className="text-gray-600">{law.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default USSpecific; 