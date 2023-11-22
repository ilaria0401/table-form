import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'table-form';
  dettaglioUtente:any
  @ViewChild ('modalDettaglio')modalDettaglio!:ElementRef;

utenti =[
  {
    nome:'ivan',
    cognome:'morra',
    anni:'23',
    citta:'San Giorgio',
    coloreCapelli:'castani',
    codiceFiscale:'mrrivn5236gf'
  },
  {
    nome:'ilaria',
    cognome:'mastracchio',
    anni:'29',
    citta:'Napoli',
    coloreCapelli:'castani',
    codiceFiscale:'mstlri9457hvhg'
  },
  {
    nome:'federico',
    cognome:'trimarco',
    anni:'25',
    citta:'San Giorgio',
    coloreCapelli:'nessuno',
    codiceFiscale:'trmfdr257kn120j'
  }
]





constructor(private fb:FormBuilder,private modalService:NgbModal){

}

  ngOnInit(): void {
    
  }

  apriDettaglioUtente(utente:any){
    this.dettaglioUtente=utente
    this.modalService.open(this.modalDettaglio, {size: 'lg' })

  }
}
