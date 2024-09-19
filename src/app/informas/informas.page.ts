import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap,Params } from '@angular/router';
import { Materias } from '../materias';
import { MateriasService } from '../services/materias.service';
import { informa } from '../informa';
import { InformaService } from '../services/informa.service';

@Component({
  selector: 'app-informas',
  templateUrl: './informas.page.html',
  styleUrls: ['./informas.page.scss'],
})
export class InformasPage implements OnInit {

  id:any;
  seleccionado?: Materias;
  public informas?: informa[];

  constructor(
    private route: ActivatedRoute,private router: Router,
    private materiasService: MateriasService, private informaService: InformaService
  ) { }

  ngOnInit() {
    this.route.params.forEach((params:Params)=> {
      this.materiasService.getUnaMaterias(params['id'])
      .subscribe(seleccionado => {
        this.seleccionado = seleccionado;
      });
      this.informaService.getInformadeEstudiantes(params['id'])
      .subscribe(informas=>{
        this.informas = informas
      });
    });
  }

  regresar():void{
    this.router.navigate(['tabs/materias']);
  }

}
