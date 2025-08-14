import { CalculationResults } from '@/lib/calculations';
import { Flame, Star, Clock } from 'lucide-react';

interface AnalysisTabProps {
  results: CalculationResults | null;
  sunriseTime: string;
}

export default function AnalysisTab({ results, sunriseTime }: AnalysisTabProps) {
  if (!results) {
    return (
      <div className="text-center py-8" data-testid="container-no-analysis">
        <p className="text-gray-500">Please enter valid inputs to see analysis</p>
      </div>
    );
  }

  const getElementIcon = (element: string) => {
    switch (element) {
      case 'அக்கினி': return Flame;
      case 'பூமி': return Star;
      case 'காற்று': return Star;
      case 'நீர்': return Star;
      default: return Star;
    }
  };

  const getElementColor = (element: string) => {
    switch (element) {
      case 'அக்கினி': return 'fire';
      case 'பூமி': return 'earth';
      case 'காற்று': return 'air';
      case 'நீர்': return 'water';
      default: return 'gray';
    }
  };

  const ElementIcon = getElementIcon(results.rasi.element);
  const elementColor = getElementColor(results.rasi.element);

  return (
    <div className="space-y-6" data-testid="container-analysis">
      <h3 className="text-xl font-semibold text-purple-800 font-tamil" data-testid="text-analysis-title">
        விரிவான ஜோதிட பகுப்பாய்வு / Detailed Astrological Analysis
      </h3>
      
      {/* Calculation Steps */}
      <div className="bg-purple-50 rounded-lg p-4 border border-purple-200" data-testid="card-calculation-steps">
        <h4 className="font-semibold text-purple-800 mb-3" data-testid="text-calculation-title">
          கணக்கீடு படிகள் / Calculation Steps:
        </h4>
        <div className="space-y-2 text-sm text-purple-700">
          <div data-testid="text-step-1">
            1. ராசி அடையாளம் / Rasi Identification: {results.sunDegree}° → {results.rasi.name} ({results.rasi.start}° - {results.rasi.end}°)
          </div>
          <div data-testid="text-step-2">
            2. புஷ்கர இலக்கு / Pushkara Target: {results.rasi.start}° + {results.rasi.pushkara}° = {results.pushkaraDegree}°
          </div>
          <div data-testid="text-step-3">
            3. நேர வித்தியாசம் / Time Difference: {results.pushkaraDegree}° - {results.sunDegree}° = {results.calculationDetails.pushkaraTimeDiff}°
          </div>
          <div data-testid="text-step-4">
            4. நிமிடங்களாக மாற்றம் / Convert to Minutes: {results.calculationDetails.pushkaraTimeDiff}° × 4 = {results.calculationDetails.pushkaraMinutes} நிமிடங்கள்
          </div>
          <div data-testid="text-step-5">
            5. இறுதி நேரம் / Final Time: {sunriseTime} + {results.calculationDetails.pushkaraMinutes} நிமிடங்கள் = {results.pushkaraTime}
          </div>
        </div>
      </div>

      {/* Element Analysis */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/70 rounded-lg p-4 border border-gray-200" data-testid="card-element-analysis">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <ElementIcon className={`w-5 h-5 text-${elementColor}`} />
            தத்துவ பகுப்பாய்வு / Element Analysis
          </h4>
          <p className="text-sm text-gray-600 mb-2" data-testid="text-current-element">
            Current Element: <span className={`font-medium text-${elementColor}`}>{results.rasi.element} ({results.rasi.element === 'அக்கினி' ? 'Fire' : results.rasi.element === 'பூமி' ? 'Earth' : results.rasi.element === 'காற்று' ? 'Air' : 'Water'})</span>
          </p>
          <p className="text-xs text-gray-500 leading-relaxed" data-testid="text-element-description">
            {results.rasi.element === 'அக்கினி' && 'அக்கினி தத்துவம் சக்தி, தைரியம், மற்றும் தலைமைத்துவத்தை குறிக்கிறது. இந்த நேரம் புதிய தொழில்கள், முக்கியமான முடிவுகள் எடுக்க ஏற்றது.'}
            {results.rasi.element === 'பூமி' && 'பூமி தத்துவம் நிலைத்தன்மை, பொறுமை மற்றும் நடைமுறை அணுகுமுறையை குறிக்கிறது. இந்த நேரம் கட்டிடம், விவசாயம், நிலம் வாங்குதலுக்கு ஏற்றது.'}
            {results.rasi.element === 'காற்று' && 'காற்று தத்துவம் அறிவு, தகவல் தொடர்பு மற்றும் மாற்றத்தை குறிக்கிறது. இந்த நேரம் கல்வி, எழுத்து, பயணத்திற்கு ஏற்றது.'}
            {results.rasi.element === 'நீர்' && 'நீர் தத்துவம் உணர்ச்சிகள், ஆன்மீகம் மற்றும் படைப்பாற்றலை குறிக்கிறது. இந்த நேரம் மதம், கலை, மருத்துவத்திற்கு ஏற்றது.'}
          </p>
        </div>

        {/* Planetary Influence */}
        <div className="bg-white/70 rounded-lg p-4 border border-gray-200" data-testid="card-planetary-influence">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Star className="w-5 h-5 text-purple-600" />
            கிரக தாக்கம் / Planetary Influence
          </h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">ராசி அதிபதி / Rasi Lord:</span>
              <span className="font-medium text-purple-600" data-testid="text-rasi-lord">
                {results.rasi.element === 'அக்கினி' ? 'சூரியன்/செவ்வாய்/குரு (Sun/Mars/Jupiter)' : 
                 results.rasi.element === 'பூமி' ? 'சுக்கிரன்/புதன்/சனி (Venus/Mercury/Saturn)' :
                 results.rasi.element === 'காற்று' ? 'புதன்/சுக்கிரன்/சனி (Mercury/Venus/Saturn)' :
                 'சந்திரன்/செவ்வாய்/குரு (Moon/Mars/Jupiter)'}
              </span>
            </div>
            {results.navamsaRanges.length > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">நக்ஷத்திர அதிபதி / Nakshatra Lord:</span>
                <span className="font-medium text-purple-600" data-testid="text-nakshatra-lord">
                  {results.navamsaRanges[0].lord} ({results.navamsaRanges[0].lordEnglish})
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Nakshatra Details */}
      <div className="space-y-4" data-testid="container-nakshatra-details">
        <h4 className="font-semibold text-purple-800 font-tamil">நக்ஷத்திர விவரங்கள் / Nakshatra Details:</h4>
        {results.navamsaRanges.map((range, index) => (
          <div key={index} className="bg-white rounded-lg p-4 border border-purple-200" data-testid={`card-nakshatra-detail-${index}`}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold text-purple-800 font-tamil" data-testid={`text-nakshatra-name-${index}`}>
                  {range.tamilNakshatra} ({range.nakshatra})
                </h5>
                <div className="text-sm text-purple-700 space-y-1">
                  <div>பாதம் / Pada: {range.pada}</div>
                  <div>அதிபதி / Lord: {range.lord} ({range.lordEnglish})</div>
                  <div>அம்ச வரம்பு / Degree Range: {range.degreeRange}</div>
                </div>
              </div>
              <div>
                <div className="bg-purple-100 rounded p-3">
                  <div className="font-semibold text-purple-800 text-sm">முகூர்த்த நேரம் / Muhurtham Time:</div>
                  <div className="text-lg font-bold text-purple-700" data-testid={`text-muhurtham-time-${index}`}>
                    {range.startTime} - {range.endTime}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Muhurtham Significance */}
      <div className="bg-white/70 rounded-lg p-4 border border-gray-200" data-testid="card-muhurtham-significance">
        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <Clock className="w-5 h-5 text-amber-600" />
          முகூர்த்த முக்கியத்துவம் / Muhurtham Significance
        </h4>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="font-medium text-green-600 mb-1">ஏற்ற செயல்கள் / Good For:</p>
            <ul className="text-gray-600 space-y-1" data-testid="list-good-activities">
              {results.rasi.element === 'அக்கினி' ? (
                <>
                  <li>• புதிய தொழில் தொடக்கம்</li>
                  <li>• முக்கிய ஒப்பந்தங்கள்</li>
                  <li>• பொது நிகழ்ச்சிகள்</li>
                </>
              ) : results.rasi.element === 'பூமி' ? (
                <>
                  <li>• கட்டிடம், வீடு கட்டுதல்</li>
                  <li>• விவசாய பணிகள்</li>
                  <li>• நிலம் வாங்குதல்</li>
                </>
              ) : results.rasi.element === 'காற்று' ? (
                <>
                  <li>• கல்வி தொடங்குதல்</li>
                  <li>• பயணம், வர்த்தகம்</li>
                  <li>• தகவல் தொடர்பு</li>
                </>
              ) : (
                <>
                  <li>• மதம், ஆன்மீகம்</li>
                  <li>• கலை, இசை</li>
                  <li>• மருத்துவம்</li>
                </>
              )}
            </ul>
          </div>
          <div>
            <p className="font-medium text-red-600 mb-1">தவிர்க்க வேண்டியவை / Avoid:</p>
            <ul className="text-gray-600 space-y-1" data-testid="list-avoid-activities">
              {results.rasi.element === 'அக்கினி' ? (
                <>
                  <li>• நீர் சம்பந்தப்பட்ட செயல்கள்</li>
                  <li>• மென்மையான பணிகள்</li>
                  <li>• அமைதியான நிகழ்வுகள்</li>
                </>
              ) : results.rasi.element === 'பூமி' ? (
                <>
                  <li>• அவசர முடிவுகள்</li>
                  <li>• விரைவான மாற்றங்கள்</li>
                  <li>• பயணம்</li>
                </>
              ) : results.rasi.element === 'காற்று' ? (
                <>
                  <li>• நிலையான முதலீடுகள்</li>
                  <li>• கட்டிடம்</li>
                  <li>• நீண்ட கால திட்டங்கள்</li>
                </>
              ) : (
                <>
                  <li>• கடினமான பணிகள்</li>
                  <li>• அதிகார பிரயோகம்</li>
                  <li>• போர், சண்டை</li>
                </>
              )}
            </ul>
          </div>
          <div>
            <p className="font-medium text-blue-600 mb-1">சிறப்பு குறிப்பு / Special Note:</p>
            <p className="text-gray-600 text-xs" data-testid="text-special-note">
              புஷ்கர முகூர்த்தம் அனைத்து ராசிகளிலும் மிகவும் வலிமையான நேரமாக கருதப்படுகிறது. இந்த நேரத்தில் தொடங்கும் எந்த நல்ல காரியமும் வெற்றி அடையும்.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
