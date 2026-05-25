# MoodFoodPicker 🍽️

Platform pesan-antar makanan yang membantu Anda menemukan makanan sempurna berdasarkan preferensi rasa, tingkat lapar, dan cuaca.

## 🚀 Cara Menjalankan di Komputer Lokal

### 1. Install Dependencies

Pastikan Anda sudah install **Node.js** (versi 16 atau lebih baru).

Pilih salah satu package manager:

**Dengan pnpm (recommended):**
```bash
pnpm install
```

**Atau dengan npm:**
```bash
npm install
```

**Atau dengan yarn:**
```bash
yarn install
```

### 2. Jalankan Development Server

**Dengan pnpm:**
```bash
pnpm dev
```

**Dengan npm:**
```bash
npm run dev
```

**Dengan yarn:**
```bash
yarn dev
```

Website akan berjalan di: **http://localhost:5173**

### 3. Build untuk Production

**Dengan pnpm:**
```bash
pnpm build
```

**Dengan npm:**
```bash
npm run build
```

Hasil build akan ada di folder `dist/`

### 4. Preview Production Build

**Dengan pnpm:**
```bash
pnpm preview
```

**Dengan npm:**
```bash
npm run preview
```

## 📁 Struktur Project

```
code/
├── src/
│   ├── app/
│   │   ├── components/          # Semua React components
│   │   │   ├── LandingPage.tsx  # Halaman awal
│   │   │   ├── LoginModal.tsx   # Modal login
│   │   │   ├── PersonalizationPage.tsx  # Halaman personalisasi
│   │   │   ├── NavigationSidebar.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   ├── QuickFilters.tsx
│   │   │   ├── TopBanners.tsx
│   │   │   ├── RecentWins.tsx   # Food Categories
│   │   │   ├── GameSections.tsx # Restaurant Listings
│   │   │   └── ...
│   │   └── App.tsx              # Main app component
│   ├── styles/
│   │   ├── index.css            # Entry CSS
│   │   ├── globals.css          # Global styles
│   │   └── theme.css            # Theme variables
│   └── main.tsx                 # Entry point
├── index.html                   # HTML template
├── package.json
├── vite.config.ts
└── README.md

```

## 🎨 Fitur

✅ **Landing Page** - Tampilan awal dengan preview makanan  
✅ **Login/Sign Up** - Autentikasi user  
✅ **Personalisasi** - 3 pertanyaan untuk rekomendasi:
   - Lagi pengen rasa apa? (Gurih, Manis, Pedas, Segar)
   - Seberapa lapar? (Ngemil, Lapar sedang, Lapar banget)
   - Cuaca? (Panas, Hujan, Berawan)  
✅ **Dashboard** - Rekomendasi restoran terdekat  
✅ **PickerBot** - Sapaan dinamis berdasarkan cuaca  
✅ **Responsive** - Mobile, Tablet, Desktop

## 🎨 Design System

- **Primary Color:** #CC5500 (Orange)
- **Background:** #EBEBEB (Light Gray)
- **Font:** Archivo
- **Theme:** Light only

## 🛠️ Tech Stack

- **React** 18.3.1
- **TypeScript**
- **Vite** 6.3.5
- **Tailwind CSS** 4.1.12
- **Lucide React** (Icons)
- **Radix UI** (Components)

## 📝 Catatan

- Website ini dibuat dengan Figma Make
- Semua gambar makanan dari Unsplash
- Tidak ada backend, menggunakan mock data

## 📄 License

Private - Personal Project
