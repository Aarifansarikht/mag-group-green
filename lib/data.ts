
import { IMAGES } from "./constants";

export const PRODUCTS = [
  // === DRAINAGE ACCESSORIES ===
  { 
    id: "floor-drains", 
    title: "Floor Drains", 
    category: "Drain Outlets", 
    image: IMAGES.products.floor_drain, 
    spec: "SS304 / SS316",
    description: "Premium stainless steel floor drains designed for modern architectural applications. Features removable trap and adjustable height.",
    features: ["Grade 304/316 Stainless Steel", "Flow rate > 0.8 L/s", "Odor-seal trap included", "Heavy-duty grating options"],
    specs: { material: "Stainless Steel", loadClass: "K3 (300kg)", outlet: "Vertical / Horizontal", size: "100x100mm to 300x300mm" }
  },
  { 
    id: "cleanouts", 
    title: "Cleanouts", 
    category: "Drain Outlets", 
    image: IMAGES.products.cleanout, 
    spec: "Double Seal",
    description: "Gas-tight and water-tight cleanouts for access to drainage pipes in commercial floorings.",
    features: ["Double seal technology", "Gas tight", "Screw-down cover", "Anti-slip surface"],
    specs: { material: "SS304 / SS316 / Brass", loadClass: "L15 (1500kg)", seal: "Neoprene Gasket", size: "DN100 - DN200" }
  },
  { 
    id: "shower-drains", 
    title: "Shower Drains", 
    category: "Drain Outlets", 
    image: IMAGES.products.grating, 
    spec: "Linear Slot",
    description: "Minimalist linear shower channels for walk-in showers and wet rooms.",
    features: ["360-degree rotatable outlet", "Low profile installation", "Hair catcher included", "Tile-insert option"],
    specs: { material: "SS316L", length: "600mm - 1200mm", flowRate: "48 L/min", finish: "Brushed / Polished / PVD" }
  },
  { 
    id: "rainwater-outlets", 
    title: "Rainwater Outlets", 
    category: "Roof & Area", 
    image: IMAGES.products.rainwater, 
    spec: "High Flow",
    description: "Vertical roof outlets with domed grating for flat roof water management.",
    features: ["Gravel guard", "Clamping ring for waterproofing", "High flow capacity", "Insulated body option"],
    specs: { material: "Cast Iron / Aluminum", outlet: "Vertical", diameter: "DN75 - DN150", flow: "Up to 12 L/s" }
  },
  { 
    id: "roof-scupper-drains", 
    title: "Roof Scupper Drains", 
    category: "Roof & Area", 
    image: IMAGES.products.scupper, 
    spec: "Parapet Outlet",
    description: "Horizontal parapet outlets for efficient roof drainage through side walls.",
    features: ["Angled outlet", "Stainless steel fabrication", "Bitumen membrane flange", "Custom lengths"],
    specs: { material: "SS304 / SS316", outlet: "Horizontal", size: "100x100mm", flow: "Gravity" }
  },
  { 
    id: "parking-drains", 
    title: "Parking & Area Drains", 
    category: "Roof & Area", 
    image: IMAGES.products.manhole, 
    spec: "Heavy Duty",
    description: "Robust drains designed for multi-story car parks and industrial areas.",
    features: ["Heavy duty grating", "Sediment bucket", "Large flange for waterproofing", "Heel-proof design"],
    specs: { material: "Ductile Iron / SS", loadClass: "C250 / D400", outlet: "Vertical / Side", size: "300x300mm" }
  },
  { 
    id: "kitchen-channels", 
    title: "Kitchen Drainage", 
    category: "Kitchen & Ablution", 
    image: IMAGES.products.kitchen, 
    spec: "Hygienic Pro",
    description: "Slotted channels for commercial kitchens preventing bacteria growth.",
    features: ["Rounded internal corners", "V-bottom for self-cleaning", "Anti-slip mesh grating", "Filter basket"],
    specs: { material: "SS304 / SS316", width: "150mm - 300mm", grating: "Mesh / Ladder", load: "L15 / M125" }
  },
  { 
    id: "ablution-gratings", 
    title: "Ablution Gratings", 
    category: "Kitchen & Ablution", 
    image: IMAGES.products.grating, 
    spec: "Mosque Standard",
    description: "Specialized stainless steel gratings for ablution areas.",
    features: ["Custom sizes", "Anti-slip finish", "Easy cleaning access", "Corrosion resistant"],
    specs: { material: "SS316L", finish: "Satin / Mirror", barSpacing: "Standard", load: "Pedestrian" }
  },
  { 
    id: "gully-gratings", 
    title: "Gully Gratings", 
    category: "Infrastructure", 
    image: IMAGES.products.parking, 
    spec: "Ductile Iron",
    description: "Roadside gully gratings for stormwater capture.",
    features: ["Hinged design", "Captive lock", "Bicycle safe", "High absorption capacity"],
    specs: { material: "Ductile Iron GGG50", standard: "EN124-2", load: "C250 / D400", size: "500x500mm" }
  },
  { 
    id: "manhole-covers", 
    title: "Manhole Covers", 
    category: "Infrastructure", 
    image: IMAGES.products.manhole, 
    spec: "Class D400 - F900",
    description: "Heavy-duty ductile iron manhole covers for main roads, highways and airports.",
    features: ["Anti-theft hinge", "Noise-dampening gasket", "Bitumen coating", "Custom logo badging"],
    specs: { material: "Ductile Iron GGG50", standard: "EN124-2", load: "D400 / E600 / F900", clearOpening: "600mm Dia" }
  },

  // === STEEL FABRICATION ===
  { 
    id: "structural-beams", 
    title: "Structural Beams", 
    category: "Steel Fabrication", 
    image: IMAGES.steel.beams_hero, 
    spec: "H-Beams / I-Beams",
    description: "Primary structural support beams fabricated, blasted, and painted to specification.",
    features: ["CNC Plasma cut", "Sub-arc welding", "3-coat paint system", "Ultrasonic tested"],
    specs: { grade: "ASTM A572 Gr.50", finish: "Painted / Galvanized", length: "Up to 18m", tolerance: "ISO 2768" }
  },
  { 
    id: "mezzanines", 
    title: "Mezzanines", 
    category: "Industrial Steel", 
    image: IMAGES.steel.mezzanine, 
    spec: "Heavy Load Platform",
    description: "Custom steel mezzanine floors for maximizing warehouse storage space.",
    features: ["Bolted connections", "Chequered plate flooring", "Safety handrails", "Staircase integration"],
    specs: { load: "500 - 1000 kg/m2", span: "Up to 10m grid", finish: "Powder Coated", compliance: "Local Civil Defense" }
  },
  { 
    id: "stadiums", 
    title: "Stadium Canopies", 
    category: "Infrastructure", 
    image: IMAGES.steel.stadium, 
    spec: "Long Span Truss",
    description: "Complex tubular steel trusses for stadium roof structures.",
    features: ["3D Modeling & Analysis", "Complex node fabrication", "Tension rod systems", "High-spec coating"],
    specs: { material: "S355JR / S355J2", weld: "Full Penetration", inspection: "100% NDT", assembly: "Trial assembled" }
  }
];

export const PROJECTS = [
  {
    id: "lusail-stadium",
    title: "Lusail Stadium",
    location: "Doha, Qatar",
    category: "Sports Infrastructure",
    year: "2021",
    client: "Supreme Committee",
    image: IMAGES.projects.lusail,
    heroImage: IMAGES.steel.stadium,
    description: "The flagship venue for the 2022 World Cup. MAG Group was commissioned to fabricate complex secondary steel structures and heavy-duty drainage infrastructure for the surrounding precincts.",
    challenge: "The project required intricate curved steel geometries to match the 'lantern' vessel design of the stadium. Additionally, the drainage systems needed to handle extreme flash-flood scenarios within the podium areas.",
    solution: "We utilized 5-axis CNC plasma cutting to achieve the complex node geometries required for the steel facade supports. For drainage, we engineered a custom slot-drain system with F900 load rating to withstand emergency vehicle traffic.",
    stats: {
      tonnage: "4,500 Tons",
      duration: "18 Months",
      architect: "Foster + Partners",
      scope: "Structural Steel & Drainage"
    },
    gallery: [IMAGES.projects.lusail, IMAGES.steel.stadium, IMAGES.misc.bridge]
  },
  {
    id: "museum-future",
    title: "Museum of the Future",
    location: "Dubai, UAE",
    category: "Cultural",
    year: "2020",
    client: "Dubai Future Foundation",
    image: IMAGES.projects.museum,
    heroImage: IMAGES.hero.facade,
    description: "An architectural marvel with a torus shape. Our involvement focused on the invisible infrastructure that keeps the building functioning—specifically the stainless steel drainage networks integrated into the calligraphy facade.",
    challenge: "Standard drainage covers would disrupt the seamless calligraphy panels. The system needed to be invisible yet fully accessible for maintenance.",
    solution: "We designed a bespoke 'Stone-In-Edge' access cover system that perfectly aligned with the stainless steel facade panels, effectively disappearing into the structure while maintaining full functionality.",
    stats: {
      tonnage: "N/A",
      duration: "12 Months",
      architect: "Killa Design",
      scope: "Specialized Drainage"
    },
    gallery: [IMAGES.projects.museum, IMAGES.hero.facade]
  },
  {
    id: "hamad-airport",
    title: "Hamad Int. Airport",
    location: "Doha, Qatar",
    category: "Transport",
    year: "2019",
    client: "Civil Aviation Authority",
    image: IMAGES.projects.airport,
    heroImage: IMAGES.hero.civil,
    description: "Expansion of the central concourse. We provided the primary steelwork for the new tropical garden roof structure and heavy-duty runway drainage.",
    challenge: "Logistics within a live airport environment meant zero-tolerance for delays. The roof structure required long-span trusses to create an open, column-free space.",
    solution: "We implemented a modular fabrication strategy, pre-assembling 40m truss sections in our factory and transporting them at night to minimize operational impact.",
    stats: {
      tonnage: "12,000 Tons",
      duration: "24 Months",
      architect: "HOK",
      scope: "Roof Structure"
    },
    gallery: [IMAGES.projects.airport, IMAGES.steel.structure]
  },
  {
    id: "yas-marina",
    title: "Yas Marina Circuit",
    location: "Abu Dhabi, UAE",
    category: "Sports Infrastructure",
    year: "2018",
    client: "Aldar Properties",
    image: IMAGES.projects.yas,
    heroImage: IMAGES.misc.bridge,
    description: "Upgrades to the track infrastructure including new grandstand steel supports and trackside drainage improvement.",
    challenge: "The drainage system had to be capable of clearing the track surface instantly during sudden downpours to prevent race stoppages.",
    solution: "We installed our 'Monoblock' polymer concrete channels with high-capacity intake slots, ensuring rapid water evacuation even during high-speed race conditions.",
    stats: {
      tonnage: "1,200 Tons",
      duration: "6 Months",
      architect: "Tilke Engineers",
      scope: "Track Infrastructure"
    },
    gallery: [IMAGES.projects.yas, IMAGES.misc.bridge]
  }
];

export const getProduct = (id: string) => PRODUCTS.find(p => p.id === id);
export const getProject = (id: string) => PROJECTS.find(p => p.id === id);
