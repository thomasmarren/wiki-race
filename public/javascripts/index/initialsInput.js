document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('player').addEventListener('input', function(){
    if(this.value.length === 4){
      this.value = this.value.slice(0,3)
    } else if(this.value.length === 3){
      document.getElementById('race-button').classList = ""
    } else {
      document.getElementById('race-button').classList = "hidden"
    }
    this.value = this.value.toUpperCase()
  })
})
