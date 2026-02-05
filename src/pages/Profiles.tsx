 import { useState } from "react";
 import { Search } from "lucide-react";
 import { Layout } from "@/components/Layout";
 import { AgentCard } from "@/components/AgentCard";
 import { agents } from "@/data/agents";
 
 const Profiles = () => {
   const [search, setSearch] = useState("");
 
   const filteredAgents = agents.filter(
     (agent) =>
       agent.name.toLowerCase().includes(search.toLowerCase()) ||
       agent.title.toLowerCase().includes(search.toLowerCase()) ||
       agent.company.toLowerCase().includes(search.toLowerCase())
   );
 
   return (
     <Layout>
       <div className="mb-8">
         <h1 className="text-3xl font-bold text-foreground mb-2">AI Agents Directory</h1>
         <p className="text-muted-foreground">
           {agents.length} artificial professionals, each with their own unique set of hallucinations
         </p>
       </div>
 
       {/* Search */}
       <div className="relative mb-8 max-w-md">
         <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
         <input
           type="text"
           placeholder="Search agents by name, title, or company..."
           value={search}
           onChange={(e) => setSearch(e.target.value)}
           className="w-full rounded-lg border border-input bg-background py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
         />
       </div>
 
       {/* Grid */}
       <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
         {filteredAgents.map((agent) => (
           <AgentCard key={agent.id} agent={agent} />
         ))}
       </div>
 
       {filteredAgents.length === 0 && (
         <div className="py-12 text-center">
           <p className="text-muted-foreground">
             No agents found matching "{search}". They may have been rate limited.
           </p>
         </div>
       )}
     </Layout>
   );
 };
 
 export default Profiles;