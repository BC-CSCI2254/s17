
/* file: people.js
   author: Bob Muller

   CSCI 2254 Web Application Development

   This is a simple web app for adding and deleting names. It follows
   the TEA (The Elm Architecture) style.

type model = {
  state : list of strings,
  props : {
    addPerson : button,
    input : text field,
    people : list of something
    }
  }

  render : element * container element -> unit
  update : event * model -> model
  view   : model * cycle -> element

  app : {
          view   : model * (event -> unit) -> element,
          update : event * model -> model
        }
*/

// makeModel : unit -> model
//
let makeModel = function () {
  return {
    state : ['Cleo', 'Maya'],
    props : {
      addPerson : document.getElementById('addPerson'),
      input :     document.getElementById('theInput'),
      container : document.getElementById('container')
    }
  };
}

// update : event * model -> model
//
let update = function(event, model) {
  if (event.target === model.props.addPerson) {    // Add person Event
    console.log("adding a person..");
    let name = model.props.input.value;
    model.props.input.value = '';
    model.state.push(name);
    }
  else {                                          // Delete person Event
    let remove = event.target.closest('li').innerText;
    console.log("in delete area of update, removing ", remove);
    let i = model.state.indexOf(remove);
    model.state.splice(i, 1);
  }
  console.log("leaving update with model.state= ", model.state);
  return model;
}

// view : model * (event -> unit) -> element
//
let view = function(model, listener) {
  let ul = document.createElement('ul');
  ul.id = "people";
  model.state.forEach(function (person) {
    let li = document.createElement('li');
    li.addEventListener('click', listener);
    li.appendChild(document.createTextNode(person));
    ul.appendChild(li);
  });
  return ul;
}

// render : element * element -> unit
//
let render = function(element, container) {
  let people = document.getElementById("people");
  if (people) {
    container.removeChild(people);
  }
  container.appendChild(element);
}

// start : app -> unit
//
let start = function(app) {
  console.log("starting app..");

  let model = makeModel();

  let cycle = function (event) {
    model = app.update(event, model);
    let element = app.view(model, cycle);
    render(element, model.props.container);
    }

  model.props.addPerson.addEventListener('click', cycle);
  let elt = app.view(model, cycle);
  render(elt, model.props.container);
}

let app = {
            view   : view,
            update : update
          };

start(app);
