# Optional asset generator: Python 3 + Pillow + ffmpeg. No dependency at runtime.
from PIL import Image,ImageDraw,ImageFilter
import math
from pathlib import Path
import subprocess
ROOT=Path(__file__).resolve().parent.parent
FRAMES=Path("/tmp/cg-brand-film-frames")
FRAMES.mkdir(parents=True,exist_ok=True)
W,H=960,540
src=Image.open(ROOT/'assets/images/logo-official.png').convert('RGB')
mark=src.crop((190,270,840,800)).resize((290,237),Image.Resampling.LANCZOS)
for frame in range(144):
 t=frame/144*math.tau
 img=Image.new('RGB',(W,H),(8,8,8));d=ImageDraw.Draw(img)
 glow=Image.new('RGB',(W,H),(0,0,0));gd=ImageDraw.Draw(glow)
 gd.ellipse((440,75,910,485),fill=(30,25,7));glow=glow.filter(ImageFilter.GaussianBlur(75))
 from PIL import ImageChops
 img=ImageChops.add(img,glow);d=ImageDraw.Draw(img)
 for x in range(0,W,48):d.line([(x,0),(x,H)],fill=(16,16,14))
 for y in range(0,H,48):d.line([(0,y),(W,y)],fill=(16,16,14))
 points=[]
 for ring in range(9):
  lat=(ring/8-.5)*math.pi*.92
  for i in range(40):
   lon=i/40*math.tau+t
   x=math.cos(lat)*math.cos(lon);y=math.sin(lat);z=math.cos(lat)*math.sin(lon)
   ry=y*.9-z*.4;rz=y*.4+z*.9;scale=1/(1+rz*.19)
   points.append((670+x*218*scale,270+ry*218*scale,rz))
 for n,p in enumerate(points):
  q=points[n//40*40+(n+1)%40];b=int(30+(p[2]+1.4)*24)
  color=(b,int(b*.85),int(b*.33));d.line([p[:2],q[:2]],fill=color,width=1)
  if n+40<len(points):d.line([p[:2],points[n+40][:2]],fill=color,width=1)
  if n%13==0:d.ellipse((p[0]-1.3,p[1]-1.3,p[0]+1.3,p[1]+1.3),fill=(220,193,80))
 for i in range(3):
  r=140+i*55;d.arc((670-r,270-r*.65,670+r,270+r*.65),int(t*180/math.pi+i*90),int(t*180/math.pi+i*90+180),fill=(80+i*15,70+i*10,25),width=1)
 img.paste(mark,(525,151+round(math.sin(t)*9)))
 if frame==0:img.save(ROOT/'assets/images/motion-poster.webp',quality=85)
 img.save(FRAMES/f'{frame:04}.png')
subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y','-framerate','24','-i',str(FRAMES/'%04d.png'),'-c:v','libx264','-crf','25','-preset','medium','-pix_fmt','yuv420p','-movflags','+faststart',str(ROOT/'assets/video/brand-motion.mp4')],check=True)
print('Rendered 6-second original brand film')

subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y','-i',str(ROOT/'assets/video/brand-motion.mp4'),'-c:v','libvpx-vp9','-b:v','0','-crf','35','-an',str(ROOT/'assets/video/brand-motion.webm')],check=True)
