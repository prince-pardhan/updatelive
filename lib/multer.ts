import multer from "multer";

import path from "path";

import fs from "fs";

const TEMP_DIR = path.join(
  process.cwd(),
  "public",
  "temp"
);

if (!fs.existsSync(TEMP_DIR)) {
  fs.mkdirSync(TEMP_DIR, {
    recursive: true,
  });
}

const storage =
  multer.diskStorage({
    destination: (
      _req,
      _file,
      cb
    ) => {
      cb(null, TEMP_DIR);
    },

    filename: (
      _req,
      file,
      cb
    ) => {
      const uniqueSuffix =
        Date.now() +
        "-" +
        Math.round(
          Math.random() * 1e9
        );

      const ext =
        path.extname(
          file.originalname
        );

      cb(
        null,
        `${file.fieldname}-${uniqueSuffix}${ext}`
      );
    },
  });

const upload = multer({
  storage,

  limits: {
    fileSize:
      5 * 1024 * 1024,
  },
});

export default upload;