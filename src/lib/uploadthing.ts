import {
  generateReactHelpers,
  generateUploadButton,
  generateUploadDropzone,
  generateUploader,
} from "@uploadthing/react";

import { OurFileRouter } from "@/app/api/uploadthing/core";

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropZone = generateUploadDropzone<OurFileRouter>();
export const Uploader = generateUploader<OurFileRouter>();
export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();
