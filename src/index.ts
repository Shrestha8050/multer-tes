import express, { Request, Response } from 'express'
import upload from './multer'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/upload_files', upload.single('image'), uploadFiles)

app.post(
	'/upload_files/multiple',
	upload.array('images', 5),
	uploadFilesMultiple
)

function uploadFiles(req: Request, res: Response) {
	console.log(req.body, req.file)
	return res.json({ success: true })
}

function uploadFilesMultiple(req: Request, res: Response) {
	console.log(req.body, req.files)
	return res.json({ success: true })
}
app.listen(5000, () => {
	console.log(`Server started...`)
})
