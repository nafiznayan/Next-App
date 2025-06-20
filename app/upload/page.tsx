"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface cloudinaryResult {
  public_id: string;
}
const UploadPage = () => {
  const [publicId, setPublicid] = useState("");
  return (
    <>
      {publicId && (
        <CldImage src={publicId} height={180} width={270} alt="Image" />
      )}
      <CldUploadWidget
        uploadPreset="next@upload"
        onSuccess={(result, widget) => {
          if (result.event != "success") return;

          const info = result.info as cloudinaryResult;
          setPublicid(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
