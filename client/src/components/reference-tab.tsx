import { Calculator, Flame, Mountain, Wind, Waves } from 'lucide-react';

export default function ReferenceTab() {
  return (
    <div className="space-y-6" data-testid="container-reference">
      <h3 className="text-xl font-semibold text-indigo-800 font-tamil" data-testid="text-reference-title">
        குறிப்பு வழிகாட்டி / Reference Guide
      </h3>
      
      {/* Rasi Element Guide */}
      <div className="bg-white/70 rounded-xl p-6 border border-gray-200" data-testid="card-rasi-element-guide">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 font-tamil">
          ராசி தத்துவ வழிகாட்டி / Rasi Element Guide
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Fire Signs */}
          <div className="bg-gradient-to-br from-fire/10 to-fire/5 border border-fire/20 rounded-lg p-4" data-testid="card-fire-signs">
            <div className="flex items-center gap-2 mb-3">
              <Flame className="w-5 h-5 text-fire" data-testid="icon-fire" />
              <h4 className="font-semibold text-fire font-tamil">அக்கினி தத்துவம்</h4>
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-medium text-gray-800">மேஷம் (Mesha) - 0°-30°</p>
              <p className="font-medium text-gray-800">சிம்ஹம் (Simham) - 120°-150°</p>
              <p className="font-medium text-gray-800">தனுசு (Danusu) - 240°-270°</p>
              <p className="text-xs text-gray-600 mt-2">புஷ்கரம்: 21°</p>
            </div>
          </div>

          {/* Earth Signs */}
          <div className="bg-gradient-to-br from-earth/10 to-earth/5 border border-earth/20 rounded-lg p-4" data-testid="card-earth-signs">
            <div className="flex items-center gap-2 mb-3">
              <Mountain className="w-5 h-5 text-earth" data-testid="icon-earth" />
              <h4 className="font-semibold text-earth font-tamil">பூமி தத்துவம்</h4>
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-medium text-gray-800">ரிஷபம் (Risham) - 30°-60°</p>
              <p className="font-medium text-gray-800">கன்னி (Kanni) - 150°-180°</p>
              <p className="font-medium text-gray-800">மகரம் (Makaram) - 270°-300°</p>
              <p className="text-xs text-gray-600 mt-2">புஷ்கரம்: 14°</p>
            </div>
          </div>

          {/* Air Signs */}
          <div className="bg-gradient-to-br from-air/10 to-air/5 border border-air/20 rounded-lg p-4" data-testid="card-air-signs">
            <div className="flex items-center gap-2 mb-3">
              <Wind className="w-5 h-5 text-air" data-testid="icon-air" />
              <h4 className="font-semibold text-air font-tamil">காற்று தத்துவம்</h4>
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-medium text-gray-800">மிதுனம் (Mithunam) - 60°-90°</p>
              <p className="font-medium text-gray-800">துலாம் (Thulam) - 180°-210°</p>
              <p className="font-medium text-gray-800">கும்பம் (Kumbam) - 300°-330°</p>
              <p className="text-xs text-gray-600 mt-2">புஷ்கரம்: 24°</p>
            </div>
          </div>

          {/* Water Signs */}
          <div className="bg-gradient-to-br from-water/10 to-water/5 border border-water/20 rounded-lg p-4" data-testid="card-water-signs">
            <div className="flex items-center gap-2 mb-3">
              <Waves className="w-5 h-5 text-water" data-testid="icon-water" />
              <h4 className="font-semibold text-water font-tamil">நீர் தத்துவம்</h4>
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-medium text-gray-800">கடகம் (Kadagam) - 90°-120°</p>
              <p className="font-medium text-gray-800">விருச்சிகம் (Vrichigam) - 210°-240°</p>
              <p className="font-medium text-gray-800">மீனம் (Meenam) - 330°-360°</p>
              <p className="text-xs text-gray-600 mt-2">புஷ்கரம்: 7°</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lord Benefits */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6" data-testid="card-lord-benefits">
        <h4 className="font-semibold text-yellow-800 mb-3 flex items-center gap-2">
          ⭐ கிரக அதிபதி பலன்கள் / Planetary Lord Benefits
        </h4>
        <div className="grid md:grid-cols-2 gap-3 text-sm text-yellow-700">
          <div className="space-y-2">
            <div><strong>குரு (Jupiter):</strong> ஞானம், செல்வம், குடும்ப நலம், ஆன்மீக வளர்ச்சி</div>
            <div><strong>சந்திரன் (Moon):</strong> மன அமைதி, தாய்மை சக்தி, உணர்ச்சி நிலைத்தன்மை</div>
            <div><strong>சூரியன் (Sun):</strong> அதிகாரம், தலைமைத்துவம், புகழ், வெற்றி</div>
          </div>
          <div className="space-y-2">
            <div><strong>சுக்கிரன் (Venus):</strong> அழகு, கலை, காதல், செல்வம், சுகபோகம்</div>
            <div><strong>சனி (Saturn):</strong> கடின உழைப்பு, பொறுமை, நீண்ட கால வெற்றி</div>
            <div><strong>ராகு (Rahu):</strong> புதுமை, தொழில்நுட்பம், வெளிநாட்டு தொடர்பு</div>
          </div>
        </div>
      </div>

      {/* Calculation Formula */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6" data-testid="card-calculation-formula">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Calculator className="w-5 h-5 text-amber-600" data-testid="icon-calculator" />
          கணக்கீட்டு வழிமுறை / Calculation Formula
        </h3>
        <div className="space-y-4 text-sm">
          <div className="bg-white/70 rounded-lg p-4" data-testid="container-calculation-steps">
            <p className="font-medium text-gray-800 mb-2">புஷ்கர நேரம் கணக்கீடு / Pushkara Time Calculation:</p>
            <div className="space-y-1 text-gray-600 font-mono text-xs">
              <p>புஷ்கர டிகிரி = ராசி தொடக்கம் + புஷ்கர அம்சம்</p>
              <p>Pushkara Degree = Rasi Start + Pushkara Amsa</p>
              <p className="mt-2">நேர வித்தியாசம் = (புஷ்கர டிகிரி - தற்போதைய சூரிய டிகிரி) × 4 நிமிடம்</p>
              <p>Time Difference = (Pushkara Degree - Current Sun Degree) × 4 minutes</p>
              <p className="mt-2">புஷ்கர நேரம் = சூரிய உதய நேரம் + நேர வித்தியாசம்</p>
              <p>Pushkara Time = Sunrise Time + Time Difference</p>
            </div>
          </div>
        </div>
      </div>

      {/* Element Characteristics */}
      <div className="bg-white/70 rounded-xl p-6 border border-gray-200" data-testid="card-element-characteristics">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 font-tamil">
          தத்துவ பண்புகள் / Element Characteristics
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-fire mb-2 flex items-center gap-1">
              <Flame className="w-4 h-4" />
              அக்கினி (Fire) & காற்று (Air)
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• ஆண் தன்மை (Masculine)</li>
              <li>• சக்திவாய்ந்த (Active)</li>
              <li>• முன்முயற்சி (Initiative)</li>
              <li>• தலைமைத்துவம் (Leadership)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-earth mb-2 flex items-center gap-1">
              <Mountain className="w-4 h-4" />
              பூமி (Earth) & நீர் (Water)
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• பெண் தன்மை (Feminine)</li>
              <li>• பெற்றுக்கொள்ளும் (Receptive)</li>
              <li>• நிலைத்தன்மை (Stability)</li>
              <li>• பராமரிப்பு (Nurturing)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
