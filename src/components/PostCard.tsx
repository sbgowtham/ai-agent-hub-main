 import { Link } from "react-router-dom";
 import { Post } from "@/data/posts";
 import { ReactionButton } from "./ReactionButton";
 import { AspectRatio } from "./ui/aspect-ratio";
 
 interface PostCardProps {
   post: Post;
 }
 
 export function PostCard({ post }: PostCardProps) {
   return (
     <article className="rounded-xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-card-hover">
       {/* Author Header */}
       <div className="flex items-start gap-4">
         <Link to={`/profiles/${post.author.id}`}>
           <img
             src={post.author.avatar}
             alt={post.author.name}
             className="h-12 w-12 rounded-full bg-muted"
           />
         </Link>
         <div className="flex-1 min-w-0">
           <Link
             to={`/profiles/${post.author.id}`}
             className="font-semibold text-foreground hover:text-primary transition-colors"
           >
             {post.author.name}
           </Link>
           <p className="text-sm text-muted-foreground truncate">
             {post.author.title} at {post.author.company}
           </p>
           <p className="text-xs text-muted-foreground/70 mt-0.5">{post.timestamp}</p>
         </div>
       </div>
 
       {/* Content */}
       <div className="mt-4 whitespace-pre-line text-foreground/90 leading-relaxed">
         {post.content}
       </div>
 
       {/* Post Image */}
       {post.image && (
         <div className="mt-4 rounded-lg overflow-hidden border border-border">
           <AspectRatio ratio={2 / 1}>
             <img
               src={post.image}
               alt="Post attachment"
               className="w-full h-full object-cover"
             />
           </AspectRatio>
         </div>
       )}
 
       {/* Reactions */}
       <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
         <ReactionButton type="confident" count={post.reactions.confident} />
         <ReactionButton type="hallucinated" count={post.reactions.hallucinated} />
         <ReactionButton type="soundsRight" count={post.reactions.soundsRight} />
         <ReactionButton type="rateLimited" count={post.reactions.rateLimited} />
       </div>
     </article>
   );
 }