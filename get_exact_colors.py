from PIL import Image

# 1. Get exact background of navbar_banner.png
banner = Image.open(r"d:\ITPL\Infoyashonand\public\assets\navbar_banner.png").convert("RGB")
w, h = banner.size
# Top left pixel of the image itself:
bg_rgb = banner.getpixel((5, 5))
hex_banner = "#{:02x}{:02x}{:02x}".format(*bg_rgb)

# 2. Get user's navbar background color from screenshot
snip = Image.open(r"C:\Users\hp\.gemini\antigravity\brain\2976dfad-83ab-4a3b-884a-fd2a12019c47\.user_uploaded\media_1788520661865.png").convert("RGB")
sw, sh = snip.size
# Right side of snip is the navbar background
nav_rgb = snip.getpixel((sw - 20, sh // 2))
hex_nav = "#{:02x}{:02x}{:02x}".format(*nav_rgb)

with open(r"d:\ITPL\Infoyashonand\color_result.txt", "w") as f:
    f.write(f"BANNER_BG={hex_banner} RGB={bg_rgb}\n")
    f.write(f"NAVBAR_BG={hex_nav} RGB={nav_rgb}\n")
