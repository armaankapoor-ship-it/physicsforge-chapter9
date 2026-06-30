export const summaryTables = [
  {
    "title": "Core Formula Table",
    "columns": [
      "Concept",
      "Formula",
      "Unit",
      "Trap"
    ],
    "rows": [
      [
        "Reflection of Light",
        "i = r",
        "degree/radian",
        "Angles are measured from normal, not surface."
      ],
      [
        "Spherical Mirrors",
        "1/v + 1/u = 1/f",
        "m^-1",
        "Use signs consistently for u, v and f."
      ],
      [
        "Mirror Magnification",
        "m = h_i/h_o = -v/u",
        "unitless",
        "Sign of magnification tells image orientation."
      ],
      [
        "Refraction and Snell Law",
        "n1 sin i = n2 sin r",
        "unitless",
        "Angles are measured with normal."
      ],
      [
        "Refractive Index",
        "n = c/v",
        "unitless",
        "Higher n means lower speed."
      ],
      [
        "Apparent Depth",
        "apparent depth = real depth/n",
        "m",
        "Formula assumes near-normal viewing."
      ],
      [
        "Critical Angle",
        "sin C = n2/n1",
        "unitless",
        "Only denser-to-rarer refraction has critical angle."
      ],
      [
        "Total Internal Reflection",
        "i > C",
        "condition",
        "No refraction beyond critical angle in ideal case."
      ],
      [
        "Prism Deviation",
        "delta = i + e - A",
        "degree/radian",
        "Do not confuse angle of prism with deviation."
      ],
      [
        "Minimum Deviation",
        "mu = sin((A+dm)/2)/sin(A/2)",
        "unitless",
        "Minimum deviation is not always small-angle."
      ]
    ]
  },
  {
    "title": "Graph and Diagram Patterns",
    "columns": [
      "Topic",
      "Pattern",
      "Exam use"
    ],
    "rows": [
      [
        "Dispersion",
        "delta_v > delta_r",
        "Violet deviates more than red in normal dispersion."
      ],
      [
        "Lens Formula",
        "1/v - 1/u = 1/f",
        "Convex lens focal length is positive."
      ],
      [
        "Lens Magnification",
        "m = v/u",
        "Sign convention decides image orientation."
      ],
      [
        "Power of Lens",
        "P = 1/f",
        "f must be in metre."
      ],
      [
        "Lens Combination",
        "P = P1 + P2",
        "Only valid for lenses in contact."
      ],
      [
        "Lens Maker Formula",
        "1/f = (n-1)(1/R1 - 1/R2)",
        "R signs are crucial."
      ],
      [
        "Human Eye",
        "P = 1/f",
        "Accommodation has a limit."
      ],
      [
        "Defects of Vision",
        "P = 1/f",
        "Myopia uses concave lens; hypermetropia uses convex lens."
      ],
      [
        "Simple Microscope",
        "M = 1 + D/f",
        "D is standard near point 25 cm."
      ],
      [
        "Compound Microscope",
        "M = (L/f_o)(D/f_e)",
        "Objective has small focal length."
      ]
    ]
  },
  {
    "title": "NEET vs JEE Question Patterns",
    "columns": [
      "Cluster",
      "NEET asks",
      "JEE asks"
    ],
    "rows": [
      [
        "Reflection",
        "Formula and NCERT statement from Spherical mirrors, sign convention and image formation.",
        "Numerical, graph, diagram and limiting-case combinations"
      ],
      [
        "Refraction",
        "Formula and NCERT statement from Snell law, TIR, prisms and dispersion.",
        "Numerical, graph, diagram and limiting-case combinations"
      ],
      [
        "Lenses",
        "Formula and NCERT statement from Lens formula, power and combinations.",
        "Numerical, graph, diagram and limiting-case combinations"
      ],
      [
        "Instruments",
        "Formula and NCERT statement from Eye, microscope and telescope.",
        "Numerical, graph, diagram and limiting-case combinations"
      ]
    ]
  }
]

export const memoryHooks = [
  "Draw before formula.",
  "Real-is-positive only after using the chosen sign convention.",
  "Power uses focal length in metres.",
  "TIR happens only denser to rarer.",
  "Telescope magnification is objective focal length over eyepiece focal length."
]

export const topFormulas = [
  "1/v + 1/u = 1/f",
  "m = -v/u",
  "n1 sin i = n2 sin r",
  "n = c/v",
  "sin C = n2/n1",
  "delta = i + e - A",
  "mu = sin((A+dm)/2)/sin(A/2)",
  "1/v - 1/u = 1/f",
  "m = v/u",
  "P = 1/f",
  "P = P1 + P2",
  "1/f = (n-1)(1/R1 - 1/R2)",
  "M = 1 + D/f",
  "M = (L/f_o)(D/f_e)",
  "M = f_o/f_e",
  "L = f_o + f_e"
]

export const topConcepts = [
  "Reflection of Light: Reflection follows equal angles of incidence and reflection.",
  "Spherical Mirrors: Spherical mirrors form images using paraxial rays and Cartesian sign convention.",
  "Mirror Magnification: Mirror magnification compares image height with object height.",
  "Refraction and Snell Law: Light bends at interface due to change in speed.",
  "Refractive Index: Refractive index compares speed of light in vacuum to medium.",
  "Apparent Depth: Objects in denser medium appear shifted due to refraction.",
  "Critical Angle: Critical angle is incidence angle in denser medium for refraction at 90 degrees.",
  "Total Internal Reflection: For i greater than C, light reflects completely inside denser medium.",
  "Prism Deviation: A prism deviates and disperses light.",
  "Minimum Deviation: At minimum deviation, path through prism is symmetric.",
  "Dispersion: Different colours deviate differently because refractive index depends on wavelength.",
  "Lens Formula: Thin lens image formation follows Cartesian sign convention.",
  "Lens Magnification: Lens magnification is image distance divided by object distance.",
  "Power of Lens: Power measures convergence/divergence ability of lens.",
  "Lens Combination: Thin lenses in contact have additive powers.",
  "Lens Maker Formula: Lens focal length depends on refractive index and surface radii.",
  "Human Eye: Eye lens adjusts focal length for clear vision.",
  "Defects of Vision: Myopia and hypermetropia are corrected by suitable lenses.",
  "Simple Microscope: A convex lens acts as a magnifier for near objects.",
  "Compound Microscope: Objective and eyepiece magnifications multiply."
]

export const topTraps = [
  "Angles are measured from normal, not surface.",
  "Use signs consistently for u, v and f.",
  "Sign of magnification tells image orientation.",
  "Angles are measured with normal.",
  "Higher n means lower speed.",
  "Formula assumes near-normal viewing.",
  "Only denser-to-rarer refraction has critical angle.",
  "No refraction beyond critical angle in ideal case.",
  "Do not confuse angle of prism with deviation.",
  "Minimum deviation is not always small-angle.",
  "Violet deviates more than red in normal dispersion.",
  "Convex lens focal length is positive.",
  "Sign convention decides image orientation.",
  "f must be in metre.",
  "Only valid for lenses in contact."
]

export const topDiagrams = [
  "Reflection of Light Visual",
  "Spherical Mirrors Visual",
  "Mirror Magnification Visual",
  "Refraction and Snell Law Visual",
  "Refractive Index Visual",
  "Apparent Depth Visual",
  "Critical Angle Visual",
  "Total Internal Reflection Visual",
  "Prism Deviation Visual",
  "Minimum Deviation Visual"
]

export const graphPatterns = [
  "Reflection of Light: graph/variation follows i = r.",
  "Spherical Mirrors: graph/variation follows 1/v + 1/u = 1/f.",
  "Mirror Magnification: graph/variation follows m = h_i/h_o = -v/u.",
  "Refraction and Snell Law: graph/variation follows n1 sin i = n2 sin r.",
  "Refractive Index: graph/variation follows n = c/v.",
  "Apparent Depth: graph/variation follows apparent depth = real depth/n.",
  "Critical Angle: graph/variation follows sin C = n2/n1.",
  "Total Internal Reflection: graph/variation follows i > C.",
  "Prism Deviation: graph/variation follows delta = i + e - A.",
  "Minimum Deviation: graph/variation follows mu = sin((A+dm)/2)/sin(A/2)."
]

export const questionTypes = [
  "Direct formula MCQ",
  "Diagram-based sign question",
  "Graph interpretation",
  "Ratio numerical",
  "Statement correction",
  "Assertion-reason",
  "Integer answer",
  "Match-the-column",
  "Case-based reasoning",
  "Limiting-case analysis"
]

export const revisionPlans = {
  "thirtyMinute": [
    "0-5 min: formula sheet and units.",
    "5-10 min: redraw top diagrams.",
    "10-17 min: graph patterns and thresholds.",
    "17-24 min: mixed numericals.",
    "24-30 min: trap list and NCERT alerts."
  ],
  "lastDay": [
    "Revise diagrams and formulas together.",
    "Write key derivations once.",
    "Solve one mixed practice set.",
    "Review common traps.",
    "Sleep; avoid heavy new material."
  ],
  "examHall": [
    "Draw a small diagram.",
    "Write knowns in SI units.",
    "Choose sign/energy/path convention.",
    "Apply formula.",
    "Check limiting case and dimensions."
  ]
}

export const finalChecklist = [
  "I can explain, draw and solve Reflection of Light.",
  "I can explain, draw and solve Spherical Mirrors.",
  "I can explain, draw and solve Mirror Magnification.",
  "I can explain, draw and solve Refraction and Snell Law.",
  "I can explain, draw and solve Refractive Index.",
  "I can explain, draw and solve Apparent Depth.",
  "I can explain, draw and solve Critical Angle.",
  "I can explain, draw and solve Total Internal Reflection.",
  "I can explain, draw and solve Prism Deviation.",
  "I can explain, draw and solve Minimum Deviation.",
  "I can explain, draw and solve Dispersion.",
  "I can explain, draw and solve Lens Formula."
]
