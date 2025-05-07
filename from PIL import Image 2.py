from PIL import Image
import os

# Define the path to the uploaded image
input_path = "/mnt/data/A_digital_vector_graphic_features_a_square_logo_fo.png"

# Open the image
image = Image.open(input_path)

# Convert and save as .ico (favicon)
favicon_path = "/mnt/data/santa-fe-favicon.ico"
image.save(favicon_path, format="ICO", sizes=[(32, 32)])

# Resize and save for Open Graph
og_image_path = "/mnt/data/santa-fe-og.jpg"
og_image = image.resize((1200, 630))
og_image.save(og_image_path, format="JPEG")

favicon_path, og_image_path
