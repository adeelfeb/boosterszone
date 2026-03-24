# Security audit (secrets)

Documentation in this repo must not contain real credentials or copy-paste examples that resemble live API keys or connection strings (automated secret scanners flag those shapes).

## Policy

- Never commit `.env`, `.env.local`, or production credentials.
- For variable names and safe placeholders, see `.env.example` in the project root.
- If credentials were ever committed, rotate them at the provider and consider history cleanup (for example `git filter-repo` or BFG Repo-Cleaner) if the repo was public.

## Codebase

Secrets are loaded from the environment via `lib/config.js`. Do not hardcode API keys, SMTP passwords, JWT signing secrets, or database URIs in source or docs.
