import { useState, useEffect } from 'react';
import { Sun, Star } from 'lucide-react';
import InputControls from './input-controls';
import ResultsTab from './results-tab';
import AnalysisTab from './analysis-tab';
import ReferenceTab from './reference-tab';
import SettingsTab from './settings-tab';
import { calculateMuhurtham, CalculationResults } from '@/lib/calculations';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function TamilMuhurthamCalculator() {
  const [sunriseTime, setSunriseTime] = useState('06:01');
  const [sunDegree, setSunDegree] = useState('157');
  const [manualRasi, setManualRasi] = useState('auto');
  const [results, setResults] = useState<CalculationResults | null>(null);

  useEffect(() => {
    const calculatedResults = calculateMuhurtham(sunriseTime, sunDegree, manualRasi === 'auto' ? undefined : manualRasi);
    setResults(calculatedResults);
  }, [sunriseTime, sunDegree, manualRasi]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 p-4" data-testid="app-container">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          {/* Traditional Mantra */}
          <div className="mb-4 p-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl border border-orange-200 inline-block shadow-sm">
            <p className="text-xl font-bold text-orange-800 mb-1" data-testid="text-sanskrit-mantra">
              ॐ महागणपतये नमः
            </p>
            <p className="text-base text-orange-700 font-tamil" data-testid="text-tamil-mantra">
              ஓம் மஹாகணபதயே நமः
            </p>
          </div>
          
          {/* Main Title */}
          <div className="flex items-center justify-center gap-4 mb-3">
            <Sun className="w-10 h-10 text-amber-600" data-testid="icon-sun" />
            <h1 className="text-3xl font-bold text-amber-800 font-tamil" data-testid="text-main-title">
              தமிழ் முகூர்த்த கணிப்பான்
            </h1>
            <Star className="w-10 h-10 text-amber-600" data-testid="icon-star" />
          </div>
          <p className="text-lg text-amber-700 mb-3 font-tamil" data-testid="text-subtitle">
            புஷ்கர அம்சத்தின் அடிப்படையில் சுப முகூர்த்த கணக்கீடு
          </p>
          
          {/* Developer Credit */}
          <div className="bg-white/70 backdrop-blur-sm rounded-lg px-4 py-2 border border-amber-200 inline-block shadow-sm">
            <p className="text-sm text-amber-800" data-testid="text-developer-info">
              <span className="font-medium">Developed by:</span> 
              <span className="font-semibold">Sivaraman Rajagopal</span>
              <span className="text-amber-600"> | Traditional Tamil Astrology • Modern Technology</span>
            </p>
          </div>
        </div>

        {/* Input Controls */}
        <InputControls
          sunriseTime={sunriseTime}
          setSunriseTime={setSunriseTime}
          sunDegree={sunDegree}
          setSunDegree={setSunDegree}
          manualRasi={manualRasi}
          setManualRasi={setManualRasi}
        />

        {/* Tabbed Interface */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-amber-200 overflow-hidden">
          <Tabs defaultValue="results" className="w-full">
            <TabsList className="w-full bg-gradient-to-r from-amber-100 to-orange-100 border-b border-amber-200 rounded-none h-auto p-0">
              <TabsTrigger 
                value="results" 
                className="px-6 py-4 text-sm font-medium data-[state=active]:bg-white/50 data-[state=active]:border-b-2 data-[state=active]:border-amber-600 rounded-none flex items-center gap-2"
                data-testid="tab-results"
              >
                <Sun className="w-4 h-4" />
                முடிவுகள் / Results
              </TabsTrigger>
              <TabsTrigger 
                value="analysis" 
                className="px-6 py-4 text-sm font-medium data-[state=active]:bg-white/50 data-[state=active]:border-b-2 data-[state=active]:border-amber-600 rounded-none flex items-center gap-2"
                data-testid="tab-analysis"
              >
                <Star className="w-4 h-4" />
                விரிவான பகுப்பாய்வு / Analysis
              </TabsTrigger>
              <TabsTrigger 
                value="reference" 
                className="px-6 py-4 text-sm font-medium data-[state=active]:bg-white/50 data-[state=active]:border-b-2 data-[state=active]:border-amber-600 rounded-none flex items-center gap-2"
                data-testid="tab-reference"
              >
                <Sun className="w-4 h-4" />
                குறிப்பு வழிகாட்டி / Reference
              </TabsTrigger>
              <TabsTrigger 
                value="settings" 
                className="px-6 py-4 text-sm font-medium data-[state=active]:bg-white/50 data-[state=active]:border-b-2 data-[state=active]:border-amber-600 rounded-none flex items-center gap-2"
                data-testid="tab-settings"
              >
                <Star className="w-4 h-4" />
                அமைப்புகள் / Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="results" className="p-6 m-0">
              <ResultsTab results={results} />
            </TabsContent>

            <TabsContent value="analysis" className="p-6 m-0">
              <AnalysisTab results={results} sunriseTime={sunriseTime} />
            </TabsContent>

            <TabsContent value="reference" className="p-6 m-0">
              <ReferenceTab />
            </TabsContent>

            <TabsContent value="settings" className="p-6 m-0">
              <SettingsTab />
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-amber-700">
          <p className="font-tamil" data-testid="text-footer-mantra">
            ॐ शान्ति शान्ति शान्ति | ஓம் சாந்தி சாந்தி சாந்தி
          </p>
        </div>
      </div>
    </div>
  );
}
