export const formulas = [
  {
    "id": "mirror",
    "title": "Mirror Formula",
    "formula": "1/v + 1/u = 1/f",
    "display": "1/v + 1/u = 1/f",
    "symbols": [
      [
        "u",
        "object distance",
        "m"
      ],
      [
        "v",
        "image distance",
        "m"
      ],
      [
        "f",
        "focal length",
        "m"
      ]
    ],
    "meaning": "Relates object, image and focal length for spherical mirror.",
    "dimension": "m^-1",
    "graph": "v-u graph depends on f and signs.",
    "trap": "Use Cartesian sign convention.",
    "easyExample": "Easy example: substitute correctly in 1/v + 1/u = 1/f after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Relates object, image and focal length for spherical mirror.\".",
    "jeeExample": "JEE Main pattern: combine 1/v + 1/u = 1/f with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Use Cartesian sign convention."
  },
  {
    "id": "mirror-mag",
    "title": "Mirror Magnification",
    "formula": "m = -v/u",
    "display": "m = -v/u",
    "symbols": [
      [
        "m",
        "magnification",
        "unitless"
      ]
    ],
    "meaning": "Image height ratio for mirror.",
    "dimension": "unitless",
    "graph": "Sign tells orientation.",
    "trap": "Do not drop minus sign.",
    "easyExample": "Easy example: substitute correctly in m = -v/u after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Image height ratio for mirror.\".",
    "jeeExample": "JEE Main pattern: combine m = -v/u with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Do not drop minus sign."
  },
  {
    "id": "snell",
    "title": "Snell Law",
    "formula": "n1 sin i = n2 sin r",
    "display": "n1 sin i = n2 sin r",
    "symbols": [
      [
        "n",
        "refractive index",
        "unitless"
      ],
      [
        "i,r",
        "angles",
        "degree/radian"
      ]
    ],
    "meaning": "Refraction at interface.",
    "dimension": "dimensionless",
    "graph": "sin relation, not angle ratio exactly.",
    "trap": "Angles from normal.",
    "easyExample": "Easy example: substitute correctly in n1 sin i = n2 sin r after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Refraction at interface.\".",
    "jeeExample": "JEE Main pattern: combine n1 sin i = n2 sin r with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Angles from normal."
  },
  {
    "id": "refractive-index",
    "title": "Refractive Index",
    "formula": "n = c/v",
    "display": "n = c/v",
    "symbols": [
      [
        "c",
        "speed in vacuum",
        "m/s"
      ],
      [
        "v",
        "speed in medium",
        "m/s"
      ]
    ],
    "meaning": "Higher refractive index means lower speed.",
    "dimension": "unitless",
    "graph": "n inversely relates to speed.",
    "trap": "n is not density.",
    "easyExample": "Easy example: substitute correctly in n = c/v after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Higher refractive index means lower speed.\".",
    "jeeExample": "JEE Main pattern: combine n = c/v with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: n is not density."
  },
  {
    "id": "critical",
    "title": "Critical Angle",
    "formula": "sin C = n2/n1",
    "display": "sin C = n2/n1",
    "symbols": [
      [
        "C",
        "critical angle",
        "degree"
      ]
    ],
    "meaning": "Boundary condition for TIR.",
    "dimension": "unitless",
    "graph": "C decreases as n1 increases.",
    "trap": "Only denser to rarer.",
    "easyExample": "Easy example: substitute correctly in sin C = n2/n1 after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Boundary condition for TIR.\".",
    "jeeExample": "JEE Main pattern: combine sin C = n2/n1 with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Only denser to rarer."
  },
  {
    "id": "prism-dev",
    "title": "Prism Deviation",
    "formula": "delta = i + e - A",
    "display": "delta = i + e - A",
    "symbols": [
      [
        "delta",
        "deviation",
        "degree"
      ],
      [
        "A",
        "prism angle",
        "degree"
      ]
    ],
    "meaning": "Deviation by prism geometry.",
    "dimension": "degree",
    "graph": "Deviation has minimum.",
    "trap": "A is not deviation.",
    "easyExample": "Easy example: substitute correctly in delta = i + e - A after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Deviation by prism geometry.\".",
    "jeeExample": "JEE Main pattern: combine delta = i + e - A with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: A is not deviation."
  },
  {
    "id": "prism-mu",
    "title": "Prism Minimum Deviation",
    "formula": "mu = sin((A+dm)/2)/sin(A/2)",
    "display": "mu = sin((A+dm)/2)/sin(A/2)",
    "symbols": [
      [
        "dm",
        "minimum deviation",
        "degree"
      ]
    ],
    "meaning": "Find refractive index from minimum deviation.",
    "dimension": "unitless",
    "graph": "mu increases with deviation.",
    "trap": "Use symmetric path condition.",
    "easyExample": "Easy example: substitute correctly in mu = sin((A+dm)/2)/sin(A/2) after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Find refractive index from minimum deviation.\".",
    "jeeExample": "JEE Main pattern: combine mu = sin((A+dm)/2)/sin(A/2) with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Use symmetric path condition."
  },
  {
    "id": "lens",
    "title": "Lens Formula",
    "formula": "1/v - 1/u = 1/f",
    "display": "1/v - 1/u = 1/f",
    "symbols": [
      [
        "f",
        "focal length",
        "m"
      ]
    ],
    "meaning": "Thin lens image relation.",
    "dimension": "m^-1",
    "graph": "v changes sharply near focus.",
    "trap": "Mirror formula sign differs.",
    "easyExample": "Easy example: substitute correctly in 1/v - 1/u = 1/f after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Thin lens image relation.\".",
    "jeeExample": "JEE Main pattern: combine 1/v - 1/u = 1/f with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Mirror formula sign differs."
  },
  {
    "id": "lens-mag",
    "title": "Lens Magnification",
    "formula": "m = v/u",
    "display": "m = v/u",
    "symbols": [
      [
        "m",
        "magnification",
        "unitless"
      ]
    ],
    "meaning": "Lens image height ratio.",
    "dimension": "unitless",
    "graph": "Sign gives orientation.",
    "trap": "No extra minus for lens in this convention.",
    "easyExample": "Easy example: substitute correctly in m = v/u after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Lens image height ratio.\".",
    "jeeExample": "JEE Main pattern: combine m = v/u with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: No extra minus for lens in this convention."
  },
  {
    "id": "power",
    "title": "Power of Lens",
    "formula": "P = 1/f",
    "display": "P = 1/f",
    "symbols": [
      [
        "P",
        "power",
        "D"
      ],
      [
        "f",
        "focal length",
        "m"
      ]
    ],
    "meaning": "Convergence strength of lens.",
    "dimension": "m^-1 = D",
    "graph": "P inversely varies with f.",
    "trap": "Use metre.",
    "easyExample": "Easy example: substitute correctly in P = 1/f after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Convergence strength of lens.\".",
    "jeeExample": "JEE Main pattern: combine P = 1/f with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Use metre."
  },
  {
    "id": "lens-combo",
    "title": "Lens Power Combination",
    "formula": "P = P1 + P2",
    "display": "P = P1 + P2",
    "symbols": [
      [
        "P1,P2",
        "individual powers",
        "D"
      ]
    ],
    "meaning": "Powers add for thin lenses in contact.",
    "dimension": "D",
    "graph": "Combination power is sum.",
    "trap": "Only contact lenses.",
    "easyExample": "Easy example: substitute correctly in P = P1 + P2 after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Powers add for thin lenses in contact.\".",
    "jeeExample": "JEE Main pattern: combine P = P1 + P2 with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Only contact lenses."
  },
  {
    "id": "lens-maker",
    "title": "Lens Maker Formula",
    "formula": "1/f = (n-1)(1/R1 - 1/R2)",
    "display": "1/f = (n-1)(1/R1 - 1/R2)",
    "symbols": [
      [
        "R1,R2",
        "surface radii",
        "m"
      ]
    ],
    "meaning": "Focal length from material and curvature.",
    "dimension": "m^-1",
    "graph": "R signs change f.",
    "trap": "Sign convention matters.",
    "easyExample": "Easy example: substitute correctly in 1/f = (n-1)(1/R1 - 1/R2) after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Focal length from material and curvature.\".",
    "jeeExample": "JEE Main pattern: combine 1/f = (n-1)(1/R1 - 1/R2) with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Sign convention matters."
  },
  {
    "id": "magnifier",
    "title": "Simple Microscope",
    "formula": "M = 1 + D/f",
    "display": "M = 1 + D/f",
    "symbols": [
      [
        "D",
        "near point",
        "25 cm"
      ],
      [
        "f",
        "focal length",
        "cm"
      ]
    ],
    "meaning": "Magnification for final image at near point.",
    "dimension": "unitless",
    "graph": "M increases as f decreases.",
    "trap": "Use same length units.",
    "easyExample": "Easy example: substitute correctly in M = 1 + D/f after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Magnification for final image at near point.\".",
    "jeeExample": "JEE Main pattern: combine M = 1 + D/f with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Use same length units."
  },
  {
    "id": "compound",
    "title": "Compound Microscope",
    "formula": "M = (L/f_o)(D/f_e)",
    "display": "M = (L/f_o)(D/f_e)",
    "symbols": [
      [
        "L",
        "tube length",
        "m"
      ],
      [
        "fo,fe",
        "focal lengths",
        "m"
      ]
    ],
    "meaning": "Magnification product of objective and eyepiece.",
    "dimension": "unitless",
    "graph": "Short focal lengths improve M.",
    "trap": "Approximate formula.",
    "easyExample": "Easy example: substitute correctly in M = (L/f_o)(D/f_e) after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Magnification product of objective and eyepiece.\".",
    "jeeExample": "JEE Main pattern: combine M = (L/f_o)(D/f_e) with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Approximate formula."
  },
  {
    "id": "telescope",
    "title": "Telescope Magnification",
    "formula": "M = f_o/f_e",
    "display": "M = f_o/f_e",
    "symbols": [
      [
        "fo",
        "objective focal length",
        "m"
      ],
      [
        "fe",
        "eyepiece focal length",
        "m"
      ]
    ],
    "meaning": "Angular magnification in normal adjustment.",
    "dimension": "unitless",
    "graph": "Large fo gives high M.",
    "trap": "Objective has large focal length.",
    "easyExample": "Easy example: substitute correctly in M = f_o/f_e after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Angular magnification in normal adjustment.\".",
    "jeeExample": "JEE Main pattern: combine M = f_o/f_e with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Objective has large focal length."
  },
  {
    "id": "tube",
    "title": "Telescope Tube Length",
    "formula": "L = f_o + f_e",
    "display": "L = f_o + f_e",
    "symbols": [
      [
        "L",
        "tube length",
        "m"
      ]
    ],
    "meaning": "Normal adjustment tube length.",
    "dimension": "m",
    "graph": "Length increases with focal lengths.",
    "trap": "Final image at infinity.",
    "easyExample": "Easy example: substitute correctly in L = f_o + f_e after SI conversion.",
    "neetExample": "NEET pattern: direct recall or statement correction from \"Normal adjustment tube length.\".",
    "jeeExample": "JEE Main pattern: combine L = f_o + f_e with signs, graph slope/intercept, ratios or limiting cases.",
    "twist": "Conceptual twist: Final image at infinity."
  }
]

export const formulaGroups = [
  {
    "title": "Reflection",
    "formulas": [
      "mirror",
      "mirror-mag",
      "snell",
      "refractive-index",
      "critical"
    ]
  },
  {
    "title": "Refraction",
    "formulas": [
      "prism-dev",
      "prism-mu",
      "lens",
      "lens-mag",
      "power"
    ]
  },
  {
    "title": "Lenses",
    "formulas": [
      "lens-combo",
      "lens-maker",
      "magnifier",
      "compound",
      "telescope"
    ]
  },
  {
    "title": "Instruments",
    "formulas": [
      "tube"
    ]
  }
]

