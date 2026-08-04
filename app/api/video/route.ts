import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  const filePath = path.join(process.cwd(), 'app', 'public', 'bannervideo.mp4');
  
  try {
    const stat = fs.statSync(filePath);
    const fileStream = fs.createReadStream(filePath);
    
    const readableStream = new ReadableStream({
      start(controller) {
        fileStream.on('data', (chunk) => controller.enqueue(new Uint8Array(chunk)));
        fileStream.on('end', () => controller.close());
        fileStream.on('error', (err) => controller.error(err));
      },
    });

    return new NextResponse(readableStream, {
      headers: {
        'Content-Type': 'video/mp4',
        'Content-Length': stat.size.toString(),
        'Accept-Ranges': 'bytes',
      },
    });
  } catch (error) {
    return new NextResponse('Video not found', { status: 404 });
  }
}
