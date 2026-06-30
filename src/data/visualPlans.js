export const visualPlans = [
  {
    "id": "mirror-ray-1",
    "title": "Reflection of Light Visual",
    "category": "Diagram",
    "diagramType": "mirror-ray",
    "shows": "A self-made SVG visual for Reflection of Light showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "i",
      "r"
    ],
    "concept": "Reflection follows equal angles of incidence and reflection.",
    "removesConfusion": "Angles are measured from normal, not surface.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write i = r below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"mirror-ray\" draws this with free SVG inside React."
  },
  {
    "id": "lens-ray-2",
    "title": "Spherical Mirrors Visual",
    "category": "Diagram",
    "diagramType": "lens-ray",
    "shows": "A self-made SVG visual for Spherical Mirrors showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "1",
      "v",
      "1",
      "u",
      "1",
      "f"
    ],
    "concept": "Spherical mirrors form images using paraxial rays and Cartesian sign convention.",
    "removesConfusion": "Use signs consistently for u, v and f.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write 1/v + 1/u = 1/f below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"lens-ray\" draws this with free SVG inside React."
  },
  {
    "id": "refraction-graph-3",
    "title": "Mirror Magnification Visual",
    "category": "Graph",
    "diagramType": "refraction-graph",
    "shows": "A self-made SVG visual for Mirror Magnification showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "m",
      "h_i",
      "h_o",
      "v",
      "u"
    ],
    "concept": "Mirror magnification compares image height with object height.",
    "removesConfusion": "Sign of magnification tells image orientation.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write m = h_i/h_o = -v/u below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"refraction-graph\" draws this with free SVG inside React."
  },
  {
    "id": "prism-dispersion-4",
    "title": "Refraction and Snell Law Visual",
    "category": "Diagram",
    "diagramType": "prism-dispersion",
    "shows": "A self-made SVG visual for Refraction and Snell Law showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "n1",
      "sin",
      "i",
      "n2",
      "sin",
      "r"
    ],
    "concept": "Light bends at interface due to change in speed.",
    "removesConfusion": "Angles are measured with normal.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write n1 sin i = n2 sin r below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"prism-dispersion\" draws this with free SVG inside React."
  },
  {
    "id": "critical-angle-5",
    "title": "Refractive Index Visual",
    "category": "Diagram",
    "diagramType": "critical-angle",
    "shows": "A self-made SVG visual for Refractive Index showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "n",
      "c",
      "v"
    ],
    "concept": "Refractive index compares speed of light in vacuum to medium.",
    "removesConfusion": "Higher n means lower speed.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write n = c/v below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"critical-angle\" draws this with free SVG inside React."
  },
  {
    "id": "lens-power-6",
    "title": "Apparent Depth Visual",
    "category": "Diagram",
    "diagramType": "lens-power",
    "shows": "A self-made SVG visual for Apparent Depth showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "apparent",
      "depth",
      "real",
      "depth",
      "n"
    ],
    "concept": "Objects in denser medium appear shifted due to refraction.",
    "removesConfusion": "Formula assumes near-normal viewing.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write apparent depth = real depth/n below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"lens-power\" draws this with free SVG inside React."
  },
  {
    "id": "microscope-7",
    "title": "Critical Angle Visual",
    "category": "Diagram",
    "diagramType": "microscope",
    "shows": "A self-made SVG visual for Critical Angle showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "sin",
      "C",
      "n2",
      "n1"
    ],
    "concept": "Critical angle is incidence angle in denser medium for refraction at 90 degrees.",
    "removesConfusion": "Only denser-to-rarer refraction has critical angle.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write sin C = n2/n1 below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"microscope\" draws this with free SVG inside React."
  },
  {
    "id": "telescope-8",
    "title": "Total Internal Reflection Visual",
    "category": "Diagram",
    "diagramType": "telescope",
    "shows": "A self-made SVG visual for Total Internal Reflection showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "i",
      ">",
      "C"
    ],
    "concept": "For i greater than C, light reflects completely inside denser medium.",
    "removesConfusion": "No refraction beyond critical angle in ideal case.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write i > C below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"telescope\" draws this with free SVG inside React."
  },
  {
    "id": "image-formation-9",
    "title": "Prism Deviation Visual",
    "category": "Diagram",
    "diagramType": "image-formation",
    "shows": "A self-made SVG visual for Prism Deviation showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "delta",
      "i",
      "e",
      "A"
    ],
    "concept": "A prism deviates and disperses light.",
    "removesConfusion": "Do not confuse angle of prism with deviation.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write delta = i + e - A below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"image-formation\" draws this with free SVG inside React."
  },
  {
    "id": "trap-map-10",
    "title": "Minimum Deviation Visual",
    "category": "Infographic",
    "diagramType": "trap-map",
    "shows": "A self-made SVG visual for Minimum Deviation showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "mu",
      "sin",
      "A",
      "dm",
      "2",
      "sin"
    ],
    "concept": "At minimum deviation, path through prism is symmetric.",
    "removesConfusion": "Minimum deviation is not always small-angle.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write mu = sin((A+dm)/2)/sin(A/2) below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"trap-map\" draws this with free SVG inside React."
  },
  {
    "id": "mirror-ray-11",
    "title": "Dispersion Visual",
    "category": "Diagram",
    "diagramType": "mirror-ray",
    "shows": "A self-made SVG visual for Dispersion showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "delta_v",
      ">",
      "delta_r"
    ],
    "concept": "Different colours deviate differently because refractive index depends on wavelength.",
    "removesConfusion": "Violet deviates more than red in normal dispersion.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write delta_v > delta_r below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"mirror-ray\" draws this with free SVG inside React."
  },
  {
    "id": "lens-ray-12",
    "title": "Lens Formula Visual",
    "category": "Diagram",
    "diagramType": "lens-ray",
    "shows": "A self-made SVG visual for Lens Formula showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "1",
      "v",
      "1",
      "u",
      "1",
      "f"
    ],
    "concept": "Thin lens image formation follows Cartesian sign convention.",
    "removesConfusion": "Convex lens focal length is positive.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write 1/v - 1/u = 1/f below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"lens-ray\" draws this with free SVG inside React."
  },
  {
    "id": "refraction-graph-13",
    "title": "Lens Magnification Visual",
    "category": "Graph",
    "diagramType": "refraction-graph",
    "shows": "A self-made SVG visual for Lens Magnification showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "m",
      "v",
      "u"
    ],
    "concept": "Lens magnification is image distance divided by object distance.",
    "removesConfusion": "Sign convention decides image orientation.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write m = v/u below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"refraction-graph\" draws this with free SVG inside React."
  },
  {
    "id": "prism-dispersion-14",
    "title": "Power of Lens Visual",
    "category": "Diagram",
    "diagramType": "prism-dispersion",
    "shows": "A self-made SVG visual for Power of Lens showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "P",
      "1",
      "f"
    ],
    "concept": "Power measures convergence/divergence ability of lens.",
    "removesConfusion": "f must be in metre.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write P = 1/f below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"prism-dispersion\" draws this with free SVG inside React."
  },
  {
    "id": "critical-angle-15",
    "title": "Lens Combination Visual",
    "category": "Diagram",
    "diagramType": "critical-angle",
    "shows": "A self-made SVG visual for Lens Combination showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "P",
      "P1",
      "P2"
    ],
    "concept": "Thin lenses in contact have additive powers.",
    "removesConfusion": "Only valid for lenses in contact.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write P = P1 + P2 below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"critical-angle\" draws this with free SVG inside React."
  },
  {
    "id": "lens-power-16",
    "title": "Lens Maker Formula Visual",
    "category": "Diagram",
    "diagramType": "lens-power",
    "shows": "A self-made SVG visual for Lens Maker Formula showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "1",
      "f",
      "n",
      "1",
      "1",
      "R1"
    ],
    "concept": "Lens focal length depends on refractive index and surface radii.",
    "removesConfusion": "R signs are crucial.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write 1/f = (n-1)(1/R1 - 1/R2) below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"lens-power\" draws this with free SVG inside React."
  },
  {
    "id": "microscope-17",
    "title": "Human Eye Visual",
    "category": "Diagram",
    "diagramType": "microscope",
    "shows": "A self-made SVG visual for Human Eye showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "P",
      "1",
      "f"
    ],
    "concept": "Eye lens adjusts focal length for clear vision.",
    "removesConfusion": "Accommodation has a limit.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write P = 1/f below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"microscope\" draws this with free SVG inside React."
  },
  {
    "id": "telescope-18",
    "title": "Defects of Vision Visual",
    "category": "Diagram",
    "diagramType": "telescope",
    "shows": "A self-made SVG visual for Defects of Vision showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "P",
      "1",
      "f"
    ],
    "concept": "Myopia and hypermetropia are corrected by suitable lenses.",
    "removesConfusion": "Myopia uses concave lens; hypermetropia uses convex lens.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write P = 1/f below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"telescope\" draws this with free SVG inside React."
  },
  {
    "id": "image-formation-19",
    "title": "Simple Microscope Visual",
    "category": "Diagram",
    "diagramType": "image-formation",
    "shows": "A self-made SVG visual for Simple Microscope showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "M",
      "1",
      "D",
      "f"
    ],
    "concept": "A convex lens acts as a magnifier for near objects.",
    "removesConfusion": "D is standard near point 25 cm.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write M = 1 + D/f below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"image-formation\" draws this with free SVG inside React."
  },
  {
    "id": "trap-map-20",
    "title": "Compound Microscope Visual",
    "category": "Infographic",
    "diagramType": "trap-map",
    "shows": "A self-made SVG visual for Compound Microscope showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "M",
      "L",
      "f_o",
      "D",
      "f_e"
    ],
    "concept": "Objective and eyepiece magnifications multiply.",
    "removesConfusion": "Objective has small focal length.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write M = (L/f_o)(D/f_e) below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"trap-map\" draws this with free SVG inside React."
  },
  {
    "id": "mirror-ray-21",
    "title": "Astronomical Telescope Visual",
    "category": "Diagram",
    "diagramType": "mirror-ray",
    "shows": "A self-made SVG visual for Astronomical Telescope showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "M",
      "f_o",
      "f_e"
    ],
    "concept": "Telescope increases angular size of distant objects.",
    "removesConfusion": "Objective focal length is large.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write M = f_o/f_e below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"mirror-ray\" draws this with free SVG inside React."
  },
  {
    "id": "lens-ray-22",
    "title": "Telescope Tube Length Visual",
    "category": "Diagram",
    "diagramType": "lens-ray",
    "shows": "A self-made SVG visual for Telescope Tube Length showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "L",
      "f_o",
      "f_e"
    ],
    "concept": "Normal adjustment length is sum of focal lengths.",
    "removesConfusion": "Final image at infinity in normal adjustment.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write L = f_o + f_e below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"lens-ray\" draws this with free SVG inside React."
  },
  {
    "id": "refraction-graph-23",
    "title": "Ray Diagrams Visual",
    "category": "Graph",
    "diagramType": "refraction-graph",
    "shows": "A self-made SVG visual for Ray Diagrams showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "principal",
      "rays"
    ],
    "concept": "Ray diagrams decide image nature and sign choices.",
    "removesConfusion": "Skipping ray diagram causes sign errors.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write principal rays below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "Graph-based SVG",
    "implementation": "DiagramRenderer type \"refraction-graph\" draws this with free SVG inside React."
  },
  {
    "id": "prism-dispersion-24",
    "title": "Paraxial Approximation Visual",
    "category": "Diagram",
    "diagramType": "prism-dispersion",
    "shows": "A self-made SVG visual for Paraxial Approximation showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "sin",
      "theta",
      "approx",
      "theta"
    ],
    "concept": "Mirror/lens formulas assume small-angle paraxial rays.",
    "removesConfusion": "Wide-angle rays cause aberration.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write sin theta approx theta below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"prism-dispersion\" draws this with free SVG inside React."
  },
  {
    "id": "critical-angle-25",
    "title": "Optical Fibre Visual",
    "category": "Diagram",
    "diagramType": "critical-angle",
    "shows": "A self-made SVG visual for Optical Fibre showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "i",
      ">",
      "C"
    ],
    "concept": "Optical fibres guide light by total internal reflection.",
    "removesConfusion": "Core must have higher refractive index than cladding.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write i > C below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"critical-angle\" draws this with free SVG inside React."
  },
  {
    "id": "lens-power-26",
    "title": "Graphs in Ray Optics Visual",
    "category": "Diagram",
    "diagramType": "lens-power",
    "shows": "A self-made SVG visual for Graphs in Ray Optics showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "slope",
      "intercept",
      "checks"
    ],
    "concept": "Graphs show image distance, magnification, deviation and power trends.",
    "removesConfusion": "Identify axes before using slope.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write slope/intercept checks below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"lens-power\" draws this with free SVG inside React."
  },
  {
    "id": "microscope-27",
    "title": "Formula Mastery Visual",
    "category": "Diagram",
    "diagramType": "microscope",
    "shows": "A self-made SVG visual for Formula Mastery showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "mirror",
      "lens",
      "Snell",
      "prism"
    ],
    "concept": "Ray optics is sign convention plus geometry.",
    "removesConfusion": "Do not mix mirror and lens signs.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write mirror, lens, Snell, prism below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"microscope\" draws this with free SVG inside React."
  },
  {
    "id": "telescope-28",
    "title": "Common Conceptual Traps Visual",
    "category": "Diagram",
    "diagramType": "telescope",
    "shows": "A self-made SVG visual for Common Conceptual Traps showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "check",
      "sign",
      "normal",
      "metre"
    ],
    "concept": "Most errors come from signs, angles from surface, and f in cm for power.",
    "removesConfusion": "Power requires focal length in metre.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write check sign, normal, metre below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"telescope\" draws this with free SVG inside React."
  },
  {
    "id": "image-formation-29",
    "title": "Board Diagram Focus Visual",
    "category": "Diagram",
    "diagramType": "image-formation",
    "shows": "A self-made SVG visual for Board Diagram Focus showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "draw",
      "rays",
      "formula"
    ],
    "concept": "Boards reward neat rays and labelled optical instruments.",
    "removesConfusion": "Diagram quality matters.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write draw rays + formula below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"image-formation\" draws this with free SVG inside React."
  },
  {
    "id": "trap-map-30",
    "title": "Final Revision Section Visual",
    "category": "Infographic",
    "diagramType": "trap-map",
    "shows": "A self-made SVG visual for Final Revision Section showing labelled geometry, rays, waves, energy levels or graph behavior.",
    "labels": [
      "top",
      "formulas",
      "traps"
    ],
    "concept": "Final revision compresses mirrors, refraction, lenses, prisms and instruments.",
    "removesConfusion": "Always draw the principal axis first.",
    "manual": "Draw the core sketch, label variables, mark sign/path/energy changes, then write top formulas + traps below it.",
    "digital": "Use responsive SVG primitives: axes, rays, mirrors, lenses, wavefronts, fringes, threshold graphs and energy levels.",
    "mode": "2D SVG diagram",
    "implementation": "DiagramRenderer type \"trap-map\" draws this with free SVG inside React."
  }
]
