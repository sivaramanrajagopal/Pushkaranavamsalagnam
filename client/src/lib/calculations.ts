import { rasiData, RasiData } from './astrological-data';

export interface NavamsaTimeRange {
  name: string;
  startTime: string;
  endTime: string;
  degreeRange: string;
  nakshatra: string;
  tamilNakshatra: string;
  pada: number;
  lord: string;
  lordEnglish: string;
}

export interface CalculationResults {
  rasi: RasiData & { key: string };
  pushkaraTime: string;
  pushkaraDegree: string;
  navamsaRanges: NavamsaTimeRange[];
  sunDegree: number;
  calculationDetails: {
    pushkaraTimeDiff: string;
    pushkaraMinutes: string;
  };
}

export const getRasiFromDegree = (degree: number): (RasiData & { key: string }) | null => {
  const deg = parseFloat(degree.toString());
  for (const [key, rasi] of Object.entries(rasiData)) {
    if (deg >= rasi.start && deg < rasi.end) {
      return { key, ...rasi };
    }
  }
  return null;
};

export const degreesToMinutes = (degrees: number): number => degrees * 4;

export const addMinutesToTime = (timeString: string, minutesToAdd: number): string => {
  const [hours, minutes] = timeString.split(':').map(Number);
  const totalMinutes = hours * 60 + minutes + minutesToAdd;
  const newHours = Math.floor(totalMinutes / 60) % 24;
  const newMins = Math.round(totalMinutes % 60);
  return `${newHours.toString().padStart(2, '0')}:${newMins.toString().padStart(2, '0')}`;
};

export const formatTime = (timeString: string): string => {
  const [hours, minutes] = timeString.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'மாலை' : 'காலை';
  const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  return `${displayHour}:${minutes} ${ampm}`;
};

export const calculateNavamsaRanges = (rasi: RasiData, sunDeg: number, sunriseTime: string): NavamsaTimeRange[] => {
  const ranges: NavamsaTimeRange[] = [];
  if (!rasi.navamshaRanges || !Array.isArray(rasi.navamshaRanges)) {
    return ranges;
  }
  rasi.navamshaRanges.forEach((navamsha) => {
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

export const calculateMuhurtham = (
  sunriseTime: string, 
  sunDegree: string, 
  manualRasi?: string
): CalculationResults | null => {
  if (!sunriseTime || !sunDegree) return null;
  const sunDeg = parseFloat(sunDegree);
  if (sunDeg < 0 || sunDeg >= 360) return null;

  let currentRasi = manualRasi && rasiData[manualRasi] ? { key: manualRasi, ...rasiData[manualRasi] } : getRasiFromDegree(sunDeg);
  if (!currentRasi) return null;

  const pushkaraDegree = currentRasi.start + currentRasi.pushkara;
  const pushkaraTimeDiff = pushkaraDegree - sunDeg;
  const pushkaraMinutes = degreesToMinutes(pushkaraTimeDiff);
  const pushkaraTime = addMinutesToTime(sunriseTime, pushkaraMinutes);
  const navamsaRanges = calculateNavamsaRanges(currentRasi, sunDeg, sunriseTime);

  return {
    rasi: currentRasi,
    pushkaraTime: formatTime(pushkaraTime),
    pushkaraDegree: pushkaraDegree.toFixed(2),
    navamsaRanges,
    sunDegree: sunDeg,
    calculationDetails: {
      pushkaraTimeDiff: pushkaraTimeDiff.toFixed(2),
      pushkaraMinutes: pushkaraMinutes.toFixed(0)
    }
  };
};
