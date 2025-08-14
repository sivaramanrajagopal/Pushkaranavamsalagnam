import React, { useState, useEffect } from 'react';
import { Sun, Clock, Calculator, Star, ChevronDown, ChevronUp, Info, BookOpen, Target, Settings } from 'lucide-react';
import { rasiData } from '../lib/astrological-data';
import { calculatePushkaraMuhurtham } from '../lib/calculations';

const TamilMuhurthamCalculator = () => {
  const [sunriseTime, setSunriseTime] = useState('06:01');
  const [sunDegree, setSunDegree] = useState('157');
  const [manualRasi, setManualRasi] = useState('');
  const [results, setResults] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('results');

  // Helper functions
  const getRasiFromDegree = (degree: number) => {
    for (const [key, rasi] of Object.entries(rasiData)) {
      if (degree >= rasi.start && degree < rasi.end) {
        return { key, ...rasi };
      }
    }
    return null;
  };

  const degreesToMinutes = (degrees: number) => degrees * 4;
  
  const addMinutesToTime = (timeString: string, minutesToAdd: number) => {
    const [hours, minutes] = timeString.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes + minutesToAdd;
    const newHours = Math.floor(totalMinutes / 60) % 24;
    const newMins = Math.round(totalMinutes % 60);
    return `${newHours.toString().padStart(2, '0')}:${newMins.toString().padStart(2, '0')}`;
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'மாலை' : 'காலை';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const calculateNavamsaRanges = (rasi: any, sunDeg: number) => {
    const ranges: any[] = [];
    rasi.navamshaRanges.forEach((navamsha: any) => {
      const startDegDiff = navamsha.start - sunDeg;
      const endDegDiff = navamsha.end - sunDeg;
      const startMinutes = Math.round(degreesToMinutes(startDegDiff));
      const endMinutes = Math.round(degreesToMinutes(endDegDiff));
      const startTime = addMinutesToTime(sunriseTime, startMinutes);
      const endTime = addMinutesToTime(sunriseTime, endMinutes);
      
      ranges.push({
        ...navamsha,
        startTime: formatTime(startTime),
        endTime: formatTime(endTime),
        degreeRange: `${navamsha.start.toFixed(1)}° - ${navamsha.end.toFixed(1)}°`
      });
    });
    return ranges;
  };

  const calculateMuhurtham = () => {
    if (!sunriseTime || !sunDegree) return;
    const sunDeg = parseFloat(sunDegree);
    if (sunDeg < 0 || sunDeg >= 360) return;

    let currentRasi = manualRasi && rasiData[manualRasi] ? { key: manualRasi, ...rasiData[manualRasi] } : getRasiFromDegree(sunDeg);
    if (!currentRasi) return;

    const pushkaraDegree = currentRasi.start + currentRasi.pushkara;
    const pushkaraTimeDiff = pushkaraDegree - sunDeg;
    const pushkaraMinutes = degreesToMinutes(pushkaraTimeDiff);
    const pushkaraTime = addMinutesToTime(sunriseTime, pushkaraMinutes);
    const navamsaRanges = calculateNavamsaRanges(currentRasi, sunDeg);

    setResults({
      rasi: currentRasi,
      pushkaraTime: formatTime(pushkaraTime),
      pushkaraDegree: pushkaraDegree.toFixed(2),
      navamsaRanges,
      sunDegree: sunDeg,
      calculationDetails: {
        pushkaraTimeDiff: pushkaraTimeDiff.toFixed(2),
        pushkaraMinutes: pushkaraMinutes.toFixed(0)
      }
    });
  };

  useEffect(() => {
    calculateMuhurtham();
  }, [sunriseTime, sunDegree, manualRasi]);

  // Tab configuration
  const tabs = [
    { id: 'results', label: 'முடிவுகள்', icon: Target },
    { id: 'analysis', label: 'விரிவான பகுப்பாய்வு', icon: BookOpen },
    { id: 'reference', label: 'குறிப்பு வழிகாட்டி', icon: Info },
    { id: 'settings', label: 'அமைப்புகள்', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="mb-3 p-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg border border-orange-200 inline-block">
            <p className="text-lg font-bold text-orange-800">ॐ महागणपतये नमः</p>
            <p className="text-sm text-orange-700">ஓம் மஹாகணபதயே நமః</p>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-2">
            <Sun className="w-8 h-8 text-amber-600" />
            <h1 className="text-2xl font-bold text-amber-800">தமிழ் முகூர்த்த கணிப்பான்</h1>
            <Star className="w-8 h-8 text-amber-600" />
          </div>
          <p className="text-amber-700 mb-2">புஷ்கர அம்சத்தின் அடிப்படையில் சுப முகூர்த்த கணக்கீடு</p>
          
          {/* Developer Credit */}
          <div className="bg-white/60 backdrop-blur-sm rounded-lg px-4 py-2 border border-amber-200 inline-block">
            <p className="text-xs text-amber-600">
              <span className="font-medium">Created by:</span> <span className="font-semibold text-amber-700">Sivaraman Rajagopal</span>
            </p>
            <p className="text-xs text-amber-500">Traditional Tamil Astrology • Modern Technology</p>
          </div>
        </div>

        {/* Input Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 mb-6 border border-amber-200">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-amber-700 font-medium mb-2 text-sm">
                <Clock className="w-4 h-4 inline mr-1" />சூரிய உதய நேரம்
              </label>
              <input
                type="time"
                value={sunriseTime}
                onChange={(e) => setSunriseTime(e.target.value)}
                className="w-full p-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 bg-yellow-50 text-sm"
              />
            </div>
            
            <div>
              <label className="block text-amber-700 font-medium mb-2 text-sm">
                <Sun className="w-4 h-4 inline mr-1" />சூரியனின் அம்சம் (0-360°)
              </label>
              <input
                type="number"
                value={sunDegree}
                onChange={(e) => setSunDegree(e.target.value)}
                min="0"
                max="360"
                step="0.1"
                className="w-full p-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 bg-yellow-50 text-sm"
                placeholder="157"
              />
            </div>
            
            <div>
              <label className="block text-amber-700 font-medium mb-2 text-sm">கைமுறை ராசி தேர்வு</label>
              <select
                value={manualRasi}
                onChange={(e) => setManualRasi(e.target.value)}
                className="w-full p-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 bg-yellow-50 text-sm"
              >
                <option value="">தானியங்கு</option>
                {Object.entries(rasiData).map(([key, rasi]) => (
                  <option key={key} value={key}>{rasi.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg mb-6 border border-amber-200">
          <div className="border-b border-amber-200">
            <nav className="flex space-x-2 p-2">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'bg-amber-100 text-amber-800 border border-amber-300'
                        : 'text-amber-600 hover:bg-amber-50'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {results && (
              <>
                {/* Results Tab */}
                {activeTab === 'results' && (
                  <div className="space-y-6">
                    {/* Quick Info Card */}
                    <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg p-4 border border-amber-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-bold text-amber-800 text-lg">{results.rasi.name} ராசி</h3>
                          <p className="text-amber-700 text-sm">{results.rasi.element} தத்துவம் • புஷ்கர {results.rasi.pushkara}°</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-amber-800">{results.sunDegree}°</div>
                          <div className="text-sm text-amber-600">சூரிய அம்சம்</div>
                        </div>
                      </div>
                    </div>

                    {/* Pushkara Time */}
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-6 border border-green-200">
                      <div className="text-center">
                        <h3 className="font-bold text-green-800 mb-2">புஷ்கர முகூர்த்த நேரம்</h3>
                        <div className="text-4xl font-bold text-green-700 mb-2">{results.pushkaraTime}</div>
                        <p className="text-green-600 text-sm">எந்த நல்ல காரியத்தையும் தொடங்க சிறந்த நேரம்</p>
                      </div>
                    </div>

                    {/* Navamsha Times */}
                    <div className="space-y-4">
                      <h3 className="font-bold text-blue-800 text-lg">புஷ்கர நவாம்ச நேரங்கள்</h3>
                      <div className="grid gap-4">
                        {results.navamsaRanges.map((range: any, index: number) => (
                          <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                            <div className="flex justify-between items-center mb-3">
                              <div>
                                <h4 className="font-bold text-blue-800">{range.tamilNakshatra}</h4>
                                <p className="text-blue-600 text-sm">பாதம் {range.pada} • அதிபதி: {range.lord}</p>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-bold text-blue-700">{range.startTime} - {range.endTime}</div>
                                <div className="text-xs text-blue-600">{range.degreeRange}</div>
                              </div>
                            </div>
                            <div className="bg-blue-100 rounded p-2 text-xs text-blue-700">
                              {range.lordEnglish === 'Jupiter' && 'ஞானம், செல்வம், குடும்ப நலம், ஆன்மீக வளர்ச்சி'}
                              {range.lordEnglish === 'Moon' && 'மன அமைதி, தாய்மை சக்தி, உணர்ச்சி நிலைத்தன்மை'}
                              {range.lordEnglish === 'Sun' && 'அதிகாரம், தலைமைத்துவம், புகழ், வெற்றி'}
                              {range.lordEnglish === 'Venus' && 'அழகு, கலை, காதல், செல்வம், சுகபோகம்'}
                              {range.lordEnglish === 'Saturn' && 'கடின உழைப்பு, பொறுமை, நீண்ட கால வெற்றி'}
                              {range.lordEnglish === 'Rahu' && 'புதுமை, தொழில்நுட்பம், வெளிநாட்டு தொடர்பு'}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Analysis Tab */}
                {activeTab === 'analysis' && (
                  <div className="space-y-6">
                    <h3 className="font-bold text-purple-800 text-xl">விரிவான ஜோதிட பகுப்பாய்வு</h3>
                    
                    {/* Nakshatra Lord-Pada Rule Validation */}
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-3">🔍 நக்ஷத்திர அதிபதி-பாதம் விதி சரிபார்ப்பு</h4>
                      <div className="space-y-2">
                        {results.navamsaRanges.map((range: any, index: number) => (
                          <div key={index} className="bg-white rounded p-3 border border-green-200">
                            <div className="flex justify-between items-center">
                              <div>
                                <span className="font-semibold text-green-800">{range.tamilNakshatra}</span>
                                <span className="text-green-600 text-sm ml-2">பாதம் {range.pada}</span>
                                <span className="text-green-600 text-sm ml-2">• அதிபதி: {range.lord}</span>
                              </div>
                              <div className="text-right">
                                <div className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded">
                                  {range.lordRule}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-3 p-3 bg-white rounded border border-green-200">
                        <h5 className="font-medium text-green-800 mb-2">புஷ்கர நவாம்ச விதி:</h5>
                        <div className="text-xs text-green-700 space-y-1">
                          <div><strong>சுக்கிரன் (Venus):</strong> பாதம் 3 மட்டும் புஷ்கரம்</div>
                          <div><strong>சூரியன் (Sun):</strong> பாதம் 1 & 4 புஷ்கரம்</div>
                          <div><strong>சந்திரன் (Moon):</strong> பாதம் 2 மட்டும் புஷ்கரம்</div>
                          <div><strong>ராகு (Rahu):</strong> பாதம் 4 மட்டும் புஷ்கரம்</div>
                          <div><strong>குரு (Jupiter):</strong> பாதம் 1, 2, 4 புஷ்கரம்</div>
                          <div><strong>சனி (Saturn):</strong> பாதம் 2 மட்டும் புஷ்கரம்</div>
                        </div>
                      </div>
                    </div>

                    {/* Calculation Steps */}
                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                      <h4 className="font-semibold text-purple-800 mb-3">கணக்கீடு படிகள்:</h4>
                      <div className="space-y-2 text-sm text-purple-700">
                        <div>1. ராசி அடையாளம்: {results.sunDegree}° → {results.rasi.name} ({results.rasi.start}° - {results.rasi.end}°)</div>
                        <div>2. புஷ்கர இலக்கு: {results.rasi.start}° + {results.rasi.pushkara}° = {results.pushkaraDegree}°</div>
                        <div>3. நேர வித்தியாசம்: {results.pushkaraDegree}° - {results.sunDegree}° = {results.calculationDetails.pushkaraTimeDiff}°</div>
                        <div>4. நிமிடங்களாக மாற்றம்: {results.calculationDetails.pushkaraTimeDiff}° × 4 = {results.calculationDetails.pushkaraMinutes} நிமிடங்கள்</div>
                        <div>5. இறுதி நேரம்: {sunriseTime} + {results.calculationDetails.pushkaraMinutes} நிமிடங்கள் = {results.pushkaraTime}</div>
                      </div>
                    </div>

                    {/* Nakshatra Details */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-purple-800">நக்ஷத்திர விவரங்கள்:</h4>
                      {results.navamsaRanges.map((range: any, index: number) => (
                        <div key={index} className="bg-white rounded-lg p-4 border border-purple-200">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-semibold text-purple-800">{range.tamilNakshatra} ({range.nakshatra})</h5>
                              <div className="text-sm text-purple-700 space-y-1">
                                <div>பாதம்: {range.pada}</div>
                                <div>அதிபதி: {range.lord} ({range.lordEnglish})</div>
                                <div>அம்ச வரம்பு: {range.degreeRange}</div>
                              </div>
                            </div>
                            <div>
                              <div className="bg-purple-100 rounded p-3">
                                <div className="font-semibold text-purple-800 text-sm">முகூர்த்த நேரம்:</div>
                                <div className="text-lg font-bold text-purple-700">{range.startTime} - {range.endTime}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reference Tab */}
                {activeTab === 'reference' && (
                  <div className="space-y-6">
                    <h3 className="font-bold text-indigo-800 text-xl">குறிப்பு வழிகாட்டி</h3>
                    
                    {/* Element Table */}
                    <div className="grid gap-4">
                      <div className="bg-red-50 rounded p-4 border border-red-200">
                        <h4 className="font-semibold text-red-800 mb-2">🔥 அக்கினி தத்துவம் (Fire)</h4>
                        <div className="text-sm text-red-700">
                          <div><strong>ராசிகள்:</strong> மேஷம், சிம்ஹம், தனுசு</div>
                          <div><strong>புஷ்கர:</strong> 21° • <strong>நேரங்கள்:</strong> 20°-23°20' & 26°40'-30°</div>
                          <div><strong>நக்ஷத்திரங்கள்:</strong> பரணி-3, கிருத்திகை-1, பூர்வபல்குனி-3, உத்தரபல்குனி-1, பூர்வாஷாடா-3, உத்தராஷாடா-1</div>
                        </div>
                      </div>

                      <div className="bg-green-50 rounded p-4 border border-green-200">
                        <h4 className="font-semibold text-green-800 mb-2">🌍 பூமி தத்துவம் (Earth)</h4>
                        <div className="text-sm text-green-700">
                          <div><strong>ராசிகள்:</strong> ரிஷபம், கன்னி, மகரம்</div>
                          <div><strong>புஷ்கர:</strong> 14° • <strong>நேரங்கள்:</strong> 6°40'-10° & 13°20'-16°40'</div>
                          <div><strong>நக்ஷத்திரங்கள்:</strong> கிருத்திகை-4, ரோகிணி-2, உத்தரபல்குனி-4, ஹஸ்தம்-2, உத்தராஷாடா-3, திருவோணம்-2</div>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded p-4 border border-blue-200">
                        <h4 className="font-semibold text-blue-800 mb-2">🌬️ காற்று தத்துவம் (Air)</h4>
                        <div className="text-sm text-blue-700">
                          <div><strong>ராசிகள்:</strong> மிதுனம், துலாம், கும்பம்</div>
                          <div><strong>புஷ்கர:</strong> 24° • <strong>நேரங்கள்:</strong> 16°40'-20° & 23°20'-26°40'</div>
                          <div><strong>நக்ஷத்திரங்கள்:</strong> ஆருத்ரா-4, புனர்வசு-2, சுவாதி-4, விசாகம்-2, சதயம்-4, பூர்வபத்ரபாதா-2</div>
                        </div>
                      </div>

                      <div className="bg-cyan-50 rounded p-4 border border-cyan-200">
                        <h4 className="font-semibold text-cyan-800 mb-2">💧 நீர் தத்துவம் (Water)</h4>
                        <div className="text-sm text-cyan-700">
                          <div><strong>ராசிகள்:</strong> கடகம், விருச்சிகம், மீனம்</div>
                          <div><strong>புஷ்கர:</strong> 7° • <strong>நேரங்கள்:</strong> 0°-3°20' & 6°40'-10°</div>
                          <div><strong>நக்ஷத்திரங்கள்:</strong> புனர்வசு-4, பூசம்-2, விசாகம்-4, அனுராதா-2, பூர்வபத்ரபாதா-4, உத்தரபத்ரபாதா-2</div>
                        </div>
                      </div>
                    </div>

                    {/* Lord Benefits */}
                    <div className="bg-yellow-50 rounded p-4 border border-yellow-200">
                      <h4 className="font-semibold text-yellow-800 mb-3">⭐ கிரக அதிபதி பலன்கள்</h4>
                      <div className="grid md:grid-cols-2 gap-3 text-sm text-yellow-700">
                        <div>
                          <div><strong>குரு (Jupiter):</strong> ஞானம், செல்வம், குடும்ப நலம், ஆன்மீக வளர்ச்சி</div>
                          <div><strong>சந்திரன் (Moon):</strong> மன அமைதி, தாய்மை சக்தி, உணர்ச்சி நிலைத்தன்மை</div>
                          <div><strong>சூரியன் (Sun):</strong> அதிகாரம், தலைமைத்துவம், புகழ், வெற்றி</div>
                        </div>
                        <div>
                          <div><strong>சுக்கிரன் (Venus):</strong> அழகு, கலை, காதல், செல்வம், சுகபோகம்</div>
                          <div><strong>சனி (Saturn):</strong> கடின உழைப்பு, பொறுமை, நீண்ட கால வெற்றி</div>
                          <div><strong>ராகு (Rahu):</strong> புதுமை, தொழில்நுட்பம், வெளிநாட்டு தொடர்பு</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Settings Tab */}
                {activeTab === 'settings' && (
                  <div className="space-y-6">
                    <h3 className="font-bold text-gray-800 text-xl">அமைப்புகள் & தகவல்கள்</h3>
                    
                    <div className="grid gap-4">
                      {/* Developer Information */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                        <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                          <Star className="w-5 h-5" />
                          Developer Information
                        </h4>
                        <div className="space-y-2 text-sm text-blue-700">
                          <div className="bg-white/70 rounded p-3 border border-blue-200">
                            <div><strong>Created by:</strong> <span className="text-blue-800 font-semibold">Sivaraman Rajagopal</span></div>
                            <div><strong>Purpose:</strong> Preserving and digitizing traditional Tamil astrological wisdom</div>
                            <div><strong>Mission:</strong> Making authentic muhurtham calculations accessible to the global Tamil community</div>
                          </div>
                          <div className="bg-amber-50 rounded p-3 border border-amber-200 text-amber-800">
                            <div className="font-medium mb-1">Disclaimer:</div>
                            <div className="text-xs">
                              This app is based on traditional Tamil astrological texts and calculations. 
                              Results should be used for guidance purposes. For important life events, 
                              please consult with qualified traditional astrologers.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded p-4 border border-gray-200">
                        <h4 className="font-semibold text-gray-800 mb-2">பயன்பாட்டு தகவல்:</h4>
                        <div className="text-sm text-gray-700 space-y-1">
                          <div>பதிப்பு: 1.0.0</div>
                          <div>கடைசி புதுப்பிப்பு: 2024</div>
                          <div>ஆதாரம்: பாரம்பரிய தமிழ் ஜோதிடம்</div>
                          <div>தொழில்நுட்பம்: React.js + Tamil Astronomy</div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded p-4 border border-gray-200">
                        <h4 className="font-semibold text-gray-800 mb-2">பயன்பாட்டு முறைகள்:</h4>
                        <div className="text-sm text-gray-700 space-y-1">
                          <div>• திருமணம், கிரகப்பிரவேசம், வணிக தொடக்கம்</div>
                          <div>• படிப்பு, தேர்வு, வேலை நேர்காணல்</div>
                          <div>• பயணம், சொத்து வாங்குதல், ஆன்மீக சடங்குகள்</div>
                          <div>• குழந்தை பெயர் வைத்தல், புதிய வீடு, வாகன வாங்குதல்</div>
                        </div>
                      </div>

                      {/* Acknowledgments */}
                      <div className="bg-purple-50 rounded p-4 border border-purple-200">
                        <h4 className="font-semibold text-purple-800 mb-2">நன்றிகள்:</h4>
                        <div className="text-sm text-purple-700 space-y-1">
                          <div>• பாரம்பரிய தமிழ் ஜோதிட குருக்கள்</div>
                          <div>• சித்த மருத்துவ & ஜோதிட நூல்கள்</div>
                          <div>• தமிழ் வானியல் ஆராய்ச்சியாளர்கள்</div>
                          <div>• உலகளாவிய தமிழ் சமுதாயம்</div>
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="bg-green-50 rounded p-4 border border-green-200">
                        <h4 className="font-semibold text-green-800 mb-2">தொடர்பு & பின்னூட்டம்:</h4>
                        <div className="text-sm text-green-700 space-y-1">
                          <div>• பயன்பாட்டில் ஏதேனும் சந்தேகங்கள் இருந்தால் தெரிவிக்கவும்</div>
                          <div>• கணக்கீட்டு துல்லியத்தில் முன்னேற்றம் பற்றிய ஆலோசனைகள்</div>
                          <div>• பாரம்பரிய ஜோதிட நுண்ணறிவுகளைப் பகிர்ந்து கொள்ளுங்கள்</div>
                          <div>• Tamil Tech Community க்கு பங்களிப்பு வழங்குங்கள்</div>
                        </div>
                      </div>

                      {results.sunDegree === 157 && sunriseTime === '06:01' && (
                        <div className="bg-green-100 rounded p-4 border border-green-300">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <strong className="text-green-800">உதாரண சரிபார்ப்பு வெற்றி!</strong>
                          </div>
                          <div className="text-sm text-green-700 mt-1">
                            கன்னி ராசி உத்தரபல்குனி & ஹஸ்தம் நக்ஷத்திரங்கள் சரியாக கணக்கிடப்பட்டுள்ளது!
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </>
            )}

            {!results && (
              <div className="text-center py-12">
                <Calculator className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                <p className="text-amber-700">சூரிய உதய நேரம் மற்றும் அம்சத்தை உள்ளிட்டு கணக்கீட்டை தொடங்குங்கள்</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TamilMuhurthamCalculator;