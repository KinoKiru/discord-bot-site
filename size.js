window.addEventListener('resize', function(event) {
       startTest();
});

function startTest(){
    let thUsages = document.querySelector("table>thead.thead-dark>tr>th.usages")
    let tdUsages = document.querySelectorAll("table>tbody>tr>td.usages");
    if (window.innerWidth < 506){

        thUsages.classList.add("d-none");
        for (const tdUsage of tdUsages) {
            tdUsage.classList.add("d-none");
        }
    }else{
        thUsages.classList.remove("d-none");
        for (const tdUsage of tdUsages) {
            tdUsage.classList.remove("d-none");
        }
    }
}
