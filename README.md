# Basic Backend

Minimal Express backend with one test route.

## Run locally

```bash
npm install
npm start
```

The API runs on `http://localhost:3000` by default.

### Test route

```bash
curl http://localhost:3000/api/test
```

Expected response:

```json
{
  "success": true,
  "message": "Backend is working"
}
```

## Run tests

```bash
npm test
```

## Run with Docker

```bash
docker build -t basic-backend .
docker run --rm -p 3000:3000 basic-backend
```
