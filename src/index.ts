import express, { Request, Response } from "express";
import upload, { uploadFile } from "./multer";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/upload_files", upload.single("image"), uploadFiles);

app.post("/upload_files/inside", uploadFilesInside);

app.post(
  "/upload_files/multiple",
  upload.array("images", 5),
  uploadFilesMultiple
);

function uploadFiles(req: Request, res: Response) {
  console.log(req.body, req.file);
  return res.json({ success: true });
}
function uploadFilesInside(req: Request, res: Response) {
  //   upload.single("image")(req, res, () => {
  //     console.log(req.body, req.files);
  //     return res.json({ success: true });
  //   });
  uploadFile(req, res, (error) => {
    if (error) {
      return res.status(400).send(error);
    }
    console.log(req.body, req.files);
    return res.json({ success: true });
  });
}

function uploadFilesMultiple(req: Request, res: Response) {
  console.log(req.body, req.files);
  return res.json({ success: true });
}
app.listen(3000, () => {
  console.log(`Server started...`);
});
