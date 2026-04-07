export default {
  id: 2,
  name: "Kirkland Signature Wildflower Honey",
  brand: "Kirkland Signature",
  category: "Honey",
  upc: "096619183067",
  description: "Kirkland Signature Wildflower Honey is a pure honey product sold exclusively at Costco warehouses, sourced from beekeepers across multiple countries including the United States, Argentina, Brazil, and Canada depending on product size and region.",
  steps: [
    {
      order: 1,
      type: "harvest",
      title: "Nectar Collection by Honeybees",
      location: "Multiple regions — USA, Argentina, Brazil, Canada",
      company: "Various beekeepers (incl. Rice's Honey network, Bee Maid cooperative beekeepers)",
      details: "Honeybees forage on wildflower nectar across regional apiaries. For U.S.-sourced honey, domestic beekeepers supply Rice's Honey in Colorado; over 300 Canadian beekeepers supply through the Bee Maid cooperative; Argentine and Brazilian apiaries supply other product sizes. Bees deposit nectar into hive combs, where it is enzymatically converted and dehydrated to below 18% moisture to become raw honey.",
      confidence: "confirmed",
      source: "https://www.mashed.com/2135397/where-costco-kirkland-signature-honey-comes-from/",
      commentary: [
        {
          type: "general",
          content: "Wildflower honey reflects a diverse blend of floral sources, meaning flavor, color, and pollen composition vary by season and geographic region of harvest.",
          confidence: 0.85
        }
      ]
    },
    {
      order: 2,
      type: "primary_processing",
      title: "Raw Honey Extraction and Filtration",
      location: "Colorado, USA / Canada / Argentina / Brazil",
      company: "Rice's Honey (USA); Bee Maid Honey Ltd. (Canada); Unknown (Argentina, Brazil)",
      details: "Honeycomb frames are uncapped and centrifugally extracted to separate raw honey from wax. The honey is then strained or filtered to remove wax particles, bee parts, and large debris. Honey is described as minimally processed, suggesting coarse filtration rather than ultrafiltration, preserving natural pollen content.",
      confidence: "confirmed",
      source: "https://www.mashed.com/2135397/where-costco-kirkland-signature-honey-comes-from/",
      commentary: [
        {
          type: "process",
          content: "Minimal processing preserves natural enzymes (diastase, invertase), antioxidants, and pollen grains, which contribute to honey's traceability and health properties compared to ultrafiltered honey.",
          confidence: 0.8
        },
        {
          type: "concern",
          content: "Honey sourced from Argentina and Brazil has historically raised industry concerns about adulteration and purity; Costco conducted a self-audit in 2022 confirming 100% purity of its honey supply.",
          confidence: 0.75
        }
      ]
    },
    {
      order: 3,
      type: "quality_check",
      title: "Purity and Quality Testing",
      location: "Multiple — USA, Canada, Argentina, Brazil",
      company: "Rice's Honey; Bee Maid Honey Ltd.; Costco internal audit",
      details: "Honey undergoes testing for moisture content (must be below ~18% to prevent fermentation), Brix levels, color grading, and adulteration screening. Costco confirmed via a 2022 internal self-audit that its honey supply is 100% pure. Standard honey quality checks also include pollen analysis to verify geographic origin and HMF (hydroxymethylfurfural) levels to assess freshness and processing temperature.",
      confidence: "confirmed",
      source: "https://www.mashed.com/2135397/where-costco-kirkland-signature-honey-comes-from/",
      commentary: [
        {
          type: "process",
          content: "HMF testing is a key indicator of honey freshness and whether it has been overheated during processing — elevated HMF levels suggest excessive heating which degrades enzymes and flavor.",
          confidence: 0.82
        }
      ]
    },
    {
      order: 4,
      type: "storage",
      title: "Bulk Honey Storage at Processing Facility",
      location: "Colorado, USA / Canada / Argentina / Brazil",
      company: "Rice's Honey; Bee Maid Honey Ltd.; Unknown (Argentina, Brazil)",
      details: "Filtered honey is stored in large stainless steel tanks or food-grade drums at ambient temperature prior to packaging. Honey is shelf-stable due to its low water activity and high sugar content, requiring no refrigeration. Storage conditions are managed to minimize crystallization, though crystallization is a natural process and does not affect quality.",
      confidence: "likely",
      source: "Industry standard practice",
      commentary: [
        {
          type: "process",
          content: "Wildflower honey tends to crystallize faster than monofloral honeys due to higher glucose content from diverse floral sources; gentle warming may be applied before packaging to reliquefy the product.",
          confidence: 0.78
        }
      ]
    },
    {
      order: 5,
      type: "packaging",
      title: "Bottling and Labeling",
      location: "Colorado, USA / Canada / Argentina / Brazil",
      company: "Rice's Honey; Bee Maid Honey Ltd.; Unknown co-packers (Argentina, Brazil)",
      details: "Honey is filled into retail containers under the Kirkland Signature label. Container formats include 5-pound pails (U.S. domestic and Argentine-sourced), 1-pound bear bottles (Brazilian-sourced), and other sizes for Canadian markets. Bottles are sealed, labeled with Kirkland Signature branding, and prepared for palletized shipment to Costco distribution centers.",
      confidence: "confirmed",
      source: "https://www.mashed.com/2135397/where-costco-kirkland-signature-honey-comes-from/"
    },
    {
      order: 6,
      type: "distribution",
      title: "Costco Regional Distribution Center Consolidation",
      location: "Multiple — Tracy, CA; Denton, TX; Logan, UT; Ottawa, ON (Canada)",
      company: "Costco Wholesale",
      details: "Finished packaged honey is routed to one of Costco's 22 U.S. regional distribution centers, where inventory is consolidated and quality-checked before being allocated to individual Costco warehouse stores. International shipments from Argentina and Brazil clear U.S. customs before entering this domestic distribution network. Canadian products are handled through Costco Canada's distribution infrastructure.",
      confidence: "confirmed",
      source: "https://www.mashed.com/2135397/where-costco-kirkland-signature-honey-comes-from/"
    },
    {
      order: 7,
      type: "retail",
      title: "Costco Warehouse Retail Sale",
      location: "Nationwide, USA (and Canada, Australia)",
      company: "Costco Wholesale",
      details: "Kirkland Signature Wildflower Honey is sold exclusively through Costco warehouse stores in bulk retail quantities. The product is displayed on ambient shelving in the dry grocery section and requires no refrigeration. Honey is sold under the Kirkland Signature private label, with Costco as the sole authorized retail channel.",
      confidence: "confirmed",
      source: "https://www.mashed.com/2135397/where-costco-kirkland-signature-honey-comes-from/"
    }
  ],
  finalComments: "[ Kirkland Raw Honey passes the test of minimal to no additives. Upon further research on Local Hive & Bee Maid Honey, only treatment would be pasturization which reduces nutrient density. But additives are highly unlikely for this product, just some warming and cooling. Food alteration highest at step 2. ]"
};
