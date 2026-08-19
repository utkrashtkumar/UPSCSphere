'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { 
  X, 
  Download, 
  Copy, 
  Check, 
  Share2, 
  Flame, 
  Trophy, 
  Sparkles, 
  Target, 
  Clock, 
  Award,
  CheckCircle2,
  XCircle,
  MinusCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { QuizResult } from '@/lib/types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  result: QuizResult;
  userName?: string;
  userStreak?: number;
}

export default function ScoreShareCardModal({
  isOpen,
  onClose,
  result,
  userName = 'Civil Services Aspirant',
  userStreak = 3,
}: Props) {
  const [copied, setCopied] = useState(false);
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  if (!isOpen) return null;

  // Generate Wordle-style text matrix (🟩 / 🟥 / ⬜)
  const generateTextMatrix = () => {
    let matrix = '';
    result.answers.slice(0, 20).forEach((ans, idx) => {
      if (ans.selectedOption === null || ans.selectedOption === undefined) {
        matrix += '⬜';
      } else if (ans.isCorrect) {
        matrix += '🟩';
      } else {
        matrix += '🟥';
      }
      if ((idx + 1) % 5 === 0 && idx < 19) matrix += ' ';
    });
    return matrix;
  };

  // Copy formatted text snippet for WhatsApp / Telegram
  const handleCopyText = () => {
    const matrix = generateTextMatrix();
    const text = `🏆 UPSC Prelims Scorecard — UPSCSphere\n` +
      `📝 ${result.title}\n` +
      `🎯 Score: ${result.score} / ${result.maxScore} pts (${result.percentile}th %ile)\n` +
      `⚡ Accuracy: ${result.accuracy}% | ⏱️ Time: ${Math.floor(result.timeSpentSeconds / 60)}m ${result.timeSpentSeconds % 60}s\n` +
      `🔥 Streak: ${userStreak} Days\n\n` +
      `${matrix}\n\n` +
      `Attempt this test 100% free on UPSCSphere:\nhttps://www.upscsphere.in/quiz/create`;

    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Share to WhatsApp
  const handleShareWhatsApp = () => {
    const matrix = generateTextMatrix();
    const text = encodeURIComponent(
      `🏆 *UPSC Prelims Scorecard — UPSCSphere*\n` +
      `📝 ${result.title}\n` +
      `🎯 Score: *${result.score} / ${result.maxScore}* pts (${result.percentile}th %ile)\n` +
      `⚡ Accuracy: *${result.accuracy}%* | ⏱️ Time: ${Math.floor(result.timeSpentSeconds / 60)}m ${result.timeSpentSeconds % 60}s\n` +
      `🔥 Study Streak: ${userStreak} Days\n\n` +
      `${matrix}\n\n` +
      `Can you beat my score? Attempt free on:\nhttps://www.upscsphere.in/quiz/create`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  // Render high-resolution PNG on Canvas and trigger download
  const handleDownloadPNG = () => {
    setIsGeneratingImage(true);
    const canvas = canvasRef.current;
    if (!canvas) {
      setIsGeneratingImage(false);
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      setIsGeneratingImage(false);
      return;
    }

    // Set dimensions (1080x1350 - perfect for Instagram Story / WhatsApp Status & Social Feed)
    const width = 1080;
    const height = 1350;
    canvas.width = width;
    canvas.height = height;

    // 1. Background (Deep Dark Slate with smooth gradient)
    const bgGrad = ctx.createLinearGradient(0, 0, width, height);
    bgGrad.addColorStop(0, '#050b14');
    bgGrad.addColorStop(0.5, '#0a1526');
    bgGrad.addColorStop(1, '#050b14');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // 2. Ambient Tricolour Top Stream Line
    const tricolorGrad = ctx.createLinearGradient(0, 0, width, 0);
    tricolorGrad.addColorStop(0, '#f97316');
    tricolorGrad.addColorStop(0.5, '#f59e0b');
    tricolorGrad.addColorStop(1, '#10b981');
    ctx.fillStyle = tricolorGrad;
    ctx.fillRect(0, 0, width, 14);

    // 3. Subtle ambient glow
    const radialGlow = ctx.createRadialGradient(width / 2, 400, 50, width / 2, 400, 600);
    radialGlow.addColorStop(0, 'rgba(249, 115, 22, 0.12)');
    radialGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = radialGlow;
    ctx.fillRect(0, 0, width, height);

    // 4. Header Brand Text (Dynamically measured to avoid any text overlap)
    ctx.font = 'bold 36px "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    const brandPart1 = 'UPSCSphere';
    const brandPart2 = '  Prelims Test Suite';
    const w1 = ctx.measureText(brandPart1).width;
    const w2 = ctx.measureText(brandPart2).width;
    const totalBrandW = w1 + w2;
    const brandStartX = (width - totalBrandW) / 2;

    ctx.textAlign = 'left';
    ctx.fillStyle = '#f97316';
    ctx.fillText(brandPart1, brandStartX, 100);

    ctx.fillStyle = '#ffffff';
    ctx.fillText(brandPart2, brandStartX + w1, 100);

    ctx.textAlign = 'center';
    ctx.font = 'bold 22px "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('OFFICIAL DIAGNOSTIC SCORECARD', width / 2, 145);

    // 5. Test Title Box (Safe truncation)
    ctx.font = 'bold 38px "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#ffffff';
    const cleanTitle = result.title.length > 34 ? result.title.slice(0, 32) + '...' : result.title;
    ctx.fillText(cleanTitle, width / 2, 230);

    ctx.font = '24px "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText(`Aspirant: ${userName} • 🔥 ${userStreak} Day Streak`, width / 2, 280);

    // 6. Main Hero Score Card (Glass Container)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.strokeStyle = 'rgba(249, 115, 22, 0.4)';
    ctx.lineWidth = 3;
    
    // Rounded rect
    const cardX = 80;
    const cardY = 330;
    const cardW = 920;
    const cardH = 460;
    const r = 32;

    ctx.beginPath();
    ctx.moveTo(cardX + r, cardY);
    ctx.lineTo(cardX + cardW - r, cardY);
    ctx.quadraticCurveTo(cardX + cardW, cardY, cardX + cardW, cardY + r);
    ctx.lineTo(cardX + cardW, cardY + cardH - r);
    ctx.quadraticCurveTo(cardX + cardW, cardY + cardH, cardX + cardW - r, cardY + cardH);
    ctx.lineTo(cardX + r, cardY + cardH);
    ctx.quadraticCurveTo(cardX, cardY + cardH, cardX, cardY + cardH - r);
    ctx.lineTo(cardX, cardY + r);
    ctx.quadraticCurveTo(cardX, cardY, cardX + r, cardY);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Score label
    ctx.textAlign = 'center';
    ctx.font = 'bold 26px "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#f59e0b';
    ctx.fillText('NET PRELIMS SCORE', width / 2, cardY + 70);

    // Big Score (Dynamically centered compound string)
    ctx.font = '900 100px "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    const scoreStr = `${result.score}`;
    const scoreW = ctx.measureText(scoreStr).width;

    ctx.font = 'bold 44px "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    const maxScoreStr = `  / ${result.maxScore} pts`;
    const maxScoreW = ctx.measureText(maxScoreStr).width;

    const totalScoreW = scoreW + maxScoreW;
    const scoreStartX = (width - totalScoreW) / 2;

    ctx.textAlign = 'left';
    ctx.font = '900 100px "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(scoreStr, scoreStartX, cardY + 190);

    ctx.font = 'bold 44px "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText(maxScoreStr, scoreStartX + scoreW, cardY + 182);

    // Metric Badges Bar (Percentile & Accuracy & Time)
    const metricsY = cardY + 280;
    
    // Percentile Pill
    ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
    ctx.strokeStyle = 'rgba(16, 185, 129, 0.5)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(140, metricsY, 360, 110, [20]);
    ctx.fill();
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.font = 'bold 22px "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#10b981';
    ctx.fillText('ALL-INDIA PERCENTILE', 320, metricsY + 45);
    ctx.font = '900 36px "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${result.percentile}th %ile`, 320, metricsY + 90);

    // Accuracy Pill
    ctx.fillStyle = 'rgba(59, 130, 246, 0.15)';
    ctx.strokeStyle = 'rgba(59, 130, 246, 0.5)';
    ctx.beginPath();
    ctx.roundRect(580, metricsY, 360, 110, [20]);
    ctx.fill();
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.font = 'bold 22px "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#60a5fa';
    ctx.fillText('ACCURACY RATE', 760, metricsY + 45);
    ctx.font = '900 36px "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${result.accuracy}%`, 760, metricsY + 90);

    // 7. Stat Details Grid (Correct, Wrong, Time Spent)
    const statsY = 840;
    ctx.textAlign = 'center';
    ctx.font = 'bold 24px "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText(`✅ Correct: ${result.correct}   •   ❌ Wrong: ${result.wrong}   •   ⏱️ Time: ${Math.floor(result.timeSpentSeconds / 60)}m ${result.timeSpentSeconds % 60}s`, width / 2, statsY);

    // 8. Visual Question Performance Grid (Wordle Squares)
    const gridY = 910;
    const totalAns = Math.min(20, result.answers.length);
    const boxSize = 34;
    const gap = 12;
    const totalRowWidth = 10 * boxSize + 9 * gap;
    const startX = (width - totalRowWidth) / 2;

    result.answers.slice(0, 20).forEach((ans, idx) => {
      const col = idx % 10;
      const row = Math.floor(idx / 10);
      const bx = startX + col * (boxSize + gap);
      const by = gridY + row * (boxSize + gap);

      if (ans.selectedOption === null || ans.selectedOption === undefined) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
      } else if (ans.isCorrect) {
        ctx.fillStyle = '#10b981';
      } else {
        ctx.fillStyle = '#ef4444';
      }

      ctx.beginPath();
      ctx.roundRect(bx, by, boxSize, boxSize, [8]);
      ctx.fill();
    });

    // 9. Footer CTA / QR / Website URL
    ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
    ctx.fillRect(0, 1180, width, 170);

    ctx.font = 'bold 28px "Inter", "Segoe UI", sans-serif';
    ctx.fillStyle = '#f97316';
    ctx.fillText('www.upscsphere.in', width / 2, 1240);

    ctx.font = '20px "Inter", "Segoe UI", sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText('100% Free UPSC Prelims Mock Tests & Standard Book Citations', width / 2, 1285);

    // Download image
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `UPSCSphere-Scorecard-${result.score}pts.png`;
    link.href = dataUrl;
    link.click();
    setIsGeneratingImage(false);

    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    } catch {
      // silent
    }
  };

  const optionEmojis = result.answers.slice(0, 20);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      
      {/* Hidden Canvas for High-DPI PNG generation */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      <div className="relative w-full max-w-lg liquid-glass-card rounded-3xl p-6 sm:p-8 border-orange-500/40 bg-slate-950/95 text-white shadow-2xl space-y-6 animate-scale-up my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header */}
        <div className="text-center space-y-1 pt-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-black border border-orange-500/20 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Shareable Score Card</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Celebrate &amp; Share Your Score
          </h3>
          <p className="text-xs text-slate-400">
            Share your test performance on WhatsApp Status, Instagram Stories, or Telegram!
          </p>
        </div>

        {/* Live Visual Score Card Preview */}
        <div className="p-6 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-orange-500/30 space-y-5 relative overflow-hidden shadow-xl">
          <div className="h-[2px] w-full running-tricolor-line absolute top-0 left-0 right-0" />

          {/* Platform Branding */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm text-white">
                UPSC<span className="text-orange-500">Sphere</span>
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Scorecard
              </span>
            </div>
            <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>{userStreak}d Streak</span>
            </span>
          </div>

          {/* Test Name & User */}
          <div>
            <h4 className="font-black text-base text-white line-clamp-1">{result.title}</h4>
            <span className="text-xs text-slate-400 font-medium">{userName}</span>
          </div>

          {/* Big Score Box */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
              Net Score
            </span>
            <div className="text-4xl font-black text-white tracking-tight">
              {result.score} <span className="text-sm font-normal text-slate-400">/ {result.maxScore} pts</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-xs pt-1">
              <span className="font-bold text-emerald-400">{result.percentile}th %ile</span>
              <span className="text-slate-600">•</span>
              <span className="font-bold text-blue-400">{result.accuracy}% Accuracy</span>
            </div>
          </div>

          {/* Visual MCQ Grid */}
          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block text-center">
              Question Accuracy Matrix
            </span>
            <div className="flex items-center justify-center gap-1.5 flex-wrap">
              {optionEmojis.map((ans, idx) => (
                <div
                  key={idx}
                  className={`w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold ${
                    ans.selectedOption === null || ans.selectedOption === undefined
                      ? 'bg-white/10 text-slate-400'
                      : ans.isCorrect
                      ? 'bg-emerald-500 text-white'
                      : 'bg-rose-500 text-white'
                  }`}
                >
                  {idx + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Footer watermark */}
          <div className="pt-2 text-center text-[10px] text-slate-500 font-medium">
            www.upscsphere.in • 100% Free UPSC Prelims Portal
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={handleDownloadPNG}
              disabled={isGeneratingImage}
              className="py-3 px-4 rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 text-white font-black text-xs hover:scale-[1.01] transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 cursor-pointer disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              <span>{isGeneratingImage ? 'Exporting...' : 'Download Image (PNG)'}</span>
            </button>

            <button
              type="button"
              onClick={handleShareWhatsApp}
              className="py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>Share on WhatsApp</span>
            </button>
          </div>

          <button
            type="button"
            onClick={handleCopyText}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-900 border border-white/10 hover:border-orange-500/50 text-slate-300 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Score Summary Copied to Clipboard!' : 'Copy Formatted Text (Wordle Style)'}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
