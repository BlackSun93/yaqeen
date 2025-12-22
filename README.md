# يقين (Yaqeen) - Cancer Patient Support Platform

المنصة المصرية الأولى لدعم مرضى السرطان ومرافقيهم.

Egypt's first platform supporting cancer patients and caregivers.

## Features

- **Bilingual Support**: Full Arabic (RTL) and English support
- **AI Chat Assistant**: Powered by Claude/OpenAI for patient guidance
- **Comprehensive Content**: Treatment guides, cancer types, nutrition, caregiver support
- **Hope Stories**: Inspiring recovery stories from Egyptian patients
- **Emergency Numbers**: Quick access to important healthcare hotlines

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **AI**: Vercel AI SDK with Claude/OpenAI
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Add your API keys to `.env.local`

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `ANTHROPIC_API_KEY` | Claude API key | For chat |
| `OPENAI_API_KEY` | OpenAI API key (fallback) | For chat |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Future |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key | Future |

## Project Structure

```
yaqeen/
├── app/
│   ├── [locale]/          # Internationalized pages
│   └── api/               # API routes (chat)
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── home/              # Home page sections
│   ├── articles/          # Article components
│   ├── chat/              # Chat interface
│   └── stories/           # Story components
├── content/
│   └── ar/                # Arabic content
├── messages/              # UI translations
├── lib/                   # Utilities
└── types/                 # TypeScript types
```

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/yaqeen)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this for any non-commercial purpose.

---

Made with 💚 in Egypt
