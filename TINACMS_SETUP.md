# TinaCMS with Supabase Authentication Setup

This project now includes TinaCMS for content management with Supabase authentication.

## Environment Variables Required

Create a `.env.local` file in the root directory with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# TinaCMS Configuration
TINA_TOKEN=your_tina_token
NEXT_PUBLIC_TINA_CLIENT_ID=your_tina_client_id
```

## Setup Instructions

### 1. Supabase Setup
1. Create a Supabase project at https://supabase.com
2. Go to Settings > API to get your project URL and anon key
3. Go to Settings > API to get your service role key (keep this secret)
4. Set up authentication in Supabase dashboard
5. Add your environment variables to `.env.local`

### 2. TinaCMS Setup
1. Go to https://tina.io and create an account
2. Create a new project
3. Get your Tina token and client ID from the project settings
4. Add these to your `.env.local` file

### 3. Running the Development Server

For TinaCMS development:
```bash
npm run tina-dev
```

For regular Next.js development:
```bash
npm run dev
```

### 4. Building for Production

```bash
npm run tina-build
```

## Authentication Flow

1. Users access `/login` to authenticate
2. After successful login, they're redirected to `/admin`
3. The admin interface is protected by middleware
4. Users can sign out from the admin interface

## Content Management

- **Posts**: Blog posts and articles stored in `content/posts/`
- **Pages**: Static pages stored in `content/pages/`
- Content is stored in MDX format with frontmatter
- TinaCMS provides a visual editor for content management

## File Structure

```
├── app/
│   ├── admin/
│   │   ├── components/
│   │   │   └── AdminInterface.js
│   │   └── page.js
│   ├── login/
│   │   └── page.js
│   └── lib/
│       ├── auth.js
│       ├── supabase.js
│       ├── supabase-client.js
│       └── supabase-server.js
├── content/
│   ├── posts/
│   └── pages/
├── tina/
│   └── config.js
└── middleware.js
```

## Security Features

- Authentication required for admin access
- Middleware protection for admin routes
- Security headers implemented
- Supabase SSR for secure authentication

## Next Steps

1. Set up your Supabase project and get the required keys
2. Set up your TinaCMS project and get the required tokens
3. Add the environment variables to `.env.local`
4. Run `npm run tina-dev` to start development
5. Access `/admin` to manage content (after authentication)

