const fs = require('fs/promises')
const path = require('path')
const webp  = require('webp-converter')

const imgRoot = path.resolve('./public/img/')

function searchFiles(dir, images, verbose) {
	if(arguments.length === 2) {
		verbose = false
	}
	if(arguments.length === 1) {
		verbose = false
		images = []
	}
	return new Promise(resolve => {
		if(verbose) console.log(`Searching ${dir}`)
		fs.readdir(dir)
		.then(async files => {
			// To use async/await, we need to use a for-of loop.
			// forEach does not work as intended with async/await.
			for(const file of files) {

				if(file === '.DS_Store') continue
				if(file === 'icons') continue
				if(path.extname(file) === '.svg') continue

				const filePath = path.join(dir, file)

				if((await fs.stat(filePath)).isDirectory()) {
					await searchFiles(filePath, images, verbose)
					continue
				}
				if(verbose) console.log(`Found file ${file}`)
				images.push(filePath)
			}
			resolve(images)
		})
	})
}

function deleteFiles(files){
	for(const file of files){
		fs.unlink(file)
	}
}

searchFiles(imgRoot)
.then(images => {
	console.log(images)
	for(const img of images) {
		webp.cwebp(img, img.replace(/\.[^/.]+$/, '') + '.webp', '-q 80', logging='-v')
	}
	// Maybe handle deletion of files manually.
	//deleteFiles(images)
})