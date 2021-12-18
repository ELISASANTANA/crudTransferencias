import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  url = '/transferencias'

  constructor(private http:HttpClient) { }

  // listar as transferencias registradas no banco de dados
  getTransferencias(){
    return this.http.get(this.url)
  }

  deleteTransferencia(id:any){
    return this.http.delete(this.url + '/' + id)
  }

  addTranferencia(transferencia:Transferencias){
    return this.http.post(this.url, transferencia)
  }

  getUmaTransferencia(id:any){
    return this.http.get(this.url + '/' + id)
  }

  editTransferencia(id:any, transferencia:Transferencias){
    return this.http.put(this.url + '/' + id, transferencia)
  }
}
  
export interface Transferencias{
  id_transferencia?: string,
  nomeCliente?: string,
  valor?: string,
  contaCliente?: string
}
