import { Router, ActivatedRoute } from '@angular/router';
import { TransferenciaService, Transferencias } from './../../servicos/transferencia.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  transferencia: Transferencias = {
    id_transferencia: '',
    nomeCliente: '',
    valor: '',
    contaCliente: ''
  }

  constructor(private TransferenciaService:TransferenciaService, private router:Router, private activatedRoute:ActivatedRoute) { }

  // olhar o transferencia service

  ngOnInit(): void {
    const id_entrada = <any>this.activatedRoute.snapshot.params['id']
    console.log('id de entrada: ' + id_entrada)
    this.TransferenciaService.getUmaTransferencia(id_entrada).subscribe({
      next: (resultado)=> {console.log(resultado)
                            this.transferencia = resultado},
      error: (erro)=> console.error(erro),
      complete: ()=> console.info('Complete')
    })
  }


  modificar(){
    this.TransferenciaService.editTransferencia(this.transferencia.id_transferencia, this.transferencia).subscribe({
      next: (resultado)=> console.log('Tarefa editada com sucesso!'),
      error: (erro)=> console.error(erro),
      complete: ()=> console.info('Processo finalizado!')
    })

    this.router.navigate(['/inicio'])
  }

}
