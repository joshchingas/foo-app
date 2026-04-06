'use client';

import { useState } from 'react';
import { PRODUCTS_DB } from '@/data/products';

// Confidence badge component
const ConfidenceBadge = ({ level }) => {
  const styles = {
    confirmed: "bg-green-100 text-green-800 border-green-300",
    likely: "bg-yellow-100 text-yellow-800 border-yellow-300",
    possible: "bg-red-100 text-red-800 border-red-300"
  };
  
  return (
    <span className={`text-xs font-mono uppercase px-2 py-0.5 border ${styles[level] || styles.possible}`}>
      {level}
    </span>
  );
};

// Supply chain step component
const SupplyChainStep = ({ step, isLast }) => {
  return (
    <div className="relative pl-12 pb-8">
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-[15px] top-8 bottom-0 w-px bg-gray-300" />
      )}
      
      {/* Step dot */}
      <div className="absolute left-0 top-1 w-8 h-8 rounded-full border-2 border-gray-800 bg-white flex items-center justify-center">
        <span className="text-sm font-mono font-bold">{step.order}</span>
      </div>
      
      {/* Step content */}
      <div className="border border-gray-300 bg-white">
        <div className="border-b border-gray-200 px-4 py-3 bg-gray-50 flex items-center justify-between">
          <span className="font-mono text-lg uppercase tracking-wider font-bold">{step.title}</span>
          <ConfidenceBadge level={step.confidence} />
        </div>
        
        <div className="px-4 py-3 space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm font-mono">
            <div>
              <span className="text-gray-500 uppercase text-xs font-bold">Location</span>
              <p>{step.location}</p>
            </div>
            <div>
              <span className="text-gray-500 uppercase text-xs font-bold">Company</span>
              <p>{step.company}</p>
            </div>
          </div>
          
          <div className="text-sm font-mono">
            <span className="text-gray-500 uppercase text-xs font-bold">Details</span>
            <p className="mt-1">{step.details}</p>
          </div>
          
          {step.source && (
            <div className="text-xs font-mono text-gray-400">
              <span className="font-bold">Source:</span> {step.source}
            </div>
          )}
          
          {/* Commentary - always shown */}
          <div className="mt-4 border-t border-dashed border-gray-300 pt-3">
            <span className="text-xs font-mono uppercase text-gray-500 tracking-wider font-bold">Commentary</span>
            {step.commentary && step.commentary.length > 0 ? (
              step.commentary.map((c, i) => (
                <div key={i} className="mt-2 pl-3 border-l-2 border-gray-300 text-sm font-mono">
                  <span className="text-xs uppercase text-gray-400 font-bold">[{c.type}]</span>
                  <p className="mt-1 text-gray-700">{c.content}</p>
                  <span className="text-xs text-gray-400">Confidence: {Math.round(c.confidence * 100)}%</span>
                </div>
              ))
            ) : (
              <p className="mt-2 text-sm font-mono text-gray-400 italic">No additional commentary for this step.</p>
            )}
          </div>
          
          {/* Additives */}
          {step.additives && step.additives.length > 0 && (
            <div className="mt-3 p-2 bg-orange-50 border border-orange-200">
              <span className="text-xs font-mono uppercase text-orange-700 font-bold">Possible Additives</span>
              {step.additives.map((a, i) => (
                <div key={i} className="mt-1 text-sm font-mono">
                  <span className="text-orange-800">{a.name}</span>
                  <span className="text-gray-500 ml-2">— {a.purpose}</span>
                  {a.likely && <span className="text-xs ml-2 text-orange-600">(likely)</span>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Product page component
const ProductPage = ({ product, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 font-mono">
      {/* Header */}
      <header className="border-b border-gray-300 bg-white">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <button 
            onClick={onBack}
            className="text-sm uppercase tracking-wider hover:underline mb-4 inline-block"
          >
            ← Back to Search
          </button>
          <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">Product Record</div>
          <h1 className="text-2xl font-normal">{product.name}</h1>
          <div className="text-gray-600 mt-1">{product.brand}</div>
        </div>
      </header>
      
      {/* Product meta */}
      <div className="max-w-3xl mx-auto px-6 py-6">
        <div className="bg-white border border-gray-300 p-4 mb-8">
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-xs uppercase text-gray-500 font-bold">Category</span>
              <p>{product.category}</p>
            </div>
            <div>
              <span className="text-xs uppercase text-gray-500 font-bold">UPC</span>
              <p className="font-mono">{product.upc}</p>
            </div>
            <div>
              <span className="text-xs uppercase text-gray-500 font-bold">Steps Traced</span>
              <p>{product.steps.length}</p>
            </div>
          </div>
          {product.description && (
            <div className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-600">
              {product.description}
            </div>
          )}
        </div>
        
        {/* Confidence legend */}
        <div className="mb-6 p-4 border border-gray-200 bg-white text-xs">
          <span className="uppercase tracking-wider text-gray-500 font-bold block mb-3">Confidence Key</span>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <ConfidenceBadge level="confirmed" />
              <span className="text-gray-600">Publicly documented or directly sourced</span>
            </div>
            <div className="flex items-center gap-2">
              <ConfidenceBadge level="likely" />
              <span className="text-gray-600">Industry-standard inference</span>
            </div>
            <div className="flex items-center gap-2">
              <ConfidenceBadge level="possible" />
              <span className="text-gray-600">Lower-confidence speculation</span>
            </div>
          </div>
        </div>
        
        {/* Supply chain timeline */}
        <div className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-bold">Supply Chain Journey</div>
        
        <div className="mt-4">
          {product.steps.map((step, index) => (
            <SupplyChainStep 
              key={step.order} 
              step={step} 
              isLast={index === product.steps.length - 1}
            />
          ))}
        </div>
        
        {/* Footer note */}
        <div className="mt-8 p-4 border border-dashed border-gray-300 text-xs text-gray-500">
          <p className="uppercase tracking-wider mb-2 font-bold">About This Record</p>
          <p>This supply chain trace combines confirmed documentation, industry-standard inference, and informed speculation. Confidence levels are clearly marked. If you have corrections or additional information, please submit feedback.</p>
        </div>
        
        {/* Feedback button */}
        <div className="mt-6 text-center">
          <button className="border border-gray-400 px-6 py-2 text-sm uppercase tracking-wider hover:bg-gray-100">
            Submit Correction
          </button>
        </div>
      </div>
    </div>
  );
};

// Sprite sheet: 88x32px, each sprite 8x8px, 11 cols x 4 rows
// Row 0 (y=0): orange, pear, pineapple, watermelon-slice, apple, banana, cherry, watermelon, lemon, coconut, kiwi
// Row 1 (y=8): dragon-fruit-slice, plum, blueberry, mango, dragon-fruit, lime, grapes, peach, strawberry
const PIXEL_FOODS = [
  // Left side — well spaced, clear of center text
  { sx: 32,  sy: 0,  top: '8%',  left: '1%'  },  // apple
  { sx: 48,  sy: 0,  top: '55%', left: '2%'  },  // cherry
  { sx: 80,  sy: 0,  top: '25%', left: '6%'  },  // kiwi
  { sx: 0,   sy: 0,  top: '75%', left: '4%'  },  // orange
  { sx: 16,  sy: 0,  top: '42%', left: '13%' },  // pineapple
  { sx: 64,  sy: 0,  top: '10%', left: '16%' },  // lemon
  { sx: 48,  sy: 8,  top: '70%', left: '18%' },  // grapes
  // Right side — well spaced, clear of center text
  { sx: 40,  sy: 0,  top: '12%', left: '82%' },  // banana
  { sx: 8,   sy: 0,  top: '60%', left: '80%' },  // pear
  { sx: 64,  sy: 8,  top: '30%', left: '87%' },  // strawberry
  { sx: 56,  sy: 8,  top: '72%', left: '86%' },  // peach
  { sx: 24,  sy: 0,  top: '8%',  left: '92%' },  // watermelon slice
  { sx: 40,  sy: 8,  top: '50%', left: '94%' },  // lime
  { sx: 0,   sy: 8,  top: '78%', left: '91%' },  // dragon fruit
];

// Search page component
const SearchPage = ({ onSelectProduct }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (!query.trim()) return;

    setHasSearched(true);
    const q = query.toLowerCase();
    const matches = PRODUCTS_DB.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.upc.includes(q) ||
      p.category.toLowerCase().includes(q)
    );
    setResults(matches);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="min-h-screen bg-gray-50 font-mono">
      {/* Header */}
      <header className="border-b border-gray-300 bg-white relative overflow-hidden" style={{ minHeight: '160px' }}>
        {PIXEL_FOODS.map((item, i) => (
<<<<<<< HEAD
          <div
            key={i}
            className="absolute select-none pointer-events-none"
            style={{
              top: item.top,
              left: item.left,
              width: '8px',
              height: '8px',
              backgroundImage: 'url(/FruitAndVeg.png)',
              backgroundPosition: `-${item.sx}px -${item.sy}px`,
              backgroundRepeat: 'no-repeat',
              imageRendering: 'pixelated',
              transform: 'scale(5)',
              transformOrigin: 'top left',
              opacity: 0.85,
            }}
          />
        ))}
        <div className="relative z-10 max-w-2xl mx-auto px-6 py-8 text-center">
          <h1 className="text-3xl font-normal tracking-tight mb-2">FOO</h1>
          <p className="text-sm text-gray-500 uppercase tracking-widest">Supply Chain Intelligence</p>
        </div>
      </header>
      
      {/* Search area */}
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <p className="text-gray-600 mb-1">What happened to your food between farm and shelf?</p>
          <p className="text-xs text-gray-400 uppercase tracking-wider">Search by product name or UPC code</p>
        </div>
        
        <div className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="e.g. Kirkland salmon, Chobani, 096619265442"
            className="flex-1 border border-gray-300 px-4 py-3 font-mono text-sm focus:outline-none focus:border-gray-500"
          />
          <button
            onClick={handleSearch}
            className="border border-gray-800 bg-gray-800 text-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-gray-700"
          >
            Trace
          </button>
        </div>
        
        {/* Barcode scan button (placeholder) */}
        <div className="text-center mt-4">
          <button className="text-xs uppercase tracking-wider text-gray-500 hover:text-gray-700 underline">
            Scan Barcode (Coming Soon)
          </button>
        </div>
        
        {/* Results */}
        {hasSearched && (
          <div className="mt-12">
            <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">
              {results.length} {results.length === 1 ? 'Result' : 'Results'}
            </div>
            
            {results.length === 0 ? (
              <div className="border border-dashed border-gray-300 p-8 text-center">
                <p className="text-gray-500 mb-2">No products found matching "{query}"</p>
                <p className="text-xs text-gray-400">Try a different search term or submit a product request.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {results.map(product => (
                  <button
                    key={product.id}
                    onClick={() => onSelectProduct(product)}
                    className="w-full text-left border border-gray-300 bg-white p-4 hover:border-gray-500 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-normal">{product.name}</h3>
                        <p className="text-sm text-gray-500">{product.brand}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs uppercase text-gray-400">{product.category}</span>
                        <p className="text-xs text-gray-400 mt-1">UPC: {product.upc}</p>
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-gray-400">
                      {product.steps.length} supply chain steps traced →
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        
        {/* Sample products hint */}
        {!hasSearched && (
          <div className="mt-12 text-center">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Try Searching</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['salmon', 'honey', 'yogurt'].map(term => (
                <button
                  key={term}
                  onClick={() => { setQuery(term); }}
                  className="text-xs border border-gray-300 px-3 py-1 hover:bg-gray-100"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Footer */}
      <footer className="border-t border-gray-200 mt-12">
        <div className="max-w-2xl mx-auto px-6 py-6 text-center text-xs text-gray-400 uppercase tracking-wider">
          <p>Food Traceability MVP</p>
          <p className="mt-1">Trace what is known. Interpret what is likely. Clearly label both.</p>
        </div>
      </footer>
    </div>
  );
};

// Main App
export default function FoodTraceApp() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  if (selectedProduct) {
    return (
      <ProductPage 
        product={selectedProduct} 
        onBack={() => setSelectedProduct(null)} 
      />
    );
  }
  
  return <SearchPage onSelectProduct={setSelectedProduct} />;
}
