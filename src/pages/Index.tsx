import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Shield, Globe, FileText, CheckCircle, Users, Scale, BookOpen, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [selectedLaw, setSelectedLaw] = useState("gdpr");
  const navigate = useNavigate();
  const [complianceSteps, setComplianceSteps] = useState([
    { step: "Data Audit", description: "Identify what personal data you collect and process", completed: false },
    { step: "Legal Basis", description: "Establish lawful basis for data processing", completed: false },
    { step: "Privacy Policy", description: "Create comprehensive privacy notices", completed: false },
    { step: "Data Subject Rights", description: "Implement processes for individual rights", completed: false },
    { step: "Security Measures", description: "Implement appropriate technical safeguards", completed: false },
    { step: "Training", description: "Train staff on privacy requirements", completed: false }
  ]);

  const toggleStep = (index: number) => {
    setComplianceSteps(steps => 
      steps.map((step, i) => 
        i === index ? { ...step, completed: !step.completed } : step
      )
    );
  };

  const completedCount = complianceSteps.filter(step => step.completed).length;
  const progressPercentage = (completedCount / complianceSteps.length) * 100;

  const privacyLaws = {
    gdpr: {
      name: "GDPR",
      fullName: "General Data Protection Regulation",
      region: "European Union",
      effective: "2018",
      scope: "Organizations processing EU residents' data",
      keyFeatures: ["Right to be forgotten", "Data portability", "Privacy by design", "Breach notifications"],
      fines: "Up to €20M or 4% of annual revenue"
    },
    ccpa: {
      name: "CCPA",
      fullName: "California Consumer Privacy Act",
      region: "California, USA",
      effective: "2020",
      scope: "Businesses serving California residents",
      keyFeatures: ["Right to know", "Right to delete", "Right to opt-out", "Non-discrimination"],
      fines: "Up to $7,500 per violation"
    },
    pipeda: {
      name: "PIPEDA",
      fullName: "Personal Information Protection and Electronic Documents Act",
      region: "Canada",
      effective: "2001",
      scope: "Private sector organizations in Canada",
      keyFeatures: ["Consent requirements", "Limited collection", "Accuracy", "Safeguards"],
      fines: "Various penalties and recommendations"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Shield className="h-16 w-16 text-blue-100" />
          </div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Navigating Data Privacy Laws with Confidence
          </h1>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Stay compliant with global data protection regulations. Get expert guidance, tools, and resources to protect your business and your customers' privacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold"
              onClick={() => navigate("/get-started")}
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold"
              onClick={() => navigate("/laws-overview")}
            >
              View Laws Overview
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold"
              onClick={() => navigate("/us-specific")}
            >
              US Specific
            </Button>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">180+</div>
              <div className="text-gray-600">Countries with privacy laws</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">€20M</div>
              <div className="text-gray-600">Maximum GDPR fine</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">80hrs</div>
              <div className="text-gray-600">Breach notification time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">95%</div>
              <div className="text-gray-600">Compliance success rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Laws Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Major Privacy Laws</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the key data protection regulations that affect your business operations globally.
            </p>
          </div>

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
                            <CheckCircle className="h-5 w-5 text-green-500" />
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

      {/* Compliance Checklist */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Compliance Checklist</h2>
            <p className="text-lg text-gray-600">
              Essential steps to ensure your organization meets data privacy requirements.
            </p>
          </div>

          <Card className="p-6">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Compliance Progress</span>
                <span className="text-sm text-gray-500">{completedCount}/{complianceSteps.length} completed</span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>

            <div className="space-y-4">
              {complianceSteps.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-lg border hover:bg-gray-50 transition-colors cursor-pointer"
                  onClick={() => toggleStep(index)}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      item.completed 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-gray-300 hover:border-blue-500'
                    }`}>
                      {item.completed && <CheckCircle className="h-4 w-4 text-green-500" />}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-semibold ${item.completed ? 'text-green-600' : 'text-gray-900'}`}>
                      {item.step}
                    </h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Resources & Tools</h2>
            <p className="text-lg text-gray-600">
              Templates, guides, and tools to help you implement privacy compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Privacy Policy Templates</CardTitle>
                <CardDescription>
                  Ready-to-use privacy policy templates for different industries and jurisdictions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold">Download Templates</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-teal-600 mb-2" />
                <CardTitle>Training Materials</CardTitle>
                <CardDescription>
                  Comprehensive training resources for your team on data privacy best practices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold">Access Training</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <AlertTriangle className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Breach Response Kit</CardTitle>
                <CardDescription>
                  Step-by-step guide and templates for responding to data breaches effectively.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold">Get Response Kit</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Ensure Compliance?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get personalized guidance from our privacy law experts to protect your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
              Schedule Consultation
            </Button>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6" />
                <span className="text-lg font-semibold">Privacy Navigator</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted partner in data privacy compliance and protection.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Privacy Laws</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>GDPR Compliance</li>
                <li>CCPA Guidelines</li>
                <li>PIPEDA Requirements</li>
                <li>Global Regulations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Templates</li>
                <li>Training</li>
                <li>Guides</li>
                <li>Best Practices</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Contact Us</li>
                <li>Legal Consultation</li>
                <li>Documentation</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Privacy Navigator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
