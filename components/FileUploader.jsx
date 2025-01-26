'use client'

import { convertFileToUrl } from '@/lib/utils'
import { upload } from '@/public/assets'
import Image from 'next/image'
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

const FileUploader = ({ files, onChange }) => {
  const onDrop = useCallback((acceptedFiles) => {
    onChange(acceptedFiles)
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()} className='file-upload'>
      <input {...getInputProps()} />
      {
        files && files?.length > 0 ? (
            <Image 
                src={convertFileToUrl(files[0])}
                width={1000}
                height={1000}
                alt='uploaded image'
                className='max-h-[400px] overflow-hidden object-cover'
            />
        ) :
        (<>
             <Image 
                src={upload}
                width={40}
                height={40}
                alt='upload'
            />
            <div className='file-upload_label text-[14px] '>
                <p className=' text-foreground'>
                    <span className='text-foreground'>Click to upload</span> or drag and drop
                </p>
                <p className='text-foreground'>
                    SVG, PNG, JPG or GIF (Maximum 800x400)
                </p>
            </div>
        </>)
      }
    </div>
  )
}

export default FileUploader;