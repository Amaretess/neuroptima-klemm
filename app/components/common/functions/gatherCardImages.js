const loadImages = async (images) => {
    let importedImages;
    const imageRegex = /\.(jpg|jpeg|png|gif|bmp|svg)$/i;

    if (Array.isArray(images)) {
        importedImages = images;
    } else if (images.endsWith('.js')) {
        const module = await import(`.../images/${images}`);
        importedImages = module.default;
        for (let i = 0; i < importedImages.length; i++) {
            if (imageRegex.test(importedImages[i]) && !importedImages[i].includes("/images/")) {
                importedImages[i] = "/images/" + importedImages[i];
            }
        }
    } else if (imageRegex.test(images)) {
        const fileName = (images.includes("/images/") ? "" : "/images/") + images;
        importedImages = [fileName];
    } else {
        importedImages = [images];
    }

    return importedImages;
}

export default loadImages;