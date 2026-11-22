/**
 * Service catalogue. Every card on the home page, the /services index,
 * each /services/[slug] page, the footer, the enquiry form dropdown and the
 * sitemap are generated from this list – add a new object to add a service.
 */
export type SubService = { name: string; detail: string };

export type Service = {
  slug: string;
  code: string; // short drawing-style reference shown on cards
  title: string;
  shortTitle: string;
  summary: string;
  metaDescription: string;
  intro: string[];
  subServices: SubService[];
  deliverables: string[];
  tools: string[];
  useCases: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "architectural-bim-cad",
    code: "AR",
    title: "Architectural services",
    shortTitle: "Architectural",
    summary:
      "Architectural BIM, Revit modelling and 2D CAD drafting that turn design intent into clear, consistent drawing packages.",
    metaDescription:
      "Architectural BIM modelling, Revit modelling, 2D CAD drafting and drawing production for architects and contractors in the UK, Europe and North America.",
    intro: [
      "Architects should be spending their time on design rather than redrawing revisions. We take on the modelling and documentation workload so your team can stay focused on the scheme itself.",
      "Working from sketches, PDFs, CAD files or an existing model, we build well-organised Revit models and produce drawing sets that follow your title blocks, naming conventions and graphic standards.",
    ],
    subServices: [
      { name: "Architectural BIM", detail: "Information-rich models with walls, floors, roofs, doors, windows and rooms classified and parameterised for scheduling." },
      { name: "Revit modelling", detail: "Models built to your template and agreed level of development, ready to share with structural and MEP consultants." },
      { name: "2D CAD drafting", detail: "Plans, sections, elevations and details drafted in AutoCAD from mark-ups, scans or hand sketches." },
      { name: "Drawing production", detail: "Planning, tender and construction drawing sets with sheets, views, annotation and schedules kept in step with the model." },
    ],
    deliverables: ["Revit (.rvt) and IFC models", "GA plans, sections and elevations", "Door, window and room schedules", "Construction details", "PDF and DWG drawing sets"],
    tools: ["Autodesk Revit", "AutoCAD", "Navisworks", "IFC"],
    useCases: ["Planning and tender packages", "Design development support", "Conversion of CAD drawings to BIM"],
    image: "/images/service-architectural.svg",
    imageAlt: "Architectural floor plan drawing with dimension lines, door swings and room labels",
  },
  {
    slug: "structural-bim-detailing",
    code: "ST",
    title: "Structural services",
    shortTitle: "Structural",
    summary:
      "Structural BIM plus steel, connection, precast and rebar detailing that fabricators and site teams can build from.",
    metaDescription:
      "Structural BIM modelling, structural steel detailing, connection modelling, precast concrete detailing and rebar detailing with bar bending schedules.",
    intro: [
      "Structural engineers design the frame. We help get it modelled, detailed and ready for the fabrication shop. Our detailers prepare fabrication and erection information for steel, precast and reinforced concrete elements.",
      "We work from your engineer's design, calculations and connection information. Detailing turns that approved design into drawings, schedules and component data. It does not replace the engineer's design responsibility, and we flag anything that needs their decision.",
    ],
    subServices: [
      { name: "Structural BIM", detail: "Analytical-ready structural models of foundations, columns, beams, slabs, bracing and cores." },
      { name: "Steel detailing", detail: "General arrangement, assembly and single-part drawings with bolt lists and material schedules for fabrication and erection." },
      { name: "Connection modelling", detail: "End plates, fin plates, splices, base plates and bracing connections modelled from the engineer's connection design." },
      { name: "Precast detailing", detail: "Manufacturing and installation drawings for precast panels, hollowcore planks, stairs, beams and columns." },
      { name: "Rebar detailing", detail: "Reinforcement drawings and bar bending schedules prepared to BS 8666 or the project's specified standard." },
    ],
    deliverables: ["Tekla / Revit structural models", "GA and erection drawings", "Assembly and part drawings", "Bar bending schedules", "NC and DSTV files on request"],
    tools: ["Tekla Structures", "Autodesk Revit", "AutoCAD", "Navisworks"],
    useCases: ["Steel fabricators needing shop drawings", "Precast manufacturers", "Contractors coordinating structural packages"],
    image: "/images/service-structural.svg",
    imageAlt: "Steel beam-to-column end plate connection detail with bolt group and weld annotation",
  },
  {
    slug: "mep-bim-coordination",
    code: "ME",
    title: "MEP services",
    shortTitle: "MEP",
    summary:
      "Mechanical, electrical and plumbing BIM with clash coordination so services fit the building before anyone gets to site.",
    metaDescription:
      "MEP BIM modelling for mechanical, electrical and plumbing systems, with clash detection and coordination for consultants and building services contractors.",
    intro: [
      "Building services share tight ceiling voids and risers with structure and architecture. We model ductwork, pipework, containment and plant to the designed routes and sizes, then coordinate them against the other disciplines.",
      "When a duct meets a beam, we report it with options and work with the responsible designers until there is an agreed, buildable solution.",
    ],
    subServices: [
      { name: "Mechanical BIM", detail: "Ventilation, heating and cooling systems: ductwork, AHUs, fan coils, pipework and plant rooms." },
      { name: "Electrical BIM", detail: "Containment, cable tray and ladder, lighting layouts, distribution boards and electrical rooms." },
      { name: "Plumbing BIM", detail: "Domestic water, drainage, rainwater and sanitary systems including falls and invert levels." },
      { name: "Clash coordination", detail: "Federated model reviews, clash tests, issue tracking and coordinated services drawings." },
    ],
    deliverables: ["Coordinated MEP models", "Services layouts and sections", "Builders' work and penetration drawings", "Clash reports with tracked issues", "Plant room details"],
    tools: ["Autodesk Revit MEP", "Navisworks Manage", "AutoCAD MEP", "BIM Collaborate / ACC"],
    useCases: ["MEP consultants short on modelling capacity", "Building services contractors", "Main contractor coordination"],
    image: "/images/service-mep.svg",
    imageAlt: "Ceiling void section showing a ventilation duct, pipework and cable tray coordinated around a steel beam",
  },
  {
    slug: "facade-bim-detailing",
    code: "FA",
    title: "Facade services",
    shortTitle: "Facade",
    summary:
      "Facade BIM, curtain wall modelling and cladding detailing for building envelope designers, fabricators and installers.",
    metaDescription:
      "Facade BIM modelling, curtain wall modelling and cladding detailing including shop drawings and fabrication information for building envelope contractors.",
    intro: [
      "The building envelope is where architecture, structure and fabrication tolerances meet. We model and detail facade systems so panels arrive at site cut to the right size and fix to the right brackets.",
      "From stick and unitised curtain walls to rainscreen cladding, we prepare elevations, sections, bracket setting-out and fabrication data that align with the system supplier's details.",
    ],
    subServices: [
      { name: "Facade BIM", detail: "Envelope models with panels, frames, brackets and interfaces to slab edges and structure." },
      { name: "Curtain wall modelling", detail: "Stick and unitised systems with mullions, transoms, glazing units and stack joints." },
      { name: "Cladding detailing", detail: "Rainscreen, metal and composite cladding layouts, sub-frame setting-out and panel schedules." },
    ],
    deliverables: ["Facade models", "Elevations and setting-out drawings", "Typical and interface details", "Panel and glass schedules", "Cutting lists and BOMs"],
    tools: ["Autodesk Revit", "AutoCAD", "Rhino (on request)", "Navisworks"],
    useCases: ["Facade contractors", "Curtain wall fabricators", "Envelope consultants"],
    image: "/images/service-facade.svg",
    imageAlt: "Curtain wall elevation with mullion and transom grid and an enlarged mullion profile section",
  },
  {
    slug: "digital-construction-scan-to-bim",
    code: "DC",
    title: "Digital construction",
    shortTitle: "Digital construction",
    summary:
      "Scan to BIM, point cloud modelling, as-built BIM and BIM coordination for existing buildings and live projects.",
    metaDescription:
      "Scan to BIM, point cloud to Revit modelling, as-built BIM and BIM coordination services for refurbishment, retrofit and facilities projects.",
    intro: [
      "Refurbishment and retrofit projects start with an accurate record of the existing building. We convert laser scan point clouds into measured BIM models you can design against with confidence.",
      "On live projects, we keep models aligned with construction progress and produce as-built information that is useful long after handover.",
    ],
    subServices: [
      { name: "Scan to BIM", detail: "Registered point clouds converted into Revit models at the agreed level of detail and accuracy." },
      { name: "Point cloud modelling", detail: "Architecture, structure and visible services traced from the scan, with deviations noted." },
      { name: "As-built BIM", detail: "Models updated to reflect the constructed building, ready for operation and maintenance." },
      { name: "BIM coordination", detail: "Federation of discipline models, coordination meetings and issue management for the project team." },
    ],
    deliverables: ["Revit models from point cloud", "Existing-condition drawings", "As-built models and drawings", "Coordination reports", "COBie-ready data on request"],
    tools: ["Autodesk ReCap", "Autodesk Revit", "Navisworks", "Leica Cyclone / E57 imports"],
    useCases: ["Refurbishment and retrofit design", "Heritage and existing buildings", "Facilities and asset handover"],
    image: "/images/service-digital.svg",
    imageAlt: "Laser scan point cloud of a room resolving into a clean BIM model",
  },
  {
    slug: "bim-support-consultancy",
    code: "BS",
    title: "BIM support and consultancy",
    shortTitle: "BIM support",
    summary:
      "BIM execution support, Revit families, model QA/QC, engineering technical support and dedicated BIM support teams.",
    metaDescription:
      "BIM execution support, Revit family creation, model QA/QC, engineering design technical support and dedicated BIM support teams for AEC firms.",
    intro: [
      "Some teams need a complete package delivered, while others need extra capacity alongside their own staff. We offer both.",
      "Our support teams work inside your standards and software, help put BIM execution plans into practice and check models before they leave your office, so the information you issue is reliable.",
    ],
    subServices: [
      { name: "BIM execution support", detail: "Help preparing and applying BIM execution plans, information requirements and naming conventions." },
      { name: "Revit families", detail: "Parametric, lightweight families for manufacturers and design teams, built and tested to your standards." },
      { name: "Model QA/QC", detail: "Model audits, health checks, standards compliance and drawing checks before issue." },
      { name: "Engineering design and technical support", detail: "Technical support to your engineers, including calculation input, mark-up incorporation and documentation. Design approval stays with the responsible engineer." },
      { name: "Dedicated BIM support teams", detail: "Named modellers and detailers working as an extension of your team, on your hours and workflows." },
    ],
    deliverables: ["BIM execution plan input", "Revit family libraries", "Model audit reports", "Standards and template setup", "Dedicated team arrangements"],
    tools: ["Autodesk Revit", "Navisworks", "Dynamo", "ACC / BIM 360"],
    useCases: ["Practices adopting BIM", "Firms with fluctuating workloads", "Manufacturers needing BIM content"],
    image: "/images/service-bim-support.svg",
    imageAlt: "Parametric Revit window family with labelled width, height and sill parameters beside a QA checklist",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
