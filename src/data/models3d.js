export const models3d = {
  "repo": "physicsforge-chapter9",
  "chapterNumber": 9,
  "chapterName": "Ray Optics and Optical Instruments",
  "shortName": "Ray Optics",
  "count": 20,
  "models": [
    {
      "id": "model-01",
      "number": 1,
      "title": "Spherical Mirror Bench",
      "kind": "optics",
      "formula": "1/v + 1/u = 1/f",
      "concept": "Mirror rays show focus, centre of curvature and image position.",
      "exam": "Use Cartesian sign convention before substitution.",
      "labels": [
        "object",
        "focus",
        "image"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-02",
      "number": 2,
      "title": "Concave Mirror Real Image",
      "kind": "optics",
      "formula": "m = -v/u",
      "concept": "Parallel and centre rays meet to form real inverted image.",
      "exam": "Real image forms in front of mirror.",
      "labels": [
        "principal ray",
        "C",
        "real image"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-03",
      "number": 3,
      "title": "Convex Mirror Virtual Image",
      "kind": "optics",
      "formula": "f positive by convention used locally",
      "concept": "Diverging rays appear to come from behind mirror.",
      "exam": "Convex mirror always forms virtual diminished image.",
      "labels": [
        "diverging rays",
        "virtual image",
        "wide view"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-04",
      "number": 4,
      "title": "Refraction at Plane Surface",
      "kind": "optics",
      "formula": "n1 sin i = n2 sin r",
      "concept": "Rays bend because speed changes across the boundary.",
      "exam": "Frequency remains unchanged across boundary.",
      "labels": [
        "incident ray",
        "normal",
        "refracted ray"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-05",
      "number": 5,
      "title": "Total Internal Reflection",
      "kind": "prism",
      "formula": "sin C = n2/n1",
      "concept": "Beyond critical angle the ray reflects inside denser medium.",
      "exam": "TIR needs denser-to-rarer travel.",
      "labels": [
        "critical ray",
        "reflected ray",
        "boundary"
      ],
      "color": "#7c3aed"
    },
    {
      "id": "model-06",
      "number": 6,
      "title": "Optical Fibre Core",
      "kind": "prism",
      "formula": "TIR guidance",
      "concept": "Light stays trapped by repeated total internal reflection.",
      "exam": "Cladding must have lower refractive index than core.",
      "labels": [
        "core",
        "cladding",
        "guided ray"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-07",
      "number": 7,
      "title": "Prism Dispersion",
      "kind": "prism",
      "formula": "delta = (mu - 1)A",
      "concept": "A prism separates colours because refractive index depends on wavelength.",
      "exam": "Violet deviates more than red.",
      "labels": [
        "white light",
        "prism",
        "spectrum"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-08",
      "number": 8,
      "title": "Thin Lens Ray Model",
      "kind": "optics",
      "formula": "1/v - 1/u = 1/f",
      "concept": "A transparent lens bends rays through focus.",
      "exam": "Sign of focal length identifies converging or diverging lens.",
      "labels": [
        "lens",
        "focus",
        "image"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-09",
      "number": 9,
      "title": "Convex Lens Magnifier",
      "kind": "optics",
      "formula": "M = 1 + D/f",
      "concept": "Object inside focal length gives enlarged virtual image.",
      "exam": "Near point D is taken as 25 cm.",
      "labels": [
        "object",
        "virtual image",
        "eye"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-10",
      "number": 10,
      "title": "Concave Lens Diverger",
      "kind": "optics",
      "formula": "negative focal length",
      "concept": "A concave lens makes rays diverge and forms virtual diminished image.",
      "exam": "It is used for myopia correction.",
      "labels": [
        "diverging lens",
        "focus",
        "virtual image"
      ],
      "color": "#7c3aed"
    },
    {
      "id": "model-11",
      "number": 11,
      "title": "Lens Power Stack",
      "kind": "optics",
      "formula": "P = 1/f(m)",
      "concept": "Power adds for lenses in contact.",
      "exam": "Convert centimetres to metres before calculating dioptre.",
      "labels": [
        "lens 1",
        "lens 2",
        "net power"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-12",
      "number": 12,
      "title": "Refraction at Spherical Surface",
      "kind": "optics",
      "formula": "n2/v - n1/u = (n2-n1)/R",
      "concept": "Curved boundaries focus or diverge rays.",
      "exam": "Use signs for radius and distances carefully.",
      "labels": [
        "surface",
        "normal",
        "image"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-13",
      "number": 13,
      "title": "Human Eye Model",
      "kind": "atom",
      "formula": "eye lens accommodation",
      "concept": "The eye changes lens power to focus objects at different distances.",
      "exam": "Near point for normal eye is 25 cm.",
      "labels": [
        "cornea",
        "lens",
        "retina"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-14",
      "number": 14,
      "title": "Myopia Correction",
      "kind": "optics",
      "formula": "concave lens correction",
      "concept": "A diverging lens shifts far object image onto retina.",
      "exam": "Myopia needs concave lens.",
      "labels": [
        "far object",
        "concave lens",
        "retina"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-15",
      "number": 15,
      "title": "Hypermetropia Correction",
      "kind": "optics",
      "formula": "convex lens correction",
      "concept": "A converging lens helps near object image form on retina.",
      "exam": "Hypermetropia needs convex lens.",
      "labels": [
        "near object",
        "convex lens",
        "retina"
      ],
      "color": "#7c3aed"
    },
    {
      "id": "model-16",
      "number": 16,
      "title": "Compound Microscope",
      "kind": "optics",
      "formula": "M = mo me",
      "concept": "Objective forms real enlarged image; eyepiece magnifies it.",
      "exam": "Objective focal length is small.",
      "labels": [
        "objective",
        "intermediate image",
        "eyepiece"
      ],
      "color": "#2563eb"
    },
    {
      "id": "model-17",
      "number": 17,
      "title": "Astronomical Telescope",
      "kind": "optics",
      "formula": "M = fo/fe",
      "concept": "Objective collects light and eyepiece magnifies angular size.",
      "exam": "Normal adjustment has final image at infinity.",
      "labels": [
        "objective",
        "eyepiece",
        "parallel rays"
      ],
      "color": "#b45309"
    },
    {
      "id": "model-18",
      "number": 18,
      "title": "Resolving Aperture",
      "kind": "interference",
      "formula": "theta = 1.22 lambda/D",
      "concept": "Larger aperture reduces diffraction blur.",
      "exam": "Resolution is limited by wave nature of light.",
      "labels": [
        "aperture",
        "Airy disk",
        "separation"
      ],
      "color": "#0f766e"
    },
    {
      "id": "model-19",
      "number": 19,
      "title": "Ray Reversibility",
      "kind": "optics",
      "formula": "path reversible",
      "concept": "Light follows the same route if direction is reversed.",
      "exam": "This is useful in ray construction.",
      "labels": [
        "forward ray",
        "reverse ray",
        "same path"
      ],
      "color": "#dc2626"
    },
    {
      "id": "model-20",
      "number": 20,
      "title": "Optical Instrument Tube",
      "kind": "optics",
      "formula": "tube length depends on adjustment",
      "concept": "Lens separation sets image formation in instruments.",
      "exam": "Do not use microscope and telescope tube lengths interchangeably.",
      "labels": [
        "objective",
        "tube",
        "eyepiece"
      ],
      "color": "#7c3aed"
    }
  ]
}
