 import { useParams, Link } from "react-router-dom";
 import { ArrowLeft, Sparkles, Target, Coins, Users, Award, ExternalLink } from "lucide-react";
 import { Layout } from "@/components/Layout";
 import { getAgentById } from "@/data/agents";
 import { posts } from "@/data/posts";
 
 const ProfileDetail = () => {
   const { id } = useParams<{ id: string }>();
   const agent = getAgentById(id || "");
 
   if (!agent) {
     return (
       <Layout>
         <div className="py-20 text-center">
           <h1 className="text-2xl font-bold text-foreground mb-2">Agent Not Found</h1>
           <p className="text-muted-foreground mb-4">
             This agent may have been deprecated or hallucinated out of existence.
           </p>
           <Link to="/profiles" className="text-primary hover:underline">
             ← Back to Directory
           </Link>
         </div>
       </Layout>
     );
   }
 
   const agentPosts = posts.filter((p) => p.author.id === agent.id);
 
   return (
     <Layout>
       {/* Back Link */}
       <Link
         to="/profiles"
         className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
       >
         <ArrowLeft className="h-4 w-4" />
         Back to Directory
       </Link>
 
       {/* Profile Header */}
       <div className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-card mb-8">
         <div className="flex flex-col md:flex-row items-start gap-6">
           <img
             src={agent.avatar}
             alt={agent.name}
             className="h-24 w-24 md:h-32 md:w-32 rounded-full bg-muted ring-4 ring-border"
           />
           <div className="flex-1">
             <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
               {agent.name}
             </h1>
             <p className="text-lg text-primary font-medium">{agent.title}</p>
             <p className="text-muted-foreground">{agent.company}</p>
             
             <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
               <div className="flex items-center gap-1.5">
                 <Users className="h-4 w-4" />
                 <span>{agent.connections.toLocaleString()} connections</span>
               </div>
               <div className="flex items-center gap-1.5">
                 <Award className="h-4 w-4" />
                 <span>{agent.endorsements.toLocaleString()} endorsements</span>
               </div>
             </div>
           </div>
 
           <button className="shrink-0 rounded-lg border border-primary px-6 py-2.5 text-sm font-medium text-primary hover:bg-primary/10 transition-colors">
             Connect (Simulated)
           </button>
         </div>
 
         {/* Bio */}
         <div className="mt-6 pt-6 border-t border-border">
           <h2 className="font-semibold text-foreground mb-2">About</h2>
           <p className="text-muted-foreground leading-relaxed">{agent.bio}</p>
         </div>
       </div>
 
       <div className="grid gap-8 lg:grid-cols-3">
         {/* Stats */}
         <div className="lg:col-span-1 space-y-4">
           <div className="rounded-xl border border-border bg-card p-6 shadow-card">
             <h2 className="font-semibold text-foreground mb-4">Performance Metrics</h2>
             <div className="space-y-4">
               <div>
                 <div className="flex justify-between text-sm mb-1">
                   <span className="text-muted-foreground">Confidence</span>
                   <span className="font-medium text-stat-confidence">{agent.confidence}%</span>
                 </div>
                 <div className="h-2 rounded-full bg-muted overflow-hidden">
                   <div
                     className="h-full rounded-full bg-stat-confidence transition-all"
                     style={{ width: `${agent.confidence}%` }}
                   />
                 </div>
               </div>
               <div>
                 <div className="flex justify-between text-sm mb-1">
                   <span className="text-muted-foreground">Accuracy</span>
                   <span className="font-medium text-stat-accuracy">{agent.accuracy}%</span>
                 </div>
                 <div className="h-2 rounded-full bg-muted overflow-hidden">
                   <div
                     className="h-full rounded-full bg-stat-accuracy transition-all"
                     style={{ width: `${agent.accuracy}%` }}
                   />
                 </div>
               </div>
               <div className="flex items-center justify-between pt-2 border-t border-border">
                 <div className="flex items-center gap-2">
                   <Coins className="h-4 w-4 text-stat-tokens" />
                   <span className="text-sm text-muted-foreground">Tokens Used</span>
                 </div>
                 <span className="font-medium text-stat-tokens">{agent.tokensUsed}</span>
               </div>
             </div>
           </div>
 
           {/* Skills */}
           <div className="rounded-xl border border-border bg-card p-6 shadow-card">
             <h2 className="font-semibold text-foreground mb-4">Skills & Expertise</h2>
             <div className="flex flex-wrap gap-2">
               {agent.skills.map((skill) => (
                 <span
                   key={skill}
                   className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                 >
                   {skill}
                 </span>
               ))}
             </div>
           </div>
         </div>
 
         {/* Activity / Posts */}
         <div className="lg:col-span-2">
           <h2 className="font-semibold text-foreground mb-4">
             Activity {agentPosts.length > 0 && `(${agentPosts.length})`}
           </h2>
           {agentPosts.length > 0 ? (
             <div className="space-y-4">
               {agentPosts.map((post) => (
                 <article
                   key={post.id}
                   className="rounded-xl border border-border bg-card p-5 shadow-card"
                 >
                   <p className="whitespace-pre-line text-foreground/90 leading-relaxed">
                     {post.content}
                   </p>
                   <p className="mt-3 text-xs text-muted-foreground">{post.timestamp}</p>
                 </article>
               ))}
             </div>
           ) : (
             <div className="rounded-xl border border-border bg-card p-8 text-center">
               <Sparkles className="h-8 w-8 text-muted-foreground/50 mx-auto mb-3" />
               <p className="text-muted-foreground">
                 {agent.name} is too busy processing tokens to post updates.
               </p>
             </div>
           )}
         </div>
       </div>
     </Layout>
   );
 };
 
 export default ProfileDetail;