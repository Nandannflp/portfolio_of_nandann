import os
from PIL import Image, ImageFilter, ImageEnhance

def process_avatar():
    src_path = r"C:\Users\nanda\.gemini\antigravity\brain\a81bccc2-35e1-46c6-85c0-8dec76364b44\media__1784377658378.png"
    dest_path = r"public\images\full_avatar.png"
    
    img = Image.open(src_path).convert("RGBA")
    
    # Resize up by 2x using Lanczos to give it more pixels (helps with CSS scaling)
    new_size = (img.width * 2, img.height * 2)
    img = img.resize(new_size, Image.Resampling.LANCZOS)
    
    # Better background removal with anti-aliasing (smooth edges)
    data = img.getdata()
    new_data = []
    
    for item in data:
        r, g, b, a = item
        # Calculate how close the pixel is to pure white
        # Average brightness
        brightness = (r + g + b) / 3.0
        
        # If it's very bright (near white)
        if brightness > 230:
            # Scale alpha based on how close to white it is (230 -> 255 alpha, 255 -> 0 alpha)
            # This creates a soft edge instead of a jagged white halo
            diff = 255 - brightness
            new_alpha = int((diff / 25.0) * 255)
            # Clamp alpha
            new_alpha = max(0, min(255, new_alpha))
            
            # If it's fully white, new_alpha is 0. If it's 230, new_alpha is 255.
            # To avoid grey fringes, we should also keep the color but just change alpha
            new_data.append((r, g, b, new_alpha))
        else:
            new_data.append((r, g, b, 255))
            
    img.putdata(new_data)
    
    # Save the processed HD image
    img.save(dest_path)
    print("HD Avatar processed and saved to public/images/full_avatar.png")

if __name__ == "__main__":
    process_avatar()
