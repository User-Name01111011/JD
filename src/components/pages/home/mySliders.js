import { ref, onMounted, watch } from 'vue'
import $ from 'jquery'

export function MySliders(param) {
  onMounted(() => {
    if (param.el) var el = $(param.el)
    else return

    let activeIndex = ref(0),
      isPause = false,
      delay = param.delay ?? 3000,
      children = el.children('.list')[0].children,
      listLength = children.length - 1,
      pagination = el.children(param.pagination?.el)[0]?.children ?? undefined

    $(children[0]).toggleClass('active')
    if (param.autoplay) {
      setInterval(() => {
        if (isPause) return
        activeIndex.value = activeIndex.value < listLength ? ++activeIndex.value : 0
      }, delay)
    }
    if (pagination?.length) {
      $(pagination[0])?.toggleClass('active')
      watch(activeIndex, (newIndex, oldIndex) => {
        $(pagination[newIndex]).toggleClass('active')
        $(pagination[oldIndex]).toggleClass('active')
      }) 
      if (param.pagination?.event){
        $(pagination).each(function (index) {
          this.addEventListener(param.pagination.event, ()=>{
            activeIndex.value = index
          })
        })
      }
    }
    watch(activeIndex, (newIndex, oldIndex) => {
      $(children[newIndex]).toggleClass('active')
      $(children[oldIndex]).toggleClass('active')
    })

    if (param.pause) {
      el.on('mouseenter', () => {
        isPause = true
      })
      el.on('mouseleave', () => {
        isPause = false
      })
    }

    if (param.navigation) {
      el.find('.prev').on('mousedown', () => {
        activeIndex.value = activeIndex.value > 0 ? --activeIndex.value : listLength
      })
      el.find('.next').on('mousedown', () => {
        activeIndex.value = activeIndex.value < listLength ? ++activeIndex.value : 0
      })
    }
  })
}