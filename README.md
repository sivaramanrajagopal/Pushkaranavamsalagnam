# தமிழ் முகூர்த்த கணிப்பான் | Tamil Muhurtham Calculator

A traditional Tamil astrological calculator for determining auspicious times (muhurtham) based on Pushkara Amsa calculations. This application combines ancient Tamil astrological wisdom with modern web technology to provide accurate muhurtham calculations for ceremonies and important events.

## 🌟 Features

- **Authentic Tamil Astrology**: Based on traditional Pushkara Amsa calculations
- **Real-time Calculations**: Instant results as you input data
- **Comprehensive Analysis**: Detailed nakshatra lord-pada rule verification
- **Multi-tab Interface**: Results, Analysis, Reference Guide, and Settings
- **Tamil + Sanskrit Interface**: Traditional mantras and Tamil text
- **Mobile Responsive**: Works perfectly on all devices
- **Element-based Grouping**: Fire, Earth, Air, Water rasi classifications

## 🎯 Astrological Features

### Lord Rules Validation
- **Venus (சுக்கிரன்)**: Only Pada 3 is pushkara
- **Sun (சூரியன்)**: Pada 1 & 4 are pushkara
- **Moon (சந்திரன்)**: Only Pada 2 is pushkara
- **Rahu (ராகு)**: Only Pada 4 is pushkara
- **Jupiter (குரு)**: Pada 1, 2, 4 are pushkara
- **Saturn (சனி)**: Only Pada 2 is pushkara

### Supported Calculations
- Pushkara time calculations for all 12 rasi signs
- Navamsha period analysis with nakshatra details
- Element-wise rasi grouping (அக்கினி, பூமி, காற்று, நீர்)
- Degree-to-time conversions for accurate muhurtham timing

## 🚀 Deployment on Vercel

### Prerequisites
- GitHub account
- Vercel account
- Node.js and npm installed locally (for development)

### Quick Deploy
1. **Fork/Clone this repository** to your GitHub account
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect the Vite framework

3. **Deploy Settings**:
   - **Framework Preset**: Vite
   - **Build Command**: `vite build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Deploy**: Click Deploy and your app will be live!

### Manual Deployment Steps

```bash
# 1. Clone the repository
git clone https://github.com/sivaramanrajagopal/Pushkaranavamsalagnam.git
cd Pushkaranavamsalagnam

# 2. Install dependencies
npm install

# 3. Build for production
npm run build

# 4. Deploy to Vercel (if using Vercel CLI)
npx vercel --prod
```

### Environment Configuration

The app runs entirely on the frontend with no backend dependencies for deployment. All calculations are performed client-side using pure JavaScript/TypeScript.

### Custom Domain Setup

After deployment, you can:
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Domains
4. Add your custom domain

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **UI Framework**: Tailwind CSS + Radix UI components
- **Build Tool**: Vite
- **Deployment**: Vercel (recommended)
- **Styling**: shadcn/ui component library
- **Icons**: Lucide React

## 📱 Usage

1. **Enter Sunrise Time**: Input your local sunrise time
2. **Sun's Degree**: Enter the sun's celestial position (0-360°)
3. **Optional Manual Rasi**: Override automatic rasi detection
4. **View Results**: Get pushkara muhurtham times instantly
5. **Detailed Analysis**: Check nakshatra lord-pada rule verification
6. **Reference Guide**: Learn about element classifications and benefits

## 🎨 Features by Tab

### Results Tab (முடிவுகள்)
- Current rasi and element information
- Main pushkara muhurtham time
- Detailed navamsha time ranges
- Planetary benefits for each period

### Analysis Tab (விரிவான பகுப்பாய்வு)
- Nakshatra lord-pada rule validation
- Step-by-step calculation breakdown
- Detailed nakshatra information
- Mathematical formulas used

### Reference Tab (குறிப்பு வழிகாட்டி)
- Complete element classification tables
- Planetary benefit descriptions
- Traditional nakshatra mappings
- Usage guidelines for different ceremonies

### Settings Tab (அமைப்புகள்)
- Developer information and credits
- Application version and sources
- Usage recommendations
- Acknowledgments to Tamil astrological tradition

## 👨‍💻 Developer

**Created by**: Sivaraman Rajagopal
**Mission**: Preserving and digitizing traditional Tamil astrological wisdom
**Goal**: Making authentic muhurtham calculations accessible to the global Tamil community

## 📚 Traditional Sources

This calculator is based on:
- Traditional Tamil astrological texts
- Pushkara Amsa calculation methods
- Navamsha period analysis
- Classical nakshatra lord relationships

## 🙏 Acknowledgments

- Traditional Tamil astrological masters (குருமார்கள்)
- Siddha medicine & astrological literature
- Tamil astronomy researchers
- Global Tamil community

## 📄 License

This project is open source and available under the MIT License.

## 🐛 Contributing

Found an issue or want to improve calculations? Please:
1. Open an issue describing the problem
2. Provide specific examples or traditional references
3. Submit pull requests with improvements

## ⭐ Support

If this calculator helps preserve Tamil astrological traditions, please:
- Star the repository
- Share with the Tamil community
- Provide feedback for improvements
- Contribute to Tamil technology initiatives

---

**Disclaimer**: This application is based on traditional Tamil astrological texts and calculations. Results should be used for guidance purposes. For important life events, please consult with qualified traditional astrologers.

## Live Demo

Visit: [https://pushkaranavamsalagnam.vercel.app](https://pushkaranavamsalagnam.vercel.app)