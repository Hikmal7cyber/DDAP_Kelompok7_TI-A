import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function PersonalizationSidebar() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedTaste, setSelectedTaste] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

  return (
    <div className="w-80 bg-card border-l border-border flex flex-col h-full overflow-y-auto">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2" style={{ color: '#CC5500' }}>
          PERSONALIZE PAGE
        </h2>
        <p className="text-sm text-muted-foreground mb-6">
          Haloo, Waven<br />
          Yuk, Kita cari makanan yang cocok dengan mood-mu saat ini! Isi pertanyaan berikut untuk mendapatkan rekomendasi yang paling sesuai untuk kamu 😊
        </p>

        {/* Question 1: Mood */}
        <div className="mb-6">
          <p className="font-medium mb-3">Lagi gimana rasa atas hari ini? 🍽️</p>
          <div className="space-y-2">
            {['Senang 😊', 'Tegas 😐', 'Sedih / ngga 😢'].map((mood) => (
              <button
                key={mood}
                onClick={() => setSelectedMood(mood)}
                className={`w-full p-3 rounded-lg text-left transition-all border ${
                  selectedMood === mood
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-secondary text-foreground border-border hover:bg-accent'
                }`}
              >
                {mood}
              </button>
            ))}
          </div>
        </div>

        {/* Question 2: Taste Preference */}
        <div className="mb-6">
          <p className="font-medium mb-3">Selanjutnya laper kamu, seleramu? 😋</p>
          <div className="space-y-2">
            {['Lezat indomie 🍝', 'Lezat terpikir 🍜', 'Lezat banget 🍕'].map((taste) => (
              <button
                key={taste}
                onClick={() => setSelectedTaste(taste)}
                className={`w-full p-3 rounded-lg text-left transition-all border ${
                  selectedTaste === taste
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-secondary text-foreground border-border hover:bg-accent'
                }`}
              >
                {taste}
              </button>
            ))}
          </div>
        </div>

        {/* Question 3: Budget */}
        <div className="mb-6">
          <p className="font-medium mb-3">Cumon hari ini lagi bayak gimana ni tempatnya? 🪙</p>
          <div className="space-y-2">
            {['Pintar hemat 🤑', 'Hedon / dirum', 'Berawas / ajaak'].map((budget) => (
              <button
                key={budget}
                onClick={() => setSelectedBudget(budget)}
                className={`w-full p-3 rounded-lg text-left transition-all border ${
                  selectedBudget === budget
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-secondary text-foreground border-border hover:bg-accent'
                }`}
              >
                {budget}
              </button>
            ))}
          </div>
        </div>

        {/* Finish Button */}
        <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
          Finish
          <ArrowRight className="w-5 h-5" />
        </button>

        <p className="text-xs text-muted-foreground mt-4 italic">
          Opsional: kamu juga boleh pilang urut data pengguna atau isian tambahan.
        </p>
      </div>
    </div>
  );
}