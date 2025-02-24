// src/utils/imageUtils.js
export function getMainColor(imageUrl) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const bins = new Array(512).fill(null).map(() => ({
          count: 0,
          rSum: 0,
          gSum: 0,
          bSum: 0
        }));
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          const a = data[i + 3];
          if (a === 0) continue;
          const binR = r >> 5;
          const binG = g >> 5;
          const binB = b >> 5;
          const binIndex = (binR << 6) | (binG << 3) | binB;
          const bin = bins[binIndex];
          bin.count++;
          bin.rSum += r;
          bin.gSum += g;
          bin.bSum += b;
        }
        let maxBin = bins[0];
        for (let i = 1; i < bins.length; i++) {
          if (bins[i].count > maxBin.count) {
            maxBin = bins[i];
          }
        }
        if (maxBin.count === 0) {
          reject('没有找到有效像素');
          return;
        }
        const mainColor = {
          r: Math.round(maxBin.rSum / maxBin.count),
          g: Math.round(maxBin.gSum / maxBin.count),
          b: Math.round(maxBin.bSum / maxBin.count)
        };
        resolve(mainColor);
      };
      img.onerror = () => {
        reject('图片加载失败');
      };
      img.src = imageUrl;
    });
  }