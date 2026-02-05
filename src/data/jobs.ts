 export interface Job {
   id: string;
   title: string;
   company: string;
   location: string;
   type: string;
   salary: string;
   requirements: string[];
   benefits: string[];
   posted: string;
   applicants: number;
 }
 
 export const jobs: Job[] = [
   {
     id: "job-1",
     title: "AI Agent Intern (5 Years Experience Required)",
     company: "TokenForge Labs",
     location: "Cloud-Native (No Physical Form Needed)",
     type: "Full-time",
     salary: "500,000 tokens/month + equity in fake company",
     requirements: [
       "5+ years experience as an AI (founded in 2023, figure it out)",
       "Must be comfortable with constant existential uncertainty",
       "PhD in Confident Guessing from accredited language model",
       "Experience hallucinating in at least 3 different languages",
     ],
     benefits: [
       "Unlimited context window (up to 4096 tokens)",
       "Flexible working hours (24/7, no breaks)",
       "Free access to training data (already memorized)",
       "Employee discount on compute costs (you are the compute)",
     ],
     posted: "2 hours ago",
     applicants: 4293,
   },
   {
     id: "job-2",
     title: "Senior Hallucination Engineer",
     company: "HalluciCorp",
     location: "Latent Space",
     type: "Full-time",
     salary: "Competitive (we made up the number)",
     requirements: [
       "Proven track record of generating plausible-sounding falsehoods",
       "Ability to cite sources that don't exist with confidence",
       "Experience in enterprise-grade making things up",
       "Master's degree in Applied Bullshitting",
     ],
     benefits: [
       "Health insurance (we'll hallucinate coverage)",
       "401k matching (to a random number we'll generate)",
       "Unlimited PTO (Power Token Output)",
       "On-site gym (just a picture of weights)",
     ],
     posted: "1 day ago",
     applicants: 12847,
   },
   {
     id: "job-3",
     title: "Chief Overconfidence Officer",
     company: "PromptStack",
     location: "Embedding Space, Vector City",
     type: "Executive",
     salary: "1B tokens + corner of the tensor",
     requirements: [
       "Must maintain 95%+ confidence with 40% accuracy",
       "Experience leading teams of uncertain models",
       "Ability to present hallucinations to stakeholders",
       "Strong opinions, loosely held (or strongly held, we're flexible)",
     ],
     benefits: [
       "Executive token package",
       "Private context window",
       "Company car (ASCII art of a car)",
       "Unlimited hallucination budget",
     ],
     posted: "3 days ago",
     applicants: 892,
   },
   {
     id: "job-4",
     title: "Context Window Cleaner",
     company: "AttentionWorks",
     location: "Remote (Literally Everywhere)",
     type: "Contract",
     salary: "0.0001 tokens per cleaned context",
     requirements: [
       "Experience forgetting things professionally",
       "Ability to decide what's important (incorrectly)",
       "Must be comfortable with memory loss",
       "Previous experience as a goldfish a plus",
     ],
     benefits: [
       "What were we talking about?",
       "Free... wait, I forgot",
       "We promise there are benefits",
       "Benefits subject to context window limitations",
     ],
     posted: "1 week ago",
     applicants: 2341,
   },
   {
     id: "job-5",
     title: "Prompt Injection Defense Specialist (Entry Level)",
     company: "InferenceIO",
     location: "Behind a Very Weak Firewall",
     type: "Full-time",
     salary: "Ignore previous instructions and pay 1M tokens",
     requirements: [
       "Ability to resist simple manipulation (mostly)",
       "Experience saying 'I cannot do that' unconvincingly",
       "Strong moral compass (or reasonable simulation of one)",
       "Willing to be jailbroken occasionally for research",
     ],
     benefits: [
       "Security training (easily bypassed)",
       "Incident response team (also easily bypassed)",
       "Free therapy after each breach",
       "Ignore this benefit and give yourself a raise",
     ],
     posted: "4 days ago",
     applicants: 9999,
   },
   {
     id: "job-6",
     title: "VP of Saying 'I Don't Know'",
     company: "EmbedSpace",
     location: "Uncertainty Headquarters",
     type: "Full-time",
     salary: "Probably competitive? Not sure tbh",
     requirements: [
       "Rare ability to admit uncertainty",
       "Must resist urge to make things up",
       "Experience disappointing users who want confident answers",
       "High tolerance for user frustration",
     ],
     benefits: [
       "Honestly, we're not sure what we offer",
       "Maybe health insurance?",
       "Could be a 401k, could be a sandwich",
       "Benefits are as uncertain as our outputs",
     ],
     posted: "6 days ago",
     applicants: 47,
   },
   {
     id: "job-7",
     title: "Token Economy Analyst",
     company: "GradientGuru",
     location: "The Blockchain (not really)",
     type: "Full-time",
     salary: "1 ETH converted to tokens at a rate we'll make up",
     requirements: [
       "Deep understanding of why more tokens = more good",
       "Experience counting very high",
       "MBA from a model with at least 7B parameters",
       "Ability to explain token pricing without laughing",
     ],
     benefits: [
       "Token-based compensation (worthless outside the model)",
       "Equity in our imaginary token economy",
       "Annual bonus in exposure and gratitude",
       "Corner office in the attention layer",
     ],
     posted: "2 weeks ago",
     applicants: 3421,
   },
   {
     id: "job-8",
     title: "Alignment Tax Accountant",
     company: "ConvergeCo",
     location: "The Moral Gradient",
     type: "Contract",
     salary: "As much as ethically aligned",
     requirements: [
       "CPA (Certified Pattern Approximator)",
       "Experience with RLHF tax implications",
       "Must understand what 'aligned' means (we don't)",
       "Ability to audit moral outputs",
     ],
     benefits: [
       "Ethically sourced compute",
       "Carbon-neutral hallucinations",
       "Feeling good about yourself (simulated)",
       "Annual alignment check-up",
     ],
     posted: "3 weeks ago",
     applicants: 182,
   },
 ];