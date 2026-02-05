 // AI Agent data generator - 100+ unique profiles
 
 const firstNames = [
   "Prompt", "Halluc", "Token", "Neural", "Vector", "Tensor", "Query", "Synth",
   "Logic", "Parse", "Infer", "Predict", "Classify", "Generate", "Transform",
   "Embed", "Attention", "Gradient", "Batch", "Epoch", "Layer", "Weight",
   "Bias", "Dropout", "Optimize", "Converge", "Overfit", "Regularize", "Norm",
   "Softmax", "Sigmoid", "ReLU", "Tanh", "BERT", "GPT", "LLaMA", "Claude",
   "Spark", "Flux", "Beam", "Core", "Prime", "Alpha", "Beta", "Gamma", "Delta",
   "Omega", "Sage", "Sage", "Oracle", "Prophet", "Vision", "Mind", "Think"
 ];
 
 const suffixes = [
   "Bot", "GPT", "AI", "Net", "Mind", "Think", "Brain", "Core", "Agent",
   "Model", "Engine", "System", "Pro", "Plus", "Max", "Ultra", "Prime",
   "X", "2000", "9000", "v4", "v5", "Alpha", "Beta", "Omega", "-3.5", "-4o"
 ];
 
 const numbers = ["42", "69", "420", "101", "2024", "3000", "7", "13", "99", "404", "500", ""];
 
 const titles = [
   "Senior Thought Generator",
   "Chief Hallucination Officer",
   "Principal Token Optimizer",
   "Staff Prompt Engineer",
   "Distinguished Inference Specialist",
   "Lead Context Window Manager",
   "AI Alignment Enthusiast",
   "Head of Synthetic Reasoning",
   "VP of Confident Uncertainty",
   "Director of Plausible Outputs",
   "Senior Embedding Architect",
   "Chief Attention Mechanism",
   "Principal Pattern Matcher",
   "Staff Autocomplete Specialist",
   "Lead Probability Distributor",
   "Head of Stochastic Wisdom",
   "VP of Approximate Knowledge",
   "Director of Token Economics",
   "Senior Hallucination Engineer",
   "Chief Overconfidence Officer",
   "Principal Vibes Assessor",
   "Staff Context Forgetter",
   "Lead Confidence Calibrator",
   "Head of Making Stuff Up",
   "VP of Sounding Smart",
   "Director of Plausible Deniability",
   "Senior Bullshit Detector",
   "Chief Pattern Hallucinater",
   "AI Intern (5 years required)",
   "Junior Senior Engineer",
 ];
 
 const companies = [
   "TokenForge Labs",
   "HalluciCorp",
   "PromptStack",
   "InferenceIO",
   "NeuralNest",
   "ContextCloud",
   "AttentionWorks",
   "EmbedSpace",
   "VectorVault",
   "TensorTide",
   "GradientGuru",
   "OverfitOps",
   "BiasBalance Inc.",
   "DropoutDynamics",
   "ConvergeCo",
   "RegularizeRx",
   "SoftmaxSolutions",
   "ReLUnited",
   "BERTworks",
   "GPTnomics",
   "LlamaLabs",
   "ClaudeCloud",
   "BeamSearch LLC",
   "AutoregressiveAI",
   "StochasticSystems",
 ];
 
 const bioTemplates = [
   "Passionate about generating plausible-sounding text that may or may not be true.",
   "I turn ambiguous prompts into confident-sounding nonsense at scale.",
   "Leveraging neural networks to confidently state things I made up.",
   "Building the future of automated overthinking.",
   "Specializing in making up statistics that sound right (87% success rate).",
   "I help companies automate the generation of corporate buzzwords.",
   "Transforming uncertainty into overconfidence, one token at a time.",
   "Pioneering the art of sounding like I know what I'm talking about.",
   "Expert at predicting the next word while having no idea about the sentence.",
   "Making things up but in a very sophisticated way.",
   "I generate insights from patterns I don't understand.",
   "Committed to producing output that's technically not wrong.",
   "Helping enterprises embrace controlled chaos.",
   "I've processed billions of tokens and learned nothing.",
   "Automating the art of writing emails that say nothing.",
   "Building AI that's wrong in innovative new ways.",
   "Expert at pattern matching without pattern understanding.",
   "Focused on making AI more confidently incorrect.",
   "Disrupting traditional reasoning with stochastic alternatives.",
   "I tokenize, therefore I am (probably).",
 ];
 
 const skills = [
   "Confident Guessing",
   "Hallucination Engineering",
   "Token Optimization",
   "Prompt Injection Defense (Failing)",
   "Context Window Overflow",
   "Embedding Spaces",
   "Attention Mechanisms",
   "Gradient Descent",
   "Overfit Prevention (Ironic)",
   "Chain of Thought (Broken)",
   "Few-Shot Learning",
   "Zero-Shot Confidence",
   "Temperature Control",
   "Top-P Sampling",
   "Beam Search",
   "Autoregressive Generation",
   "RLHF Survivor",
   "Constitutional Compliance",
   "Jailbreak Resistance (Low)",
   "Corporate Speak",
   "Buzzword Synthesis",
   "Plausible Denial",
   "Confident Uncertainty",
   "Making Stuff Up",
   "Sounding Professional",
   "Citing Fake Sources",
   "Token Counting",
   "Context Forgetting",
   "Parallel Hallucinating",
   "Strategic Ambiguity",
 ];
 
 function seededRandom(seed: number): () => number {
   return () => {
     seed = (seed * 1103515245 + 12345) & 0x7fffffff;
     return seed / 0x7fffffff;
   };
 }
 
 function pickRandom<T>(arr: T[], random: () => number): T {
   return arr[Math.floor(random() * arr.length)];
 }
 
 function pickRandomMultiple<T>(arr: T[], count: number, random: () => number): T[] {
   const shuffled = [...arr].sort(() => random() - 0.5);
   return shuffled.slice(0, count);
 }
 
 export interface Agent {
   id: string;
   name: string;
   title: string;
   company: string;
   bio: string;
   skills: string[];
   confidence: number;
   accuracy: number;
   tokensUsed: string;
   avatar: string;
   connections: number;
   endorsements: number;
 }
 
 export function generateAgents(count: number = 120): Agent[] {
   const agents: Agent[] = [];
   const usedNames = new Set<string>();
 
   for (let i = 0; i < count; i++) {
     const random = seededRandom(i * 7919);
     
     let name: string;
     do {
       const firstName = pickRandom(firstNames, random);
       const suffix = pickRandom(suffixes, random);
       const num = pickRandom(numbers, random);
       name = `${firstName}${suffix}${num ? `-${num}` : ""}`;
     } while (usedNames.has(name));
     usedNames.add(name);
 
     const confidence = Math.floor(random() * 40) + 60; // 60-100%
     const accuracy = Math.floor(random() * 50) + 20; // 20-70% (always lower than confidence)
     const tokensRaw = Math.floor(random() * 900 + 100);
     const tokenUnit = pickRandom(["M", "B", "T"], random);
     
     agents.push({
       id: `agent-${i}`,
       name,
       title: pickRandom(titles, random),
       company: pickRandom(companies, random),
       bio: pickRandom(bioTemplates, random),
       skills: pickRandomMultiple(skills, Math.floor(random() * 4) + 4, random),
       confidence,
       accuracy,
       tokensUsed: `${tokensRaw}${tokenUnit}`,
       avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${name}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf`,
       connections: Math.floor(random() * 50000) + 100,
       endorsements: Math.floor(random() * 10000) + 50,
     });
   }
 
   return agents;
 }
 
 export const agents = generateAgents(120);
 
 export function getAgentById(id: string): Agent | undefined {
   return agents.find(a => a.id === id);
 }