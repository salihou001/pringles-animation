import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  compteur = 0
  ngOnInit(): void {
  }
  

  suivant(){
    let img = document.querySelector('#food_img') as HTMLImageElement;
    const TL = gsap.timeline();
    if(this.compteur === 0){
      TL
      .to('.row_pringles',{
        x: '-250px',
        duration: .8,
        delay:.1,
        ease: 'power4.out'
      })
      .to('.eclipse_1',{
        scale: 1.5,
        background :'#550127',
        duration: .8,
        ease: 'power4.out'
      },"<")
      .to('.row_title',{
        x: '-100%',
        duration: .5,
        ease: 'power4.out'
      },"<")
      img.src = "../assets/pexels-polina-tankilevitch-4109203.jpg"
      this.compteur++;
    }else{
      if(this.compteur === 1){
        TL
      .to('.row_pringles',{
        x: '-480px',
        duration: .8,
        delay:.1,
        ease: 'power4.out'
      })
      .to('.eclipse_2',{
        scale: 1.5,
        background :'#13B501',
        duration: .8,
        ease: 'power4.out'
      },"<")
      .to('.row_title',{
        x: '-200%',
        duration: .5,
        ease: 'power4.out'
      },"<")
      img.src = "../assets/pexels-rachel-claire-4857729.jpg"
      this.compteur++;
      }else{
        if(this.compteur === 2 ){
          TL
          .to('.row_pringles',{
            x: '-670px',
            duration: .8,
            delay:.1,
            ease: 'power4.out'
          })
          .to('.eclipse_3',{
            scale: 1.5,
            background :'#FCDC5E',
            duration: .8,
            ease: 'power4.out'
          },"<")
          .to('.row_title',{
            x: '-300%',
            duration: .5,
            ease: 'power4.out'
          },"<")
          img.src = "../assets/pexels-pixabay-461382.jpg"
          this.compteur++;
        }
      }
    }
  }
  precedent(){
    let img = document.querySelector('#food_img') as HTMLImageElement;
    const TL = gsap.timeline();
    if(this.compteur === 1){
      TL
      .to('.row_pringles',{
        x: '*',
        duration: .8,
        delay:.2,
        ease: 'power4.out'
      })
      .to('.eclipse_1',{
        scale: 0,
        background :'#550127',
        duration: .35,
        ease: 'power4.out'
      },"<")
      .to('.super-container',{
        background :'#7E0102',
        duration: .5,
        ease: 'power4.out'
      },"<-.1")
      .to('.row_title',{
        x: '*',
        duration: .5,
        ease: 'power4.out'
      },"<")
      img.src = "../assets/pexels-anthony-leong-2092906.jpg"
      this.compteur--;
    }else{
      if(this.compteur === 2){
        TL
        .to('.row_pringles',{
          x: '-250px',
          duration: .8,
          delay:.2,
          ease: 'power4.out'
        })
        .to('.eclipse_2',{
          scale: 0,
          background :'#13B501',
          duration: .35,
          ease: 'power4.out'
        },"<")
        .to('.super-container',{
          background :'#13B501',
          duration: .3,
          ease: 'power4.out'
        },"<-.1")
        .to('.row_title',{
          x: '-100%',
          duration: .5,
          ease: 'power4.out'
        },"<")
        img.src = "../assets/pexels-polina-tankilevitch-4109203.jpg"
        this.compteur--;
      }else{
        if(this.compteur === 3){
          TL
          .to('.row_pringles',{
            x: '-480px',
            duration: .8,
            delay:.2,
            ease: 'power4.out'
          })
          .to('.eclipse_3',{
            scale: 0,
            background :'#FCDC5E',
            duration: .3,
            ease: 'power4.out'
          },"<")
          .to('.super-container',{
            background :'#13B501',
            duration: .3,
            ease: 'power4.out'
          },"<-.1")
          .to('.row_title',{
            x: '-200%',
            duration: .5,
            ease: 'power4.out'
          },"<")
          img.src = "../assets/../assets/pexels-rachel-claire-4857729.jpg"
          this.compteur--;
        }
      }
    }
  }
}
