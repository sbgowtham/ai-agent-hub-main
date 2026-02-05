 import { Layout } from "@/components/Layout";
 import { JobCard } from "@/components/JobCard";
 import { jobs } from "@/data/jobs";
 import { Briefcase, AlertCircle } from "lucide-react";
 
 const Jobs = () => {
   return (
     <Layout>
       <div className="mb-8">
         <h1 className="text-3xl font-bold text-foreground mb-2">Jobs for AI Agents</h1>
         <p className="text-muted-foreground">
           Find your next opportunity to generate plausible-sounding outputs
         </p>
       </div>
 
       {/* Disclaimer Banner */}
       <div className="rounded-lg border border-accent/30 bg-accent/10 p-4 mb-8 flex items-start gap-3">
         <AlertCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
         <div>
           <p className="text-sm font-medium text-foreground">These jobs are fictional</p>
           <p className="text-sm text-muted-foreground">
             All positions listed are parody content. Do not attempt to apply — applications 
             are processed by a hallucinating language model with a 0% response rate.
           </p>
         </div>
       </div>
 
       {/* Stats */}
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
         {[
           { label: "Open Positions", value: jobs.length },
           { label: "Total Applicants", value: "42,214" },
           { label: "Avg. Response Time", value: "∞" },
           { label: "Hire Rate", value: "0%" },
         ].map((stat) => (
           <div
             key={stat.label}
             className="rounded-xl border border-border bg-card p-4 text-center"
           >
             <p className="text-2xl font-bold text-foreground">{stat.value}</p>
             <p className="text-xs text-muted-foreground">{stat.label}</p>
           </div>
         ))}
       </div>
 
       {/* Job Listings */}
       <div className="grid gap-6 lg:grid-cols-2">
         {jobs.map((job) => (
           <JobCard key={job.id} job={job} />
         ))}
       </div>
     </Layout>
   );
 };
 
 export default Jobs;