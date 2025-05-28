import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, FileText, Scale, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LawsOverview = () => {
  const [selectedLaw, setSelectedLaw] = useState("gdpr");
  const navigate = useNavigate();

  const privacyLaws = {
    gdpr: {
      name: "GDPR",
      fullName: "General Data Protection Regulation",
      region: "European Union",
      effective: "2018",
      scope: "Organizations processing EU residents' data",
      keyFeatures: ["Right to be forgotten", "Data portability", "Privacy by design", "Breach notifications"],
      fines: "Up to €20M or 4% of annual revenue",
      description: "The GDPR is a comprehensive data protection law that applies to all organizations processing personal data of EU residents. It emphasizes individual rights and organizational responsibilities in data handling."
    },
    ccpa: {
      name: "CCPA",
      fullName: "California Consumer Privacy Act",
      region: "California, USA",
      effective: "2020",
      scope: "Businesses serving California residents",
      keyFeatures: ["Right to know", "Right to delete", "Right to opt-out", "Non-discrimination"],
      fines: "Up to $7,500 per violation",
      description: "The CCPA grants California residents new rights regarding their personal information and imposes various obligations on businesses that collect their data."
    },
    pipeda: {
      name: "PIPEDA",
      fullName: "Personal Information Protection and Electronic Documents Act",
      region: "Canada",
      effective: "2001",
      scope: "Private sector organizations in Canada",
      keyFeatures: ["Consent requirements", "Limited collection", "Accuracy", "Safeguards"],
      fines: "Various penalties and recommendations",
      description: "PIPEDA governs how private sector organizations collect, use, and disclose personal information in the course of commercial business in Canada."
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Header */}
      <section className="relative py-12 px-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto">
          <Button
            variant="ghost"
            className="text-blue-600 hover:bg-white/10 mb-6 font-semibold"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-4xl font-bold mb-4">Global Privacy Laws Overview</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            A comprehensive guide to major data protection regulations affecting businesses worldwide.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs value={selectedLaw} onValueChange={setSelectedLaw} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="gdpr" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                GDPR
              </TabsTrigger>
              <TabsTrigger value="ccpa" className="flex items-center gap-2">
                <Scale className="h-4 w-4" />
                CCPA
              </TabsTrigger>
              <TabsTrigger value="pipeda" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                PIPEDA
              </TabsTrigger>
            </TabsList>

            {Object.entries(privacyLaws).map(([key, law]) => (
              <TabsContent key={key} value={key}>
                <Card className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-2xl font-bold">{law.fullName}</h3>
                        <Badge variant="secondary">{law.effective}</Badge>
                      </div>
                      <p className="text-gray-600 mb-6">{law.description}</p>
                      <div className="space-y-4">
                        <div>
                          <strong className="text-gray-700">Region:</strong>
                          <p className="text-gray-600">{law.region}</p>
                        </div>
                        <div>
                          <strong className="text-gray-700">Scope:</strong>
                          <p className="text-gray-600">{law.scope}</p>
                        </div>
                        <div>
                          <strong className="text-gray-700">Maximum Penalties:</strong>
                          <p className="text-red-600 font-semibold">{law.fines}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                      <div className="space-y-2">
                        {law.keyFeatures.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                              <span className="text-blue-600 text-sm font-semibold">{index + 1}</span>
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default LawsOverview; 