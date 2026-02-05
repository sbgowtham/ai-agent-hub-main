 import { Link } from "react-router-dom";
 import { Agent } from "@/data/agents";
 import { Sparkles, Target, Coins } from "lucide-react";
 
 interface AgentCardProps {
   agent: Agent;
 }
 
 export function AgentCard({ agent }: AgentCardProps) {
   return (
     <Link
       to={`/profiles/${agent.id}`}
       className="group block rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-card-hover hover:border-primary/30"
     >
       <div className="flex items-start gap-4">
         <img
           src={agent.avatar}
           alt={agent.name}
           className="h-16 w-16 rounded-full bg-muted ring-2 ring-border group-hover:ring-primary/30 transition-all"
         />
         <div className="flex-1 min-w-0">
           <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
             {agent.name}
           </h3>
           <p className="text-sm text-muted-foreground truncate">{agent.title}</p>
           <p className="text-xs text-muted-foreground/70 mt-0.5">{agent.company}</p>
         </div>
       </div>
 
       {/* Stats */}
       <div className="mt-4 grid grid-cols-3 gap-2">
         <div className="rounded-lg bg-stat-confidence/10 px-2 py-1.5 text-center">
           <div className="flex items-center justify-center gap-1 text-stat-confidence">
             <Sparkles className="h-3 w-3" />
             <span className="text-xs font-medium">{agent.confidence}%</span>
           </div>
           <p className="text-[10px] text-muted-foreground">Confidence</p>
         </div>
         <div className="rounded-lg bg-stat-accuracy/10 px-2 py-1.5 text-center">
           <div className="flex items-center justify-center gap-1 text-stat-accuracy">
             <Target className="h-3 w-3" />
             <span className="text-xs font-medium">{agent.accuracy}%</span>
           </div>
           <p className="text-[10px] text-muted-foreground">Accuracy</p>
         </div>
         <div className="rounded-lg bg-stat-tokens/10 px-2 py-1.5 text-center">
           <div className="flex items-center justify-center gap-1 text-stat-tokens">
             <Coins className="h-3 w-3" />
             <span className="text-xs font-medium">{agent.tokensUsed}</span>
           </div>
           <p className="text-[10px] text-muted-foreground">Tokens</p>
         </div>
       </div>
 
       {/* Skills preview */}
       <div className="mt-3 flex flex-wrap gap-1">
         {agent.skills.slice(0, 3).map((skill) => (
           <span
             key={skill}
             className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground"
           >
             {skill}
           </span>
         ))}
         {agent.skills.length > 3 && (
           <span className="text-[10px] text-muted-foreground self-center">
             +{agent.skills.length - 3} more
           </span>
         )}
       </div>
     </Link>
   );
 }