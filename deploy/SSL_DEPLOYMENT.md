# SSL deployment for ftnbridge.org

The Next.js production app is already built and runs on:

```bash
localhost:3000
```

DNS already points both records to the server:

```text
ftnbridge.org      A      65.109.4.85
www.ftnbridge.org  CNAME  ftnbridge.org
```

## Current blocker

The `openclaw` user cannot bind ports 80/443:

```text
80  -> EACCES
443 -> EACCES
```

So clean `https://ftnbridge.org` requires root/sudo access for a reverse proxy.

## Recommended option: Caddy

Caddy is open source and automatically obtains and renews Let's Encrypt certificates.

As root:

```bash
apt update
apt install -y caddy
cp /home/openclaw/Desktop/fountain-bridge-association-nextjs/deploy/Caddyfile /etc/caddy/Caddyfile
systemctl reload caddy
```

Then verify:

```bash
curl -I https://ftnbridge.org
curl -I https://www.ftnbridge.org
```

## Alternative: nginx + certbot

As root:

```bash
apt update
apt install -y nginx certbot python3-certbot-nginx
cp /home/openclaw/Desktop/fountain-bridge-association-nextjs/deploy/nginx-ftnbridge.org.conf /etc/nginx/sites-available/ftnbridge.org
ln -sf /etc/nginx/sites-available/ftnbridge.org /etc/nginx/sites-enabled/ftnbridge.org
nginx -t
systemctl reload nginx
certbot --nginx -d ftnbridge.org -d www.ftnbridge.org
```

Then verify:

```bash
curl -I https://ftnbridge.org
curl -I https://www.ftnbridge.org
```

## App process

The site currently runs in tmux:

```bash
tmux attach -t fountain-bridge-site
```

Start command:

```bash
cd /home/openclaw/Desktop/fountain-bridge-association-nextjs
NEXT_PUBLIC_SITE_URL=https://ftnbridge.org PORT=3000 npm start
```
