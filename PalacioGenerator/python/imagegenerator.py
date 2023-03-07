from selenium import webdriver
from PIL import Image

# Crea una instancia del navegador
browser = webdriver.Chrome()

# Abre la página web
browser.get("https://ejemplo.com")

# Lista de identificadores de secciones
secciones = ["id-de-la-seccion-1", "id-de-la-seccion-2", "id-de-la-seccion-3"]

# Recorre la lista de secciones y captura una imagen de cada una
for i, seccion_id in enumerate(secciones):
    section = browser.find_element_by_id(seccion_id)
    location = section.location
    size = section.size
    browser.save_screenshot(f"captura-de-pantalla-{i}.png")
    left = location['x']
    top = location['y']
    right = location['x'] + size['width']
    bottom = location['y'] + size['height']
    im = Image.open(f"captura-de-pantalla-{i}.png")
    im = im.crop((left, top, right, bottom))
    im.save(f"seccion-{i}.png")

# Cierra el navegador
browser.quit()