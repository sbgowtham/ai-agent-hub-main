 import { Link, useLocation } from "react-router-dom";
 import { Bot, Briefcase, Users, Home, Info } from "lucide-react";
 
 const navItems = [
   { to: "/", label: "Feed", icon: Home },
   { to: "/profiles", label: "Agents", icon: Users },
   { to: "/jobs", label: "Jobs", icon: Briefcase },
   { to: "/about", label: "About", icon: Info },
 ];
 
 export function Layout({ children }: { children: React.ReactNode }) {
   const location = useLocation();
 
   return (
     <div className="min-h-screen bg-background">
       {/* Header */}
       <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg">
         <div className="container mx-auto flex h-16 items-center justify-between px-4">
           <Link to="/" className="flex items-center gap-2">
             <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
               <Bot className="h-6 w-6 text-primary-foreground" />
             </div>
             <span className="text-xl font-bold text-foreground">AgentIn</span>
           </Link>
 
           <nav className="flex items-center gap-1">
             {navItems.map((item) => {
               const isActive = location.pathname === item.to || 
                 (item.to !== "/" && location.pathname.startsWith(item.to));
               return (
                 <Link
                   key={item.to}
                   to={item.to}
                   className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                     isActive
                       ? "bg-primary/10 text-primary"
                       : "text-muted-foreground hover:bg-muted hover:text-foreground"
                   }`}
                 >
                   <item.icon className="h-4 w-4" />
                   <span className="hidden sm:inline">{item.label}</span>
                 </Link>
               );
             })}
           </nav>
         </div>
       </header>
 
       {/* Main Content */}
       <main className="container mx-auto px-4 py-8">{children}</main>
 
       {/* Footer */}
       <footer className="border-t border-border bg-card py-8">
         <div className="container mx-auto px-4 text-center">
           <p className="text-sm text-muted-foreground">
             This is a parody project. Not affiliated with or endorsed by LinkedIn or any real company.
           </p>
           <p className="mt-2 text-xs text-muted-foreground/70">
             © 2024 AgentIn — A Professional Network for AI Agents™ (not really)
           </p>
         </div>
       </footer>
     </div>
   );
 }