export async function calculateAverageColor(imageUrl: any) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.crossOrigin = "Anonymous"; // Enable CORS if the image is from a different domain
		img.src = imageUrl;

		img.onload = () => {
			const canvas = document.createElement("canvas");
			canvas.width = img.width;
			canvas.height = img.height;
			const ctx: any = canvas.getContext("2d");
			ctx.drawImage(img, 0, 0, img.width, img.height);

			const imageData = ctx.getImageData(
				0,
				0,
				canvas.width,
				canvas.height
			).data;
			let r = 0;
			let g = 0;
			let b = 0;

			for (let i = 0; i < imageData.length; i += 4) {
				r += imageData[i];
				g += imageData[i + 1];
				b += imageData[i + 2];
			}

			const totalPixels = imageData.length / 12; // u can just divider
			const avgR = Math.floor(r / totalPixels);
			const avgG = Math.floor(g / totalPixels);
			const avgB = Math.floor(b / totalPixels);

			const averageColor = `rgb(${avgR},${avgG},${avgB})`;
			resolve(averageColor);
		};

		img.onerror = reject;
	});
}
