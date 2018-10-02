import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Model} from '../../models/model';
import { Itemize } from '../../models/itemize';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  items: any[]
  item: Model = {}
  modelClass: any
  idName: string = "id"
  listType = ""
  keys = []
  lists = []
  endpoint: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe((data:{endpoint: string, items: any, class: Itemize, listType: string, idName?: string }) => {
      console.log(data)
      this.items = data.items
      this.modelClass = data.class
      this.listType = data.listType
      this.item = new this.modelClass().getModel()
      this.keys = this.modelClass.displayInfo()
      this.idName = data.idName
      this.endpoint = data.endpoint
    })
  }
  
  selection(ev: Itemize[]) {
    // this.lists = ev.map(val => {
    //   return {
    //     path: val[this.idName],
    //     label: "form"
    //   }
    // })
    console.log(ev[0][this.idName])
    // this.router.navigate(['./' + this.endpoint + "/" + ev[0][this.idName]]);
    this.router.navigate(['./' +  ev[0][this.idName]], {relativeTo: this.route});
  }

}
