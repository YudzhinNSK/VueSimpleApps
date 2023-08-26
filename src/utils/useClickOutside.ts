import {onBeforeUnmount, onMounted, Ref, ref} from "vue";

export type ClickOutsideProps = {
  ids: string[]
}
export function useClickOutside({ids}: ClickOutsideProps) {

  const isClickedOutside: Ref<boolean> = ref(false)
  const elementsList: Ref<HTMLElement[]> = ref([])

  const onLoad = () => {
    if(!ids) return
    if(!ids.length) return

    ids.forEach((id: string) => {
      const item: HTMLElement | null = document.getElementById(id)
      if(item) elementsList.value.push(item)
    })
  }
  const handleClick = (event: Event): void => {
    if (!elementsList.value.length) return
    if (!event.target) return;

    let clickedOutside: boolean = true

    for (let i = 0; i < elementsList.value.length; i++) {
      if(elementsList.value[i]?.contains(event.target as Node)){
        clickedOutside = false
        break
      }
    }

    isClickedOutside.value = clickedOutside
  }
  const setDefault = (): void => {
    isClickedOutside.value = false
  }

  onMounted(() => {
    onLoad();
    document.addEventListener('click', handleClick);
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', handleClick);
  })

  return {
    isClickedOutside,
    setDefault
  }
}