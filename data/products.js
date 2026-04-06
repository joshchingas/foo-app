// =============================================================================
// PRODUCT DATABASE
// =============================================================================
// To add a new product, copy an existing product object and modify it.
// Each product needs: id, name, brand, category, upc, description, and steps array.
// Each step needs: order, type, title, location, company, details, confidence, source
// Optional: commentary array and additives array
// =============================================================================

export const PRODUCTS_DB = [
  {
    id: 1,
    name: "Wild Alaskan Sockeye Salmon",
    brand: "Kirkland Signature",
    category: "Seafood",
    upc: "096619265442",
    description: "Wild-caught sockeye salmon fillets, individually vacuum sealed.",
    steps: [
      {
        order: 1,
        type: "harvest",
        title: "Wild Catch",
        location: "Bristol Bay, Alaska",
        company: "Bristol Bay Fisheries Co-op",
        details: "Wild-caught via drift gillnet during summer salmon run. Fish are bled and iced within minutes of catch.",
        confidence: "confirmed",
        source: "NOAA fishery records"
      },
      {
        order: 2,
        type: "primary_processing",
        title: "Primary Processing",
        location: "Naknek, Alaska",
        company: "Trident Seafoods",
        details: "Headed, gutted, and flash frozen within 4 hours of catch. Blast freezing at -40°F.",
        confidence: "confirmed",
        source: "Facility certification records"
      },
      {
        order: 3,
        type: "secondary_processing",
        title: "Secondary Processing",
        location: "Seattle, Washington",
        company: "Trident Seafoods Seattle Plant",
        details: "Thawed, portioned into fillets, pin bones removed, vacuum sealed, and refrozen.",
        confidence: "likely",
        source: "Industry standard practice",
        commentary: [
          {
            type: "process",
            content: "Double-freezing is standard for portioned wild salmon. While it slightly affects texture, proper handling minimizes quality loss.",
            confidence: 0.85
          },
          {
            type: "additive",
            content: "Sodium tripolyphosphate (STP) treatment is common at this stage to retain moisture. Check ingredients for 'sodium phosphate' if concerned.",
            confidence: 0.7
          }
        ],
        additives: [
          { name: "Sodium Tripolyphosphate", purpose: "Moisture retention", likely: true }
        ]
      },
      {
        order: 4,
        type: "distribution",
        title: "Distribution",
        location: "Regional Costco Warehouses",
        company: "Costco Wholesale",
        details: "Distributed frozen via Costco's cold chain logistics network.",
        confidence: "confirmed",
        source: "Retail records"
      }
    ]
  },
  {
    id: 2,
    name: "Organic Raw Honey",
    brand: "Trader Joe's",
    category: "Sweeteners",
    upc: "000000000000",
    description: "100% pure organic raw honey.",
    steps: [
      {
        order: 1,
        type: "harvest",
        title: "Apiary Source",
        location: "Yucatan Peninsula, Mexico",
        company: "Unknown cooperative",
        details: "Sourced from organic-certified apiaries. Bees forage on tropical wildflowers.",
        confidence: "likely",
        source: "Country of origin label + category research"
      },
      {
        order: 2,
        type: "processing",
        title: "Extraction & Straining",
        location: "Mexico",
        company: "Unknown",
        details: "Honey extracted from combs and strained to remove wax and debris. Labeled 'raw' suggests minimal heating.",
        confidence: "likely",
        source: "Industry inference",
        commentary: [
          {
            type: "process",
            content: "'Raw' honey is typically heated below 118°F during processing. This preserves most enzymes and beneficial compounds but may still involve light filtration.",
            confidence: 0.8
          },
          {
            type: "concern",
            content: "Some imported honey has been found diluted with corn syrup or ultra-filtered to obscure origin. Trader Joe's has generally tested well in independent analyses.",
            confidence: 0.6
          }
        ]
      },
      {
        order: 3,
        type: "packaging",
        title: "Bottling",
        location: "Unknown",
        company: "Contract packager",
        details: "Bottled into retail containers. May occur in Mexico or after import to US.",
        confidence: "possible",
        source: "Speculation"
      },
      {
        order: 4,
        type: "distribution",
        title: "Retail Distribution",
        location: "Trader Joe's Stores",
        company: "Trader Joe's",
        details: "Distributed through Trader Joe's private label supply chain.",
        confidence: "confirmed",
        source: "Retail records"
      }
    ]
  },
  {
    id: 3,
    name: "Greek Yogurt",
    brand: "Chobani",
    category: "Dairy",
    upc: "818290010001",
    description: "Non-fat plain Greek yogurt, made with natural ingredients.",
    steps: [
      {
        order: 1,
        type: "sourcing",
        title: "Milk Sourcing",
        location: "Upstate New York",
        company: "Regional dairy farms",
        details: "Milk sourced from farms within ~100 miles of production facility. Chobani works with ~900 farm partners.",
        confidence: "confirmed",
        source: "Chobani public statements"
      },
      {
        order: 2,
        type: "processing",
        title: "Pasteurization",
        location: "New Berlin, New York",
        company: "Chobani",
        details: "Milk is pasteurized at 161°F for 15 seconds (HTST method).",
        confidence: "confirmed",
        source: "FDA dairy standards",
        commentary: [
          {
            type: "process",
            content: "HTST pasteurization is the industry standard. It eliminates pathogens while preserving more flavor than ultra-pasteurization.",
            confidence: 0.95
          }
        ]
      },
      {
        order: 3,
        type: "processing",
        title: "Culturing & Straining",
        location: "New Berlin, New York",
        company: "Chobani",
        details: "Live cultures added, incubated 4-8 hours. Strained to remove whey, creating thick Greek-style texture.",
        confidence: "confirmed",
        source: "Manufacturing process documentation",
        commentary: [
          {
            type: "nutrition",
            content: "Straining removes ~50% of the volume as whey, concentrating protein. Greek yogurt typically has 2x the protein of regular yogurt.",
            confidence: 0.9
          },
          {
            type: "byproduct",
            content: "Acid whey is a significant byproduct. Chobani has invested in whey processing to reduce environmental impact.",
            confidence: 0.85
          }
        ]
      },
      {
        order: 4,
        type: "packaging",
        title: "Packaging",
        location: "New Berlin, New York",
        company: "Chobani",
        details: "Filled into cups, sealed, and date-coded. Cold chain maintained throughout.",
        confidence: "confirmed",
        source: "Facility records"
      }
    ]
  }
];
