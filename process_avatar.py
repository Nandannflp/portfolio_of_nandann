import os
from PIL import Image

def process_avatar():
    src_path = r"C:\Users\nanda\.gemini\antigravity\brain\a81bccc2-35e1-46c6-85c0-8dec76364b44\media__1784373580142.png"
    dest_path = r"public\images\full_avatar.png"
    
    img = Image.open(src_path).convert("RGBA")
    
    # Simple white background removal (flood fill or threshold)
    # The image has a white background.
    data = img.getdata()
    new_data = []
    for item in data:
        # If pixel is very close to white, make transparent
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
    img.putdata(new_data)
    
    img.save(dest_path)
    print("Avatar processed and saved to public/images/full_avatar.png")

if __name__ == "__main__":
    process_avatar()
