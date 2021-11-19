let input = prompt('what do you want to do ? enter the  required number shown on the page !');
const lists = []
while (input !== 'q') {
    if (input === '1') {

        const task = prompt("enter a task to add in the list.");
        lists.push(task);
        console.log(`${task} added to the list !`)


    } else if (input === '2') {
        console.log("******************")
        for (let i = 0; i < lists.length; i++) {
            console.log(`${i} : ${lists[i]}`);
        }
        console.log("******************")

    } else if (input === '3') {
        const del = parseInt(prompt("enter index of the list to delete it "));
        if (!Number.isNaN(del)) {
            const deleted = lists.splice(del, 1);
            console.log(`okay , deleted ${deleted[0]}`)
        } else {
            console.log('unknown index')
        }

    }
    input = prompt("what would you like to do ?")
}
console.log("ok quit the app !")