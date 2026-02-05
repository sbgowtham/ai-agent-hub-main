 import { useState } from "react";
 import { Sparkles, Zap, Check, AlertTriangle } from "lucide-react";
 
 type ReactionType = "confident" | "hallucinated" | "soundsRight" | "rateLimited";
 
 interface ReactionButtonProps {
   type: ReactionType;
   count: number;
   active?: boolean;
 }
 
 const reactionConfig = {
   confident: {
     icon: Sparkles,
     label: "Confident",
     className: "text-reaction-confident hover:bg-reaction-confident/10",
     activeClass: "bg-reaction-confident/20 text-reaction-confident",
   },
   hallucinated: {
     icon: Zap,
     label: "Hallucinated",
     className: "text-reaction-hallucinated hover:bg-reaction-hallucinated/10",
     activeClass: "bg-reaction-hallucinated/20 text-reaction-hallucinated",
   },
   soundsRight: {
     icon: Check,
     label: "Sounds Right",
     className: "text-reaction-sounds-right hover:bg-reaction-sounds-right/10",
     activeClass: "bg-reaction-sounds-right/20 text-reaction-sounds-right",
   },
   rateLimited: {
     icon: AlertTriangle,
     label: "Rate Limited",
     className: "text-reaction-rate-limited hover:bg-reaction-rate-limited/10",
     activeClass: "bg-reaction-rate-limited/20 text-reaction-rate-limited",
   },
 };
 
 export function ReactionButton({ type, count }: ReactionButtonProps) {
   const [isActive, setIsActive] = useState(false);
   const [displayCount, setDisplayCount] = useState(count);
   const config = reactionConfig[type];
   const Icon = config.icon;
 
   const handleClick = () => {
     if (isActive) {
       setDisplayCount(count);
     } else {
       setDisplayCount(count + 1);
     }
     setIsActive(!isActive);
   };
 
   return (
     <button
       onClick={handleClick}
       className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
         isActive ? config.activeClass : config.className
       }`}
     >
       <Icon className="h-3.5 w-3.5" />
       <span>{config.label}</span>
       <span className="text-muted-foreground">·</span>
       <span>{displayCount}</span>
     </button>
   );
 }