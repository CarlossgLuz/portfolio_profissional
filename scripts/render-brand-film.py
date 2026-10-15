# Optional background generator: Python 3 + Pillow + ffmpeg. No runtime dependency.
# The transparent CG emblem is a separate browser layer, never baked into the video.
from pathlib import Path
import math
import subprocess
import tempfile
from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
WIDTH, HEIGHT, FPS, SECONDS = 1920, 1080, 30, 6
SCALE = 1.5  # supersampling smooths the fine geometric lines before encoding
CANVAS_WIDTH, CANVAS_HEIGHT = int(WIDTH*SCALE), int(HEIGHT*SCALE)

def xy(x, y):
    return (x*SCALE, y*SCALE)

base = Image.new('RGB', (CANVAS_WIDTH, CANVAS_HEIGHT), (8, 8, 8))
glow = Image.new('RGB', base.size, (0, 0, 0))
draw = ImageDraw.Draw(glow)
draw.ellipse((*xy(940, 100), *xy(1830, 980)), fill=(38, 30, 6))
glow = glow.filter(ImageFilter.GaussianBlur(140*SCALE))
from PIL import ImageChops
base = ImageChops.add(base, glow)
draw = ImageDraw.Draw(base)
for x in range(0, WIDTH, 96):
    draw.line([xy(x, 0), xy(x, HEIGHT)], fill=(17, 17, 14), width=1)
for y in range(0, HEIGHT, 96):
    draw.line([xy(0, y), xy(WIDTH, y)], fill=(17, 17, 14), width=1)

with tempfile.TemporaryDirectory(prefix='cg-brand-film-') as folder:
    frames = Path(folder)
    for frame in range(FPS*SECONDS):
        phase = frame/(FPS*SECONDS)*math.tau
        image = base.copy()
        draw = ImageDraw.Draw(image)
        points = []
        for ring in range(11):
            latitude = (ring/10-.5)*math.pi*.92
            for i in range(48):
                longitude = i/48*math.tau+phase
                x = math.cos(latitude)*math.cos(longitude)
                y = math.sin(latitude)
                z = math.cos(latitude)*math.sin(longitude)
                rotated_y = y*.9-z*.4
                depth = y*.4+z*.9
                perspective = 1/(1+depth*.17)
                points.append((1380+x*415*perspective, 540+rotated_y*415*perspective, depth))
        for n, point in enumerate(points):
            following = points[n//48*48+(n+1)%48]
            intensity = int(32+(point[2]+1.4)*23)
            color = (intensity, int(intensity*.86), int(intensity*.33))
            draw.line([xy(*point[:2]), xy(*following[:2])], fill=color, width=2)
            if n+48 < len(points):
                draw.line([xy(*point[:2]), xy(*points[n+48][:2])], fill=color, width=2)
            if n%17 == 0:
                x, y = point[:2]
                draw.ellipse((*xy(x-1.8, y-1.8), *xy(x+1.8, y+1.8)), fill=(215, 188, 80))
        for i in range(3):
            radius = 315+i*85
            draw.arc((*xy(1380-radius, 540-radius*.68), *xy(1380+radius, 540+radius*.68)),
                     phase*180/math.pi+i*85, phase*180/math.pi+i*85+210,
                     fill=(85+i*10, 74+i*8, 29), width=2)
        image = image.resize((WIDTH, HEIGHT), Image.Resampling.LANCZOS)
        if frame == 0:
            image.save(ROOT/'assets/images/motion-poster.webp', quality=94, method=6)
        image.save(frames/f'{frame:04}.png')
    common = ['ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-framerate', str(FPS), '-i', str(frames/'%04d.png')]
    subprocess.run(common+['-c:v', 'libx264', '-crf', '23', '-preset', 'medium', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an', str(ROOT/'assets/video/brand-motion.mp4')], check=True)
    subprocess.run(common+['-c:v', 'libvpx-vp9', '-b:v', '1400k', '-crf', '32', '-row-mt', '1', '-an', str(ROOT/'assets/video/brand-motion.webm')], check=True)
print('Rendered background: 1920x1080 / 30 fps / 6 s. Transparent emblem is composed separately.')
