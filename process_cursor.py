import os
from PIL import Image

def process_cursor():
    src_path = r"C:\Users\nanda\.gemini\antigravity\brain\a81bccc2-35e1-46c6-85c0-8dec76364b44\media__1784364582683.png"
    dest_dir = r"public\images\cursors"
    
    if not os.path.exists(dest_dir):
        os.makedirs(dest_dir)
        
    img = Image.open(src_path).convert("RGBA")
    
    # Make white transparent (if not already transparent)
    data = img.getdata()
    new_data = []
    for item in data:
        # Check if white-ish (R > 240, G > 240, B > 240)
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
    img.putdata(new_data)
    
    width, height = img.size
    
    # Left half: default cursor
    box_default = (0, 0, width//2, height)
    cursor_default = img.crop(box_default)
    
    # Right half: pointer cursor
    box_pointer = (width//2, 0, width, height)
    cursor_pointer = img.crop(box_pointer)
    
    # Resize to 32x32 max for standard cursors, CSS cursors max at 128x128 but 32x32 is best for cross browser
    # Let's resize to 32 height while maintaining aspect ratio
    def resize_cursor(c):
        # find bounding box of non-transparent pixels to crop tight
        bbox = c.getbbox()
        if bbox:
            c = c.crop(bbox)
        
        # calculate new size
        w, h = c.size
        new_h = 32
        new_w = int(w * (new_h / h))
        return c.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
    cursor_default = resize_cursor(cursor_default)
    cursor_pointer = resize_cursor(cursor_pointer)
    
    # Save them
    cursor_default.save(os.path.join(dest_dir, "default.png"))
    cursor_pointer.save(os.path.join(dest_dir, "pointer.png"))
    print("Cursors processed and saved to public/images/cursors")

if __name__ == "__main__":
    process_cursor()
