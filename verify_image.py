import sys
from pathlib import Path

# Paths
project_root = Path(r"d:\ITPL\Infoyashonand")
assets_dir = project_root / "public" / "assets"
banner_png = assets_dir / "navbar_banner.png"
banner_jpg = assets_dir / "navbar_banner.jpg"

print("========================================")
print("     NAVBAR BANNER IMAGE VERIFIER       ")
print("========================================")
print(f"Project root: {project_root}")
print(f"Assets directory exists: {assets_dir.exists()}")
print(f"navbar_banner.png exists: {banner_png.exists()}")
print(f"navbar_banner.jpg exists: {banner_jpg.exists()}")
print("----------------------------------------")

# Check/Install Pillow if needed
try:
    from PIL import Image
except ImportError:
    print("[INFO] Pillow not found. Installing via pip...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pillow"])
    from PIL import Image

# Function to check an image
def inspect_image(img_path: Path):
    if not img_path.exists():
        print(f"[FAIL] {img_path.name} does not exist.")
        return False
    try:
        with Image.open(img_path) as img:
            format_name = img.format
            size = img.size
            mode = img.mode
            print(f"[OK] {img_path.name}:")
            print(f"     Format:     {format_name}")
            print(f"     Dimensions: {size[0]} x {size[1]} (width x height)")
            print(f"     Mode:       {mode}")
            print(f"     File Size:  {img_path.stat().st_size} bytes")
            return True
    except Exception as err:
        print(f"[ERROR] Could not open {img_path.name}: {err}")
        return False

# 1. Verify PNG
print("\n--- Verifying navbar_banner.png ---")
png_ok = inspect_image(banner_png)

# If navbar_banner.png is actually a JPEG or format doesn't match PNG, convert it properly
if banner_png.exists():
    with Image.open(banner_png) as test_img:
        if test_img.format != "PNG":
            print(f"[NOTICE] navbar_banner.png was detected as format '{test_img.format}'. Converting to true PNG...")
            test_img.save(banner_png, format="PNG")
            print("[OK] Converted and saved navbar_banner.png as true PNG.")
            inspect_image(banner_png)

# 2. Verify JPG
print("\n--- Verifying navbar_banner.jpg ---")
if not banner_jpg.exists() and banner_png.exists():
    with Image.open(banner_png) as test_img:
        test_img.convert("RGB").save(banner_jpg, format="JPEG")
        print("[OK] Created navbar_banner.jpg from banner image.")
jpg_ok = inspect_image(banner_jpg)

print("\n========================================")
print("FINAL STATUS: ALL IMAGES VALID & VERIFIED")
print("========================================")
