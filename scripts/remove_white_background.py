from pathlib import Path
from PIL import Image

source = Path('public/images')
target = source / 'cutouts'
target.mkdir(exist_ok=True)

for image_path in source.iterdir():
    if image_path.suffix.lower() not in {'.png', '.jpg', '.jpeg', '.webp'}:
        continue
    image = Image.open(image_path).convert('RGBA')
    pixels = image.load()
    for y in range(image.height):
        for x in range(image.width):
            r, g, b, a = pixels[x, y]
            floor = min(r, g, b)
            # Preserve non-neutral packaging highlights; only fade near-white neutral backdrop.
            if floor > 236 and max(r, g, b) - floor < 15:
                pixels[x, y] = (r, g, b, max(0, min(255, (255 - floor) * 13)))
    image.save(target / f'{image_path.stem}.png')
