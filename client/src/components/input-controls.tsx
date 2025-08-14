import { Clock, Sun, Target, Settings } from 'lucide-react';
import { rasiData } from '@/lib/astrological-data';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

interface InputControlsProps {
  sunriseTime: string;
  setSunriseTime: (value: string) => void;
  sunDegree: string;
  setSunDegree: (value: string) => void;
  manualRasi: string;
  setManualRasi: (value: string) => void;
}

export default function InputControls({
  sunriseTime,
  setSunriseTime,
  sunDegree,
  setSunDegree,
  manualRasi,
  setManualRasi
}: InputControlsProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-amber-200 p-6 mb-6" data-testid="card-input-controls">
      <div className="flex items-center gap-2 mb-4">
        <Settings className="w-5 h-5 text-amber-600" data-testid="icon-settings" />
        <h2 className="text-xl font-semibold text-amber-800">உள்ளீட்டு கட்டுப்பாடுகள் / Input Controls</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-4">
        {/* Sunrise Time Input */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700 flex items-center gap-1">
            <Clock className="w-4 h-4" />
            சூரிய உதய நேரம் / Sunrise Time
          </Label>
          <Input
            type="time"
            value={sunriseTime}
            onChange={(e) => setSunriseTime(e.target.value)}
            className="bg-white/90 border-amber-300 focus:ring-amber-500 focus:border-amber-500"
            data-testid="input-sunrise-time"
          />
        </div>
        
        {/* Sun Degree Input */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700 flex items-center gap-1">
            <Sun className="w-4 h-4" />
            சூரிய பாகை / Sun Degree (0-360°)
          </Label>
          <Input
            type="number"
            value={sunDegree}
            onChange={(e) => setSunDegree(e.target.value)}
            min="0"
            max="360"
            step="0.1"
            className="bg-white/90 border-amber-300 focus:ring-amber-500 focus:border-amber-500"
            placeholder="157"
            data-testid="input-sun-degree"
          />
        </div>
        
        {/* Manual Rasi Override */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700 flex items-center gap-1">
            <Target className="w-4 h-4" />
            கைமுறை ராசி / Manual Rasi Override
          </Label>
          <Select value={manualRasi} onValueChange={setManualRasi}>
            <SelectTrigger className="bg-white/90 border-amber-300 focus:ring-amber-500" data-testid="select-manual-rasi">
              <SelectValue placeholder="தானாக கண்டறிதல் / Auto Detect" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="auto">தானாக கண்டறிதல் / Auto Detect</SelectItem>
              {Object.entries(rasiData).map(([key, rasi]) => (
                <SelectItem key={key} value={key} data-testid={`option-rasi-${key}`}>
                  {rasi.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
