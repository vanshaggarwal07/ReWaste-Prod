
## Technology used

This template uses the following technologies:

- [Next.js](https://nextjs.org/) - scalable and high-performance **React.js** framework for modern web development. Provides a large set of features, such as hybrid rendering, route prefetching, automatic image optimization, and internationalization, out of the box.
- [Cosmic](https://www.cosmicjs.com/) - fast, fully managed [headless CMS](https://www.cosmicjs.com/headless-cms) that enables us to quickly manage and create website content including UGC (user-generated content).
- [Stripe](https://stripe.com/) - payments infrastructure that provides API tools to receive one-time and subscription payments.


## Getting started

```bash
git clone https://github.com/itsmrad/rewaste
cd rewaste
pnpm install
# or
yarn
# or
npm install
```

### Environment variables

You'll need to create a `.env` file in the root of the project and add the access keys for Cosmic and Stripe. This can be done by copying the `.env.example`.

```bash
# .env
NEXT_PUBLIC_COSMIC_BUCKET_SLUG=your_cosmic_slug
NEXT_PUBLIC_COSMIC_READ_KEY=your_cosmic_read_key
COSMIC_WRITE_KEY=your_cosmic_write_key

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### Then run the development server

```bash
pnpm dev
# OR
yarn dev
# OR
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License

This project is published under the [MIT](LICENSE) license.
