import numpy as np
from PIL import Image
import json

compress_rate = 0.2

print("begin dump")

def dump(number):
    img = Image.open("../resource/img/test/{}.jpg".format(number))
    img.thumbnail((int(img.width*compress_rate),
                   int(img.height * compress_rate)))
    img_data = np.array(img).reshape(-1, 3)
    print(img_data.shape)

    with open("../resource/img/test/imgData{}.json".format(number), "w") as fw:
        fw.writelines(json.dumps(img_data.tolist()))


for i in range(1, 5):
    dump(i)

print("finish dump")