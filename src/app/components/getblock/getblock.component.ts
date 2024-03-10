import { Component, OnInit } from '@angular/core';
import { ApicallsService } from '../../services/apicalls.service';

@Component({
  selector: 'app-getblock',
  standalone: true,
  imports: [],
  templateUrl: './getblock.component.html',
  styleUrl: './getblock.component.scss'
})
export class GetblockComponent implements OnInit{
  public LatestBlock : string = "";
  constructor(private apicalls : ApicallsService) {

  }
  ngOnInit(): void {
    this.apicalls.getLastBlock().then((result)=>{
      this.LatestBlock = result;
    })
  }
}
