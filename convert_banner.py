import os
import shutil
import sys
from pathlib import Path

src_jpg = Path(r"C:\Users\hp\.gemini\antigravity\brain\04314085-e4f7-4d29-b308-359a3205ba5c\.user_uploaded\media_1788579434826.jpg")
dest_dir = Path(r"d:\ITPL\Infoyashonand\public\assets")
dest_jpg = dest_dir / "navbar_banner.jpg"
dest_png = dest_dir / "navbar_banner.png"

print(f"1. Source JPG exists: {src_jpg.exists()}")
if not src_jpg.exists():
    print(f"ERROR: Source JPG not found at {src_jpg}")
    sys.exit(1)

dest_dir.mkdir(parents=True, exist_ok=True)
print(f"2. Destination directory exists: {dest_dir.exists()}")

# Copy original JPG
shutil.copy2(src_jpg, dest_jpg)
print(f"3. Copied JPG to {dest_jpg}: exists={dest_jpg.exists()}, size={dest_jpg.stat().st_size} bytes")

# Convert to PNG using PIL
try:
    from PIL import Image
except ImportError:
    print("Pillow is not installed. Installing pillow via pip...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pillow"])
    from PIL import Image

with Image.open(src_jpg) as img:
    print(f"Source image format={img.format}, size={img.size}, mode={img.mode}")
    # Convert and save as PNG
    img.save(dest_png, format="PNG")

print(f"4. Saved PNG to {dest_png}: exists={dest_png.exists()}, size={dest_png.stat().st_size} bytes")

# Verify the PNG file with PIL
with Image.open(dest_png) as img_png:
    print(f"5. Verified PNG: format={img_png.format}, size={img_png.size}, mode={img_png.mode}")

# Also verify the JPG file with PIL
with Image.open(dest_jpg) as img_jpg_check:
    print(f"6. Verified JPG: format={img_jpg_check.format}, size={img_jpg_check.size}, mode={img_jpg_check.mode}")

print("COMPLETED_SUCCESSFULLY")
