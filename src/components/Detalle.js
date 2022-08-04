function Detalle (){
    let query=new URLSearchParams(window.location.search)
    let movieID=query.get('movieID')
    return(
<h1>{movieID}</h1>
    )
}
export default Detalle