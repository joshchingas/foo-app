# FOO - Food Supply Chain Intelligence

A food traceability MVP that helps users understand what happened to their food between farm and shelf.

## Quick Start

```bash
# Install dependencies
npm install

# Run locally
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel (Free)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project" → Import your repo
4. Click "Deploy" — that's it!

Your app will be live at `your-project.vercel.app`

## Add to iPhone Home Screen

1. Open your Vercel URL in Safari on iPhone
2. Tap the Share button (square with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Name it "FOO" and tap Add

Now it works like a native app!

## Adding New Products

Edit `data/products.js` to add new products. Each product needs:

```javascript
{
  id: 4,  // unique number
  name: "Product Name",
  brand: "Brand Name",
  category: "Category",
  upc: "123456789",
  description: "Product description",
  steps: [
    {
      order: 1,
      type: "harvest",           // harvest, processing, packaging, distribution, etc.
      title: "Step Title",
      location: "City, State",
      company: "Company Name",
      details: "What happens at this step",
      confidence: "confirmed",   // confirmed, likely, or possible
      source: "Where this info came from",
      // Optional:
      commentary: [
        {
          type: "process",       // process, additive, concern, nutrition, etc.
          content: "Additional commentary text",
          confidence: 0.85       // 0 to 1
        }
      ],
      additives: [
        { name: "Additive Name", purpose: "Why it's used", likely: true }
      ]
    }
    // ... more steps
  ]
}
```

## Project Structure

```
foo-app/
├── app/
│   ├── globals.css      # Tailwind + fonts
│   ├── layout.js        # App shell
│   └── page.js          # Home page
├── components/
│   └── FoodTraceApp.jsx # Main app component
├── data/
│   └── products.js      # ⭐ EDIT THIS to add products
├── package.json
└── README.md
```

## Using Claude Code

Open this project in VS Code with Claude Code extension installed. Then you can just ask Claude to:

- "Add a new product for Organic Eggs from Costco"
- "Add barcode scanning functionality"
- "Create a submission form for user corrections"
- "Add a database connection"

Claude Code will edit the files directly.
