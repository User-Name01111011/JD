import { ref, onMounted } from 'vue'
import $ from 'jquery'

export function MySliders(param){
  onMounted(()=>{
    if(param.el) var el = $(param.el)
    else return
    
    var activeIndex = 0,
      isPause = false,
      delay = param.delay ?? 3000,
      children = el.children('.list')[0].children,
      listLength = children.length - 1
      
      let pagination = el.children('.pagination')[0]?.children ?? undefined
      console.log(pagination?.length)
      if(pagination?.length){
        $(children[0]).toggleClass('active')
        $(pagination[0])?.toggleClass('active')
        setInterval(() => {
          if (isPause) return
          if (activeIndex < listLength){
            $(children[activeIndex]).toggleClass('active')
            $(pagination[activeIndex++]).toggleClass('active')
            $(children[activeIndex]).toggleClass('active')
            $(pagination[activeIndex]).toggleClass('active')
          }
          else{
            $(children[activeIndex]).toggleClass('active')
            $(pagination[activeIndex]).toggleClass('active')
            activeIndex = 0
            $(children[activeIndex]).toggleClass('active')
            $(pagination[activeIndex]).toggleClass('active')
          }
        }, delay)
      }else {
        $(children[0]).toggleClass('active')
        setInterval(() => {
          if (isPause) return
          if (activeIndex < listLength){
            $(children[activeIndex++]).toggleClass('active')
            $(children[activeIndex]).toggleClass('active')
          }
          else{
            $(children[activeIndex]).toggleClass('active')
            activeIndex = 0
            $(children[activeIndex]).toggleClass('active')
          }
        }, delay)
      }

    if(param.pause){
      el.on('mouseenter', ()=>{
        isPause = true
      })
      el.on('mouseleave', ()=>{
        isPause = false
      })
    }

    if(param.navigation){
      el.find('.prev').on('mousedown', ()=>{
        // todo first or last
        $(children[activeIndex]).toggleClass('active')
        $(pagination[activeIndex--]).toggleClass('active')
        $(children[activeIndex]).toggleClass('active')
        $(pagination[activeIndex]).toggleClass('active')
      })
      el.find('.next').on('mousedown', ()=>{
        $(children[activeIndex]).toggleClass('active')
        $(pagination[activeIndex++]).toggleClass('active')
        $(children[activeIndex]).toggleClass('active')
        $(pagination[activeIndex]).toggleClass('active')
      })
    }
  })
}