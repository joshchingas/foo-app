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
    name: "Wild Alaskan Sockeye Salmon (TEST PRODUCT)",
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
];
