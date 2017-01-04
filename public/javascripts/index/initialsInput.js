document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('player').addEventListener('input', function(){
    if(this.value.length === 4){
      this.value = this.value.slice(0,3)
    } else if(this.value.length === 3){
      document.getElementById('lets-race').classList = "race-button"
    } else {
      document.getElementById('lets-race').classList = "race-button hidden"
    }
    this.value = this.value.toUpperCase()
  })
})
