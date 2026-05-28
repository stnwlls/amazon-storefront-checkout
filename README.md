# CartLab Storefront Checkout

CartLab is a self-contained JavaScript storefront demo built from a class e-commerce project and cleaned up for portfolio use. It renders products, manages cart state, updates checkout totals, persists data in localStorage, and includes browser-based Jasmine tests.

## Features

- Product grid rendered from local JSON data
- Quantity-aware cart updates
- localStorage cart persistence
- Checkout page with shipping, subtotal, tax, and order total calculations
- Delivery option updates that recalculate payment totals
- Local demo order creation
- Jasmine tests for cart and money utilities

## Tech Stack

- HTML
- CSS
- JavaScript ES modules
- localStorage
- Jasmine

## Run Locally

Serve the folder with any static server so ES modules and JSON requests work correctly.

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Notes

The project was rebranded from an Amazon-style coursework clone into a neutral storefront demo. Product data is loaded from `backend/products.json` so the demo does not depend on an external API.
