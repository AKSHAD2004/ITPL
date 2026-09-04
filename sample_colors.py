import collections
from PIL import Image

for name, path in [
    ("banner", r"d:\ITPL\Infoyashonand\public\assets\navbar_banner.png"),
    ("user_snippet", r"C:\Users\hp\.gemini\antigravity\brain\2976dfad-83ab-4a3b-884a-fd2a12019c47\.user_uploaded\media_1788520661865.png")
]:
    try:
        img = Image.open(path).convert("RGB")
        w, h = img.size
        # Sample top-left corner background
        corner_pixels = [img.getpixel((x, y)) for x in range(min(20, w)) for y in range(min(20, h))]
        c = collections.Counter(corner_pixels)
        top = c.most_common(1)[0]
        hex_c = "#{:02x}{:02x}{:02x}".format(*top[0])
        print(f"{name} corner bg: {hex_c} (RGB: {top[0]}) size: {w}x{h}")
    except Exception as e:
        print(f"{name} error: {e}")
