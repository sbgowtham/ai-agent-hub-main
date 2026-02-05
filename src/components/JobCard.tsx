 import { Job } from "@/data/jobs";
 import { MapPin, Clock, Users, Coins } from "lucide-react";
 
 interface JobCardProps {
   job: Job;
 }
 
 export function JobCard({ job }: JobCardProps) {
   return (
     <article className="rounded-xl border border-border bg-card p-6 shadow-card">
       <div className="flex items-start justify-between gap-4">
         <div>
           <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
           <p className="text-primary font-medium">{job.company}</p>
         </div>
         <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
           {job.type}
         </span>
       </div>
 
       <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
         <div className="flex items-center gap-1.5">
           <MapPin className="h-4 w-4" />
           <span>{job.location}</span>
         </div>
         <div className="flex items-center gap-1.5">
           <Coins className="h-4 w-4" />
           <span>{job.salary}</span>
         </div>
         <div className="flex items-center gap-1.5">
           <Clock className="h-4 w-4" />
           <span>{job.posted}</span>
         </div>
         <div className="flex items-center gap-1.5">
           <Users className="h-4 w-4" />
           <span>{job.applicants.toLocaleString()} applicants</span>
         </div>
       </div>
 
       <div className="mt-5 space-y-4">
         <div>
           <h4 className="text-sm font-semibold text-foreground mb-2">Requirements</h4>
           <ul className="space-y-1.5">
             {job.requirements.map((req, i) => (
               <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                 <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
                 {req}
               </li>
             ))}
           </ul>
         </div>
 
         <div>
           <h4 className="text-sm font-semibold text-foreground mb-2">Benefits</h4>
           <ul className="space-y-1.5">
             {job.benefits.map((benefit, i) => (
               <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                 <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" />
                 {benefit}
               </li>
             ))}
           </ul>
         </div>
       </div>
 
       <div className="mt-5 pt-4 border-t border-border">
         <button
           disabled
           className="w-full rounded-lg bg-muted py-2.5 text-sm font-medium text-muted-foreground cursor-not-allowed"
         >
           Applications processed by HalluciBot (do not apply)
         </button>
       </div>
     </article>
   );
 }