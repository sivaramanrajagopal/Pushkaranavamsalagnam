import { CalculationResults } from '@/lib/calculations';
import { Clock, Sun, Star } from 'lucide-react';

interface ResultsTabProps {
  results: CalculationResults | null;
}

export default function ResultsTab({ results }: ResultsTabProps) {
  if (!results) {
    return (
      <div className="text-center py-8" data-testid="container-no-results">
        <p className="text-gray-500">Please enter valid inputs to see results</p>
      </div>
    );
  }

  const getElementColor = (element: string) => {
    switch (element) {
      case 'அக்கினி': return 'fire';
      case 'பூமி': return 'earth';
      case 'காற்று': return 'air';
      case 'நீர்': return 'water';
      default: return 'gray';
    }
  };

  const elementColor = getElementColor(results.rasi.element);

  const getPlanetBenefits = (lordEnglish: string) => {
    const benefits = {
      'Jupiter': 'ஞானம், செல்வம், குடும்ப நலம், ஆன்மீக வளர்ச்சி',
      'Moon': 'மன அமைதி, தாய்மை சக்தி, உணர்ச்சி நிலைத்தன்மை',
      'Sun': 'அதிகாரம், தலைமைத்துவம், புகழ், வெற்றி',
      'Venus': 'அழகு, கலை, காதல், செல்வம், சுகபோகம்',
      'Saturn': 'கடின உழைப்பு, பொறுமை, நீண்ட கால வெற்றி',
      'Rahu': 'புதுமை, தொழில்நுட்பம், வெளிநாட்டு தொடர்பு'
    };
    return benefits[lordEnglish as keyof typeof benefits] || '';
  };

  return (
    <div className="space-y-6" data-testid="container-results">
      {/* Current Rasi Information */}
      <div className={`bg-gradient-to-r from-${elementColor}/10 to-${elementColor}/5 border border-${elementColor}/20 rounded-xl p-4`} data-testid="card-rasi-info">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-12 h-12 bg-${elementColor}/20 rounded-full flex items-center justify-center`}>
            <Sun className={`w-6 h-6 text-${elementColor}`} data-testid="icon-rasi" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 font-tamil" data-testid="text-rasi-name">
              {results.rasi.name} ராசி
            </h3>
            <p className="text-sm text-gray-600" data-testid="text-rasi-element">
              {results.rasi.element} தத்துவம் • புஷ்கர {results.rasi.pushkara}°
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/60 rounded-lg p-3">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Degree Range</p>
            <p className="text-lg font-semibold text-gray-800" data-testid="text-degree-range">
              {results.rasi.start}° - {results.rasi.end}°
            </p>
          </div>
          <div className="bg-white/60 rounded-lg p-3">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Current Sun Position</p>
            <p className="text-lg font-semibold text-gray-800" data-testid="text-sun-position">
              {results.sunDegree}°
            </p>
          </div>
        </div>
      </div>

      {/* Pushkara Time Calculation */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-4" data-testid="card-pushkara-time">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center">
            <Clock className="w-6 h-6 text-amber-700" data-testid="icon-pushkara-clock" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 font-tamil">
              புஷ்கர முகூர்த்த நேரம் / Pushkara Muhurtham Time
            </h3>
            <p className="text-sm text-gray-600">சுப முகூர்த்தம் / Auspicious Time</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/60 rounded-lg p-3 text-center">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Pushkara Time</p>
            <p className="text-2xl font-bold text-amber-700" data-testid="text-pushkara-time">
              {results.pushkaraTime}
            </p>
          </div>
          <div className="bg-white/60 rounded-lg p-3 text-center">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Pushkara Degree</p>
            <p className="text-xl font-semibold text-amber-700" data-testid="text-pushkara-degree">
              {results.pushkaraDegree}°
            </p>
          </div>
          <div className="bg-white/60 rounded-lg p-3 text-center">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Time Difference</p>
            <p className="text-lg font-semibold text-amber-700" data-testid="text-time-difference">
              {results.calculationDetails.pushkaraMinutes} நிமிடம்
            </p>
          </div>
        </div>
      </div>

      {/* Navamsha Ranges */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4" data-testid="card-navamsha-ranges">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
            <Star className="w-6 h-6 text-blue-700" data-testid="icon-navamsha" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 font-tamil">
              நவாம்சக் கால அளவுகள் / Navamsha Time Ranges
            </h3>
            <p className="text-sm text-gray-600">நக்ஷத்திர விவரங்கள் / Nakshatra Details</p>
          </div>
        </div>

        <div className="space-y-3">
          {results.navamsaRanges.map((range, index) => (
            <div key={index} className="bg-white/70 rounded-lg p-4 border border-blue-100" data-testid={`card-navamsha-${index}`}>
              <div className="flex flex-wrap items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-800 font-tamil" data-testid={`text-nakshatra-${index}`}>
                  {range.tamilNakshatra}
                </h4>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded" data-testid={`text-pada-${index}`}>
                    பாதம் {range.pada}
                  </span>
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded font-tamil" data-testid={`text-lord-${index}`}>
                    {range.lord}
                  </span>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-3 text-sm">
                <div>
                  <p className="text-gray-500 mb-1">Time Range</p>
                  <p className="font-medium" data-testid={`text-time-range-${index}`}>
                    {range.startTime} - {range.endTime}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Degree Range</p>
                  <p className="font-medium" data-testid={`text-degree-range-${index}`}>
                    {range.degreeRange}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Ruling Planet</p>
                  <p className="font-medium" data-testid={`text-ruling-planet-${index}`}>
                    {range.lordEnglish}
                  </p>
                </div>
              </div>
              <div className="bg-blue-100 rounded p-2 text-xs text-blue-700 mt-2" data-testid={`text-benefits-${index}`}>
                {getPlanetBenefits(range.lordEnglish)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
