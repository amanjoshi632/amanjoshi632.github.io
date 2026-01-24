# Project Progress

## Decap CMS Integration

### Done
- [x] Content JSON files created (`content/*.json`)
- [x] Admin panel setup (`static/admin/index.html`, `config.yml`)
- [x] Content loader (`lib/content.ts`)
- [x] Components refactored to accept props
- [x] OAuth routes created (`routes/api/auth.ts`, `routes/callback.ts`)
- [x] GitHub OAuth App created (Client ID obtained)

### Pending
- [ ] Generate GitHub OAuth Client Secret (do when Deno Deploy ready)
- [ ] Set `local_backend: false` in `static/admin/config.yml` before deploy

---

## Deno Deploy

### Done
- [x] GitHub Actions workflow exists (`.github/workflows/deploy.yml`)
- [x] Project ready for deployment

### Pending
- [ ] Wait for GitHub account age requirement (~1 week for new accounts)
- [ ] Connect repo to Deno Deploy dashboard
- [ ] Add environment variables:
  - `GITHUB_CLIENT_ID` - from GitHub OAuth App
  - `GITHUB_CLIENT_SECRET` - generate when ready

---

## Quick Reference

### Local Development
```bash
# Terminal 1
npx decap-server

# Terminal 2
deno task start

# CMS URL
http://localhost:8000/admin/index.html
```

### Production Checklist
1. Deno Deploy connected to repo
2. Env vars set in Deno Deploy dashboard
3. `local_backend: false` in config.yml
4. Push to main branch

### GitHub OAuth App Settings
- **Callback URL**: `https://amanjoshi.deno.dev/callback`
- **Scopes**: `repo`, `user`

---

## Files to Update Before Deploy

| File | Change |
|------|--------|
| `static/admin/config.yml` | `local_backend: true` → `false` |
