import { Id, NullableId, Paginated, Params, ServiceMethods, Application } from '@feathersjs/feathers';
import GridFSAdapter from "./adapter/gridfs"
import * as feathersErrors from '@feathersjs/errors'


interface ServiceOptions {
  adapter: string
}
interface Data {}

class FileService implements ServiceMethods<Data> {
  app: Application;
  options: ServiceOptions;
  
  constructor (options: ServiceOptions = {}, app: Application) {
    this.options = options;
    this.app = app;
    if ("adapter" in options){

    } else {
      throw 
    }

  }

  async get(id: Id): Promise<Data> {
    return id;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async find (params?: Params): Promise<Data[] | Paginated<Data>> {
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create (data: Data, params?: Params): Promise<Data> {
    return {} as Data
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async remove (id: NullableId, params?: Params): Promise<Data> {
    return 
  }

  async update(id: NullableId, data: Data, params?: Params): Promise<Data | Data[]> {
    throw new feathersErrors.NotImplemented('Method not implemented.');
  }
  
  async patch(id: NullableId, data: Partial<Data>, params?: Params): Promise<Data | Data[]> {
    throw new feathersErrors.NotImplemented('Method not implemented.');
  }
}

export default function(app: Application): void {
  app.use('/files', authentication, );
}


  // Subscribe to url
  // Write files to dependent Service


  // Write files to FileService
  // GET:     /[ServiceName]      => /files
  // GET:     /[ServiceName]/[ID] => /files/ff92903923ddd
  // POST:    /[ServiceName]      => /files
  // DELETE:  /[ServiceName]/[ID] => /files/9230849028409
  // PATCH:   /[Servicename]/[ID] => /files/3428490284092
  // PUT:     /[Servicename]/[ID] => /files/3428490284092