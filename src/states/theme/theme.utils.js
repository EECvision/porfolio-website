export const getMode = () => {
  if(window.sessionStorage.mode === "false"){
    window.sessionStorage.setItem("mode", "true")
  }else {
    window.sessionStorage.setItem("mode", "false")
  }
}