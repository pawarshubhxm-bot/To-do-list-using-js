let inp = document.querySelector(".inp");
let addbtn = document.querySelector(".addbtn");
let tasks = document.querySelector(".tasks");
let msg = document.querySelector(".msgp");

let taskcount = 0;
let alertarr = [
  "Bro, even procrastination deserves *something* to do 😂",
  "Oh wow, invisible task! Must be very important 🤫",
  "You really tried to add nothing... iconic 🫶",
  "Adding air to your to-do list won't make it lighter 😎",
  "Wow, a task so secret even you don't know it 🤔",
  "Space-only tasks? NASA would be proud 🚀",
  "Your to-do list just rejected that laziness 🛑",
  "Even your keyboard sighed at that attempt 😤",
  "Oh look, another task made of pure imagination 💭",
  "If doing nothing was an Olympic sport, you'd win gold 🥇",
  "Invisible goals? That's one way to never fail 😎",
  "Wow, a blank task… truly the minimalist lifestyle 😌",
  "Oh wow, an invisible task? Genius move!",
  "Trying to add air to your list again?",
  "Empty task? Bro you okay?",
  "Procrastination level: legendary!",
];

addbtn.addEventListener("click", () => {
  if (inp.value.trim() != "") {
    let td = document.createElement("div");
    let tp = document.createElement("p");
    tp.innerText = inp.value;
    let tb = document.createElement("button");
    tb.innerText = "X";
    td.setAttribute("class", "taskp");
    tp.setAttribute("class", "taskpp");
    tb.setAttribute("class", "taskpb");
    tasks.append(td);
    td.append(tp);
    td.append(tb);
    tasks.scrollTop = tasks.scrollHeight;
    taskcount++;
    inp.value = "";
    if (taskcount == 1) {
      msg.innerText = `You have ${taskcount} task pending`;
    } else {
      msg.innerText = `You have ${taskcount} tasks pending`;
    }

    tb.addEventListener("click", () => {
      td.remove();
      taskcount -= 1;

      if (taskcount == 0) {
        msg.innerText = "📋 No tasks today? Let's make some plans!";
      } else if (taskcount == 1) {
        msg.innerText = `You have ${taskcount} task pending`;
      } else {
        msg.innerText = `You have ${taskcount} tasks pending`;
      }
    });
  } else if (inp.value.trim() == "") {
    if (event.key == "Enter") {
      let z = Math.floor(Math.random() * 16);
      alert(alertarr[z]);
    }
  }
});

document.addEventListener("keydown", (event) => {
  if (inp.value.trim() != "") {
    if (event.key == "Enter") {
      let td = document.createElement("div");
      let tp = document.createElement("p");
      tp.innerText = inp.value;
      let tb = document.createElement("button");
      tb.innerText = "X";
      td.setAttribute("class", "taskp");
      tp.setAttribute("class", "taskpp");
      tb.setAttribute("class", "taskpb");
      tasks.append(td);
      td.append(tp);
      td.append(tb);
      tasks.scrollTop = tasks.scrollHeight;
      taskcount++;
      inp.value = "";
      if (taskcount == 1) {
        msg.innerText = `You have ${taskcount} task pending`;
      } else {
        msg.innerText = `You have ${taskcount} tasks pending`;
      }

      tb.addEventListener("click", () => {
        td.remove();
        taskcount -= 1;

        if (taskcount == 0) {
          msg.innerText = "📋 No tasks today? Let's make some plans!";
        } else if (taskcount == 1) {
          msg.innerText = `You have ${taskcount} task pending`;
        } else {
          msg.innerText = `You have ${taskcount} tasks pending`;
        }
      });
    }
  } else if (inp.value.trim() == "") {
    if (event.key == "Enter") {
      let z = Math.floor(Math.random() * 16);
      alert(alertarr[z]);
    }
  }
});
