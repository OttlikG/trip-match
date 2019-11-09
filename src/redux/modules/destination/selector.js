import { createSelector } from "reselect";

export const flightDestination = state => state.flightDestination;

// export const thumbnails = createSelector(
// 	galleryImages,
// 	images => images.map(image => image.thumb)
// )

// export const mainImages = createSelector(
// 	galleryImages,
// 	images => images.map(image => image.regular)
// )

// export const selectedImage = state => state.gallery.selectedImage
// export const contentOfSelectedImage = createSelector(
// 	selectedImage,
// 	state => state.gallery.content,
// 	(imageId, content) => content[imageId]
// )
