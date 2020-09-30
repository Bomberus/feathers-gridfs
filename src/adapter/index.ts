import {Readable} from "stream"

export interface FileMetaData{
  filename: string,
  mimetype: string,
  id: any,
  [key: string]: any
}

export interface FileAdapter{
  find(filter: any, limit:number, skip: number, sort: any): Promise<FileMetaData[]>,
  upload(filename: string, stream: Readable, metadata: any): Promise<FileMetaData>,
  delete(id: any): Promise<FileMetaData>
  download(id: any): Promise<Readable>
}