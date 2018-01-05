import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'ittweb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor() {
        window.onload=function() {
            $("nav").addClass("col-9");
            $(".back-button").click(function(){
                $(this).addClass("d-none");
            });
            $(".logo").click(function(){
                $(".back-button").removeClass("d-none");
            });
        };
    }

  ngOnInit() {
  }

}
