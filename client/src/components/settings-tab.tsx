import { MapPin, Eye, Info, Star } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

export default function SettingsTab() {
  return (
    <div className="space-y-6" data-testid="container-settings">
      <h3 className="text-xl font-semibold text-gray-800 font-tamil" data-testid="text-settings-title">
        அமைப்புகள் & தகவல்கள் / Settings & Information
      </h3>
      
      {/* Location Settings */}
      <div className="bg-white/70 rounded-xl p-6 border border-gray-200" data-testid="card-location-settings">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-blue-600" data-testid="icon-location" />
          இருப்பிடம் / Location Settings
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">நகரம் / City</Label>
            <Input 
              type="text" 
              defaultValue="சென்னை / Chennai" 
              className="bg-white/90 border-gray-300 focus:ring-blue-500"
              data-testid="input-city"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">நேர மண்டலம் / Time Zone</Label>
            <Select defaultValue="Asia/Kolkata">
              <SelectTrigger className="bg-white/90 border-gray-300 focus:ring-blue-500" data-testid="select-timezone">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Asia/Kolkata">IST (+05:30)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Display Preferences */}
      <div className="bg-white/70 rounded-xl p-6 border border-gray-200" data-testid="card-display-preferences">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Eye className="w-5 h-5 text-green-600" data-testid="icon-display" />
          காட்சி விருப்பங்கள் / Display Preferences
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between" data-testid="container-tamil-priority">
            <span className="text-sm font-medium text-gray-700">தமிழ் மொழி முன்னுரிமை / Tamil Language Priority</span>
            <Switch defaultChecked data-testid="switch-tamil-priority" />
          </div>
          
          <div className="flex items-center justify-between" data-testid="container-24hour-format">
            <span className="text-sm font-medium text-gray-700">24 மணிநேர வடிவம் / 24-Hour Format</span>
            <Switch data-testid="switch-24hour-format" />
          </div>
        </div>
      </div>

      {/* Developer Information */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200" data-testid="card-developer-info">
        <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
          <Star className="w-5 h-5" data-testid="icon-developer" />
          Developer Information
        </h4>
        <div className="space-y-2 text-sm text-blue-700">
          <div className="bg-white/70 rounded p-3 border border-blue-200">
            <div data-testid="text-developer-name">
              <strong>Created by:</strong> <span className="text-blue-800 font-semibold">Sivaraman Rajagopal</span>
            </div>
            <div data-testid="text-developer-purpose">
              <strong>Purpose:</strong> Preserving and digitizing traditional Tamil astrological wisdom
            </div>
            <div data-testid="text-developer-mission">
              <strong>Mission:</strong> Making authentic muhurtham calculations accessible to the global Tamil community
            </div>
          </div>
          <div className="bg-amber-50 rounded p-3 border border-amber-200 text-amber-800">
            <div className="font-medium mb-1">Disclaimer:</div>
            <div className="text-xs" data-testid="text-disclaimer">
              This app is based on traditional Tamil astrological texts and calculations. 
              Results should be used for guidance purposes. For important life events, 
              please consult with qualified traditional astrologers.
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6" data-testid="card-about">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <Info className="w-5 h-5 text-purple-600" data-testid="icon-about" />
          குறிப்பு / About
        </h3>
        <div className="text-sm text-gray-600 space-y-2">
          <p data-testid="text-about-description">
            இந்த முகூர்த்த கணிப்பான் பாரம்பரிய தமிழ் ஜோதிட முறைகளின் அடிப்படையில் உருவாக்கப்பட்டுள்ளது.
          </p>
          <p className="font-medium text-purple-700" data-testid="text-about-developer">
            Developer: Sivaraman Rajagopal | Traditional Tamil Astrology • Modern Technology
          </p>
          <p data-testid="text-about-version">Version 1.0 | Built with traditional Tamil astrological principles</p>
        </div>
      </div>
    </div>
  );
}
