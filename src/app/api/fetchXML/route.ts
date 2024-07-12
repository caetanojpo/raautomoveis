// app/api/fetchXML/route.ts
import { NextRequest, NextResponse } from 'next/server';
import https from 'https';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }

  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        resolve(new Response(data, { status: 200 }));
      });
    }).on('error', (e) => {
      resolve(NextResponse.json({ error: e.message }, { status: 500 }));
    });
  });
}
