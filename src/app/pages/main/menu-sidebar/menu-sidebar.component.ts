import { Renderer2 } from '@angular/core';
import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';


@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss'],
})
export class MenuSidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('mainSidebar', { static: false }) mainSidebar;
  @Output() mainSidebarHeight: EventEmitter<any> = new EventEmitter<any>();

  public sidebarMenuOpened = false;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.mainSidebarHeight.emit(this.mainSidebar.nativeElement.offsetHeight);
  }

  toggleMenu(event) {
    if (this.sidebarMenuOpened) {
      this.renderer.addClass(event.currentTarget.parentElement, 'menu-open');
      this.sidebarMenuOpened = false;
    } else {
      this.renderer.removeClass(event.currentTarget.parentElement, 'menu-open');
      this.sidebarMenuOpened = true;
    }
  }
}
