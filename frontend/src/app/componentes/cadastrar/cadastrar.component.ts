import { Component, OnInit } from '@angular/core';
import { TransferenciaService, Transferencias } from 'src/app/servicos/transferencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  transferencia: Transferencias = {
    id_transferencia: '',
    nomeCliente: '',
    valor: '',
    contaCliente: ''
  }

  constructor(private TransferenciaService:TransferenciaService, private router:Router) {}

  ngOnInit(): void {
  }

  adicionar(){
    delete this.transferencia.id_transferencia

    this.TransferenciaService.addTranferencia(this.transferencia).subscribe({
      next: (resultado)=> console.log('Transferência sendo realizada!'),
      error: (erro)=> console.error(erro),
      complete: ()=> console.info('Transferência realizada com sucesso!')
    })

    // apos a inserção a aplicação volta a pagina inicial
    this.router.navigate(['/inicio'])
  }

}
