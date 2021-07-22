if (window.innerWidth < 506){

    let thUsages = document.querySelector("table>thead.thead-dark>tr>th.usages")
    let tdUsages = document.querySelectorAll("table>tbody>tr>td.usages");

    thUsages.classList.add("d-none");
    for (const tdUsage of tdUsages) {
        tdUsage.classList.add("d-none");
    }
}else{

}