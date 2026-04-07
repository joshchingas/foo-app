// =============================================================================
// PRODUCT DATABASE
// =============================================================================
// Each product lives in its own file under data/products/.
// To add a new product, create a new file there and import it below.
// Naming convention: NNN-product-name.js (e.g. 003-organic-oats.js)
// =============================================================================

import wildAlaskanSockeyeSalmon from "./products/001-wild-alaskan-sockeye-salmon.js";
import kirklandWildflowerHoney from "./products/002-kirkland-wildflower-honey.js";
import wildArgentineRedShrimp from "./products/003-wild-argentine-red-shrimp.js";

export const PRODUCTS_DB = [
  wildAlaskanSockeyeSalmon,
  kirklandWildflowerHoney,
  wildArgentineRedShrimp,
];
