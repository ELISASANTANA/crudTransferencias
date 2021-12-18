import { Component, OnInit } from '@angular/core';
import { TransferenciaService, Transferencias } from '../../servicos/transferencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  ListarTransferencias: Transferencias[]

  constructor(private TransferenciaService:TransferenciaService, private router:Router) {
    this.ListarTransferencias = []
   }

  ngOnInit(): void {
    this.listarTransferencias()
  }

  listarTransferencias(){
    this.TransferenciaService.getTransferencias().subscribe({
      next:(resultado)=> {console.log(resultado)
                          this.ListarTransferencias = <any>resultado},
      error: (erro)=> console.error(erro),
      complete: ()=> console.info('Listagem feita!')
    })
  }

  excluir(id:any){
    this.TransferenciaService.deleteTransferencia(id).subscribe({
      next: (resultado)=> {console.log(resultado)
                          this.listarTransferencias()},
      error: (erro)=> console.error(erro),
      complete: ()=> console.info('Transferência excluida com sucesso!')
    })
  }

  editar(id:any){
    this.router.navigate(['/editar/' + id])
  }

}
