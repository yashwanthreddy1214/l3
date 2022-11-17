const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
    let myDate=new Date();
    let todayDate=myDate.toISOString().split("T")[0];
    const overdue = () => {
      let overduearray= all.filter((task) => Date.parse(task.dueDate)<Date.parse(todayDate));
      return overduearray;

    }
  
    const dueToday = () => {
      let todayduearray= all.filter((task) => task.dueDate === todayDate);
      return todayduearray;
    }
  
    const dueLater = () => {
      
      let duelaterarray= all.filter((task) => Date.parse(task.dueDate)>Date.parse(todayDate));
      return duelaterarray;
    }
  
    const toDisplayableList = (list) => {
      
      let displayarray = list.map((work) => {
        let workstatus = work.completed ? 'x' : ' ';
        if (work.dueDate===todayDate) {
            return `[${workstatus}] ${work.title}`;
        } else {
            return `[${workstatus}] ${work.title} ${work.dueDate}`;
        }
      });
      return displayarray.join("\n");
      
    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log("My Todo-list\n\n")
  
  console.log("Overdue")
  var overdues = todos.overdue()
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  console.log("\n\n")
  
  console.log("Due Today")
  let itemsDueToday = todos.dueToday()
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
  console.log("\n\n")
  
  console.log("Due Later")
  let itemsDueLater = todos.dueLater()
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)
  console.log("\n\n")