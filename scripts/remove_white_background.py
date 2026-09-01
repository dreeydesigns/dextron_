"""Convert only neutral-white studio backgrounds to transparency."""
from pathlib import Path
from PIL import Image

source = Path("public/images")
destination = source / "cutouts"
destination.mkdir(exist_ok=True)

for path in source.iterdir():
    if path.parent == destination or path.suffix.lower() not in {".png", ".jpg", ".jpeg", ".webp"}:
        continue
    image = Image.open(path).convert("RGBA")
    pixels = image.load()
    for y in range(image.height):
        for x in range(image.width):
            red, green, blue, alpha = pixels[x, y]
            low, high = min(red, green, blue), max(red, green, blue)
            if low > 232 and high - low < 17:
                pixels[x, y] = (red, green, blue, max(0, min(255, int((255 - low) * 11.2))))
    image.save(destination / f"{path.stem}.png")
