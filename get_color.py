import collections
from PIL import Image

image_path = r"C:\Users\hp\.gemini\antigravity\brain\2976dfad-83ab-4a3b-884a-fd2a12019c47\.user_uploaded\media_1788514474959.png"

try:
    img = Image.open(image_path).convert("RGB")
    w, h = img.size
    pixels = [img.getpixel((x, y)) for x in range(w // 4, 3 * w // 4) for y in range(h // 4, 3 * h // 4)]
    counter = collections.Counter(pixels)
    most_common = counter.most_common(5)
    for rgb, count in most_common:
        hex_color = "#{:02x}{:02x}{:02x}".format(*rgb)
        print(f"{hex_color} (RGB: {rgb}) - count: {count}")
except Exception as e:
    print(f"Error: {e}")
