/** Shared editorial content used across the home, about and industries pages. */

export const benefits = [
  { title: "Visualise before you build", text: "See the building in 3D before construction, so design issues surface on screen rather than on site." },
  { title: "Coordinate every discipline", text: "Architectural, structural and MEP systems checked together in one federated model." },
  { title: "Catch clashes early", text: "Conflicts identified and resolved before work begins, not discovered by the installer." },
  { title: "Accurate fabrication information", text: "Shop and construction documentation that fabricators and site teams can work from directly." },
  { title: "Better quantities and planning", text: "Model-based quantities that support estimating, procurement and programme planning." },
  { title: "Less rework, fewer delays", text: "Fewer avoidable errors means less material waste and fewer knock-on delays." },
  { title: "Clearer communication", text: "Designers, contractors and manufacturers working from the same coordinated information." },
  { title: "Practical engineering solutions", text: "Project requirements converted into safe, functional and buildable technical drawings." },
];

export const processSteps = [
  { title: "Project requirements", text: "We review your objectives, site information, specifications, standards and the information you need from us." },
  { title: "Concept and engineering design", text: "Initial concepts and engineering solutions are developed by the design team, with technical calculations and analysis." },
  { title: "BIM model development", text: "Architectural, structural and MEP models are built in the agreed software to the agreed information requirements." },
  { title: "Model coordination", text: "Discipline models are combined, interfaces reviewed and clashes resolved with the responsible designers." },
  { title: "Detailing and documentation", text: "Technical drawings, schedules, steel, rebar and precast detailing and other deliverables are produced and checked." },
  { title: "Construction and fabrication support", text: "Coordinated models, drawings and quantities support manufacturing, installation and site activities." },
  { title: "As-built and handover", text: "Information is updated to match what was built and prepared for operation and maintenance." },
];

export const disciplines = [
  {
    title: "Engineering design",
    text: "Develops and verifies the technical solution using calculations, analysis, specifications and engineering principles.",
    note: "Responsibility stays with the appointed design engineer.",
  },
  {
    title: "BIM modelling",
    text: "Creates an information-rich digital representation of the building or system, based on the design requirements.",
    note: "Organises and represents the design. It does not approve it.",
  },
  {
    title: "Engineering detailing",
    text: "Converts approved design information into drawings, schedules, component data and fabrication or installation instructions.",
    note: "Turns design information into something a workshop can make.",
  },
  {
    title: "BIM coordination",
    text: "Combines information from every discipline to identify conflicts and resolve them with the teams responsible.",
    note: "Conflicts are found on screen, not on site.",
  },
];

export type Industry = { slug: string; title: string; text: string; examples: string[] };

export const industries: Industry[] = [
  {
    slug: "residential",
    title: "Residential",
    text: "Apartment blocks, build-to-rent, student accommodation and housing developments where repetition rewards a well-built model.",
    examples: ["Multi-storey apartments", "Student and co-living schemes", "Volumetric and modular housing"],
  },
  {
    slug: "commercial",
    title: "Commercial",
    text: "Offices, retail, hotels and mixed-use buildings with demanding services coordination and high-performance facades.",
    examples: ["Office fit-out and Cat A/B", "Hotels and leisure", "Mixed-use developments"],
  },
  {
    slug: "industrial",
    title: "Industrial",
    text: "Warehouses, logistics hubs and manufacturing facilities with long-span steel frames and plant-heavy services.",
    examples: ["Distribution centres", "Portal frame buildings", "Plant rooms and process areas"],
  },
  {
    slug: "infrastructure",
    title: "Infrastructure",
    text: "Supporting structures and buildings for transport, energy and utilities projects, where precision detailing matters.",
    examples: ["Stations and depots", "Energy and utility buildings", "Bridges and civil structures support"],
  },
  {
    slug: "public-institutional",
    title: "Public and institutional",
    text: "Schools, healthcare and civic buildings where clear information supports long-term operation and maintenance.",
    examples: ["Education buildings", "Healthcare facilities", "Civic and community buildings"],
  },
];

export const faqs = [
  {
    q: "What information do you need to prepare a quote?",
    a: "Drawings or models in whatever format you have (PDF, DWG, RVT, IFC or point cloud), the scope you need, the level of detail or LOD expected, and your deadline. The more we see up front, the tighter the quote.",
  },
  {
    q: "Which regions do you work with?",
    a: "We support architects, engineers, contractors and fabricators across the United Kingdom, Europe and North America, and work to the standards and drawing conventions of each project.",
  },
  {
    q: "Does BIM modelling include engineering design approval?",
    a: "No. A BIM model represents and organises the design; it does not by itself mean design calculations or professional approval have been completed. Design responsibility stays with the appointed engineer, and we work alongside them.",
  },
  {
    q: "Can you work in our templates and standards?",
    a: "Yes. We work in your Revit templates, title blocks, naming conventions and BIM execution plan, so our output looks and behaves like it came from your own office.",
  },
  {
    q: "How do you handle confidentiality?",
    a: "Project files are handled on a need-to-know basis and we are happy to sign a non-disclosure agreement before you share drawings.",
  },
];
