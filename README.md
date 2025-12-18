# ✨ Angel of My Heart - Jewelry E-commerce Store

A full-featured jewelry e-commerce store built with Next.js 16, Chakra UI, and Stripe integration.

## 🎯 Features

### Core E-commerce Features
- ✅ **Product Catalog** - Browse 15+ sample jewelry products across 5 categories
- ✅ **Advanced Filtering** - Filter by category, material, and price range
- ✅ **Product Sorting** - Sort by featured, price (low-high, high-low), and ratings
- ✅ **Product Details** - Detailed product pages with images, specs, and reviews
- ✅ **Shopping Cart** - Add, remove, update quantities with persistent storage
- ✅ **Size Selection** - Ring size selection for applicable products
- ✅ **Checkout Flow** - Complete checkout with shipping address collection
- ✅ **Stripe Integration** - Secure payment processing with Stripe Checkout
- ✅ **Order Confirmation** - Success page after completed purchases
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Dark Mode** - Toggle between light and dark themes

## 📦 Product Categories

1. **Rings** 💍 - Diamond solitaires, sapphire bands, emerald rings
2. **Necklaces** 📿 - Tennis necklaces, pearl pendants, heart lockets
3. **Bracelets** ⚪ - Tennis bracelets, gold bangles, charm bracelets
4. **Earrings** 💎 - Diamond studs, pearl drops, ruby hoops
5. **Watches** ⌚ - Luxury timepieces with diamond bezels

## 🚀 Getting Started

### Prerequisites
- Node.js 20.x or higher
- npm, yarn, pnpm, or bun
- Stripe account (for payment processing)

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.example .env
   ```

3. **Add your Stripe keys** to `.env`:
   - Sign up at [Stripe](https://stripe.com)
   - Get your test keys from the [Dashboard](https://dashboard.stripe.com/test/apikeys)
   - Add them to your `.env` file:
     ```
     STRIPE_SECRET_KEY=sk_test_your_key_here
     STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
     NEXT_PUBLIC_BASE_URL=http://localhost:3002
     ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** to [http://localhost:3002](http://localhost:3002)

## 💳 Testing Stripe Payments

Use these test card numbers in Stripe Checkout:

- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- Use any future expiry date (e.g., 12/34)
- Use any 3-digit CVC
- Use any 5-digit ZIP code

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: Chakra UI v3
- **State Management**: Zustand
- **Payment Processing**: Stripe
- **Icons**: React Icons
- **Forms**: React Hook Form
- **Validation**: Zod

## 📁 Project Structure

```
angelofmyheart/
├── app/
│   ├── account/           # User account/dashboard
│   ├── api/stripe/        # Stripe API routes
│   ├── cart/              # Shopping cart page
│   ├── checkout/          # Checkout flow
│   ├── products/          # Product catalog
│   ├── layout.js          # Root layout
│   └── page.js            # Homepage
├── components/
│   ├── ui/                # Chakra UI components
│   └── Navbar.jsx         # Navigation
├── lib/
│   ├── data/products.js   # Sample products
│   └── store/cartStore.js # Cart state
└── README.md
```

## 🔄 Shopping Flow

1. Browse products on homepage or products page
2. Filter by category, material, or price
3. Select a product to view details
4. Add to Cart with quantity and size
5. View Cart and update quantities
6. Checkout with shipping information
7. Pay securely with Stripe
8. Receive order confirmation

## 🚧 Future Enhancements

- [ ] NextAuth.js authentication
- [ ] Real database integration
- [ ] User order history
- [ ] Wishlist functionality
- [ ] Product reviews system
- [ ] Search functionality
- [ ] Email notifications
- [ ] Admin dashboard

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

Built with ❤️ using Next.js and Chakra UI
