import { FileAdapter, FileMetaData } from "./index" 
import { GridFSBucket, ObjectID } from "mongodb"
import { Application } from "@feathersjs/feathers";
import * as feathersErrors from '@feathersjs/errors'
import { Readable } from "stream"


export default class GridFSAdapter implements FileAdapter {
  app: Application
  
  constructor(app: Application ){
    this.app = app
  }

  async delete(id: ObjectID): Promise<FileMetaData> {

  }
  
  async download(id: ObjectID): Promise<Readable> {

  }

  async find(filter: any, limit: number, skip: number, sort: any): Promise<FileMetaData[]> {

  }

  async upload(filename: string, stream: Readable, metadata: any) {

  }

  _getBucket(): GridFSBucket => {
    const bucket = this.app.get("filesBucket")
      if (bucket){
        return bucket
      } else {
        throw new feathersErrors.Unavailable("GridFS Service not ready!")
      }
  }
}