import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private modalService: NgbModal) {}
action: 'login'|'back'='login'
  ngOnInit(): void {}

  openModalDialogCustomClass(content: any) {
    this.modalService.open(content, {
      modalDialogClass: 'dark-modal',
      backdropClass: 'light-blue-backdrop',
      centered: true
    });
  }

  userLogOut() {
    console.log('logged out');
  }
  login() {this.action = 'login'
    // var element: any = document.getElementsByClassName('signIn');
    // element.classList.add('active-dx');
    // element.classList.remove('inactive-dx');

    // var element1: any = document.getElementsByClassName('signUp');
    // element1.classList.add('inactive-sx');
    // element1.classList.remove('active-sx');
  }
  back() {this.action = 'back'
    // var element: any = document.getElementsByClassName('signIn');
    // element.classList.remove('active-dx');
    // element.classList.add('inactive-dx');

    // var element1: any = document.getElementsByClassName('signUp');
    // element1.classList.remove('inactive-sx');
    // element1.classList.add('active-sx');
  }
  // $(".log-in").click(function(){
  //   $(".signIn").addClass("active-dx");
  //   $(".signUp").addClass("inactive-sx");
  //   $(".signUp").removeClass("active-sx");
  //   $(".signIn").removeClass("inactive-dx");
  // });

  // $(".back").click(function(){
  //   $(".signUp").addClass("active-sx");
  //   $(".signIn").addClass("inactive-dx");
  //   $(".signIn").removeClass("active-dx");
  //   $(".signUp").removeClass("inactive-sx");
  // });
}
