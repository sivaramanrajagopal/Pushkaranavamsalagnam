export interface NavamshaRange {
  name: string;
  start: number;
  end: number;
  nakshatra: string;
  tamilNakshatra: string;
  pada: number;
  lord: string;
  lordEnglish: string;
}

export interface RasiData {
  name: string;
  tamilName: string;
  start: number;
  end: number;
  pushkara: number;
  element: string;
  navamshaRanges: NavamshaRange[];
}

export const rasiData: Record<string, RasiData> = {
  // அக்கினி ராசிகள் - FIRE Signs
  mesha: { 
    name: 'மேஷம்', 
    tamilName: 'மேஷம் (Mesha)', 
    start: 0, 
    end: 30, 
    pushkara: 21, 
    element: 'அக்கினி',
    navamshaRanges: [
      { name: 'பரணி', start: 20, end: 23.33, nakshatra: 'Bharani', tamilNakshatra: 'பரணி', pada: 3, lord: 'சுக்கிரன்', lordEnglish: 'Venus' },
      { name: 'கிருத்திகை', start: 26.67, end: 30, nakshatra: 'Krittika', tamilNakshatra: 'கிருத்திகை', pada: 1, lord: 'சூரியன்', lordEnglish: 'Sun' }
    ]
  },
  simham: { 
    name: 'சிம்ஹம்', 
    tamilName: 'சிம்ஹம் (Simham)', 
    start: 120, 
    end: 150, 
    pushkara: 21, 
    element: 'அக்கினி',
    navamshaRanges: [
      { name: 'பூர்வபல்குனி', start: 140, end: 143.33, nakshatra: 'Purva Phalguni', tamilNakshatra: 'பூர்வபல்குனி', pada: 3, lord: 'சுக்கிரன்', lordEnglish: 'Venus' },
      { name: 'உத்தரபல்குனி', start: 146.67, end: 150, nakshatra: 'Uttara Phalguni', tamilNakshatra: 'உத்தரபல்குனி', pada: 1, lord: 'குரு', lordEnglish: 'Jupiter' }
    ]
  },
  danusu: { 
    name: 'தனுசு', 
    tamilName: 'தனுசு (Danusu)', 
    start: 240, 
    end: 270, 
    pushkara: 21, 
    element: 'அக்கினி',
    navamshaRanges: [
      { name: 'பூர்வாஷாடா', start: 260, end: 263.33, nakshatra: 'Purva Ashadha', tamilNakshatra: 'பூர்வாஷாடா', pada: 3, lord: 'சுக்கிரன்', lordEnglish: 'Venus' },
      { name: 'உத்தராஷாடா', start: 266.67, end: 270, nakshatra: 'Uttara Ashadha', tamilNakshatra: 'உத்தராஷாடா', pada: 1, lord: 'சூரியன்', lordEnglish: 'Sun' }
    ]
  },

  // பூமி ராசிகள் - EARTH Signs
  risham: { 
    name: 'ரிஷபம்', 
    tamilName: 'ரிஷபம் (Risham)', 
    start: 30, 
    end: 60, 
    pushkara: 14, 
    element: 'பூமி',
    navamshaRanges: [
      { name: 'கிருத்திகை', start: 36.67, end: 40, nakshatra: 'Krittika', tamilNakshatra: 'கிருத்திகை', pada: 4, lord: 'சூரியன்', lordEnglish: 'Sun' },
      { name: 'ரோகிணி', start: 43.33, end: 46.67, nakshatra: 'Rohini', tamilNakshatra: 'ரோகிணி', pada: 2, lord: 'சந்திரன்', lordEnglish: 'Moon' }
    ]
  },
  kanni: { 
    name: 'கன்னி', 
    tamilName: 'கன்னி (Kanni)', 
    start: 150, 
    end: 180, 
    pushkara: 14, 
    element: 'பூமி',
    navamshaRanges: [
      { name: 'உத்தரபல்குனி', start: 156.67, end: 160, nakshatra: 'Uttara Phalguni', tamilNakshatra: 'உத்தரபல்குனி', pada: 4, lord: 'குரு', lordEnglish: 'Jupiter' },
      { name: 'ஹஸ்தம்', start: 163.33, end: 166.67, nakshatra: 'Hasta', tamilNakshatra: 'ஹஸ்தம்', pada: 2, lord: 'சந்திரன்', lordEnglish: 'Moon' }
    ]
  },
  makaram: { 
    name: 'மகரம்', 
    tamilName: 'மகரம் (Makaram)', 
    start: 270, 
    end: 300, 
    pushkara: 14, 
    element: 'பூமி',
    navamshaRanges: [
      { name: 'உத்தராஷாடா', start: 276.67, end: 280, nakshatra: 'Uttara Ashadha', tamilNakshatra: 'உத்தராஷாடா', pada: 3, lord: 'சூரியன்', lordEnglish: 'Sun' },
      { name: 'திருவோணம்', start: 283.33, end: 286.67, nakshatra: 'Shravana', tamilNakshatra: 'திருவோணம்', pada: 2, lord: 'சந்திரன்', lordEnglish: 'Moon' }
    ]
  },

  // காற்று ராசிகள் - AIR Signs
  mithunam: { 
    name: 'மிதுனம்', 
    tamilName: 'மிதுனம் (Mithunam)', 
    start: 60, 
    end: 90, 
    pushkara: 24, 
    element: 'காற்று',
    navamshaRanges: [
      { name: 'ஆருத்ரா', start: 76.67, end: 80, nakshatra: 'Ardra', tamilNakshatra: 'ஆருத்ரா', pada: 4, lord: 'ராகு', lordEnglish: 'Rahu' },
      { name: 'புனர்வசு', start: 83.33, end: 86.67, nakshatra: 'Punarvasu', tamilNakshatra: 'புனர்வசு', pada: 2, lord: 'குரு', lordEnglish: 'Jupiter' }
    ]
  },
  thulam: { 
    name: 'துலாம்', 
    tamilName: 'துலாம் (Thulam)', 
    start: 180, 
    end: 210, 
    pushkara: 24, 
    element: 'காற்று',
    navamshaRanges: [
      { name: 'சுவாதி', start: 196.67, end: 200, nakshatra: 'Swati', tamilNakshatra: 'சுவாதி', pada: 4, lord: 'ராகு', lordEnglish: 'Rahu' },
      { name: 'விசாகம்', start: 203.33, end: 206.67, nakshatra: 'Vishakha', tamilNakshatra: 'விசாகம்', pada: 2, lord: 'குரு', lordEnglish: 'Jupiter' }
    ]
  },
  kumbam: { 
    name: 'கும்பம்', 
    tamilName: 'கும்பம் (Kumbam)', 
    start: 300, 
    end: 330, 
    pushkara: 24, 
    element: 'காற்று',
    navamshaRanges: [
      { name: 'சதயம்', start: 316.67, end: 320, nakshatra: 'Shatabhisha', tamilNakshatra: 'சதயம்', pada: 4, lord: 'ராகு', lordEnglish: 'Rahu' },
      { name: 'பூர்வபத்ரபாதா', start: 323.33, end: 326.67, nakshatra: 'Purva Bhadrapada', tamilNakshatra: 'பூர்வபத்ரபாதா', pada: 2, lord: 'குரு', lordEnglish: 'Jupiter' }
    ]
  },

  // நீர் ராசிகள் - WATER Signs
  kadagam: { 
    name: 'கடகம்', 
    tamilName: 'கடகம் (Kadagam)', 
    start: 90, 
    end: 120, 
    pushkara: 7, 
    element: 'நீர்',
    navamshaRanges: [
      { name: 'புனர்வசு', start: 90, end: 93.33, nakshatra: 'Punarvasu', tamilNakshatra: 'புனர்வசு', pada: 4, lord: 'குரு', lordEnglish: 'Jupiter' },
      { name: 'பூசம்', start: 96.67, end: 100, nakshatra: 'Pushya', tamilNakshatra: 'பூசம்', pada: 2, lord: 'சனி', lordEnglish: 'Saturn' }
    ]
  },
  vrichigam: { 
    name: 'விருச்சிகம்', 
    tamilName: 'விருச்சிகம் (Vrichigam)', 
    start: 210, 
    end: 240, 
    pushkara: 7, 
    element: 'நீர்',
    navamshaRanges: [
      { name: 'விசாகம்', start: 210, end: 213.33, nakshatra: 'Vishakha', tamilNakshatra: 'விசாகம்', pada: 4, lord: 'குரு', lordEnglish: 'Jupiter' },
      { name: 'அனுராதா', start: 216.67, end: 220, nakshatra: 'Anuradha', tamilNakshatra: 'அனுராதா', pada: 2, lord: 'சனி', lordEnglish: 'Saturn' }
    ]
  },
  meenam: { 
    name: 'மீனம்', 
    tamilName: 'மீனம் (Meenam)', 
    start: 330, 
    end: 360, 
    pushkara: 7, 
    element: 'நீர்',
    navamshaRanges: [
      { name: 'பூர்வபத்ரபாதா', start: 330, end: 333.33, nakshatra: 'Purva Bhadrapada', tamilNakshatra: 'பூர்வபத்ரபாதா', pada: 4, lord: 'குரு', lordEnglish: 'Jupiter' },
      { name: 'உத்தரபத்ரபாதா', start: 336.67, end: 340, nakshatra: 'Uttara Bhadrapada', tamilNakshatra: 'உத்தரபத்ரபாதா', pada: 2, lord: 'சனி', lordEnglish: 'Saturn' }
    ]
  }
};
